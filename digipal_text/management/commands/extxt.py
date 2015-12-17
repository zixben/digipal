# -*- coding: utf-8 -*-
from django.core.management.base import BaseCommand, CommandError
from django.conf import settings
from os.path import isdir
import os
import re
from optparse import make_option
from digipal.utils import sorted_natural

# pm dpxml convert exon\source\rekeyed\converted\EXON-1-493-part1.xml exon\source\rekeyed\conversion\xml2word.xslt > exon\source\rekeyed\word\EXON-word.html
# pm extxt wordpre exon\source\rekeyed\word\EXON-word.html exon\source\rekeyed\word\EXON-word2.html
# pandoc "exon\source\rekeyed\word\EXON-word2.html" -o "exon\source\rekeyed\word\EXON-word.docx"

import unicodedata
#from xhtml2pdf.pisa import showLogging
def remove_accents(input_str):
    nkfd_form = unicodedata.normalize('NFKD', input_str)
    return u"".join([c for c in nkfd_form if not unicodedata.combining(c)])

class Command(BaseCommand):
    help = """
Text conversion tool
    
Commands:
    wordpre PATH_TO_XHTML OUTPUT_PATH
        Preprocess the MS Word document

    pattern PATH_TO_XHTML PATTERN
        Test a regexp pattern on a XHTML file

    upload PATH_TO_XHTML CONTENTID
        Import XHTML file
        
    hundorder SHIRE
        Find the best order for hundreds in a shire
        
    setoptorder SHIRE HUNDRED
        Set the optimal order for a shire

    handentry
        Map the hands to the entries
"""
    
    args = 'locus|email'
    option_list = BaseCommand.option_list + (
        make_option('--db',
            action='store',
            dest='db',
            default='default',
            help='Name of the target database configuration (\'default\' if unspecified)'),
        make_option('--dry-run',
            action='store_true',
            dest='dry-run',
            default=False,
            help='Dry run, don\'t change any data.'),
        )

    def handle(self, *args, **options):
        
        self.log_level = 3
        
        self.options = options
        
        from digipal.management.commands.utils import CommandMessages
        self.cm = CommandMessages()
        
        if len(args) < 1:
            print self.help
            exit()
        
        command = args[0]
        self.cargs = args[1:]
        
        known_command = False

        if command == 'wordpre':
            known_command = True
            self.word_preprocess()

        if command == 'pattern':
            known_command = True
            self.pattern()
        
        if command == 'upload':
            known_command = True
            self.upload()
            
        if command == 'hundorder':
            known_command = True
            self.hundorder()
        
        if command == 'hundorderga':
            known_command = True
            self.hundorderga()
        
        if command == 'setoptorder':
            known_command = True
            self.setoptorder_command()
        
        if command == 'handentry':
            known_command = True
            self.handentry_command()

        if known_command:
            self.cm.printSummary()
            print 'done'
        else:
            print self.help

    def handentry_command(self):
        #hands = TextContentXML.objects.filter(text_content__type__slug=='codicology')
        
        
        #entries = self.get_entries()
    
        #self.find_certainties()
        
        if 0:
            self.find_missing_entries()
    
            exit()
    
        entries_hands = self.get_entries_hands()
        
        print '-' * 40
        
#         for entry in sorted_natural(entries_hands.keys()):
#             print entry, ','.join(entries_hands[entry]) or 'NO HANDS'
            
        
        print '%s entries' % len(entries_hands.keys())
        print '%s assumed transitions (at beginning of entry)' % len([hands for hands in entries_hands.values() if 'ASSUMED' in hands])
        print '%s ambiguous transitions' % len([hands for hands in entries_hands.values() if 'AMBIGUOUS' in hands])
        print '%s with more than one hand' % len([hands for hands in entries_hands.values() if len([h for h in hands if h != 'ASSUMED']) > 1])
        print '%s without hand' % len([hands for hands in entries_hands.values() if not hands])

    def find_missing_entries(self):
        '''
            Print entry numbers found in the translation but not in the rekeyed text.
            Marginal text is ignored from the rekeyed text.
        '''
        
        lines_entries = self.get_lines_entries()
        
        from digipal_text.models import TextContentXML
        tcx = TextContentXML.objects.filter(text_content__type__slug='translation').first()
        content = tcx.content
        
        tl_entries = re.findall(ur'<span data-dpt="location" data-dpt-loctype="entry">([^<]+)</span>', content)
        
        tc_entries = {}
        for page, lines in lines_entries.iteritems():
            for line in lines:
                for entry in line:
                    entry = entry.replace('r', 'a')
                    entry = entry.replace('v', 'b')
                    tc_entries[entry] = 1
        tc_entries = tc_entries.keys()
        
        print tl_entries
        print tc_entries
        missing = set(tl_entries) - set(tc_entries)
        pages = {}
        for entry in sorted_natural(list(missing)):
            entry_page = re.sub(ur'(.*[ab]).*', ur'\1', entry)
            if entry_page == entry: continue
            if entry_page not in pages.keys():
                print '-' * 10
                pages[entry_page] = 0
            if re.match(ur'.*[ab]\d+', entry):
                pages[entry_page] += 1
            print entry
        
        cnt = 0
        pages_str = ''
        for page in sorted_natural(pages.keys()):
            if pages[page] > 0:
                cnt += 1
                pages_str += ', ' + page.replace('a', 'r').replace('b', 'v')
                if pages[page] > 1:
                    pages_str += ' ('+str(pages[page])+')'
        print pages_str
        print cnt

    def find_certainties(self):
        lines_entries = self.get_lines_entries()
        lines_hands = self.get_lines_hands(lines_entries)
        
        # List all the pages, with the hands on that page if more than one hand
        for page in sorted_natural(lines_hands.keys()):
            hands = {}
            for line_hands in lines_hands[page]:
                for hand in line_hands:
                    hands[hand] = 1
            print page, (hands.keys() if len(hands.keys()) != 1 else '')

    def get_entries_hands(self):
        ret = {}
        
        lines_entries = self.get_lines_entries()
