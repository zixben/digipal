(function($) {

    TextViewer = window.TextViewer || {};
    
    //
    // PanelSet
    //
    var PanelSet = TextViewer.PanelSet = function($root) {
        this.panels = [];
        this.$root = $root;
        this.$panelset = null;
        this.layout = null;
        this.$messageBox = null;
        this.isReady = false;
        
        this.registerPanel = function(panel) {
            this.panels.push(panel);
            panel.panelSet = this;
            panel.setItemPartid(this.itemPartid);
            if (this.isReady) {
                panel.componentIsReady('panelset');
            }
        };
        
        this.setItemPartid = function(itemPartid) {
            // e.g. '/itemparts/1/'
            this.itemPartid = itemPartid;
        };

        this.setLayout = function($panelset) {
            this.$panelset = $panelset;
            var me = this;
            var resize = function() { me._resizePanels(); };
            this.layout = $panelset.layout({ 
                applyDefaultStyles: true,
                closable: true,
                resizable: true,
                slidable: true,
                livePaneResizing: true,
                onopen: resize,
                onclose: resize,
                onshow: resize,
                onhide: resize,
                onresize: resize
            });
        };
        
        // Change the relative size of the panel
        // panelLocation: west|north|south|east
        // size: a ratio. e.g. 1/2.0 for half the full length
        this.setPanelSize = function(panelLocation, size) {
            if (size == 0) {
                this.layout.close(panelLocation);
            } else {
                var fullLength = this.$panelset[(panelLocation == 'east' || panelLocation == 'west') ? 'width': 'height']();
                this.layout.open(panelLocation);
                this.layout.sizePane(panelLocation, size * fullLength);
            }
        }

        this.setMessageBox = function($messageBox) {
            this.$messageBox = $messageBox;
        };

        this.setExpandButton = function($expandButton) {
            this.$expandButton = $expandButton;
            var me = this;
            this.$expandButton.on('click', function() { me.$panelset.css('height', $(window).height()); return true; });
        };

        this._resize = function(refreshLayout) {
            // resize the div to the available height on the browser viewport
            var window_height = $(window).height();
            var height = window_height - this.$root.offset().top + $(document).scrollTop();
            height = (height < 1) ? 0 : height;
            height = (height > window_height) ? window_height : height;
            this.$panelset.css('height', height - this.$messageBox.outerHeight(true));
            
            if (refreshLayout && this.layout) {
                this.layout.resizeAll();
            }
            
            this._resizePanels();
        };
        
        this._resizePanels = function() {
            for (var i in this.panels) {
                this.panels[i].onResize();
            }
        }

        this.initEvents = function() {
            
            this._resize(true);
            var me = this;
            
            $(window).resize(function() { 
                me._resize();
                });
            $(window).scroll(function() { 
                me._resize(true);
                });
        };
        
        this.ready = function() {
            this.initEvents();
            for (var i in this.panels) {
                this.panels[i].componentIsReady('panelset');
            }
            this.isReady = true;
        };
        
    };
    
    
    //
    // Panel: a Panel managed by the panelset
    // Usage:
    //    var panelset = $('#text-viewer').panelset();
    //    panelset.registerPanel(new Panel($('.ui-layout-center')));
    var Panel = TextViewer.Panel = function($root, contentType) {
        this.$root = $root;
        this.contentType = null;
        this.dirty = false;
        this.contentType = contentType;
        
        var $panelHtml = $('#text-viewer-panel').clone();
        $panelHtml.attr('id', '');
        this.$root.html($panelHtml);
        
        this.$locationSelect = this.$root.find('select[name=location]');
        this.$root.find('select').chosen();
        
        this.$content = this.$root.find('.panel-content');
        
        this.onResize = function () {
        };
                
        this.unreadyComponents = ['panelset'];
        
        this.componentIsReady = function(component) {
            var index = $.inArray(component, this.unreadyComponents);
            if (index > -1) {
                this.unreadyComponents.splice(index, 1);
            }
            if (this.unreadyComponents.length == 0) {
                this._ready();
            } 
        }
        
        this._ready = function(readyComponent) {
            var me = this;
            this.$locationSelect.on('change', function() {me.loadContent();});
            this.loadContent();
            this.onResize();
            
            this.initDropDown('content-type', this.contentType);

            setInterval(function() {
                me.saveContent();
            }, 1000);
        };
        
        this.initDropDown = function(selector, selection) {
            // we initialise the icon of the bootstrap drop down
            var $dropdown = this.$root.find('.dropdown-'+selector);
            var newValue = $dropdown.find('a[href=#'+selection+'] span')[0].outerHTML;
            var me = this;
            $dropdown.find('.dropdown-toggle span:first').replaceWith(newValue);
            
            $dropdown.find('.dropdown-menu a').on('click', function() {
                var href = $(this).attr('href');
                var contentType = href.substr(1, href.length - 1);
                me.panelSet.registerPanel(new TextViewer['Panel'+$(this).data('class')](me.$root, contentType));
                return false;
            });
        };

        this.loadContent = function() {
            this.$content.html('DUMMY CONTENT');
        };
        
        this.setItemPartid = function(itemPartid) {
            // e.g. '/itemparts/1/'
            this.itemPartid = itemPartid;
        };

        this.getContentAddress = function() {
            return '/digipal/manuscripts/' + this.itemPartid + '/texts/' + this.getContentType() + '/' + this.getLocationType() + '/' + this.getLocation() + '/';
        };
        
        this.getContentType = function() {
            return this.contentType;
        };
        
        this.getLocationType = function() {
            return 'folio';
        };

        this.getLocation = function() {
            return this.$locationSelect.val();
        };
                
        this.saveContent = function() {
        }
    };
    
    Panel.create = function(contentType, selector, write) {
        var panelType = contentType.toUpperCase().substr(0, 1) + contentType.substr(1, contentType.length - 1);
        if ($.inArray('Panel'+panelType+(write ? 'Write': ''), TextViewer) === -1) {
            panelType = 'Text';
        }
        var ret = new TextViewer['Panel'+panelType+(write ? 'Write': '')]($(selector), contentType);
        return ret;
    };
    
    var PanelText = TextViewer.PanelText = function($root, contentType) {
        TextViewer.Panel.call(this, $root, contentType);
    };

    TextViewer.textAreaNumber = 0;
    
    var PanelTextWrite = TextViewer.PanelTextWrite = function($root, contentType) {
        TextViewer.PanelText.call(this, $root, contentType);
        
        this.unreadyComponents.push('tinymce');
        
        this.loadContent = function() {
            // load the content with the API
            var me = this;
            TextViewer.callApi(
                this.getContentAddress(), 
                function(data) {
                    me.tinymce.setContent(data.content); 
                } 
            );
        };

        this.onResize = function () {
            if (this.tinymce) {
                // resize tinmyce to take the remaining height in the panel
                var $el = this.$root.find('iframe');
                var height = this.$root.innerHeight() - ($el.offset().top - $root.offset().top);
                $el.height(height+'px');
            }
        };

        this.saveContent = function() {
            var me = this;
            if (this.tinymce.isDirty()) {
                this.tinymce.isNotDirty = true;
                TextViewer.callApi(
                    this.getContentAddress(), 
                    function(data) {
                        //me.tinymce.setContent(data.content); 
                    },
                    {'content': me.tinymce.getContent()}
                );
            }
        };
        

        this.initTinyMCE = function() {
            TextViewer.textAreaNumber += 1;
            var divid = 'text-area-' + TextViewer.textAreaNumber;
            this.$content.append('<div id="'+ divid + '"></div>');
            var me = this;
            tinyMCE.init({
                selector: '#' + divid,
                init_instance_callback: function() {
                    me.tinymce = tinyMCE.get(divid);
                    me.componentIsReady('tinymce');
                    },
                plugins: ["paste"],
                toolbar: "undo redo", 
                menubar : false,
                statusbar: false,
                height: '15em',
                content_css : "/static/digipal_text/viewer/tinymce.css"
            });
            
        };
        
        this.initTinyMCE();
    };
        
    var PanelImage = TextViewer.PanelImage = function($root, contentType) {
        TextViewer.Panel.call(this, $root, contentType);
    };
    
    var PanelNavigator = TextViewer.PanelNavigator = function($root, contentType) {
        TextViewer.Panel.call(this, $root, contentType);
    };
        
    // UTILITIES

    TextViewer.callApi = function(url, onSuccess, requestData) {
        // See http://stackoverflow.com/questions/9956255.
        // This tricks prevents caching of the fragment by the browser.
        // Without this if you move away from the page and then click back
        // it will show only the last Ajax response instead of the full HTML page.
        url = url ? url : '';
        var url_ajax = url + ((url.indexOf('?') === -1) ? '?' : '&') + 'jx=1';
        
        $.get(url_ajax, requestData)
            .success(function(data) {
                if (onSuccess) {
                    onSuccess(data);
                    //set_message(data.message, data.status);
                }
            })
            .fail(function(data) {
            });
    }

    // These are external init steps for JSLayout
    function initLayoutAddOns() {
        //
        //  DISABLE TEXT-SELECTION WHEN DRAGGING (or even _trying_ to drag!)
        //  this functionality will be included in RC30.80
        //
        $.layout.disableTextSelection = function(){
            var $d  = $(document)
            ,   s   = 'textSelectionDisabled'
            ,   x   = 'textSelectionInitialized'
            ;
            if ($.fn.disableSelection) {
                if (!$d.data(x)) // document hasn't been initialized yet
                    $d.on('mouseup', $.layout.enableTextSelection ).data(x, true);
                if (!$d.data(s))
                    $d.disableSelection().data(s, true);
            }
            //console.log('$.layout.disableTextSelection');
        };
        $.layout.enableTextSelection = function(){
            var $d  = $(document)
            ,   s   = 'textSelectionDisabled';
            if ($.fn.enableSelection && $d.data(s))
                $d.enableSelection().data(s, false);
            //console.log('$.layout.enableTextSelection');
        };
    
        $(".ui-layout-resizer")
        .disableSelection() // affects only the resizer element
        .on('mousedown', $.layout.disableTextSelection ); // affects entire document
    };
    
    initLayoutAddOns();
    
}( jQuery ));