#         print lines_entries

        lines_hands = self.get_lines_hands(lines_entries)
        
        '''
        lines_entries['37v'] =
        [
            [u'37r5'], [u'37r5'], [u'37v1'], [u'37v1'], [u'37v1'], [u'37v1'], [u'37v1'], [u'37v1'], [u'37v1'], [u'37v1'], [u'37v1'], [u'37v2'], [u'37v2'], [u'37v2'], [u'37v2'], [u'37v2'], [u'37v2'], [u'37v2'], [u'37v2'], [u'37v2'], [u'37v2']
        ]
        lines_hands['37v'] =
        [
            ['beta'], ['beta'], ['tau'], ['tau'], ['tau'], ['tau'], ['tau'], ['tau'], ['tau'], ['tau'], ['tau'], ['tau'], ['tau'], ['tau'], ['tau'], ['tau'], ['tau'], ['alpha', 'tau'], ['alpha'], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
        ]
        
        '''
        
        '''
        TODO:
            . fix stints (see notepad)
            . see warnings from lines_hands
            . !!! add the virtual gallow marks
                . from ellis
                . check the numbers from the margin (after the main page?)
            . additional validations:
                . lines without hand
                . lines without entry
                . more than 2 hands per line, the order is important
                
            3110 entries
            156 assumed transitions (at beginning of entry)
            70 ambiguous transitions
            259 with more than one hand
            56 without hand
                
        '''
        
        diag = '96r'
        
        pages = set(lines_entries.keys()) | set(lines_hands.keys())
        
        pages = sorted_natural(pages)
        
        last_page_warning = ''
        
        for page in pages:
            #print page
            if page not in lines_entries:
                self.msg('page %s not in text but in stints (possible)', page)
                continue
            if page not in lines_hands:
                self.msg('page %s not in stints but in text', page)
                continue
            line0 = -1
            for line_entries in lines_entries[page]:
                line0 += 1
                # get the hands on that line
                if line0 < len(lines_hands[page]):
                    hands = lines_hands[page][line0]
                    # assign hands to entries
                    if not hands:
                        if last_page_warning != page:
                            last_page_warning = page
                            print '-' * 10
                        self.msg('no hand on page %s line %s', page, line0 + 1)
                    else:
                        pass
                    
                    # assign all the hands to all the entries
                    ie = -1
                    for entry in line_entries:
                        ie += 1
                        if entry not in ret:
                            ret[entry] = []
                        ih = -1
                        for hand in hands:
                            ih += 1
                            if len(hands) == len(line_entries):
                                if ie != ih:
                                    # assume that if we have 2 entries and 2 hands,
                                    # there is one hand for each entry
                                    # Otherwise all hands assigned to all entries
                                    hand = 'ASSUMED'
                                    #continue
                                
                            if hand not in ret[entry]:
                                ret[entry].append(hand)

                        if len(line_entries) != len(hands) and len(line_entries) > 1 and len(hands) > 1:
                            msg = 'AMBIGUOUS'
                            if msg not in ret[entry]:
                                ret[entry].append(msg)
            
            if page == diag:
                print '\ndebug %s' % page
                for i in range(0, max(len([l for l in lines_entries[diag] if l]), len([l for l in lines_hands[diag] if l]))):
                    entries = ''
                    if len(lines_entries[diag]) > i:
                        entries = ', '.join(lines_entries[diag][i])
                    hands = ''
                    if len(lines_hands[diag]) > i:
                        hands = ', '.join(lines_hands[diag][i])
                    print i + 1, entries, hands
                
                shown = {}
                for line_entries in lines_entries[page]:
                    for entry in line_entries:
                        if entry in shown: continue
                        shown[entry] = 1
                        print entry, ret[entry]
                #exit()
        
        return ret

    def get_lines_hands(self, lines_entries):
        '''
            ret = [
                    '1r1': [alpha, beta]
                    ...
                ]
        '''
        
        ret = {}
        
        print_lines = False

        stints = self.get_stints()
        
        if 0:
            pages = {}
            for sinfo in stints:
                for number in self.get_page_numbers_from_stint(sinfo):
                    number = str(number)
                    if number not in pages:
                        pages[number] = {}
                    pages[number][sinfo['hand']] = 1
    
            for number in sorted_natural(pages.keys()):
                print number, pages[number].keys()
    
            print '%s pages, %s with single hand.' % (len(pages.keys()), len([p for p in pages.values() if len(p.keys()) > 1]))
        else:
            '''
                [
                [{'note': u'ends and opens quire', 'extent': u'502v11-3v18', 'x': [[502, v, 11], [503, v, 18]], 'hand': 'alpha'}, ...],
                ]
            '''
            for sinfo in stints:
                #print sinfo['hand'], sinfo['extent'], sinfo.get('note', '')
                pages = self.get_page_numbers_from_stint(sinfo)
                last = len(pages)
                for i in range(0, last):
                    page = pages[i]

                    # get number of lines on this page according to the rekeyed text
                    lines_on_page = 50
                    if page in lines_entries:
                        lines_on_page = len(lines_entries[page])
                    else:
                        self.msg('page not found %s', page)

                    # create line table for this page
                    if page not in ret:
                        ret[page] = [[] for j in range(0, 50)]
                    
                    # inclusive line range for this stint on this page
                    lns = [1, lines_on_page]
                    
                    if lns[1] < lns[0]:
                        self.msg('empty stint range %s (%s)', sinfo['hand'], sinfo['extent'])
                    
                    # use line numbers from stint extent
                    if i == 0:
                        lns[0] = sinfo['x'][0][2] or lns[0]
                    if i == last - 1:
                        lns[1] = sinfo['x'][1][2] or lns[1]
                        
                    for ln in range(int(lns[0]), int(lns[1])+1):
                        #ret[page][ln-1].append('%s (%s)' % (sinfo['hand'], sinfo['extent']))
                        if print_lines:
                            print page, ln-1, lns
                        l = ret[page][ln-1]
                        # pos important!
                        # to avoid [[tau], [alpha, tau], [alpha]]
                        # TODO: doesn't work with more than 2 hands per line!
                        pos = len(l)
                        if ln == int(lns[1]):
                            pos = 0
                        l.insert(pos, '%s' % sinfo['hand'])
                        #print page, ln-1, sinfo['hand']
            
        return ret

    def get_lines_entries(self):
        '''
        Returns the entries found on each line of the manuscript.
        The returned structure looks like this:
        {
            u'291r': [
                        [u'290v3'],
                        [u'290v3', u'291r1'],
                        [u'291r1'],
                        [u'291r1'],
                        [...]
                        [u'291r3']
                    ],
            u'429v': [
                        [u'429r5'],
                        [u'429r5'],
                        [...]
        '''
        ret = []
        
        print_lines = 1
        
        # get rekeyed text from file
        from digipal import utils
        content = utils.read_file('exon/source/rekeyed/converted/EXON-1-493.hands.xml')
        xml = utils.get_xml_from_unicode(content)
        content = utils.get_unicode_from_xml(xml)
        
        # TODO:
        # remove all the marginal text
        # and log where it contains longer text
        
        # add £ = virtual § <= renumbered facs
        # add missing § and locus from rekeyed text
        
        entry = ''
        
        ret = {}
        
        # remove all comments
        content = re.sub(ur'(?musi)<!--.*?-->', '', content)

        for page in re.split(ur'<margin>\s*fol\.?\s*', content):
            #print '-' * 10
            #pn = re.findall(ur'^[^<]+', page)
            #pn = pn[0].strip()
            
            # read the folio number
            pnm = re.search(ur'^(\d+)\.?\s*(b\.?)?</margin>', page)
            if not pnm:
                self.msg('no page number found %s', repr(page[:30]))
                continue

            pn = pnm.group(1)
            if pnm.group(2) is None:
                pn += 'r'
            elif pnm.group(2)[0] == 'b':
                pn += 'v'
            else:
                self.msg('invalid folio number %s', repr(page[:30]))
                continue

            ret[pn] = []

            # remove rest of the folio number enclosure
            page = re.sub(ur'^.*?</margin>', '', page)
            # remove all the margins
            page = re.sub(ur'(?musi)<margin>.*?</margin>', '', page)
            # remove all the additions
            page = re.sub(ur'(?musi)<add>.*?</add>', '', page)
            # remove all the pb
            page = re.sub(ur'<pb[^>]*>', '', page)
            # convert /p into lb/
            page = re.sub(ur'</p>', '<lb/>', page)
            page = re.sub(ur'<p>', '', page)
            # turn virtual gallows mark into normal ones
            page = page.replace(ur'£', ur'§')
            page = page.replace(ur'<nsc/?>', ur'')

            l = 0
            en = 0

            # parse the page
            for line in re.split(ur'<lb/>|</p>', page):
                line = line.strip()
                if line:
                    l += 1
                    if print_lines:
                        print pn, l, repr(line[:20])
                    
                    entries = []

                    # port the entry from previous line, 
                    # unless the line starts with gallows mark 
                    if entry and line[0] != ur'§':
                        entries = [entry]

                    for gallows_number in re.findall(ur'§(\d*)', line):
                        en = int(gallows_number or (en + 1))
                        entry = '%s%s' % (pn, en)
                        entries.append(entry)

                    ret[pn].append(entries)
                    
                    #print pn, l, ret[pn][l-1]
                    
        return ret
        
    def get_page_numbers_from_stint(self, sinfo):
        from exon.customisations.digipal_lab.views.hands import get_page_numbers_from_stint
        return get_page_numbers_from_stint(sinfo)

    def get_entries(self):
        # Get all entry numbers from the translation
        print 'get entries'
        ret = []
        
        from digipal_text.models import TextContentXML
        text = TextContentXML.objects.filter(text_content__type__slug='translation').first()
        
        for entry in re.findall(ur'<span data-dpt="location" data-dpt-loctype="entry">(\d+)([ab])(\d+)</span>', text.content):
            entry = list(entry)
            entry[1] = 'r' if entry[0] == 'a' else 'v'
            ret.append({'entry': ''.join(entry), 'x': entry})
        
        return ret
    
    def get_stints(self):
        from exon.customisations.digipal_lab.views.hands import get_stints
        return get_stints(True)

    def extract_stints_info_from_desc(self, desc, hlabel, stint_pattern):
        from exon.customisations.digipal_lab.views.hands import extract_stints_info_from_desc
        return extract_stints_info_from_desc(desc, hlabel, stint_pattern)

    def expand_stint_extent(self, sinfo):
        from exon.customisations.digipal_lab.views.hands import expand_stint_extent
        return expand_stint_extent(sinfo)

    def setoptorder_command(self):
        
        shire = self.cargs[0]
        hundreds = self.cargs[1]
        
        hundreds = eval(hundreds)
        
        self.setoptorder(shire, hundreds, column='optimal')
    
    def setoptorder(self, shire, hundreds, column='optimal'):
        from digipal.management.commands.utils import sqlWrite, sqlSelect, dictfetchall
        from django.db import connections
        wrapper = connections['default']

        command = '''UPDATE exon_hundred
        SET hundredalorder''' + column + ''' = %s
        WHERE lower(shire) = lower(%s)
        '''
        sqlWrite(wrapper, command, ['', shire], False)

        i = 0
        for hundred in hundreds:
            i += 1
            print hundred, i
            
            find = '''SELECT * from exon_hundred
            WHERE lower(shire) = lower(%s)
            AND hundrednameasenteredintomasterdatabase = %s
            '''
            
            recs = dictfetchall(sqlSelect(wrapper, find, [shire, hundred]))
            
            if not recs:
                command = '''INSERT INTO exon_hundred
                (hundredalorder''' + column + ''', shire, hundrednameasenteredintomasterdatabase)
                VALUES
                (%s, %s, %s)
                '''
                sqlWrite(wrapper, command, [i, shire, hundred], False)
            else:
                command = '''UPDATE exon_hundred
                SET hundredalorder''' + column + ''' = %s
                WHERE lower(shire) = lower(%s)
                AND hundrednameasenteredintomasterdatabase = %s
                '''
                sqlWrite(wrapper, command, [i, shire, hundred], False)
            
        wrapper.commit()

    def hundorder(self):
        shire = self.cargs[0]
        tics = self.get_tics_from_shire(shire)
        
        print
        for tic in tics:
            print '%s (%s): %s' % (tic['name'], len(tic['entries']), ', '.join([entry['hundred'] for entry in tic['entries']]))

        # create adjacency matrix of the 'before' graph
        # bm[hundred1][hundred2] = 3 means that hundred1 precedes hundred2 3 times
         
        bm = {}
        def add_count(h1, h2):
            if h1 not in bm:
                bm[h1] = {}
            if h2 not in bm[h1]:
                bm[h1][h2] = 0
            bm[h1][h2] += 1
            
         
        for tic in tics:
            i = 0
            treated = {}
            for entry in tic['entries']:
                if entry['hundred'] in treated: continue
                h = entry['hundred']
                if h not in bm: bm[h] = {}
                for entry2 in tic['entries'][i+1:]:
                    add_count(h, entry2['hundred'])
                i += 1
                treated[entry['hundred']] = 1
        
        print
        for h1 in bm:
            print h1, bm[h1]

        print '\nReenterance'
        for r in sorted([(h1, bm[h1][h1]) for h1 in bm if h1 in bm[h1]], key=lambda r: r[1], reverse=True):
            print r[1], r[0]

        print '\nConflicts'
        from copy import deepcopy
        sbm = deepcopy(bm)
        for h1 in bm:
            print h1
            for h2 in bm[h1]:
                
                if h1 == h2:
                    # remove self references
                    del sbm[h1][h2]
                else:
                    if h2 in bm and h1 in bm[h2]:
                        print '', bm[h1][h2], h2, bm[h2][h1]
                        
                        if bm[h1][h2] * 3 <= bm[h2][h1]:
                            del sbm[h1][h2]
                        else:
                            if not (bm[h2][h1] * 3 <= bm[h1][h2]):
                                if sbm[h2] and h1 in sbm[h2]: del sbm[h2][h1]
                                if sbm[h1] and h2 in sbm[h1]: del sbm[h1][h2]
        
        # create a new order
        hs = []
        while True:
            if len(sbm.keys()) == 0:
                break
            sbmo = sorted(sbm.keys(), key=lambda h: len(sbm[h]))
            hs.insert(0, sbmo[0])
            
            for h in sbm:
                if sbmo[0] in sbm[h]: del sbm[h][sbmo[0]]
            
            del sbm[sbmo[0]]
        
        print
        print hs
        print 'cost: ', self.get_cost_from_hundreds(tics, hs)
        self.setoptorder(shire, hs, column='')

        
        
    def hundorderga(self):
        shire = self.cargs[0]
        tics = self.get_tics_from_shire(shire)

        
        # vr is numerical hundredal order supplied by the team
        vr = {}
        none_counter = 1000
        
        # hundreds is an arbitrary numerical mapping for the hundred names
        # eg. hundreds = {A: 0, B: 1}
        hundreds = {}
        
        l = -1
        for tic in tics:
            for entry in tic['entries']:
                h = entry['hundred']
                
                # create 'vr'
                if entry['hundredalorder'] is None:
                    # None => assign a large number
                    if h not in vr.values():
                        none_counter += 1
                        vr['%s' % none_counter] = h
                else:
                    vr[entry['hundredalorder']] = h
                
                # create 'hundreds'
                if h not in hundreds:
                    l += 1
                    hundreds[h] = l
                
                # add hundred index/order into the data struct
                # e.g. entry['hundred'] == B => entry['ho'] = 1
                entry['ho'] = hundreds[h]

        # convert vr into a standard candidate solution
        from digipal.utils import sorted_natural
        # vr = [B, A]
        vr = [vr[k] for k in sorted_natural(vr.keys())]
        # vr = [1, 0]
        #vr = [u'Winnianton', u'Tybesta', u'Rillaton', u'Connerton', u'Rialton', u'Pawton', u'Stratton', u'Fawton']
        #vr = [u'Lifton', u'South Tawton', u'Black Torrington', u'Hartland', u'Merton', u'Fremington', u'North Tawton', u'Crediton', u'Exminster', u'Braunton', u'Bampton', u'Shirwell', u'South Molton', u'Cliston', u'Silverton', u'Hemyock', u'Ottery St Mary', u'Molland', u'Wonford', u'Budleigh', u'Witheridge', u'Tiverton', u'Halberton', u'Kerswell', u'Axminster', u'Alleriga', u'Colyton', u'Chillington', u'Axmouth', u'Teignbridge', u'Ermington', u'unknown', u'Diptford', u'Plympton', u'Walkhampton']

        

        vr = [hundreds[label] for label in vr]
        #vr = range(0, len(vr))
        vr2 = [u'Yeovil: Tintinhull', u'North Petherton', u'Cannington', u'South Petherton', u'Sheriffs Brompton', u'Cheddar', u'Cutcombe', u'Carhampton', u'Bedminster', u'Minehead', u'Williton', u'Bulstone', u'Andersfield', u'Kingsbury', u'Wiveliscombe', u'Wellington', u'Winterstoke', u'Abdick', u'Chew', u'Frome: Frome', u'Brompton Regis', u'Dulverton', u'Lydeard', u'Bempstone', u'Wells', u'Bruton: Bruton', u'Cleeve', u'Loxley', u'Winsford', u'Creech', u'North Curry', u'Crewkerne', u'Congresbury', u'Somerton', u'Coker', u'Pitminster', u'Taunton', u'Milverton', u'Bruton: Wincanton', u'Bath', u'Yeovil: Lyatts', u'Martock', u'Hartcliffe', u'Yeovil: Houndsborough', u'Bruton: Blachethorna', u'Huntspill', u'Whitestone', u'Reynaldsway', u'Frome: Kilmersdon', u'Monkton', u'Portbury', u'Keynsham', u'Milborne/Horethorne', u'Chewton', u'South Brent', u'Frome: Wellow', u'Frome: Frome/Downhead', u'Yeovil: Stone']
        seed = [vr]
        seed.append([hundreds[label] for label in vr2])
        
        #seed.append([12, 32, 7, 21, 13, 17, 18, 31, 2, 8, 26, 22, 4, 15, 34, 10, 5, 24, 23, 25, 19, 0, 33, 27, 20, 11, 29, 14, 30, 28, 6, 9, 16, 1, 3])
        #seed.append([12, 32, 7, 21, 13, 17, 18, 31, 2, 8, 22, 4, 15, 10, 5, 24, 34, 23, 25, 19, 0, 27, 33, 20, 11, 3, 14, 29, 30, 6, 9, 28, 16, 1, 26])
        
#             seed.append([13, 31, 16, 38, 10, 4, 42, 9, 5, 27, 43, 0, 14, 39, 35, 21, 28, 25, 37, 32, 36, 29, 34, 6, 7, 40, 11, 41, 23, 2, 33, 17, 19, 3, 24, 12, 22, 26, 20, 1, 30, 15, 8, 18])
#
#             seed.append([26, 27, 31, 43, 0, 37, 42, 41, 9, 16, 34, 29, 33, 11, 28, 21, 12, 2, 19, 4, 24, 6, 20, 10, 17, 39, 14, 1, 40, 7, 35, 30, 3, 22, 5, 15, 13, 38, 8, 36, 18, 32, 25, 23])
#             seed.append([43, 13, 9, 21, 0, 5, 11, 42, 19, 31, 20, 41, 29, 23, 24, 32, 16, 39, 30, 27, 14, 28, 34, 26, 2, 25, 4, 6, 33, 1, 35, 10, 17, 40, 7, 3, 37, 38, 15, 8, 12, 22, 18, 36])

        #seed.append([4, 5, 27, 9, 34, 26, 33, 0, 37, 29, 6, 14, 43, 31, 41, 16, 21, 32, 10, 28, 11, 39, 2, 19, 35, 3, 12, 17, 22, 23, 40, 13, 24, 36, 38, 20, 1, 30, 42, 7, 15, 8, 18, 25])
        #seed.append([13, 31, 16, 38, 10, 4, 42, 9, 5, 27, 43, 0, 14, 39, 35, 21, 28, 25, 37, 32, 36, 29, 34, 6, 7, 40, 11, 41, 23, 2, 33, 17, 19, 3, 24, 12, 22, 26, 20, 1, 30, 15, 8, 18])
        
        #seed.append([20, 0, 1, 9, 5, 7, 24, 27, 41, 38, 43, 46, 21, 2, 10, 11, 44, 30, 4, 12, 34, 25, 37, 39, 42, 33, 23, 22, 13, 28, 3, 14, 32, 15, 16, 45, 17, 8, 40, 6, 26, 18, 36, 29, 31, 35, 19])
        #seed.append([44, 20, 45, 41, 37, 46, 0, 9, 5, 7, 24, 27, 21, 2, 4, 22, 34, 10, 25, 11, 30, 12, 13, 28, 3, 38, 23, 14, 16, 32, 43, 17, 40, 26, 42, 15, 8, 18, 36, 33, 29, 1, 31, 19, 35, 39, 6])
        #seed.append([38, 36, 20, 0, 15, 1, 46, 42, 9, 44, 31, 5, 7, 39, 40, 24, 27, 21, 41, 2, 10, 11, 45, 34, 30, 35, 4, 33, 25, 12, 22, 23, 13, 6, 28, 3, 37, 14, 16, 43, 32, 17, 26, 8, 18, 29, 19])

        #seed.append([24, 7, 57, 29, 30, 10, 11, 41, 37, 51, 19, 1, 17, 47, 2, 45, 25, 21, 48, 33, 5, 4, 27, 13, 14, 12, 16, 15, 18, 8, 44, 6, 23, 53, 49, 54, 40, 20, 32, 28, 52, 35, 55, 34, 31, 39, 9, 42, 36, 0, 22, 26, 56, 43, 46, 3, 38, 50])
        #seed.append([17, 51, 39, 30, 10, 46, 31, 25, 11, 19, 49, 13, 1, 47, 48, 12, 5, 7, 27, 4, 14, 16, 2, 37, 15, 20, 57, 33, 22, 18, 8, 28, 23, 50, 45, 41, 35, 32, 55, 6, 40, 52, 34, 9, 56, 29, 44, 0, 26, 3, 21, 53, 54, 38, 42, 24, 36, 43])

        self.print_candidate(vr, tics, hundreds)
                
        # v1 = 1,0  means B,A
        v1 = range(0, len(hundreds))
        
        self.print_candidate(v1, tics, hundreds)
        
        from digipal.optimiser import Optimiser
        
        optimiser = Optimiser()
        optimiser.reset(seed=seed, costfn=lambda v: self.get_cost(tics, v), printfn=lambda v: self.print_candidate(v, tics, hundreds))
        optimiser.start()
        vs = optimiser.getSolution()
        
        self.print_candidate(vs, tics, hundreds)
            
        '''
Cornwall (16/9)
--------

Many possible solutions

[2, 5, 7, 3, 0, 4, 6, 1]
[u'Pawton', u'Connerton', u'Rialton', u'Stratton', u'Winnianton', u'Rillaton', u'Fawton', u'Tybesta']
Cost: 9; Len: 8
done

[7, 2, 3, 4, 0, 1, 5, 6]
[u'Rialton', u'Pawton', u'Stratton', u'Rillaton', u'Winnianton', u'Tybesta', u'Connerton', u'Fawton']
Cost: 9; Len: 8
done

Devon (104/62)
---------

[13, 29, 32, 18, 14, 15, 10, 8, 9, 2, 16, 17, 4, 6, 5, 19, 11, 0, 7, 28, 20, 21, 3, 22, 12, 23, 24, 30, 31, 1, 25, 26, 27]
[u'Lifton', u'South Tawton', u'Molland', u'Cliston', u'Black Torrington', u'Hartland', u'Merton', u'Fremington', u'North Tawton', u'Exminster', u'Braunton', u'Bampton', u'Shirwell', u'South Molton', u'Silverton', u'Wonford', u'Witheridge', u'Teignbridge', u'Ermington', u'Crediton', u'Hemyock', u'Budleigh', u'Plympton', u'Tiverton', u'Halberton', u'Kerswell', u'Axmouth', u'Walkhampton', u'Ottery St Mary', u'Diptford', u'Axminster', u'Colyton', u'Chillington']
Cost: 71; Len: 33


[u'Lifton', u'South Molton', u'South Tawton', u'Black Torrington', u'Hartland', u'Merton', u'North Tawton', u'Axmouth', u'Fremington', u'Exminster', u'Crediton', u'Shirwell', u'Bampton', u'Silverton', u'Hemyock', u'Braunton', u'Diptford', u'Budleigh', u'Kerswell', u'Walkhampton', u'Molland', u'Cliston', u'Colyton', u'Plympton', u'Witheridge', u'Halberton', u'Teignbridge', u'Wonford', u'Ottery St Mary', u'Axminster', u'Tiverton', u'Ermington', u'Chillington']
126

[u'Alleriga', u'Lifton', u'South Molton', u'South Tawton', u'Black Torrington', u'Hartland', u'Merton', u'North Tawton', u'Axmouth', u'Fremington', u'Exminster', u'Crediton', u'Shirwell', u'Bampton', u'Silverton', u'Hemyock', u'Braunton', u'Diptford', u'Walkhampton', u'Budleigh', u'Molland', u'Cliston', u'Kerswell', u'Colyton', u'Plympton', u'Witheridge', u'Halberton', u'Teignbridge', u'Wonford', u'Ottery St Mary', u'Axminster', u'Tiverton', u'Ermington', u'Chillington', u'unknown']


[12, 32, 7, 34, 21, 13, 17, 18, 31, 2, 8, 4, 22, 15, 10, 5, 24, 23, 25, 19, 0, 27, 20, 11, 29, 30, 28, 6, 33, 9, 16, 1, 26, 3, 14]
[u'Lifton', u'South Tawton', u'Black Torrington', u'Molland', u'Hartland', u'Merton', u'Fremington', u'North Tawton', u'Crediton', u'Exminster', u'Braunton', u'Shirwell', u'Bampton', u'South Molton', u'Cliston', u'Silverton', u'Hemyock', u'Wonford', u'Budleigh', u'Witheridge', u'Teignbridge', u'Tiverton', u'Halberton', u'Kerswell', u'Axminster', u'Colyton', u'Axmouth', u'Alleriga', u'Ottery St Mary', u'Chillington', u'Ermington', u'Diptford', u'unknown', u'Plympton', u'Walkhampton']
Cost: 62; Len: 35

Gen 2000. Cost 66. Best: 66. Pop: 105
[12, 32, 6, 7, 21, 13, 17, 18, 31, 2, 8, 22, 4, 15, 10, 5, 34, 16, 26, 24, 23, 25, 19, 0, 1, 33, 27, 20, 11, 29, 30, 3, 14, 28, 9]
[u'Lifton', u'South Tawton', u'Alleriga', u'Black Torrington', u'Hartland', u'Merton', u'Fremington', u'North Tawton', u'Crediton', u'Exminster', u'Braunton', u'Bampton', u'Shirwell', u'South Molton', u'Cliston', u'Silverton', u'Molland', u'Ermington', u'unknown', u'Hemyock', u'Wonford', u'Budleigh', u'Witheridge', u'Teignbridge', u'Diptford', u'Ottery St Mary', u'Tiverton', u'Halberton', u'Kerswell', u'Axminster', u'Colyton', u'Plympton', u'Walkhampton', u'Axmouth', u'Chillington']
Cost: 66; Len: 35

Gen 2000. Cost 66. Best: 66. Pop: 105
[12, 32, 7, 21, 13, 17, 18, 31, 2, 8, 4, 34, 22, 15, 10, 5, 24, 23, 25, 19, 27, 20, 11, 33, 29, 30, 28, 6, 9, 0, 16, 1, 3, 14, 26]
[u'Lifton', u'South Tawton', u'Black Torrington', u'Hartland', u'Merton', u'Fremington', u'North Tawton', u'Crediton', u'Exminster', u'Braunton', u'Shirwell', u'Molland', u'Bampton', u'South Molton', u'Cliston', u'Silverton', u'Hemyock', u'Wonford', u'Budleigh', u'Witheridge', u'Tiverton', u'Halberton', u'Kerswell', u'Ottery St Mary', u'Axminster', u'Colyton', u'Axmouth', u'Alleriga', u'Chillington', u'Teignbridge', u'Ermington', u'Diptford', u'Plympton', u'Walkhampton', u'unknown']

[12, 32, 7, 21, 13, 17, 18, 31, 2, 8, 26, 22, 4, 15, 34, 10, 5, 24, 23, 25, 19, 0, 33, 27, 20, 11, 29, 14, 30, 28, 6, 9, 16, 1, 3]
[12, 32, 7, 21, 13, 17, 18, 31, 2, 8, 22, 4, 15, 10, 5, 24, 34, 23, 25, 19, 0, 27, 33, 20, 11, 3, 14, 29, 30, 6, 9, 28, 16, 1, 26]
[u'Lifton', u'South Tawton', u'Black Torrington', u'Hartland', u'Merton', u'Fremington', u'North Tawton', u'Crediton', u'Exminster', u'Braunton', u'Bampton', u'Shirwell', u'South Molton', u'Cliston', u'Silverton', u'Hemyock', u'Molland', u'Wonford', u'Budleigh', u'Witheridge', u'Teignbridge', u'Tiverton', u'Ottery St Mary', u'Halberton', u'Kerswell', u'Plympton', u'Walkhampton', u'Axminster', u'Colyton', u'Alleriga', u'Chillington', u'Axmouth', u'Ermington', u'Diptford', u'unknown']
Cost: 68; Len: 35

[12, 32, 7, 21, 13, 17, 18, 31, 2, 34, 8, 22, 4, 15, 10, 5, 24, 23, 19, 25, 27, 20, 11, 30, 6, 9,
 28, 0, 16, 26, 1, 3, 33, 14, 29]
[u'Lifton', u'South Tawton', u'Black Torrington', u'Hartland', u'Merton', u'Fremington', u'North Tawton', u'Crediton', u'Exminster', u'Molland', u'Braunton', u'Bampton', u'Shirwell', u'South Molton', u'Cliston', u'Silverton', u'Hemyock', u'Wonford', u'Witheridge', u'Budleigh', u'Tiverton', u'Halberton', u'Kerswell', u'Colyton', u'Alleriga', u'Chillington', u'Axmouth', u'Teignbridge', u'Ermington', u'unknown', u'Diptford', u'Plympton', u'Ottery St Mary', u'Walkhampton', u'Axminster']
Cost: 71; Len: 35


Dorset (None/41)
---------

NO REF TO ENTRY NUMBERS => NO ORDER!!!!


Somerset (82/62)
---------

[61, 39, 49, 30, 19, 44, 1, 40, 53, 2, 33, 3, 4, 13, 21, 51, 54, 10, 58, 52, 11, 12, 5, 14, 16, 24, 22, 15, 17, 62, 43, 27, 25, 6, 60, 23, 18, 59, 35, 41, 47, 55, 45, 57, 46, 38, 7, 36, 50, 32, 42,
 20, 0, 34, 28, 48, 8, 29, 37, 31, 56, 9, 26]
[u'Coker', u'Yeovil: Houndsborough', u'Pitminster', u'Lydeard', u'South Petherton', u'Loxley', u'Williton', u'Yeovil: Lyatts', u'Minehead', u'Bruton: Blachethorna', u'Reynaldsway', u'Milborne/Horethorne', u'Milverton', u'Bulstone', u'Cheddar', u'Sheriffs Brompton', u'Brompton Regis', u'North Petherton', u'Creech', u'Cutcombe', u'Cannington', u'Carhampton', u'Abdick', u'Andersfield', u'Winterstoke', u'Bedminster', u'Chew', u'Taunton', u'Portbury', u'Martock', u'Lyatts', u'Kingsbury', u'Hartcliffe', u'Keynsham', u'Congresbury', u'Bempstone', u'Frome: Frome', u'North Curry', u'Bruton: Wincanton', u'Yeovil: Stone', u'South Brent', u'Dulverton', u'Whitestone', u'Winsford', u'Monkton', u'Milverton or Brompton Regis', u'Bath', u'Thurlbear', u'Huntspill', u'Crewkerne', u'Carhampton / Williton', u'Yeovil: Tintinhull', u'Chewton', u'Somerton', u'Wiveliscombe', u'Frome: Frome/Downhead', u'Frome: Wellow', u'Wellington', u'Thornfalcon', u'Wells', u'Cleeve', u'Frome: Kilmersdon', u'Bruton: Bruton']
Cost: 77; Len: 63

[1, 5, 60, 2, 38, 4, 62, 54, 27, 55, 10, 33, 13, 11, 24, 14, 12, 16, 22, 15, 17, 25, 6, 28, 20, 57, 58, 23, 56, 7, 36, 43, 45, 9, 37, 51, 59, 34, 18, 32, 0, 29, 47, 35, 52, 39, 48, 50, 53, 19, 61, 42, 8, 49, 21, 44, 26, 31, 3, 46, 30, 40, 41]
[u'Williton', u'Abdick', u'Congresbury', u'Bruton: Blachethorna', u'Milverton or Brompton Regis', u'Milverton', u'Martock', u'Brompton Regis', u'Kingsbury', u'Dulverton', u'North Petherton', u'Reynaldsway', u'Bulstone', u'Cannington', u'Bedminster', u'Andersfield', u'Carhampton', u'Winterstoke', u'Chew', u'Taunton', u'Portbury', u'Hartcliffe', u'Keynsham', u'Wiveliscombe', u'Yeovil: Tintinhull', u'Winsford', u'Creech', u'Bempstone', u'Cleeve', u'Bath', u'Thurlbear', u'Lyatts', u'Whitestone', u'Frome: Kilmersdon', u'Thornfalcon', u'Sheriffs Brompton', u'North Curry', u'Somerton', u'Frome: Frome', u'Crewkerne', u'Chewton', u'Wellington', u'South Brent', u'Bruton: Wincanton', u'Cutcombe', u'Yeovil: Houndsborough', u'Frome: Frome/Downhead', u'Huntspill', u'Minehead', u'South Petherton', u'Coker', u'Carhampton / Williton', u'Frome: Wellow', u'Pitminster', u'Cheddar', u'Loxley', u'Bruton: Bruton', u'Wells', u'Milborne/Horethorne', u'Monkton', u'Lydeard', u'Yeovil: Lyatts', u'Yeovil: Stone']
Cost: 70; Len: 63

[24, 7, 57, 29, 30, 10, 11, 41, 37, 51, 19, 1, 17, 47, 2, 45, 25, 21, 48, 33, 5, 4, 27, 13, 14, 12, 16, 15, 18, 8, 44, 6, 23, 53, 49, 54, 40, 20, 32, 28, 52, 35, 55, 34, 31, 39, 9, 42,
 36, 0, 22, 26, 56, 43, 46, 3, 38, 50]
[u'Bedminster', u'Bath', u'Martock', u'Wellington', u'Lydeard', u'North Petherton', u'Cannington', u'Monkton', u'Yeovil: Lyatts', u'Cleeve', u'South Petherton', u'Williton', u'Portbury', u'Cutcombe', u'Bruton: Blachethorna', u'Huntspill', u'Hartcliffe', u'Cheddar', u'Minehead', u'Reynaldsway', u'Abdick', u'Milverton', u'Kingsbury', u'Bulstone', u'Andersfield', u'Carhampton', u'Winterstoke', u'Taunton', u'Frome: Frome', u'Frome: Wellow', u'Pitminster', u'Keynsham', u'Bempstone', u'Creech', u'Brompton Regis', u'North Curry', u'Whitestone', u'Yeovil: Tintinhull', u'Crewkerne', u'Wiveliscombe', u'Winsford', u'Bruton: Wincanton', u'Congresbury', u'Somerton', u'Wells', u'Loxley', u'Frome: Kilmersdon', u'South Brent', u'Yeovil: Houndsborough', u'Chewton', u'Chew', u'Bruton: Bruton', u'Coker', u'Frome: Frome/Downhead', u'Sheriffs Brompton', u'Milborne/Horethorne', u'Yeovil: Stone', u'Dulverton']
Cost: 72; Len: 58

[17, 56, 39, 42, 10, 31, 46, 25, 11, 19, 49, 13, 1, 47, 20, 12, 5, 27, 7, 4, 14, 16, 2, 15, 37, 48, 55, 33, 22, 18, 8, 28, 23, 45, 50, 41, 32, 35, 57, 6, 40, 52, 9, 34, 51, 44, 29, 26,
 0, 21, 3, 53, 38, 54, 30, 36, 24, 43]
[u'Portbury', u'Coker', u'Loxley', u'South Brent', u'North Petherton', u'Wells', u'Sheriffs Brompton', u'Hartcliffe', u'Cannington', u'South Petherton', u'Brompton Regis', u'Bulstone',
 u'Williton', u'Cutcombe', u'Yeovil: Tintinhull', u'Carhampton', u'Abdick', u'Kingsbury', u'Bath', u'Milverton', u'Andersfield', u'Winterstoke', u'Bruton: Blachethorna', u'Taunton', u'Yeovil: Lyatts', u'Minehead', u'Congresbury', u'Reynaldsway', u'Chew', u'Frome: Frome', u'Frome: Wellow', u'Wiveliscombe', u'Bempstone', u'Huntspill', u'Dulverton', u'Monkton', u'Crewkerne', u'Bruton: Wincanton', u'Martock', u'Keynsham', u'Whitestone', u'Winsford', u'Frome: Kilmersdon', u'Somerton', u'Cleeve', u'Pitminster', u'Wellington', u'Bruton: Bruton', u'Chewton', u'Cheddar', u'Milborne/Horethorne', u'Creech', u'Yeovil: Stone', u'North Curry', u'Lydeard', u'Yeovil: Houndsborough', u'Bedminster', u'Frome: Frome/Downhead']
Cost: 70; Len: 58
done

[17, 51, 39, 30, 10, 46, 31, 25, 11, 19, 49, 13, 1, 47, 48, 12, 5, 7, 27, 4, 14, 16, 2, 37, 15, 20, 57, 33, 22, 18, 8, 28, 23, 50, 45, 41, 35, 32, 55, 6, 40, 52, 34, 9, 56, 29, 44, 0, 26, 3, 21, 53, 54, 38, 42, 24, 36, 43]
[u'Portbury', u'Cleeve', u'Loxley', u'Lydeard', u'North Petherton', u'Sheriffs Brompton', u'Wells', u'Hartcliffe', u'Cannington', u'South Petherton', u'Brompton Regis', u'Bulstone', u'Williton', u'Cutcombe', u'Minehead', u'Carhampton', u'Abdick', u'Bath', u'Kingsbury', u'Milverton', u'Andersfield', u'Winterstoke', u'Bruton: Blachethorna', u'Yeovil: Lyatts', u'Taunton', u'Yeovil: Tintinhull', u'Martock', u'Reynaldsway', u'Chew', u'Frome: Frome', u'Frome: Wellow', u'Wiveliscombe', u'Bempstone', u'Dulverton', u'Huntspill', u'Monkton', u'Bruton: Wincanton', u'Crewkerne', u'Congresbury', u'Keynsham', u'Whitestone', u'Winsford', u'Somerton', u'Frome: Kilmersdon', u'Coker', u'Wellington', u'Pitminster', u'Chewton', u'Bruton: Bruton',
 u'Milborne/Horethorne', u'Cheddar', u'Creech', u'North Curry', u'Yeovil: Stone', u'South Brent', u'Bedminster', u'Yeovil: Houndsborough', u'Frome: Frome/Downhead']
Cost: 66; Len: 58

Wiltshire (None)
---------

NO REF TO ENTRY NUMBERS => NO ORDER!!!!

            '''
    def get_tics_from_shire(self, shire):
        ret = []
        
        from exon.customisations.digipal_lab.views.hundreds import get_hundreds_view_context
        
        class MyRequest:
            def __init__(self, request):
                self.REQUEST = request
        
        context = get_hundreds_view_context(MyRequest({'oc': ''}))
        
        info = {}
        for shire_data in context['shires']:
            if shire_data['name'].lower() == shire:
                info = shire_data
                break
        
        print 'optimise... %s' % shire

        if info:
            # 1. get all the hundreds in a list

            tics = info['tics']

            # remove redundant hundreds in entries list
            for tic in tics:
                tic['entries_all'] = tic['entries'][:]
                tic['entries'] = []
                last_hundred = None
                for entry in tic['entries_all']:
                    hundred = entry['hundred']
                    # discard '-'
                    if len(hundred) < 2: continue
                    # discard missing ellis number
                    if entry['ellisref'] in [None, '-', '']: continue
                    
                    if last_hundred is None or last_hundred != hundred:
                        tic['entries'].append(entry)
                    last_hundred = hundred
            
            # remove tic with only one entry
            tics = [tic for tic in tics if len(tic['entries']) > 1]
            
            ret = tics

        return ret
            
    
    def print_candidate(self, v1, tics, hundreds):
        print '-' * 10
        print v1
        print self.get_vector_labels(hundreds, v1)
        print 'Cost: %s; Len: %s' % (self.get_cost(tics, v1), len(v1))
        
    def get_cost_from_function(self, tics, get_hhunber_from_entry):
        ''' Returns a cost for out-of-seq hundreds for a given
        hundredal numbering. get_hhunber_from_entry takes an entry dict
        and returns a number for that entry'''
        ret = 0
        
        for tic in tics:
            last_ho = None
            last_last_ho = None
            for entry in tic['entries']:
                #ho = v1.index(entry['ho'])
                ho = get_hhunber_from_entry(entry)
                
                # 8 11 10 not ok
                # 10 11 10 OK
                if last_ho is not None and\
                    last_ho > ho and\
                    last_last_ho != ho:
                    ret += 1
                last_last_ho = last_ho
                last_ho = ho
        
        return ret

    def get_cost_from_hundreds(self, tics, hs):
        ''' hs = [first_hundred_name, second_hundred_name, ...] '''
        return self.get_cost_from_function(tics, lambda entry: hs.index(entry['hundred']))
        
    def get_cost(self, tics, v1):
        ''' v1 = [first_hundred_entry_ho, ...] '''
        return self.get_cost_from_function(tics, lambda entry: v1.index(entry['ho']))
    
    def get_vector_labels(self, hundreds, v1):
        hr = {}
        for k, v in hundreds.iteritems():
            hr[v] = k
        return [hr[i] for i in v1]

    def get_unique_matches(self, pattern, content):
        ret = re.findall(pattern, content)
        
        import json

        print repr(pattern)

        matches = {}
        for match in ret:
            key = json.dumps(match)
            matches[key] = matches.get(key, 0) + 1
            
        for key, freq in sorted([(key, freq) for key, freq in matches.iteritems()], key=lambda item: item[1]):
            print '%3d %s' % (freq, key)
        
        print len(ret)
        
        return ret

    def pattern(self):
        input_path = self.cargs[0]
        pattern = self.cargs[1]
        
        from digipal.utils import read_file
        
        content = read_file(input_path)

        print
        self.get_unique_matches(pattern, content)
        
        print

    def upload(self):
        input_path = self.cargs[0]
        recordid = self.cargs[1]
        
        import regex
        from digipal.utils import re_sub_fct
        from digipal.utils import read_file
        content = read_file(input_path)
        
        # extract body
        l0 = len(content)
        content = regex.sub(ur'(?musi).*<body*?>(.*)</body>.*', ur'<p>\1</p>', content)
        if len(content) == l0:
            print 'ERROR: could not find <body> element'
            return

        # unescape XML tags coming from MS Word
        # E.g. &lt;margin&gt;Д‘ mМѓ&lt;/margin&gt;
        content = regex.sub(ur'(?musi)&lt;(/?[a-z]+)&gt;', ur'<\1>', content)

        # convert &amp; to #AMP#
        content = content.replace('&amp;', '#AMP#')
        
        # line breaks from MS
        content = regex.sub(ur'(?musi)\|', ur'<span data-dpt="lb" data-dpt-src="ms"></span>', content)

        # line breaks from editor
        content = regex.sub(ur'(?musi)<br/>', ur'<span data-dpt="lb" data-dpt-src="prj"></span>', content)

        # <st>p</st> => ṕ
        content = regex.sub(ur'(?musi)<st>\s*p\s*</st>', ur'ṕ', content)
        # <st>q</st> => ƣ
        content = regex.sub(ur'(?musi)<st>\s*q\s*</st>', ur'ƣ', content)

        # <del>de his</del> =>
        content = regex.sub(ur'(?musi)<del>(.*?)</del>', ur'', content)

        # Folio number
        # [fol. 1. b.] or [fol. 1.]
        # TODO: check for false pos. or make the rule more strict
        #content = re.sub(ur'(?musi)\[fol.\s(\d+)\.(\s*(b?)\.?)\]', ur'</p><span data-dpt="location" data-dpt-loctype="locus">\1\3</span><p>', content)
        self.sides = {'': 'r', 'b': 'v', 'a': 'r'}
        def get_side(m):
            side = self.sides.get(m.group(3), m.group(3))
            ret = ur'</p><span data-dpt="location" data-dpt-loctype="locus">%s%s</span><p>' % (m.group(1), side)
            return ret
        content = re_sub_fct(content, ur'(?musi)\[fol.\s(\d+)\.(\s*(b?)\.?)\]', get_side, regex)

        # Entry number
        # [1a3]
        # TODO: check for false pos. or make the rule more strict
        content = regex.sub(ur'(?musi)(§?)\[(\d+(a|b)\d+)]', ur'</p><p>\1<span data-dpt="location" data-dpt-loctype="entry">\2</span>', content)

        # <margin></margin>
        content = content.replace('<margin>', '<span data-dpt="note" data-dpt-place="margin">')
        content = content.replace('</margin>', '</span>')
         
        # to check which entities are left
        ##ocs = set(regex.findall(ur'(?musi)(&[#\w]+;)', content))

        self.c = 0

        def markup_expansions(match):
            m = match.group(0)
            ret = m

            #if '[' not in m: return m
            
            # don't convert if starts with digit as it's most likely a folio or entry number
            if m[0] <= '9' and m[0] >= '0':
                return m
            
            self.c += 1
            #if self.c > 100: exit()
            
            # ũ[ir]g̃[a]
            # abbr =
            
            # ABBR
            abbr = regex.sub(ur'\[.*?\]', ur'', m)
            
            # o<sup>o</sup> -> <sup>o</sup>
            abbr = regex.sub(ur'(\w)(<sup>\1</sup>|<sub>\1</sub>)', ur'\2', abbr)
            
            # EXP
            exp = regex.sub(ur'\[(.*?)\]', ur'<i>\1</i>', m)
            # b
            exp = regex.sub(ur'\u1d6c', ur'b', exp)
            # l/ -> l
            exp = regex.sub(ur'\u0142', ur'l', exp)
            # d- -> d
            exp = regex.sub(ur'\u0111', ur'd', exp)
            # h
            exp = regex.sub(ur'\u0127', ur'h', exp)
            # e.g. hid4as
            exp = regex.sub(ur'\d', ur'', exp)

            ##exp = regex.sub(ur'ṕ', ur'p', exp)
            exp = regex.sub(ur'ƣ', ur'q', exp)
            
            
            # Remove abbreviation signs
            # ! we must make sure that the content no longer contains entities!
            # E.g. &amp; => &
            # ;
            exp = regex.sub(ur';', ur'', exp)
            # :
            exp = regex.sub(ur':', ur'', exp)
            # ÷
            exp = regex.sub(ur'÷', ur'', exp)
            # ʇ
            exp = regex.sub(ur'ʇ', ur'', exp)
            # e.g. st~
            exp = remove_accents(exp)
            
            # remove sub/sup from the expanded form as it usually contains abbreviation mark
            # Exception: hiđ4[ae]ϛ {ϛ 7 dim̃[idia] uirga.}
            # here we keep ϛ because it is used as an insertion sign
            ###exp = regex.sub(ur'<su(p|b)>.*?</su(p|b)>', ur'', exp)
            # general removal
            exp = regex.sub(ur'<su(p|b)>.*?</su(p|b)>', ur'', exp)
            
            if abbr != exp and exp:
#                 if len(abbr) > len(exp):
#                     # potentially spurious expansions
#                     print repr(abbr), repr(exp)
                ret = ur'<span data-dpt="abbr">%s</span><span data-dpt="exp">%s</span>' % (abbr, exp)
            
            ##print repr(m), repr(ret)
            
            return ret
        
        content = re_sub_fct(content, ur'(?musi)(:|;|÷|\w|(<sup>.*?</sup>)|(<sub>.*?</sub>)|\[|\])+', markup_expansions, regex)

        # Bal〈dwini〉 =>
        content = regex.sub(ur'(?musi)(〈[^〈〉]{1,30}〉)', ur'<span data-dpt="exp">\1</span>', content)
        
        # sup
        content = regex.sub(ur'(?musi)<sup>', ur'<span data-dpt="hi" data-dpt-rend="sup">', content)

        # sub
        content = regex.sub(ur'(?musi)<sub>', ur'<span data-dpt="hi" data-dpt-rend="sub">', content)
        content = regex.sub(ur'(?musi)</sup>|</sub>', ur'</span>', content)

        # convert #AMP# to &amp;
        content = content.replace('#AMP#', '&amp;')

        # import
        from digipal_text.models import TextContentXML
        text_content_xml = TextContentXML.objects.get(id=recordid)
        text_content_xml.content = content
        
        #print repr(content)
        
        text_content_xml.save()

    def word_preprocess(self):
        input_path = self.cargs[0]
        output_path = self.cargs[1]
        
        from digipal.utils import write_file, read_file
        
        # regex will consider t̃ as \w, re as \W
        import regex as re
        
        content = read_file(input_path)
        
        # expansions
        # m_0 -> m[od]o_0
        #self.get_unique_matches(pattern, content)
        pattern = ur'(?mus)([^\w<>\[\]])(m<sup>0</sup>)([^\w<>\[\]&])'
        content = re.sub(pattern, ur'\1m[od]o<sup>o</sup>\3', content)

        pattern = ur'(?mus)([^\w<>\[\]])(uocat<sup>r</sup>)([^\w<>\[\]&])'
        content = re.sub(pattern, ur'\1uocat[u]r<sup>r</sup>\3', content)

        pattern = ur'(?mus)([^\w<>\[\]])(q<sup>1</sup>)([^\w<>\[&])'
        content = re.sub(pattern, ur'\1q[u]i<sup>i</sup>\3', content)
        
        # These involve the superscript 9s and 4s, with a few 2s caught up with
        # the fours and one recurrent subscript 4. 4 seems to be the commonest
        # number, and my suggested list will allow us to make inroads
        
        # -e<sub>4</sub> -> e cauda
        # ! rekeyers have somtimes used <sub> BEFORE the e (28 vs 3630)
        pattern = ur'(?mus)(e<sub>4</sub>)([^\w<>\[\]&])'
        content = re.sub(pattern, ur'ę\2', content)

        # he4c -> hęc
        pattern = ur'(?mus)([^\w<>\[\]/;](h|H))(e<sub>4</sub>)(c[^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1ę\4', content)

        # e<sub>9</sub> ->
        # 6599 occurrences
        pattern = ur'(?mus)([\w<>\[\]/;]+)(<sup>9</sup>)([^\w<>\[\]&])'
        content = re.sub(pattern, ur'\1\2[us]\3', content)
        
        # most frequent 9 within word: nem9culi (199 out of 237 occurences)
        pattern = ur'(?mus)([^\w<>\[\]/;]nem)(<sup>9</sup>)((culi|cłi)[^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[us]\3', content)

        # 2: stands for different symbols: u (-> ar / ra); a -> ua

        # q2drag4 -> q[ua]2drag4[enarias]
        pattern = ur'(?mus)([^\w<>\[\]/;])(q<sup>2</sup>drag<sup>4</sup>)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1q[u]a<sup>a</sup>drag<sup>4</sup>[enarias]\3', content)
        # q2drag̃ -> q[ua]2drag[enarias]
        pattern = ur'(?mus)([^\w<>\[\]/;])(q<sup>2</sup>)(drag̃)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1q[u]a<sup>a</sup>\3[enarias]\4', content)
        # q2dragenar~ -> q[ua]2dragenar~[ias]
        pattern = ur'(?mus)([^\w<>\[\]/;])(q<sup>2</sup>)(dragenar̃)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1q[u]a<sup>a</sup>\3[ias]\4', content)
        # q2dragenarias -> q[ua]2dragenarias
        pattern = ur'(?mus)([^\w<>\[\]/;])(q<sup>2</sup>)(dragenarias[^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1q[u]a<sup>a</sup>\3', content)
        
        # q2ndo -> q[u]a2do
        pattern = ur'(?mus)([^\w<>\[\]/;]q)(<sup>2</sup>)(ndo[^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1[u]a<sup>a</sup>\3', content)

        # cap2s -> cap2[ra]s
        pattern = ur'(?mus)([^\w<>\[\]/;]cap)(<sup>2</sup>)(s[^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[ra]\3', content)
        # cap2 -> cap[ra]a !?
        pattern = ur'(?mus)([^\w<>\[\]/;]cap)(<sup>2</sup>)([^\w<>\[\]/&])'
        #content = re.sub(pattern, ur'\1[r]a<sup>a</sup>\3', content)
        content = re.sub(pattern, ur'\1<sup>2</sup>[ra]\3', content)

        # p2ti -> p2[ra]ti
        pattern = ur'(?mus)([^\w<>\[\]/;]p)(<sup>2</sup>)(ti[^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[ra]\3', content)

        # ext2 = ext[ra]
        pattern = ur'(?mus)([^\w<>\[\]/;]ext)(<sup>2</sup>)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[ra]\3', content)

        # eq2s = eq[u]a2s
        pattern = ur'(?mus)([^\w<>\[\]/;]eq)(<sup>2</sup>)(s[^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1[u]a<sup>a</sup>\3', content)

        # q2 = q[u]a2
        pattern = ur'(?mus)([^\w<>\[\]/;]q)(<sup>2</sup>)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1[u]a<sup>a</sup>\3', content)

        # sup2dicta =
        pattern = ur'(?mus)([^\w<>\[\]/;]sup)(<sup>2</sup>)(dict(ã|a)s?[^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[ra]\3', content)

        # s;
        pattern = ur'(?mus)([^\w<>\[\]/;]s;)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1[ed]\2', content)

        # 4: stands for bolt which is a very generic abbreviation

        # porc4 -> porc4[os]
        pattern = ur'(?mus)([^\w<>\[\]/;]porc)(<sup>4</sup>)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[os]\3', content)

        # recep4 -> recep4[it]
        pattern = ur'(?mus)([^\w<>\[\]/;]rece)(p̃|p<sup>4</sup>)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[it]\3', content)

        # ag4 -> ag[ros]
        pattern = ur'(?mus)([^\w<>\[\]/;]a)(g̃|g<sup>4</sup>)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[ros]\3', content)

        # hid4 -> hid[e<sup>e</sup>]
        pattern = ur'(?mus)([^\w<>\[\]/;]hid)(<sup>4</sup>)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[ę]\3', content)
        
        # den4 -> den4[arios]
        pattern = ur'(?mus)([^\w<>\[\]/;]den)(<sup>4</sup>)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[arios]\3', content)

        # dim4 -> den4[idiam]
        pattern = ur'(?mus)([^\w<>\[\]/;]di)(m̃|m<sup>4</sup>)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[idiam]\3', content)
        
        # inlong4 -> inlong4[itudine]
        pattern = ur'(?mus)([^\w<>\[\]/;]inlong)(<sup>4</sup>)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[itudine]\3', content)

        # long4 -> long4[itudine]
        pattern = ur'(?mus)([^\w<>\[\]/;]long)(<sup>4</sup>)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[itudine]\3', content)

        # longitud4 -> longitud4[itudine]
        pattern = ur'(?mus)([^\w<>\[\]/;]longitud)(<sup>4</sup>)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[ine]\3', content)

        # lat4 -> lat4[itudine]
        pattern = ur'(?mus)([^\w<>\[\]/;]lat)(<sup>4</sup>)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[itudine]\3', content)

        # latit4 -> lat4[itudine]
        pattern = ur'(?mus)([^\w<>\[\]/;]latit)(<sup>4</sup>)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[udine]\3', content)

        # nemor4 -> nemor4[is]
        pattern = ur'(?mus)([^\w<>\[\]/;]nemor)(<sup>4</sup>)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[is]\3', content)

        # quadrag4 -> quadrag4[enarias]
        pattern = ur'(?mus)([^\w<>\[\]/;])(quadrag<sup>4</sup>)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1quadrag<sup>4</sup>[enarias]\3', content)

        # seru4 -> seru4[um]
        pattern = ur'(?mus)([^\w<>\[\]/;]seru)(<sup>4</sup>)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[um]\3', content)

        # ten -> ten4[uit]
        pattern = ur'(?mus)([^\w<>\[\]/;]ten)(<sup>4</sup>)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[uit]\3', content)

        # carr4 -> carr4[ucas]
        pattern = ur'(?mus)([^\w<>\[\]/;]carr)(<sup>4</sup>)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[ucas]\3', content)
        # car4r -> carr4[ucas] (correct error from rekeyers)
        pattern = ur'(?mus)([^\w<>\[\]/;]car)(<sup>4</sup>)r([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1r\2[ucas]\3', content)
        # carr~ -> carr~[ucas]
        pattern = ur'(?mus)([^\w<>\[\]/;])(carr̃)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[ucas]\3', content)

        # bord4 -> bord4[arios]
        pattern = ur'(?mus)([^\w<>\[\]/;]bord)(<sup>4</sup>)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[arios]\3', content)

        # mans4 -> mans4[arios]
        pattern = ur'(?mus)([^\w<>\[\]/;]man)(s̃|s<sup>4</sup>)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[ionem]\3', content)

        # 9 1
        
        # un9qisq: / un9q1sq -> un9[us]q[u]1isq:[ue]
        pattern = ur'(?mus)([^\w<>\[\]/;])(un<sup>9</sup>)(q<sup>(i|1)</sup>)(sq:?)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[us]q[u]<sup>i</sup>i\5[ue]\6', content)

        # d-
        # d- -> denarios
        pattern = ur'(?mus)([^\w<>\[\]/;])(đ)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[enarios]\3', content)

        # redđ -> redd[idit]
        pattern = ur'(?mus)([^\w<>\[\]/;]red)(đ)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[idit]\3', content)

        # hiđ -> hiđ[as]
        pattern = ur'(?mus)([^\w<>\[\]/;]hi)(đ)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[as]\3', content)

        # hunđ -> hunđ[reto]
        pattern = ur'(?musi)([^\w<>\[\]/;]hun)(đ|d<sup>4</sup>)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[reto]\3', content)
        
        # d: -> q:[ui]
        pattern = ur'(?mus)([^\w<>\[\]/;]q)(:)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[ui]\3', content)

        # ĩ -> ĩ[n]
        pattern = ur'(?mus)([^\w<>\[\]/;]ĩ)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1[n]\2', content)

        # st~
        # st~ -> s[un]t~
        pattern = ur'(?mus)([^\w<>\[\]/;]s)(t̃[^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1[un]\2', content)

        # rex E -> rex Edwardus
        pattern = ur'(?musi)([^\w<>\[\]/;])(rex\.? E)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[dwardus]\3', content)

        # regis E -> regis Edwardi
        pattern = ur'(?musi)([^\w<>\[\]/;])(regis\.? e)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[dwardi]\3', content)

        # E regis ->
        pattern = ur'(?musi)([^\w<>\[\]/;]e)\.?( regis[^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1[dwardi]\2', content)

        # rex G
        pattern = ur'(?musi)([^\w<>\[\]/;])(rex\.? G)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[ildum]\3', content)

        # viłł[anos]
        pattern = ur'(?musi)([^\w<>\[\]/;])(viłł|uiłł)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[anos]\3', content)
        
        # ũg̃ -> u[ir]g[as]
        pattern = ur'(?musi)([^\w<>\[\]/;]ũ)(g̃)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1[ir]\2[as]\3', content)

        # uirg̃ -> u[ir]g[as]
        pattern = ur'(?musi)([^\w<>\[\]/;]uirg̃)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1[as]\2', content)

        # ht̃ -> h[abe]t̃
        pattern = ur'(?musi)([^\w<>\[\]/;]h)(t̃|t<sup>4</sup>)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1[abe]\2\3', content)

        # hñt -> h[abe]ñt
        pattern = ur'(?musi)([^\w<>\[\]/;]h)(ñt|nt<sup>4</sup>)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1[abe]\2\3', content)

        # borđ -> borđ[arios]
        pattern = ur'(?musi)([^\w<>\[\]/;]borđ)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1[arios]\2', content)

        # qñ -> q[ua]n[do]
        pattern = ur'(?musi)([^\w<>\[\]/;]q)(ñ)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1[ua]\2[do]\3', content)

        # dnĩo -> d[omi]nĩo
        pattern = ur'(?musi)([^\w<>\[\]/;]d)(nĩo[^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1[omi]\2', content)

        # ẽ -> ẽ[st]
        pattern = ur'(?musi)([^\w<>\[\]/;]ẽ)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1[st]\2', content)
        
        # ep̃s ->
        pattern = ur'(?musi)([^\w<>\[\]/;])(ep̃|ep<sup>4</sup>)(s[^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1\2[iscopu]\3', content)
        
        # porc̃
        pattern = ur'(?musi)([^\w<>\[\]/;]porc̃)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1[os]\2', content)

        # ep̃s ->
#         pattern = ur'(?musi)([^\w<>\[\]/;])(animł|aĩalia|ãalia)([^\w<>\[\]/&])'
#         content = re.sub(pattern, ur'\1\2[iscopu]\3', content)

        # r

        # nescit^r -> nescitur^r
        pattern = ur'(?mus)([^\w<>\[\]/;]nescit)(<sup>r</sup>)([^\w<>\[\]/&])'
        content = re.sub(pattern, ur'\1[u]r\2\3', content)

        # numbers
        pattern = ur'(?mus)\.?(\s*)(\b[IVXl]+)\.([^\w<>\[\]])'
        content = re.sub(pattern, lambda pat: ur'%s.%s.%s' % (pat.group(1), pat.group(2).lower(), pat.group(3)), content)

        # write result
        write_file(output_path, content)

    def msg(self, message, *args, **kwargs):
        self.cm.msg(message, *args, **kwargs)
