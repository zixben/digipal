/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */(function(global,factory){"use strict";if(typeof module==="object"&&typeof module.exports==="object"){module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}
return factory(w);};}else{factory(global);}})(typeof window!=="undefined"?window:this,function(window,noGlobal){"use strict";var arr=[];var document=window.document;var getProto=Object.getPrototypeOf;var slice=arr.slice;var concat=arr.concat;var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var fnToString=hasOwn.toString;var ObjectFunctionString=fnToString.call(Object);var support={};var isFunction=function isFunction(obj){return typeof obj==="function"&&typeof obj.nodeType!=="number";};var isWindow=function isWindow(obj){return obj!=null&&obj===obj.window;};var preservedScriptAttributes={type:true,src:true,nonce:true,noModule:true};function DOMEval(code,node,doc){doc=doc||document;var i,val,script=doc.createElement("script");script.text=code;if(node){for(i in preservedScriptAttributes){val=node[i]||node.getAttribute&&node.getAttribute(i);if(val){script.setAttribute(i,val);}}}
doc.head.appendChild(script).parentNode.removeChild(script);}
function toType(obj){if(obj==null){return obj+"";}
return typeof obj==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj;}
var
version="3.4.1",jQuery=function(selector,context){return new jQuery.fn.init(selector,context);},rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;jQuery.fn=jQuery.prototype={jquery:version,constructor:jQuery,length:0,toArray:function(){return slice.call(this);},get:function(num){if(num==null){return slice.call(this);}
return num<0?this[num+this.length]:this[num];},pushStack:function(elems){var ret=jQuery.merge(this.constructor(),elems);ret.prevObject=this;return ret;},each:function(callback){return jQuery.each(this,callback);},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function(){return this.pushStack(slice.apply(this,arguments));},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},eq:function(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function(){return this.prevObject||this.constructor();},push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;if(typeof target==="boolean"){deep=target;target=arguments[i]||{};i++;}
if(typeof target!=="object"&&!isFunction(target)){target={};}
if(i===length){target=this;i--;}
for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){copy=options[name];if(name==="__proto__"||target===copy){continue;}
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=Array.isArray(copy)))){src=target[name];if(copyIsArray&&!Array.isArray(src)){clone=[];}else if(!copyIsArray&&!jQuery.isPlainObject(src)){clone={};}else{clone=src;}
copyIsArray=false;target[name]=jQuery.extend(deep,clone,copy);}else if(copy!==undefined){target[name]=copy;}}}}
return target;};jQuery.extend({expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),isReady:true,error:function(msg){throw new Error(msg);},noop:function(){},isPlainObject:function(obj){var proto,Ctor;if(!obj||toString.call(obj)!=="[object Object]"){return false;}
proto=getProto(obj);if(!proto){return true;}
Ctor=hasOwn.call(proto,"constructor")&&proto.constructor;return typeof Ctor==="function"&&fnToString.call(Ctor)===ObjectFunctionString;},isEmptyObject:function(obj){var name;for(name in obj){return false;}
return true;},globalEval:function(code,options){DOMEval(code,{nonce:options&&options.nonce});},each:function(obj,callback){var length,i=0;if(isArrayLike(obj)){length=obj.length;for(;i<length;i++){if(callback.call(obj[i],i,obj[i])===false){break;}}}else{for(i in obj){if(callback.call(obj[i],i,obj[i])===false){break;}}}
return obj;},trim:function(text){return text==null?"":(text+"").replace(rtrim,"");},makeArray:function(arr,results){var ret=results||[];if(arr!=null){if(isArrayLike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}
return ret;},inArray:function(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i);},merge:function(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j];}
first.length=i;return first;},grep:function(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}
return matches;},map:function(elems,callback,arg){var length,value,i=0,ret=[];if(isArrayLike(elems)){length=elems.length;for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}
return concat.apply([],ret);},guid:1,support:support});if(typeof Symbol==="function"){jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];}
jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArrayLike(obj){var length=!!obj&&"length"in obj&&obj.length,type=toType(obj);if(isFunction(obj)||isWindow(obj)){return false;}
return type==="array"||length===0||typeof length==="number"&&length>0&&(length-1)in obj;}
var Sizzle=/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */(function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),nonnativeSelectorCache=createCache(),sortOrder=function(a,b){if(a===b){hasDuplicate=true;}
return 0;},hasOwn=({}).hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,indexOf=function(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i;}}
return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",whitespace="[\\x20\\t\\r\\n\\f]",identifier="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+"*([*^$|!~]?=)"+whitespace+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+identifier+")(?:\\(("+"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+".*"+")\\)|)",rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rdescend=new RegExp(whitespace+"|>"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+identifier+")"),"CLASS":new RegExp("^\\.("+identifier+")"),"TAG":new RegExp("^("+identifier+"|[*])"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+
whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rhtml=/HTML$/i,rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;return high!==high||escapedWhitespace?escaped:high<0?String.fromCharCode(high+0x10000):String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);},rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,fcssescape=function(ch,asCodePoint){if(asCodePoint){if(ch==="\0"){return"\uFFFD";}
return ch.slice(0,-1)+"\\"+ch.charCodeAt(ch.length-1).toString(16)+" ";}
return"\\"+ch;},unloadHandler=function(){setDocument();},inDisabledFieldset=addCombinator(function(elem){return elem.disabled===true&&elem.nodeName.toLowerCase()==="fieldset";},{dir:"parentNode",next:"legend"});try{push.apply((arr=slice.call(preferredDoc.childNodes)),preferredDoc.childNodes);arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length?function(target,els){push_native.apply(target,slice.call(els));}:function(target,els){var j=target.length,i=0;while((target[j++]=els[i++])){}
target.length=j-1;}};}
function Sizzle(selector,context,results,seed){var m,i,elem,nid,match,groups,newSelector,newContext=context&&context.ownerDocument,nodeType=context?context.nodeType:9;results=results||[];if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;}
if(!seed){if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}
context=context||document;if(documentIsHTML){if(nodeType!==11&&(match=rquickExpr.exec(selector))){if((m=match[1])){if(nodeType===9){if((elem=context.getElementById(m))){if(elem.id===m){results.push(elem);return results;}}else{return results;}}else{if(newContext&&(elem=newContext.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}
if(support.qsa&&!nonnativeSelectorCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))&&(nodeType!==1||context.nodeName.toLowerCase()!=="object")){newSelector=selector;newContext=context;if(nodeType===1&&rdescend.test(selector)){if((nid=context.getAttribute("id"))){nid=nid.replace(rcssescape,fcssescape);}else{context.setAttribute("id",(nid=expando));}
groups=tokenize(selector);i=groups.length;while(i--){groups[i]="#"+nid+" "+toSelector(groups[i]);}
newSelector=groups.join(",");newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;}
try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){nonnativeSelectorCache(selector,true);}finally{if(nid===expando){context.removeAttribute("id");}}}}}
return select(selector.replace(rtrim,"$1"),context,results,seed);}
function createCache(){var keys=[];function cache(key,value){if(keys.push(key+" ")>Expr.cacheLength){delete cache[keys.shift()];}
return(cache[key+" "]=value);}
return cache;}
function markFunction(fn){fn[expando]=true;return fn;}
function assert(fn){var el=document.createElement("fieldset");try{return!!fn(el);}catch(e){return false;}finally{if(el.parentNode){el.parentNode.removeChild(el);}
el=null;}}
function addHandle(attrs,handler){var arr=attrs.split("|"),i=arr.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}
function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&a.sourceIndex-b.sourceIndex;if(diff){return diff;}
if(cur){while((cur=cur.nextSibling)){if(cur===b){return-1;}}}
return a?1:-1;}
function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}
function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}
function createDisabledPseudo(disabled){return function(elem){if("form"in elem){if(elem.parentNode&&elem.disabled===false){if("label"in elem){if("label"in elem.parentNode){return elem.parentNode.disabled===disabled;}else{return elem.disabled===disabled;}}
return elem.isDisabled===disabled||elem.isDisabled!==!disabled&&inDisabledFieldset(elem)===disabled;}
return elem.disabled===disabled;}else if("label"in elem){return elem.disabled===disabled;}
return false;};}
function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;while(i--){if(seed[(j=matchIndexes[i])]){seed[j]=!(matches[j]=seed[j]);}}});});}
function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;}
support=Sizzle.support={};isXML=Sizzle.isXML=function(elem){var namespace=elem.namespaceURI,docElem=(elem.ownerDocument||elem).documentElement;return!rhtml.test(namespace||docElem&&docElem.nodeName||"HTML");};setDocument=Sizzle.setDocument=function(node){var hasCompare,subWindow,doc=node?node.ownerDocument||node:preferredDoc;if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;}
document=doc;docElem=document.documentElement;documentIsHTML=!isXML(document);if(preferredDoc!==document&&(subWindow=document.defaultView)&&subWindow.top!==subWindow){if(subWindow.addEventListener){subWindow.addEventListener("unload",unloadHandler,false);}else if(subWindow.attachEvent){subWindow.attachEvent("onunload",unloadHandler);}}
support.attributes=assert(function(el){el.className="i";return!el.getAttribute("className");});support.getElementsByTagName=assert(function(el){el.appendChild(document.createComment(""));return!el.getElementsByTagName("*").length;});support.getElementsByClassName=rnative.test(document.getElementsByClassName);support.getById=assert(function(el){docElem.appendChild(el).id=expando;return!document.getElementsByName||!document.getElementsByName(expando).length;});if(support.getById){Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var elem=context.getElementById(id);return elem?[elem]:[];}};}else{Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var node,i,elems,elem=context.getElementById(id);if(elem){node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}
elems=context.getElementsByName(id);i=0;while((elem=elems[i++])){node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}}}
return[];}};}
Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag);}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0,results=context.getElementsByTagName(tag);if(tag==="*"){while((elem=results[i++])){if(elem.nodeType===1){tmp.push(elem);}}
return tmp;}
return results;};Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){return context.getElementsByClassName(className);}};rbuggyMatches=[];rbuggyQSA=[];if((support.qsa=rnative.test(document.querySelectorAll))){assert(function(el){docElem.appendChild(el).innerHTML="<a id='"+expando+"'></a>"+"<select id='"+expando+"-\r\\' msallowcapture=''>"+"<option selected=''></option></select>";if(el.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");}
if(!el.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}
if(!el.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");}
if(!el.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}
if(!el.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(el){el.innerHTML="<a href='' disabled='disabled'></a>"+"<select disabled='disabled'><option/></select>";var input=document.createElement("input");input.setAttribute("type","hidden");el.appendChild(input).setAttribute("name","D");if(el.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");}
if(el.querySelectorAll(":enabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}
docElem.appendChild(el).disabled=true;if(el.querySelectorAll(":disabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}
el.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}
if((support.matchesSelector=rnative.test((matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)))){assert(function(el){support.disconnectedMatch=matches.call(el,"*");matches.call(el,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}
rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));hasCompare=rnative.test(docElem.compareDocumentPosition);contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while((b=b.parentNode)){if(b===a){return true;}}}
return false;};sortOrder=hasCompare?function(a,b){if(a===b){hasDuplicate=true;return 0;}
var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;}
compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1;if(compare&1||(!support.sortDetached&&b.compareDocumentPosition(a)===compare)){if(a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return-1;}
if(b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1;}
return sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0;}
return compare&4?-1:1;}:function(a,b){if(a===b){hasDuplicate=true;return 0;}
var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];if(!aup||!bup){return a===document?-1:b===document?1:aup?-1:bup?1:sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0;}else if(aup===bup){return siblingCheck(a,b);}
cur=a;while((cur=cur.parentNode)){ap.unshift(cur);}
cur=b;while((cur=cur.parentNode)){bp.unshift(cur);}
while(ap[i]===bp[i]){i++;}
return i?siblingCheck(ap[i],bp[i]):ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return document;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){if((elem.ownerDocument||elem)!==document){setDocument(elem);}
if(support.matchesSelector&&documentIsHTML&&!nonnativeSelectorCache[expr+" "]&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);if(ret||support.disconnectedMatch||elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){nonnativeSelectorCache(expr,true);}}
return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){if((context.ownerDocument||context)!==document){setDocument(context);}
return contains(context,elem);};Sizzle.attr=function(elem,name){if((elem.ownerDocument||elem)!==document){setDocument(elem);}
var fn=Expr.attrHandle[name.toLowerCase()],val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.escape=function(sel){return(sel+"").replace(rcssescape,fcssescape);};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while((elem=results[i++])){if(elem===results[i]){j=duplicates.push(i);}}
while(j--){results.splice(duplicates[j],1);}}
sortInput=null;return results;};getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){while((node=elem[i++])){ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){if(typeof elem.textContent==="string"){return elem.textContent;}else{for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}
return ret;};Expr=Sizzle.selectors={cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function(match){match[1]=match[1].replace(runescape,funescape);match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}
return match.slice(0,4);},"CHILD":function(match){match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){if(!match[3]){Sizzle.error(match[0]);}
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+((match[7]+match[8])||match[3]==="odd");}else if(match[3]){Sizzle.error(match[0]);}
return match;},"PSEUDO":function(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;}
if(match[3]){match[2]=match[4]||match[5]||"";}else if(unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,true))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}
return match.slice(0,3);}},filter:{"TAG":function(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},"ATTR":function(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}
if(!operator){return true;}
result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?function(elem){return!!elem.parentNode;}:function(elem,context,xml){var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=false;if(parent){if(simple){while(dir){node=elem;while((node=node[dir])){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}
start=dir=type==="only"&&!start&&"nextSibling";}
return true;}
start=[forward?parent.firstChild:parent.lastChild];if(forward&&useCache){node=parent;outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if(node.nodeType===1&&++diff&&node===elem){uniqueCache[type]=[dirruns,nodeIndex,diff];break;}}}else{if(useCache){node=elem;outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex;}
if(diff===false){while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){if(useCache){outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});uniqueCache[type]=[dirruns,diff];}
if(node===elem){break;}}}}}
diff-=last;return diff===first||(diff%first===0&&diff/first>=0);}};},"PSEUDO":function(pseudo,argument){var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);if(fn[expando]){return fn(argument);}
if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}
return fn;}},pseudos:{"not":markFunction(function(selector){var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;while(i--){if((elem=unmatched[i])){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);input[0]=null;return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||getText(elem)).indexOf(text)>-1;};}),"lang":markFunction(function(lang){if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}
lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if((elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),"target":function(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function(elem){return elem===docElem;},"focus":function(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},"enabled":createDisabledPseudo(false),"disabled":createDisabledPseudo(true),"checked":function(elem){var nodeName=elem.nodeName.toLowerCase();return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected);},"selected":function(elem){if(elem.parentNode){elem.parentNode.selectedIndex;}
return elem.selected===true;},"empty":function(elem){for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}
return true;},"parent":function(elem){return!Expr.pseudos["empty"](elem);},"header":function(elem){return rheader.test(elem.nodeName);},"input":function(elem){return rinputs.test(elem.nodeName);},"button":function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&((attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");},"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument>length?length:argument;for(;--i>=0;){matchIndexes.push(i);}
return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}
return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}
for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}
function setFilters(){}
setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}
soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){if(!matched||(match=rcomma.exec(soFar))){if(match){soFar=soFar.slice(match[0].length)||soFar;}
groups.push((tokens=[]));}
matched=false;if((match=rcombinators.exec(soFar))){matched=match.shift();tokens.push({value:matched,type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);}
for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}
if(!matched){break;}}
return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}
return selector;}
function addCombinator(matcher,combinator,base){var dir=combinator.dir,skip=combinator.next,key=skip||dir,checkNonElements=base&&key==="parentNode",doneName=done++;return combinator.first?function(elem,context,xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}
return false;}:function(elem,context,xml){var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName];if(xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});if(skip&&skip===elem.nodeName.toLowerCase()){elem=elem[dir]||elem;}else if((oldCache=uniqueCache[key])&&oldCache[0]===dirruns&&oldCache[1]===doneName){return(newCache[2]=oldCache[2]);}else{uniqueCache[key]=newCache;if((newCache[2]=matcher(elem,context,xml))){return true;}}}}}
return false;};}
function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}
return true;}:matchers[0];}
function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}
return results;}
function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if((elem=unmatched[i])){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}
return newUnmatched;}
function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}
if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}
return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?[]:results:matcherIn;if(matcher){matcher(matcherIn,matcherOut,context,xml);}
if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);i=temp.length;while(i--){if((elem=temp[i])){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}
if(seed){if(postFinder||preFilter){if(postFinder){temp=[];i=matcherOut.length;while(i--){if((elem=matcherOut[i])){temp.push((matcherIn[i]=elem));}}
postFinder(null,(matcherOut=[]),temp,xml);}
i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}
function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=(!leadingRelative&&(xml||context!==outermostContext))||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));checkContext=null;return ret;}];for(;i<len;i++){if((matcher=Expr.relative[tokens[i].type])){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);if(matcher[expando]){j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}
return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens((tokens=tokens.slice(j))),j<len&&toSelector(tokens));}
matchers.push(matcher);}}
return elementMatcher(matchers);}
function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,elems=seed||byElement&&Expr.find["TAG"]("*",outermost),dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1),len=elems.length;if(outermost){outermostContext=context===document||context||outermost;}
for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;if(!context&&elem.ownerDocument!==document){setDocument(elem);xml=!documentIsHTML;}
while((matcher=elementMatchers[j++])){if(matcher(elem,context||document,xml)){results.push(elem);break;}}
if(outermost){dirruns=dirrunsUnique;}}
if(bySet){if((elem=!matcher&&elem)){matchedCount--;}
if(seed){unmatched.push(elem);}}}
matchedCount+=i;if(bySet&&i!==matchedCount){j=0;while((matcher=setMatchers[j++])){matcher(unmatched,setMatched,context,xml);}
if(seed){if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}
setMatched=condense(setMatched);}
push.apply(results,setMatched);if(outermost&&!seed&&setMatched.length>0&&(matchedCount+setMatchers.length)>1){Sizzle.uniqueSort(results);}}
if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}
return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}
compile=Sizzle.compile=function(selector,match){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){if(!match){match=tokenize(selector);}
i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));cached.selector=selector;}
return cached;};select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize((selector=compiled.selector||selector));results=results||[];if(match.length===1){tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;}else if(compiled){context=context.parentNode;}
selector=selector.slice(tokens.shift().value.length);}
i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];if(Expr.relative[(type=token.type)]){break;}
if((find=Expr.find[type])){if((seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context))){tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}
break;}}}}
(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context);return results;};support.sortStable=expando.split("").sort(sortOrder).join("")===expando;support.detectDuplicates=!!hasDuplicate;setDocument();support.sortDetached=assert(function(el){return el.compareDocumentPosition(document.createElement("fieldset"))&1;});if(!assert(function(el){el.innerHTML="<a href='#'></a>";return el.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}
if(!support.attributes||!assert(function(el){el.innerHTML="<input/>";el.firstChild.setAttribute("value","");return el.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}
if(!assert(function(el){return el.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}
return Sizzle;})(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;jQuery.escapeSelector=Sizzle.escape;var dir=function(elem,dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break;}
matched.push(elem);}}
return matched;};var siblings=function(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n);}}
return matched;};var rneedsContext=jQuery.expr.match.needsContext;function nodeName(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();};var rsingleTag=(/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i);function winnow(elements,qualifier,not){if(isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not;});}
if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return(elem===qualifier)!==not;});}
if(typeof qualifier!=="string"){return jQuery.grep(elements,function(elem){return(indexOf.call(qualifier,elem)>-1)!==not;});}
return jQuery.filter(qualifier,elements,not);}
jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}
if(elems.length===1&&elem.nodeType===1){return jQuery.find.matchesSelector(elem,expr)?[elem]:[];}
return jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function(selector){var i,ret,len=this.length,self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}
ret=this.pushStack([]);for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}
return len>1?jQuery.uniqueSort(ret):ret;},filter:function(selector){return this.pushStack(winnow(this,selector||[],false));},not:function(selector){return this.pushStack(winnow(this,selector||[],true));},is:function(selector){return!!winnow(this,typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}});var rootjQuery,rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem;if(!selector){return this;}
root=root||rootjQuery;if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){match=[null,selector,null];}else{match=rquickExpr.exec(selector);}
if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){if(isFunction(this[match])){this[match](context[match]);}else{this.attr(match,context[match]);}}}
return this;}else{elem=document.getElementById(match[2]);if(elem){this[0]=elem;this.length=1;}
return this;}}else if(!context||context.jquery){return(context||root).find(selector);}else{return this.constructor(context).find(selector);}}else if(selector.nodeType){this[0]=selector;this.length=1;return this;}else if(isFunction(selector)){return root.ready!==undefined?root.ready(selector):selector(jQuery);}
return jQuery.makeArray(selector,this);};init.prototype=jQuery.fn;rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({has:function(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function(selectors,context){var cur,i=0,l=this.length,matched=[],targets=typeof selectors!=="string"&&jQuery(selectors);if(!rneedsContext.test(selectors)){for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){if(cur.nodeType<11&&(targets?targets.index(cur)>-1:cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}}
return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);},index:function(elem){if(!elem){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1;}
if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0]);}
return indexOf.call(this,elem.jquery?elem[0]:elem);},add:function(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}
return cur;}
jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function(elem){return dir(elem,"parentNode");},parentsUntil:function(elem,i,until){return dir(elem,"parentNode",until);},next:function(elem){return sibling(elem,"nextSibling");},prev:function(elem){return sibling(elem,"previousSibling");},nextAll:function(elem){return dir(elem,"nextSibling");},prevAll:function(elem){return dir(elem,"previousSibling");},nextUntil:function(elem,i,until){return dir(elem,"nextSibling",until);},prevUntil:function(elem,i,until){return dir(elem,"previousSibling",until);},siblings:function(elem){return siblings((elem.parentNode||{}).firstChild,elem);},children:function(elem){return siblings(elem.firstChild);},contents:function(elem){if(typeof elem.contentDocument!=="undefined"){return elem.contentDocument;}
if(nodeName(elem,"template")){elem=elem.content||elem;}
return jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}
if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched);}
if(this.length>1){if(!guaranteedUnique[name]){jQuery.uniqueSort(matched);}
if(rparentsprev.test(name)){matched.reverse();}}
return this.pushStack(matched);};});var rnothtmlwhite=(/[^\x20\t\r\n\f]+/g);function createOptions(options){var object={};jQuery.each(options.match(rnothtmlwhite)||[],function(_,flag){object[flag]=true;});return object;}
jQuery.Callbacks=function(options){options=typeof options==="string"?createOptions(options):jQuery.extend({},options);var
firing,memory,fired,locked,list=[],queue=[],firingIndex=-1,fire=function(){locked=locked||options.once;fired=firing=true;for(;queue.length;firingIndex=-1){memory=queue.shift();while(++firingIndex<list.length){if(list[firingIndex].apply(memory[0],memory[1])===false&&options.stopOnFalse){firingIndex=list.length;memory=false;}}}
if(!options.memory){memory=false;}
firing=false;if(locked){if(memory){list=[];}else{list="";}}},self={add:function(){if(list){if(memory&&!firing){firingIndex=list.length-1;queue.push(memory);}
(function add(args){jQuery.each(args,function(_,arg){if(isFunction(arg)){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&toType(arg)!=="string"){add(arg);}});})(arguments);if(memory&&!firing){fire();}}
return this;},remove:function(){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);if(index<=firingIndex){firingIndex--;}}});return this;},has:function(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0;},empty:function(){if(list){list=[];}
return this;},disable:function(){locked=queue=[];list=memory="";return this;},disabled:function(){return!list;},lock:function(){locked=queue=[];if(!memory&&!firing){list=memory="";}
return this;},locked:function(){return!!locked;},fireWith:function(context,args){if(!locked){args=args||[];args=[context,args.slice?args.slice():args];queue.push(args);if(!firing){fire();}}
return this;},fire:function(){self.fireWith(this,arguments);return this;},fired:function(){return!!fired;}};return self;};function Identity(v){return v;}
function Thrower(ex){throw ex;}
function adoptValue(value,resolve,reject,noValue){var method;try{if(value&&isFunction((method=value.promise))){method.call(value).done(resolve).fail(reject);}else if(value&&isFunction((method=value.then))){method.call(value,resolve,reject);}else{resolve.apply(undefined,[value].slice(noValue));}}catch(value){reject.apply(undefined,[value]);}}
jQuery.extend({Deferred:function(func){var tuples=[["notify","progress",jQuery.Callbacks("memory"),jQuery.Callbacks("memory"),2],["resolve","done",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),0,"resolved"],["reject","fail",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),1,"rejected"]],state="pending",promise={state:function(){return state;},always:function(){deferred.done(arguments).fail(arguments);return this;},"catch":function(fn){return promise.then(null,fn);},pipe:function(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=isFunction(fns[tuple[4]])&&fns[tuple[4]];deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&isFunction(returned.promise)){returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);}else{newDefer[tuple[0]+"With"](this,fn?[returned]:arguments);}});});fns=null;}).promise();},then:function(onFulfilled,onRejected,onProgress){var maxDepth=0;function resolve(depth,deferred,handler,special){return function(){var that=this,args=arguments,mightThrow=function(){var returned,then;if(depth<maxDepth){return;}
returned=handler.apply(that,args);if(returned===deferred.promise()){throw new TypeError("Thenable self-resolution");}
then=returned&&(typeof returned==="object"||typeof returned==="function")&&returned.then;if(isFunction(then)){if(special){then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special));}else{maxDepth++;then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special),resolve(maxDepth,deferred,Identity,deferred.notifyWith));}}else{if(handler!==Identity){that=undefined;args=[returned];}
(special||deferred.resolveWith)(that,args);}},process=special?mightThrow:function(){try{mightThrow();}catch(e){if(jQuery.Deferred.exceptionHook){jQuery.Deferred.exceptionHook(e,process.stackTrace);}
if(depth+1>=maxDepth){if(handler!==Thrower){that=undefined;args=[e];}
deferred.rejectWith(that,args);}}};if(depth){process();}else{if(jQuery.Deferred.getStackHook){process.stackTrace=jQuery.Deferred.getStackHook();}
window.setTimeout(process);}};}
return jQuery.Deferred(function(newDefer){tuples[0][3].add(resolve(0,newDefer,isFunction(onProgress)?onProgress:Identity,newDefer.notifyWith));tuples[1][3].add(resolve(0,newDefer,isFunction(onFulfilled)?onFulfilled:Identity));tuples[2][3].add(resolve(0,newDefer,isFunction(onRejected)?onRejected:Thrower));}).promise();},promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise;}},deferred={};jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[5];promise[tuple[1]]=list.add;if(stateString){list.add(function(){state=stateString;},tuples[3-i][2].disable,tuples[3-i][3].disable,tuples[0][2].lock,tuples[0][3].lock);}
list.add(tuple[3].fire);deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?undefined:this,arguments);return this;};deferred[tuple[0]+"With"]=list.fireWith;});promise.promise(deferred);if(func){func.call(deferred,deferred);}
return deferred;},when:function(singleValue){var
remaining=arguments.length,i=remaining,resolveContexts=Array(i),resolveValues=slice.call(arguments),master=jQuery.Deferred(),updateFunc=function(i){return function(value){resolveContexts[i]=this;resolveValues[i]=arguments.length>1?slice.call(arguments):value;if(!(--remaining)){master.resolveWith(resolveContexts,resolveValues);}};};if(remaining<=1){adoptValue(singleValue,master.done(updateFunc(i)).resolve,master.reject,!remaining);if(master.state()==="pending"||isFunction(resolveValues[i]&&resolveValues[i].then)){return master.then();}}
while(i--){adoptValue(resolveValues[i],updateFunc(i),master.reject);}
return master.promise();}});var rerrorNames=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;jQuery.Deferred.exceptionHook=function(error,stack){if(window.console&&window.console.warn&&error&&rerrorNames.test(error.name)){window.console.warn("jQuery.Deferred exception: "+error.message,error.stack,stack);}};jQuery.readyException=function(error){window.setTimeout(function(){throw error;});};var readyList=jQuery.Deferred();jQuery.fn.ready=function(fn){readyList.then(fn).catch(function(error){jQuery.readyException(error);});return this;};jQuery.extend({isReady:false,readyWait:1,ready:function(wait){if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}
jQuery.isReady=true;if(wait!==true&&--jQuery.readyWait>0){return;}
readyList.resolveWith(document,[jQuery]);}});jQuery.ready.then=readyList.then;function completed(){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);jQuery.ready();}
if(document.readyState==="complete"||(document.readyState!=="loading"&&!document.documentElement.doScroll)){window.setTimeout(jQuery.ready);}else{document.addEventListener("DOMContentLoaded",completed);window.addEventListener("load",completed);}
var access=function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null;if(toType(key)==="object"){chainable=true;for(i in key){access(elems,fn,i,key[i],true,emptyGet,raw);}}else if(value!==undefined){chainable=true;if(!isFunction(value)){raw=true;}
if(bulk){if(raw){fn.call(elems,value);fn=null;}else{bulk=fn;fn=function(elem,key,value){return bulk.call(jQuery(elem),value);};}}
if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}
if(chainable){return elems;}
if(bulk){return fn.call(elems);}
return len?fn(elems[0],key):emptyGet;};var rmsPrefix=/^-ms-/,rdashAlpha=/-([a-z])/g;function fcamelCase(all,letter){return letter.toUpperCase();}
function camelCase(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);}
var acceptData=function(owner){return owner.nodeType===1||owner.nodeType===9||!(+owner.nodeType);};function Data(){this.expando=jQuery.expando+Data.uid++;}
Data.uid=1;Data.prototype={cache:function(owner){var value=owner[this.expando];if(!value){value={};if(acceptData(owner)){if(owner.nodeType){owner[this.expando]=value;}else{Object.defineProperty(owner,this.expando,{value:value,configurable:true});}}}
return value;},set:function(owner,data,value){var prop,cache=this.cache(owner);if(typeof data==="string"){cache[camelCase(data)]=value;}else{for(prop in data){cache[camelCase(prop)]=data[prop];}}
return cache;},get:function(owner,key){return key===undefined?this.cache(owner):owner[this.expando]&&owner[this.expando][camelCase(key)];},access:function(owner,key,value){if(key===undefined||((key&&typeof key==="string")&&value===undefined)){return this.get(owner,key);}
this.set(owner,key,value);return value!==undefined?value:key;},remove:function(owner,key){var i,cache=owner[this.expando];if(cache===undefined){return;}
if(key!==undefined){if(Array.isArray(key)){key=key.map(camelCase);}else{key=camelCase(key);key=key in cache?[key]:(key.match(rnothtmlwhite)||[]);}
i=key.length;while(i--){delete cache[key[i]];}}
if(key===undefined||jQuery.isEmptyObject(cache)){if(owner.nodeType){owner[this.expando]=undefined;}else{delete owner[this.expando];}}},hasData:function(owner){var cache=owner[this.expando];return cache!==undefined&&!jQuery.isEmptyObject(cache);}};var dataPriv=new Data();var dataUser=new Data();var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;function getData(data){if(data==="true"){return true;}
if(data==="false"){return false;}
if(data==="null"){return null;}
if(data===+data+""){return+data;}
if(rbrace.test(data)){return JSON.parse(data);}
return data;}
function dataAttr(elem,key,data){var name;if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=getData(data);}catch(e){}
dataUser.set(elem,key,data);}else{data=undefined;}}
return data;}
jQuery.extend({hasData:function(elem){return dataUser.hasData(elem)||dataPriv.hasData(elem);},data:function(elem,name,data){return dataUser.access(elem,name,data);},removeData:function(elem,name){dataUser.remove(elem,name);},_data:function(elem,name,data){return dataPriv.access(elem,name,data);},_removeData:function(elem,name){dataPriv.remove(elem,name);}});jQuery.fn.extend({data:function(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;if(key===undefined){if(this.length){data=dataUser.get(elem);if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}
dataPriv.set(elem,"hasDataAttrs",true);}}
return data;}
if(typeof key==="object"){return this.each(function(){dataUser.set(this,key);});}
return access(this,function(value){var data;if(elem&&value===undefined){data=dataUser.get(elem,key);if(data!==undefined){return data;}
data=dataAttr(elem,key);if(data!==undefined){return data;}
return;}
this.each(function(){dataUser.set(this,key,value);});},null,value,arguments.length>1,null,true);},removeData:function(key){return this.each(function(){dataUser.remove(this,key);});}});jQuery.extend({queue:function(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=dataPriv.get(elem,type);if(data){if(!queue||Array.isArray(data)){queue=dataPriv.access(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}
return queue||[];}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type);};if(fn==="inprogress"){fn=queue.shift();startLength--;}
if(fn){if(type==="fx"){queue.unshift("inprogress");}
delete hooks.stop;fn.call(elem,next,hooks);}
if(!startLength&&hooks){hooks.empty.fire();}},_queueHooks:function(elem,type){var key=type+"queueHooks";return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type+"queue",key]);})});}});jQuery.fn.extend({queue:function(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}
if(arguments.length<setter){return jQuery.queue(this[0],type);}
return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function(type){return this.queue(type||"fx",[]);},promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(!(--count)){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}
type=type||"fx";while(i--){tmp=dataPriv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}
resolve();return defer.promise(obj);}});var pnum=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");var cssExpand=["Top","Right","Bottom","Left"];var documentElement=document.documentElement;var isAttached=function(elem){return jQuery.contains(elem.ownerDocument,elem);},composed={composed:true};if(documentElement.getRootNode){isAttached=function(elem){return jQuery.contains(elem.ownerDocument,elem)||elem.getRootNode(composed)===elem.ownerDocument;};}
var isHiddenWithinTree=function(elem,el){elem=el||elem;return elem.style.display==="none"||elem.style.display===""&&isAttached(elem)&&jQuery.css(elem,"display")==="none";};var swap=function(elem,options,callback,args){var ret,name,old={};for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
ret=callback.apply(elem,args||[]);for(name in options){elem.style[name]=old[name];}
return ret;};function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale,maxIterations=20,currentValue=tween?function(){return tween.cur();}:function(){return jQuery.css(elem,prop,"");},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),initialInUnit=elem.nodeType&&(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){initial=initial/2;unit=unit||initialInUnit[3];initialInUnit=+initial||1;while(maxIterations--){jQuery.style(elem,prop,initialInUnit+unit);if((1-scale)*(1-(scale=currentValue()/initial||0.5))<=0){maxIterations=0;}
initialInUnit=initialInUnit/scale;}
initialInUnit=initialInUnit*2;jQuery.style(elem,prop,initialInUnit+unit);valueParts=valueParts||[];}
if(valueParts){initialInUnit=+initialInUnit||+initial||0;adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2];if(tween){tween.unit=unit;tween.start=initialInUnit;tween.end=adjusted;}}
return adjusted;}
var defaultDisplayMap={};function getDefaultDisplay(elem){var temp,doc=elem.ownerDocument,nodeName=elem.nodeName,display=defaultDisplayMap[nodeName];if(display){return display;}
temp=doc.body.appendChild(doc.createElement(nodeName));display=jQuery.css(temp,"display");temp.parentNode.removeChild(temp);if(display==="none"){display="block";}
defaultDisplayMap[nodeName]=display;return display;}
function showHide(elements,show){var display,elem,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}
display=elem.style.display;if(show){if(display==="none"){values[index]=dataPriv.get(elem,"display")||null;if(!values[index]){elem.style.display="";}}
if(elem.style.display===""&&isHiddenWithinTree(elem)){values[index]=getDefaultDisplay(elem);}}else{if(display!=="none"){values[index]="none";dataPriv.set(elem,"display",display);}}}
for(index=0;index<length;index++){if(values[index]!=null){elements[index].style.display=values[index];}}
return elements;}
jQuery.fn.extend({show:function(){return showHide(this,true);},hide:function(){return showHide(this);},toggle:function(state){if(typeof state==="boolean"){return state?this.show():this.hide();}
return this.each(function(){if(isHiddenWithinTree(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});var rcheckableType=(/^(?:checkbox|radio)$/i);var rtagName=(/<([a-z][^\/\0>\x20\t\r\n\f]*)/i);var rscriptType=(/^$|^module$|\/(?:java|ecma)script/i);var wrapMap={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;function getAll(context,tag){var ret;if(typeof context.getElementsByTagName!=="undefined"){ret=context.getElementsByTagName(tag||"*");}else if(typeof context.querySelectorAll!=="undefined"){ret=context.querySelectorAll(tag||"*");}else{ret=[];}
if(tag===undefined||tag&&nodeName(context,tag)){return jQuery.merge([context],ret);}
return ret;}
function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){dataPriv.set(elems[i],"globalEval",!refElements||dataPriv.get(refElements[i],"globalEval"));}}
var rhtml=/<|&#?\w+;/;function buildFragment(elems,context,scripts,selection,ignored){var elem,tmp,tag,wrap,attached,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){if(toType(elem)==="object"){jQuery.merge(nodes,elem.nodeType?[elem]:elem);}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));}else{tmp=tmp||fragment.appendChild(context.createElement("div"));tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];j=wrap[0];while(j--){tmp=tmp.lastChild;}
jQuery.merge(nodes,tmp.childNodes);tmp=fragment.firstChild;tmp.textContent="";}}}
fragment.textContent="";i=0;while((elem=nodes[i++])){if(selection&&jQuery.inArray(elem,selection)>-1){if(ignored){ignored.push(elem);}
continue;}
attached=isAttached(elem);tmp=getAll(fragment.appendChild(elem),"script");if(attached){setGlobalEval(tmp);}
if(scripts){j=0;while((elem=tmp[j++])){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}
return fragment;}
(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;})();var
rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){return true;}
function returnFalse(){return false;}
function expectSync(elem,type){return(elem===safeActiveElement())===(type==="focus");}
function safeActiveElement(){try{return document.activeElement;}catch(err){}}
function on(elem,types,selector,data,fn,one){var origFn,type;if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;selector=undefined;}
for(type in types){on(elem,type,selector,data,types[type],one);}
return elem;}
if(data==null&&fn==null){fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){fn=data;data=undefined;}else{fn=data;data=selector;selector=undefined;}}
if(fn===false){fn=returnFalse;}else if(!fn){return elem;}
if(one===1){origFn=fn;fn=function(event){jQuery().off(event);return origFn.apply(this,arguments);};fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}
return elem.each(function(){jQuery.event.add(this,types,fn,data,selector);});}
jQuery.event={global:{},add:function(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem);if(!elemData){return;}
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}
if(selector){jQuery.find.matchesSelector(documentElement,selector);}
if(!handler.guid){handler.guid=jQuery.guid++;}
if(!(events=elemData.events)){events=elemData.events={};}
if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};}
types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;special=jQuery.event.special[type]||{};handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle);}}}
if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}
jQuery.event.global[type]=true;}},remove:function(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(!elemData||!(events=elemData.events)){return;}
types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}
continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}
if(special.remove){special.remove.call(elem,handleObj);}}}
if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}
delete events[type];}}
if(jQuery.isEmptyObject(events)){dataPriv.remove(elem,"handle events");}},dispatch:function(nativeEvent){var event=jQuery.event.fix(nativeEvent);var i,j,ret,matched,handleObj,handlerQueue,args=new Array(arguments.length),handlers=(dataPriv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};args[0]=event;for(i=1;i<arguments.length;i++){args[i]=arguments[i];}
event.delegateTarget=this;if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}
handlerQueue=jQuery.event.handlers.call(this,event,handlers);i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){if(!event.rnamespace||handleObj.namespace===false||event.rnamespace.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}
if(special.postDispatch){special.postDispatch.call(this,event);}
return event.result;},handlers:function(event,handlers){var i,handleObj,sel,matchedHandlers,matchedSelectors,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;if(delegateCount&&cur.nodeType&&!(event.type==="click"&&event.button>=1)){for(;cur!==this;cur=cur.parentNode||this){if(cur.nodeType===1&&!(event.type==="click"&&cur.disabled===true)){matchedHandlers=[];matchedSelectors={};for(i=0;i<delegateCount;i++){handleObj=handlers[i];sel=handleObj.selector+" ";if(matchedSelectors[sel]===undefined){matchedSelectors[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length;}
if(matchedSelectors[sel]){matchedHandlers.push(handleObj);}}
if(matchedHandlers.length){handlerQueue.push({elem:cur,handlers:matchedHandlers});}}}}
cur=this;if(delegateCount<handlers.length){handlerQueue.push({elem:cur,handlers:handlers.slice(delegateCount)});}
return handlerQueue;},addProp:function(name,hook){Object.defineProperty(jQuery.Event.prototype,name,{enumerable:true,configurable:true,get:isFunction(hook)?function(){if(this.originalEvent){return hook(this.originalEvent);}}:function(){if(this.originalEvent){return this.originalEvent[name];}},set:function(value){Object.defineProperty(this,name,{enumerable:true,configurable:true,writable:true,value:value});}});},fix:function(originalEvent){return originalEvent[jQuery.expando]?originalEvent:new jQuery.Event(originalEvent);},special:{load:{noBubble:true},click:{setup:function(data){var el=this||data;if(rcheckableType.test(el.type)&&el.click&&nodeName(el,"input")){leverageNative(el,"click",returnTrue);}
return false;},trigger:function(data){var el=this||data;if(rcheckableType.test(el.type)&&el.click&&nodeName(el,"input")){leverageNative(el,"click");}
return true;},_default:function(event){var target=event.target;return rcheckableType.test(target.type)&&target.click&&nodeName(target,"input")&&dataPriv.get(target,"click")||nodeName(target,"a");}},beforeunload:{postDispatch:function(event){if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}}};function leverageNative(el,type,expectSync){if(!expectSync){if(dataPriv.get(el,type)===undefined){jQuery.event.add(el,type,returnTrue);}
return;}
dataPriv.set(el,type,false);jQuery.event.add(el,type,{namespace:false,handler:function(event){var notAsync,result,saved=dataPriv.get(this,type);if((event.isTrigger&1)&&this[type]){if(!saved.length){saved=slice.call(arguments);dataPriv.set(this,type,saved);notAsync=expectSync(this,type);this[type]();result=dataPriv.get(this,type);if(saved!==result||notAsync){dataPriv.set(this,type,false);}else{result={};}
if(saved!==result){event.stopImmediatePropagation();event.preventDefault();return result.value;}}else if((jQuery.event.special[type]||{}).delegateType){event.stopPropagation();}}else if(saved.length){dataPriv.set(this,type,{value:jQuery.event.trigger(jQuery.extend(saved[0],jQuery.Event.prototype),saved.slice(1),this)});event.stopImmediatePropagation();}}});}
jQuery.removeEvent=function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle);}};jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}
if(src&&src.type){this.originalEvent=src;this.type=src.type;this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&src.returnValue===false?returnTrue:returnFalse;this.target=(src.target&&src.target.nodeType===3)?src.target.parentNode:src.target;this.currentTarget=src.currentTarget;this.relatedTarget=src.relatedTarget;}else{this.type=src;}
if(props){jQuery.extend(this,props);}
this.timeStamp=src&&src.timeStamp||Date.now();this[jQuery.expando]=true;};jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,isSimulated:false,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e&&!this.isSimulated){e.preventDefault();}},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopPropagation();}},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopImmediatePropagation();}
this.stopPropagation();}};jQuery.each({altKey:true,bubbles:true,cancelable:true,changedTouches:true,ctrlKey:true,detail:true,eventPhase:true,metaKey:true,pageX:true,pageY:true,shiftKey:true,view:true,"char":true,code:true,charCode:true,key:true,keyCode:true,button:true,buttons:true,clientX:true,clientY:true,offsetX:true,offsetY:true,pointerId:true,pointerType:true,screenX:true,screenY:true,targetTouches:true,toElement:true,touches:true,which:function(event){var button=event.button;if(event.which==null&&rkeyEvent.test(event.type)){return event.charCode!=null?event.charCode:event.keyCode;}
if(!event.which&&button!==undefined&&rmouseEvent.test(event.type)){if(button&1){return 1;}
if(button&2){return 3;}
if(button&4){return 2;}
return 0;}
return event.which;}},jQuery.event.addProp);jQuery.each({focus:"focusin",blur:"focusout"},function(type,delegateType){jQuery.event.special[type]={setup:function(){leverageNative(this,type,expectSync);return false;},trigger:function(){leverageNative(this,type);return true;},delegateType:delegateType};});jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;if(!related||(related!==target&&!jQuery.contains(target,related))){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}
return ret;}};});jQuery.fn.extend({on:function(types,selector,data,fn){return on(this,types,selector,data,fn);},one:function(types,selector,data,fn){return on(this,types,selector,data,fn,1);},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}
if(typeof types==="object"){for(type in types){this.off(type,selector,types[type]);}
return this;}
if(selector===false||typeof selector==="function"){fn=selector;selector=undefined;}
if(fn===false){fn=returnFalse;}
return this.each(function(){jQuery.event.remove(this,types,fn,selector);});}});var
rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,rnoInnerhtml=/<script|<style|<link/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function manipulationTarget(elem,content){if(nodeName(elem,"table")&&nodeName(content.nodeType!==11?content:content.firstChild,"tr")){return jQuery(elem).children("tbody")[0]||elem;}
return elem;}
function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem;}
function restoreScript(elem){if((elem.type||"").slice(0,5)==="true/"){elem.type=elem.type.slice(5);}else{elem.removeAttribute("type");}
return elem;}
function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(dest.nodeType!==1){return;}
if(dataPriv.hasData(src)){pdataOld=dataPriv.access(src);pdataCur=dataPriv.set(dest,pdataOld);events=pdataOld.events;if(events){delete pdataCur.handle;pdataCur.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}}
if(dataUser.hasData(src)){udataOld=dataUser.access(src);udataCur=jQuery.extend({},udataOld);dataUser.set(dest,udataCur);}}
function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked;}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}
function domManip(collection,args,callback,ignored){args=concat.apply([],args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],valueIsFunction=isFunction(value);if(valueIsFunction||(l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value))){return collection.each(function(index){var self=collection.eq(index);if(valueIsFunction){args[0]=value.call(this,index,self.html());}
domManip(self,args,callback,ignored);});}
if(l){fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}
if(first||ignored){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);if(hasScripts){jQuery.merge(scripts,getAll(node,"script"));}}
callback.call(collection[i],node,i);}
if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;jQuery.map(scripts,restoreScript);for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!dataPriv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src&&(node.type||"").toLowerCase()!=="module"){if(jQuery._evalUrl&&!node.noModule){jQuery._evalUrl(node.src,{nonce:node.nonce||node.getAttribute("nonce")});}}else{DOMEval(node.textContent.replace(rcleanScript,""),node,doc);}}}}}}
return collection;}
function remove(elem,selector,keepData){var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node=nodes[i])!=null;i++){if(!keepData&&node.nodeType===1){jQuery.cleanData(getAll(node));}
if(node.parentNode){if(keepData&&isAttached(node)){setGlobalEval(getAll(node,"script"));}
node.parentNode.removeChild(node);}}
return elem;}
jQuery.extend({htmlPrefilter:function(html){return html.replace(rxhtmlTag,"<$1></$2>");},clone:function(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=isAttached(elem);if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i]);}}
if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i]);}}else{cloneCopyEvent(elem,clone);}}
destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}
return clone;},cleanData:function(elems){var data,elem,type,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(acceptData(elem)){if((data=elem[dataPriv.expando])){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);}else{jQuery.removeEvent(elem,type,data.handle);}}}
elem[dataPriv.expando]=undefined;}
if(elem[dataUser.expando]){elem[dataUser.expando]=undefined;}}}}});jQuery.fn.extend({detach:function(selector){return remove(this,selector,true);},remove:function(selector){return remove(this,selector);},text:function(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value;}});},null,value,arguments.length);},append:function(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},empty:function(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.textContent="";}}
return this;},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML;}
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;i<l;i++){elem=this[i]||{};if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}
elem=0;}catch(e){}}
if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function(){var ignored=[];return domManip(this,arguments,function(elem){var parent=this.parentNode;if(jQuery.inArray(this,ignored)<0){jQuery.cleanData(getAll(this));if(parent){parent.replaceChild(elem,this);}}},ignored);}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);push.apply(ret,elems.get());}
return this.pushStack(ret);};});var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles=function(elem){var view=elem.ownerDocument.defaultView;if(!view||!view.opener){view=window;}
return view.getComputedStyle(elem);};var rboxStyle=new RegExp(cssExpand.join("|"),"i");(function(){function computeStyleTests(){if(!div){return;}
container.style.cssText="position:absolute;left:-11111px;width:60px;"+"margin-top:1px;padding:0;border:0";div.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;"+"margin:auto;border:1px;padding:1px;"+"width:60%;top:1%";documentElement.appendChild(container).appendChild(div);var divStyle=window.getComputedStyle(div);pixelPositionVal=divStyle.top!=="1%";reliableMarginLeftVal=roundPixelMeasures(divStyle.marginLeft)===12;div.style.right="60%";pixelBoxStylesVal=roundPixelMeasures(divStyle.right)===36;boxSizingReliableVal=roundPixelMeasures(divStyle.width)===36;div.style.position="absolute";scrollboxSizeVal=roundPixelMeasures(div.offsetWidth/3)===12;documentElement.removeChild(container);div=null;}
function roundPixelMeasures(measure){return Math.round(parseFloat(measure));}
var pixelPositionVal,boxSizingReliableVal,scrollboxSizeVal,pixelBoxStylesVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div");if(!div.style){return;}
div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";jQuery.extend(support,{boxSizingReliable:function(){computeStyleTests();return boxSizingReliableVal;},pixelBoxStyles:function(){computeStyleTests();return pixelBoxStylesVal;},pixelPosition:function(){computeStyleTests();return pixelPositionVal;},reliableMarginLeft:function(){computeStyleTests();return reliableMarginLeftVal;},scrollboxSize:function(){computeStyleTests();return scrollboxSizeVal;}});})();function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);if(computed){ret=computed.getPropertyValue(name)||computed[name];if(ret===""&&!isAttached(elem)){ret=jQuery.style(elem,name);}
if(!support.pixelBoxStyles()&&rnumnonpx.test(ret)&&rboxStyle.test(name)){width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}
return ret!==undefined?ret+"":ret;}
function addGetHookIf(conditionFn,hookFn){return{get:function(){if(conditionFn()){delete this.get;return;}
return(this.get=hookFn).apply(this,arguments);}};}
var cssPrefixes=["Webkit","Moz","ms"],emptyStyle=document.createElement("div").style,vendorProps={};function vendorPropName(name){var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in emptyStyle){return name;}}}
function finalPropName(name){var final=jQuery.cssProps[name]||vendorProps[name];if(final){return final;}
if(name in emptyStyle){return name;}
return vendorProps[name]=vendorPropName(name)||name;}
var
rdisplayswap=/^(none|table(?!-c[ea]).+)/,rcustomProp=/^--/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"};function setPositiveNumber(elem,value,subtract){var matches=rcssNum.exec(value);return matches?Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):value;}
function boxModelAdjustment(elem,dimension,box,isBorderBox,styles,computedVal){var i=dimension==="width"?1:0,extra=0,delta=0;if(box===(isBorderBox?"border":"content")){return 0;}
for(;i<4;i+=2){if(box==="margin"){delta+=jQuery.css(elem,box+cssExpand[i],true,styles);}
if(!isBorderBox){delta+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);if(box!=="padding"){delta+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}else{extra+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else{if(box==="content"){delta-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}
if(box!=="margin"){delta-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}
if(!isBorderBox&&computedVal>=0){delta+=Math.max(0,Math.ceil(elem["offset"+dimension[0].toUpperCase()+dimension.slice(1)]-
computedVal-
delta-
extra-
0.5))||0;}
return delta;}
function getWidthOrHeight(elem,dimension,extra){var styles=getStyles(elem),boxSizingNeeded=!support.boxSizingReliable()||extra,isBorderBox=boxSizingNeeded&&jQuery.css(elem,"boxSizing",false,styles)==="border-box",valueIsBorderBox=isBorderBox,val=curCSS(elem,dimension,styles),offsetProp="offset"+dimension[0].toUpperCase()+dimension.slice(1);if(rnumnonpx.test(val)){if(!extra){return val;}
val="auto";}
if((!support.boxSizingReliable()&&isBorderBox||val==="auto"||!parseFloat(val)&&jQuery.css(elem,"display",false,styles)==="inline")&&elem.getClientRects().length){isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box";valueIsBorderBox=offsetProp in elem;if(valueIsBorderBox){val=elem[offsetProp];}}
val=parseFloat(val)||0;return(val+
boxModelAdjustment(elem,dimension,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles,val))+"px";}
jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},cssNumber:{"animationIterationCount":true,"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"gridArea":true,"gridColumn":true,"gridColumnEnd":true,"gridColumnStart":true,"gridRow":true,"gridRowEnd":true,"gridRowStart":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},cssProps:{},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}
var ret,type,hooks,origName=camelCase(name),isCustomProp=rcustomProp.test(name),style=elem.style;if(!isCustomProp){name=finalPropName(origName);}
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(value!==undefined){type=typeof value;if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){value=adjustCSS(elem,name,ret);type="number";}
if(value==null||value!==value){return;}
if(type==="number"&&!isCustomProp){value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");}
if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}
if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){if(isCustomProp){style.setProperty(name,value);}else{style[name]=value;}}}else{if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}
return style[name];}},css:function(elem,name,extra,styles){var val,num,hooks,origName=camelCase(name),isCustomProp=rcustomProp.test(name);if(!isCustomProp){name=finalPropName(origName);}
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}
if(val===undefined){val=curCSS(elem,name,styles);}
if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}
if(extra===""||extra){num=parseFloat(val);return extra===true||isFinite(num)?num||0:val;}
return val;}});jQuery.each(["height","width"],function(i,dimension){jQuery.cssHooks[dimension]={get:function(elem,computed,extra){if(computed){return rdisplayswap.test(jQuery.css(elem,"display"))&&(!elem.getClientRects().length||!elem.getBoundingClientRect().width)?swap(elem,cssShow,function(){return getWidthOrHeight(elem,dimension,extra);}):getWidthOrHeight(elem,dimension,extra);}},set:function(elem,value,extra){var matches,styles=getStyles(elem),scrollboxSizeBuggy=!support.scrollboxSize()&&styles.position==="absolute",boxSizingNeeded=scrollboxSizeBuggy||extra,isBorderBox=boxSizingNeeded&&jQuery.css(elem,"boxSizing",false,styles)==="border-box",subtract=extra?boxModelAdjustment(elem,dimension,extra,isBorderBox,styles):0;if(isBorderBox&&scrollboxSizeBuggy){subtract-=Math.ceil(elem["offset"+dimension[0].toUpperCase()+dimension.slice(1)]-
parseFloat(styles[dimension])-
boxModelAdjustment(elem,dimension,"border",false,styles)-
0.5);}
if(subtract&&(matches=rcssNum.exec(value))&&(matches[3]||"px")!=="px"){elem.style[dimension]=value;value=jQuery.css(elem,dimension);}
return setPositiveNumber(elem,value,subtract);}};});jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed){return(parseFloat(curCSS(elem,"marginLeft"))||elem.getBoundingClientRect().left-
swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left;}))+"px";}});jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i=0,expanded={},parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}
return expanded;}};if(prefix!=="margin"){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(Array.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}
return map;}
return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}
jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||jQuery.easing._default;this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}
this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}
if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}
return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function(tween){var result;if(tween.elem.nodeType!==1||tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){return tween.elem[tween.prop];}
result=jQuery.css(tween.elem,tween.prop,"");return!result||result==="auto"?0:result;},set:function(tween){if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.nodeType===1&&(jQuery.cssHooks[tween.prop]||tween.elem.style[finalPropName(tween.prop)]!=null)){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function(p){return p;},swing:function(p){return 0.5-Math.cos(p*Math.PI)/2;},_default:"swing"};jQuery.fx=Tween.prototype.init;jQuery.fx.step={};var
fxNow,inProgress,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/;function schedule(){if(inProgress){if(document.hidden===false&&window.requestAnimationFrame){window.requestAnimationFrame(schedule);}else{window.setTimeout(schedule,jQuery.fx.interval);}
jQuery.fx.tick();}}
function createFxNow(){window.setTimeout(function(){fxNow=undefined;});return(fxNow=Date.now());}
function genFx(type,includeWidth){var which,i=0,attrs={height:type};includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}
if(includeWidth){attrs.opacity=attrs.width=type;}
return attrs;}
function createTween(value,prop,animation){var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if((tween=collection[index].call(animation,prop,value))){return tween;}}}
function defaultPrefilter(elem,props,opts){var prop,value,toggle,hooks,oldfire,propTween,restoreDisplay,display,isBox="width"in props||"height"in props,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHiddenWithinTree(elem),dataShow=dataPriv.get(elem,"fxshow");if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}
hooks.unqueued++;anim.always(function(){anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}
for(prop in props){value=props[prop];if(rfxtypes.test(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;}else{continue;}}
orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);}}
propTween=!jQuery.isEmptyObject(props);if(!propTween&&jQuery.isEmptyObject(orig)){return;}
if(isBox&&elem.nodeType===1){opts.overflow=[style.overflow,style.overflowX,style.overflowY];restoreDisplay=dataShow&&dataShow.display;if(restoreDisplay==null){restoreDisplay=dataPriv.get(elem,"display");}
display=jQuery.css(elem,"display");if(display==="none"){if(restoreDisplay){display=restoreDisplay;}else{showHide([elem],true);restoreDisplay=elem.style.display||restoreDisplay;display=jQuery.css(elem,"display");showHide([elem]);}}
if(display==="inline"||display==="inline-block"&&restoreDisplay!=null){if(jQuery.css(elem,"float")==="none"){if(!propTween){anim.done(function(){style.display=restoreDisplay;});if(restoreDisplay==null){display=style.display;restoreDisplay=display==="none"?"":display;}}
style.display="inline-block";}}}
if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}
propTween=false;for(prop in orig){if(!propTween){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=dataPriv.access(elem,"fxshow",{display:restoreDisplay});}
if(toggle){dataShow.hidden=!hidden;}
if(hidden){showHide([elem],true);}
anim.done(function(){if(!hidden){showHide([elem]);}
dataPriv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});}
propTween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=propTween.start;if(hidden){propTween.end=propTween.start;propTween.start=0;}}}}
function propFilter(props,specialEasing){var index,name,easing,value,hooks;for(index in props){name=camelCase(index);easing=specialEasing[name];value=props[index];if(Array.isArray(value)){easing=value[1];value=props[index]=value[0];}
if(index!==name){props[name]=value;delete props[index];}
hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}
function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){delete tick.elem;}),tick=function(){if(stopped){return false;}
var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}
deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}
if(!length){deferred.notifyWith(elem,[animation,1,0]);}
deferred.resolveWith(elem,[animation]);return false;},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function(gotoEnd){var index=0,length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}
stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}
if(gotoEnd){deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}
return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){if(isFunction(result.stop)){jQuery._queueHooks(animation.elem,animation.opts.queue).stop=result.stop.bind(result);}
return result;}}
jQuery.map(props,createTween,animation);if(isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}
animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));return animation;}
jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween;}]},tweener:function(props,callback){if(isFunction(props)){callback=props;props=["*"];}else{props=props.match(rnothtmlwhite);}
var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];Animation.tweeners[prop]=Animation.tweeners[prop]||[];Animation.tweeners[prop].unshift(callback);}},prefilters:[defaultPrefilter],prefilter:function(callback,prepend){if(prepend){Animation.prefilters.unshift(callback);}else{Animation.prefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!isFunction(easing)&&easing};if(jQuery.fx.off){opt.duration=0;}else{if(typeof opt.duration!=="number"){if(opt.duration in jQuery.fx.speeds){opt.duration=jQuery.fx.speeds[opt.duration];}else{opt.duration=jQuery.fx.speeds._default;}}}
if(opt.queue==null||opt.queue===true){opt.queue="fx";}
opt.old=opt.complete;opt.complete=function(){if(isFunction(opt.old)){opt.old.call(this);}
if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){return this.filter(isHiddenWithinTree).css("opacity",0).show().end().animate({opacity:to},speed,easing,callback);},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){var anim=Animation(this,jQuery.extend({},prop),optall);if(empty||dataPriv.get(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}
if(clearQueue&&type!==false){this.queue(type||"fx",[]);}
return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}
for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}
if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function(type){if(type!==false){type=type||"fx";}
return this.each(function(){var index,data=dataPriv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;data.finish=true;jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}
for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}
for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}
delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=Date.now();for(;i<timers.length;i++){timer=timers[i];if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}
if(!timers.length){jQuery.fx.stop();}
fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);jQuery.fx.start();};jQuery.fx.interval=13;jQuery.fx.start=function(){if(inProgress){return;}
inProgress=true;schedule();};jQuery.fx.stop=function(){inProgress=null;};jQuery.fx.speeds={slow:600,fast:200,_default:400};jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox";support.checkOn=input.value!=="";support.optSelected=opt.selected;input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t";})();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function(elem,name,value){var ret,hooks,nType=elem.nodeType;if(nType===3||nType===8||nType===2){return;}
if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);}
if(nType!==1||!jQuery.isXMLDoc(elem)){hooks=jQuery.attrHooks[name.toLowerCase()]||(jQuery.expr.match.bool.test(name)?boolHook:undefined);}
if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}
if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}
elem.setAttribute(name,value+"");return value;}
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}
ret=jQuery.find.attr(elem,name);return ret==null?undefined:ret;},attrHooks:{type:{set:function(elem,value){if(!support.radioValue&&value==="radio"&&nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}
return value;}}}},removeAttr:function(elem,value){var name,i=0,attrNames=value&&value.match(rnothtmlwhite);if(attrNames&&elem.nodeType===1){while((name=attrNames[i++])){elem.removeAttribute(name);}}}});boolHook={set:function(elem,value,name){if(value===false){jQuery.removeAttr(elem,name);}else{elem.setAttribute(name,name);}
return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle,lowercaseName=name.toLowerCase();if(!isXML){handle=attrHandle[lowercaseName];attrHandle[lowercaseName]=ret;ret=getter(elem,name,isXML)!=null?lowercaseName:null;attrHandle[lowercaseName]=handle;}
return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function(name){return this.each(function(){delete this[jQuery.propFix[name]||name];});}});jQuery.extend({prop:function(elem,name,value){var ret,hooks,nType=elem.nodeType;if(nType===3||nType===8||nType===2){return;}
if(nType!==1||!jQuery.isXMLDoc(elem)){name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}
if(value!==undefined){if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}
return(elem[name]=value);}
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}
return elem[name];},propHooks:{tabIndex:{get:function(elem){var tabindex=jQuery.find.attr(elem,"tabindex");if(tabindex){return parseInt(tabindex,10);}
if(rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href){return 0;}
return-1;}}},propFix:{"for":"htmlFor","class":"className"}});if(!support.optSelected){jQuery.propHooks.selected={get:function(elem){var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex;}
return null;},set:function(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}};}
jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});function stripAndCollapse(value){var tokens=value.match(rnothtmlwhite)||[];return tokens.join(" ");}
function getClass(elem){return elem.getAttribute&&elem.getAttribute("class")||"";}
function classesToArray(value){if(Array.isArray(value)){return value;}
if(typeof value==="string"){return value.match(rnothtmlwhite)||[];}
return[];}
jQuery.fn.extend({addClass:function(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)));});}
classes=classesToArray(value);if(classes.length){while((elem=this[i++])){curValue=getClass(elem);cur=elem.nodeType===1&&(" "+stripAndCollapse(curValue)+" ");if(cur){j=0;while((clazz=classes[j++])){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}
finalValue=stripAndCollapse(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}
return this;},removeClass:function(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)));});}
if(!arguments.length){return this.attr("class","");}
classes=classesToArray(value);if(classes.length){while((elem=this[i++])){curValue=getClass(elem);cur=elem.nodeType===1&&(" "+stripAndCollapse(curValue)+" ");if(cur){j=0;while((clazz=classes[j++])){while(cur.indexOf(" "+clazz+" ")>-1){cur=cur.replace(" "+clazz+" "," ");}}
finalValue=stripAndCollapse(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}
return this;},toggleClass:function(value,stateVal){var type=typeof value,isValidValue=type==="string"||Array.isArray(value);if(typeof stateVal==="boolean"&&isValidValue){return stateVal?this.addClass(value):this.removeClass(value);}
if(isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal);});}
return this.each(function(){var className,i,self,classNames;if(isValidValue){i=0;self=jQuery(this);classNames=classesToArray(value);while((className=classNames[i++])){if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}}else if(value===undefined||type==="boolean"){className=getClass(this);if(className){dataPriv.set(this,"__className__",className);}
if(this.setAttribute){this.setAttribute("class",className||value===false?"":dataPriv.get(this,"__className__")||"");}}});},hasClass:function(selector){var className,elem,i=0;className=" "+selector+" ";while((elem=this[i++])){if(elem.nodeType===1&&(" "+stripAndCollapse(getClass(elem))+" ").indexOf(className)>-1){return true;}}
return false;}});var rreturn=/\r/g;jQuery.fn.extend({val:function(value){var hooks,ret,valueIsFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}
ret=elem.value;if(typeof ret==="string"){return ret.replace(rreturn,"");}
return ret==null?"":ret;}
return;}
valueIsFunction=isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}
if(valueIsFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}
if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(Array.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}
hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:stripAndCollapse(jQuery.text(elem));}},select:{get:function(elem){var value,option,i,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one",values=one?null:[],max=one?index+1:options.length;if(index<0){i=max;}else{i=one?index:0;}
for(;i<max;i++){option=options[i];if((option.selected||i===index)&&!option.disabled&&(!option.parentNode.disabled||!nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();if(one){return value;}
values.push(value);}}
return values;},set:function(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];if(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){optionSet=true;}}
if(!optionSet){elem.selectedIndex=-1;}
return values;}}}});jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,value){if(Array.isArray(value)){return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1);}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});support.focusin="onfocusin"in window;var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,stopPropagationCallback=function(e){e.stopPropagation();};jQuery.extend(jQuery.event,{trigger:function(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,lastElement,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=lastElement=tmp=elem=elem||document;if(elem.nodeType===3||elem.nodeType===8){return;}
if(rfocusMorph.test(type+jQuery.event.triggered)){return;}
if(type.indexOf(".")>-1){namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}
ontype=type.indexOf(":")<0&&"on"+type;event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event);event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;event.result=undefined;if(!event.target){event.target=elem;}
data=data==null?[event]:jQuery.makeArray(data,[event]);special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}
if(!onlyHandlers&&!special.noBubble&&!isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}
for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}
if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}
i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){lastElement=cur;event.type=i>1?bubbleType:special.bindType||type;handle=(dataPriv.get(cur,"events")||{})[event.type]&&dataPriv.get(cur,"handle");if(handle){handle.apply(cur,data);}
handle=ontype&&cur[ontype];if(handle&&handle.apply&&acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}
event.type=type;if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&acceptData(elem)){if(ontype&&isFunction(elem[type])&&!isWindow(elem)){tmp=elem[ontype];if(tmp){elem[ontype]=null;}
jQuery.event.triggered=type;if(event.isPropagationStopped()){lastElement.addEventListener(type,stopPropagationCallback);}
elem[type]();if(event.isPropagationStopped()){lastElement.removeEventListener(type,stopPropagationCallback);}
jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}
return event.result;},simulate:function(type,elem,event){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true});jQuery.event.trigger(e,null,elem);}});jQuery.fn.extend({trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});if(!support.focusin){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));};jQuery.event.special[fix]={setup:function(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}
dataPriv.access(doc,fix,(attaches||0)+1);},teardown:function(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);dataPriv.remove(doc,fix);}else{dataPriv.access(doc,fix,attaches);}}};});}
var location=window.location;var nonce=Date.now();var rquery=(/\?/);jQuery.parseXML=function(data){var xml;if(!data||typeof data!=="string"){return null;}
try{xml=(new window.DOMParser()).parseFromString(data,"text/xml");}catch(e){xml=undefined;}
if(!xml||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}
return xml;};var
rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(Array.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v);}else{buildParams(prefix+"["+(typeof v==="object"&&v!=null?i:"")+"]",v,traditional,add);}});}else if(!traditional&&toType(obj)==="object"){for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{add(prefix,obj);}}
jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,valueOrFunction){var value=isFunction(valueOrFunction)?valueOrFunction():valueOrFunction;s[s.length]=encodeURIComponent(key)+"="+
encodeURIComponent(value==null?"":value);};if(a==null){return"";}
if(Array.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){jQuery.each(a,function(){add(this.name,this.value);});}else{for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}
return s.join("&");};jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();if(val==null){return null;}
if(Array.isArray(val)){return jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};});}
return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});var
r20=/%20/g,rhash=/#.*$/,rantiCache=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,prefilters={},transports={},allTypes="*/".concat("*"),originAnchor=document.createElement("a");originAnchor.href=location.href;function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}
var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnothtmlwhite)||[];if(isFunction(func)){while((dataType=dataTypes[i++])){if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=(structure===transports);function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}
return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}
function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key];}}
if(deep){jQuery.extend(true,target,deep);}
return target;}
function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}
if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}
if(!firstDataType){firstDataType=type;}}
finalDataType=finalDataType||firstDataType;}
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}
return responses[finalDataType];}}
function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},dataTypes=s.dataTypes.slice();if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}
current=dataTypes.shift();while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}
if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}
prev=current;current=dataTypes.shift();if(current){if(current==="*"){current=prev;}else if(prev!=="*"&&prev!==current){conv=converters[prev+" "+current]||converters["* "+current];if(!conv){for(conv2 in converters){tmp=conv2.split(" ");if(tmp[1]===current){conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){if(conv===true){conv=converters[conv2];}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}
break;}}}}
if(conv!==true){if(conv&&s.throws){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}
return{state:"success",data:response};}
jQuery.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":JSON.parse,"text xml":jQuery.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(target,settings){return settings?ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;url=undefined;}
options=options||{};var transport,cacheURL,responseHeadersString,responseHeaders,timeoutTimer,urlAnchor,completed,fireGlobals,i,uncached,s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={},strAbort="canceled",jqXHR={readyState:0,getResponseHeader:function(key){var match;if(completed){if(!responseHeaders){responseHeaders={};while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()+" "]=(responseHeaders[match[1].toLowerCase()+" "]||[]).concat(match[2]);}}
match=responseHeaders[key.toLowerCase()+" "];}
return match==null?null:match.join(", ");},getAllResponseHeaders:function(){return completed?responseHeadersString:null;},setRequestHeader:function(name,value){if(completed==null){name=requestHeadersNames[name.toLowerCase()]=requestHeadersNames[name.toLowerCase()]||name;requestHeaders[name]=value;}
return this;},overrideMimeType:function(type){if(completed==null){s.mimeType=type;}
return this;},statusCode:function(map){var code;if(map){if(completed){jqXHR.always(map[jqXHR.status]);}else{for(code in map){statusCode[code]=[statusCode[code],map[code]];}}}
return this;},abort:function(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}
done(0,finalText);return this;}};deferred.promise(jqXHR);s.url=((url||s.url||location.href)+"").replace(rprotocol,location.protocol+"//");s.type=options.method||options.type||s.method||s.type;s.dataTypes=(s.dataType||"*").toLowerCase().match(rnothtmlwhite)||[""];if(s.crossDomain==null){urlAnchor=document.createElement("a");try{urlAnchor.href=s.url;urlAnchor.href=urlAnchor.href;s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==urlAnchor.protocol+"//"+urlAnchor.host;}catch(e){s.crossDomain=true;}}
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);if(completed){return jqXHR;}
fireGlobals=jQuery.event&&s.global;if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}
s.type=s.type.toUpperCase();s.hasContent=!rnoContent.test(s.type);cacheURL=s.url.replace(rhash,"");if(!s.hasContent){uncached=s.url.slice(cacheURL.length);if(s.data&&(s.processData||typeof s.data==="string")){cacheURL+=(rquery.test(cacheURL)?"&":"?")+s.data;delete s.data;}
if(s.cache===false){cacheURL=cacheURL.replace(rantiCache,"$1");uncached=(rquery.test(cacheURL)?"&":"?")+"_="+(nonce++)+uncached;}
s.url=cacheURL+uncached;}else if(s.data&&s.processData&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0){s.data=s.data.replace(r20,"+");}
if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}
if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+
(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||completed)){return jqXHR.abort();}
strAbort="abort";completeDeferred.add(s.complete);jqXHR.done(s.success);jqXHR.fail(s.error);transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}
if(completed){return jqXHR;}
if(s.async&&s.timeout>0){timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}
try{completed=false;transport.send(requestHeaders,done);}catch(e){if(completed){throw e;}
done(-1,e);}}
function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;if(completed){return;}
completed=true;if(timeoutTimer){window.clearTimeout(timeoutTimer);}
transport=undefined;responseHeadersString=headers||"";jqXHR.readyState=status>0?4:0;isSuccess=status>=200&&status<300||status===304;if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}
response=ajaxConvert(s,response,jqXHR,isSuccess);if(isSuccess){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}
modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}
if(status===204||s.type==="HEAD"){statusText="nocontent";}else if(status===304){statusText="notmodified";}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}
jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}
jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop");}}}
return jqXHR;},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){if(isFunction(data)){type=type||callback;callback=data;data=undefined;}
return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url));};});jQuery._evalUrl=function(url,options){return jQuery.ajax({url:url,type:"GET",dataType:"script",cache:true,async:false,global:false,converters:{"text script":function(){}},dataFilter:function(response){jQuery.globalEval(response,options);}});};jQuery.fn.extend({wrapAll:function(html){var wrap;if(this[0]){if(isFunction(html)){html=html.call(this[0]);}
wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}
wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild;}
return elem;}).append(this);}
return this;},wrapInner:function(html){if(isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}
return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function(html){var htmlIsFunction=isFunction(html);return this.each(function(i){jQuery(this).wrapAll(htmlIsFunction?html.call(this,i):html);});},unwrap:function(selector){this.parent(selector).not("body").each(function(){jQuery(this).replaceWith(this.childNodes);});return this;}});jQuery.expr.pseudos.hidden=function(elem){return!jQuery.expr.pseudos.visible(elem);};jQuery.expr.pseudos.visible=function(elem){return!!(elem.offsetWidth||elem.offsetHeight||elem.getClientRects().length);};jQuery.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest();}catch(e){}};var xhrSuccessStatus={0:200,1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&("withCredentials"in xhrSupported);support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var callback,errorCallback;if(support.cors||xhrSupported&&!options.crossDomain){return{send:function(headers,complete){var i,xhr=options.xhr();xhr.open(options.type,options.url,options.async,options.username,options.password);if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}}
if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}
if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}
for(i in headers){xhr.setRequestHeader(i,headers[i]);}
callback=function(type){return function(){if(callback){callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.ontimeout=xhr.onreadystatechange=null;if(type==="abort"){xhr.abort();}else if(type==="error"){if(typeof xhr.status!=="number"){complete(0,"error");}else{complete(xhr.status,xhr.statusText);}}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,(xhr.responseType||"text")!=="text"||typeof xhr.responseText!=="string"?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders());}}};};xhr.onload=callback();errorCallback=xhr.onerror=xhr.ontimeout=callback("error");if(xhr.onabort!==undefined){xhr.onabort=errorCallback;}else{xhr.onreadystatechange=function(){if(xhr.readyState===4){window.setTimeout(function(){if(callback){errorCallback();}});}};}
callback=callback("abort");try{xhr.send(options.hasContent&&options.data||null);}catch(e){if(callback){throw e;}}},abort:function(){if(callback){callback();}}};}});jQuery.ajaxPrefilter(function(s){if(s.crossDomain){s.contents.script=false;}});jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, "+"application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(text){jQuery.globalEval(text);return text;}}});jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}
if(s.crossDomain){s.type="GET";}});jQuery.ajaxTransport("script",function(s){if(s.crossDomain||s.scriptAttrs){var script,callback;return{send:function(_,complete){script=jQuery("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",callback=function(evt){script.remove();callback=null;if(evt){complete(evt.type==="error"?404:200,evt.type);}});document.head.appendChild(script[0]);},abort:function(){if(callback){callback();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(nonce++));this[callback]=true;return callback;}});jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data)&&"data");if(jsonProp||s.dataTypes[0]==="jsonp"){callbackName=s.jsonpCallback=isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}
return responseContainer[0];};s.dataTypes[0]="json";overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};jqXHR.always(function(){if(overwritten===undefined){jQuery(window).removeProp(callbackName);}else{window[callbackName]=overwritten;}
if(s[callbackName]){s.jsonpCallback=originalSettings.jsonpCallback;oldCallbacks.push(callbackName);}
if(responseContainer&&isFunction(overwritten)){overwritten(responseContainer[0]);}
responseContainer=overwritten=undefined;});return"script";}});support.createHTMLDocument=(function(){var body=document.implementation.createHTMLDocument("").body;body.innerHTML="<form></form><form></form>";return body.childNodes.length===2;})();jQuery.parseHTML=function(data,context,keepScripts){if(typeof data!=="string"){return[];}
if(typeof context==="boolean"){keepScripts=context;context=false;}
var base,parsed,scripts;if(!context){if(support.createHTMLDocument){context=document.implementation.createHTMLDocument("");base=context.createElement("base");base.href=document.location.href;context.head.appendChild(base);}else{context=document;}}
parsed=rsingleTag.exec(data);scripts=!keepScripts&&[];if(parsed){return[context.createElement(parsed[1])];}
parsed=buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}
return jQuery.merge([],parsed.childNodes);};jQuery.fn.load=function(url,params,callback){var selector,type,response,self=this,off=url.indexOf(" ");if(off>-1){selector=stripAndCollapse(url.slice(off));url=url.slice(0,off);}
if(isFunction(params)){callback=params;params=undefined;}else if(params&&typeof params==="object"){type="POST";}
if(self.length>0){jQuery.ajax({url:url,type:type||"GET",dataType:"html",data:params}).done(function(responseText){response=arguments;self.html(selector?jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):responseText);}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);});});}
return this;};jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.expr.pseudos.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};jQuery.offset={setOffset:function(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};if(position==="static"){elem.style.position="relative";}
curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}
if(isFunction(options)){options=options.call(elem,i,jQuery.extend({},curOffset));}
if(options.top!=null){props.top=(options.top-curOffset.top)+curTop;}
if(options.left!=null){props.left=(options.left-curOffset.left)+curLeft;}
if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({offset:function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
var rect,win,elem=this[0];if(!elem){return;}
if(!elem.getClientRects().length){return{top:0,left:0};}
rect=elem.getBoundingClientRect();win=elem.ownerDocument.defaultView;return{top:rect.top+win.pageYOffset,left:rect.left+win.pageXOffset};},position:function(){if(!this[0]){return;}
var offsetParent,offset,doc,elem=this[0],parentOffset={top:0,left:0};if(jQuery.css(elem,"position")==="fixed"){offset=elem.getBoundingClientRect();}else{offset=this.offset();doc=elem.ownerDocument;offsetParent=elem.offsetParent||doc.documentElement;while(offsetParent&&(offsetParent===doc.body||offsetParent===doc.documentElement)&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.parentNode;}
if(offsetParent&&offsetParent!==elem&&offsetParent.nodeType===1){parentOffset=jQuery(offsetParent).offset();parentOffset.top+=jQuery.css(offsetParent,"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent,"borderLeftWidth",true);}}
return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent;while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent;}
return offsetParent||documentElement;});}});jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win;if(isWindow(elem)){win=elem;}else if(elem.nodeType===9){win=elem.defaultView;}
if(val===undefined){return win?win[prop]:elem[method];}
if(win){win.scrollTo(!top?val:win.pageXOffset,top?val:win.pageYOffset);}else{elem[method]=val;}},method,val,arguments.length);};});jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});});jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(isWindow(elem)){return funcName.indexOf("outer")===0?elem["inner"+name]:elem.document.documentElement["client"+name];}
if(elem.nodeType===9){doc=elem.documentElement;return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}
return value===undefined?jQuery.css(elem,type,extra):jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable);};});});jQuery.each(("blur focus focusin focusout resize scroll click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup contextmenu").split(" "),function(i,name){jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});jQuery.fn.extend({bind:function(types,data,fn){return this.on(types,null,data,fn);},unbind:function(types,fn){return this.off(types,null,fn);},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);}});jQuery.proxy=function(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}
if(!isFunction(fn)){return undefined;}
args=slice.call(arguments,2);proxy=function(){return fn.apply(context||this,args.concat(slice.call(arguments)));};proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;};jQuery.holdReady=function(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}};jQuery.isArray=Array.isArray;jQuery.parseJSON=JSON.parse;jQuery.nodeName=nodeName;jQuery.isFunction=isFunction;jQuery.isWindow=isWindow;jQuery.camelCase=camelCase;jQuery.type=toType;jQuery.now=Date.now;jQuery.isNumeric=function(obj){var type=jQuery.type(obj);return(type==="number"||type==="string")&&!isNaN(obj-parseFloat(obj));};if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery;});}
var
_jQuery=window.jQuery,_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}
if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}
return jQuery;};if(!noGlobal){window.jQuery=window.$=jQuery;}
return jQuery;});;/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */if(typeof jQuery==='undefined'){throw new Error('Bootstrap\'s JavaScript requires jQuery')}
+function($){'use strict';function transitionEnd(){var el=document.createElement('bootstrap')
var transEndEventNames={WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd otransitionend',transition:'transitionend'}
for(var name in transEndEventNames){if(el.style[name]!==undefined){return{end:transEndEventNames[name]}}}
return false}
$.fn.emulateTransitionEnd=function(duration){var called=false
var $el=this
$(this).one('bsTransitionEnd',function(){called=true})
var callback=function(){if(!called)$($el).trigger($.support.transition.end)}
setTimeout(callback,duration)
return this}
$(function(){$.support.transition=transitionEnd()
if(!$.support.transition)return
$.event.special.bsTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function(e){if($(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}})}(jQuery);+function($){'use strict';var dismiss='[data-dismiss="alert"]'
var Alert=function(el){$(el).on('click',dismiss,this.close)}
Alert.VERSION='3.2.0'
Alert.prototype.close=function(e){var $this=$(this)
var selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
var $parent=$(selector)
if(e)e.preventDefault()
if(!$parent.length){$parent=$this.hasClass('alert')?$this:$this.parent()}
$parent.trigger(e=$.Event('close.bs.alert'))
if(e.isDefaultPrevented())return
$parent.removeClass('in')
function removeElement(){$parent.detach().trigger('closed.bs.alert').remove()}
$.support.transition&&$parent.hasClass('fade')?$parent.one('bsTransitionEnd',removeElement).emulateTransitionEnd(150):removeElement()}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.alert')
if(!data)$this.data('bs.alert',(data=new Alert(this)))
if(typeof option=='string')data[option].call($this)})}
var old=$.fn.alert
$.fn.alert=Plugin
$.fn.alert.Constructor=Alert
$.fn.alert.noConflict=function(){$.fn.alert=old
return this}
$(document).on('click.bs.alert.data-api',dismiss,Alert.prototype.close)}(jQuery);+function($){'use strict';var Button=function(element,options){this.$element=$(element)
this.options=$.extend({},Button.DEFAULTS,options)
this.isLoading=false}
Button.VERSION='3.2.0'
Button.DEFAULTS={loadingText:'loading...'}
Button.prototype.setState=function(state){var d='disabled'
var $el=this.$element
var val=$el.is('input')?'val':'html'
var data=$el.data()
state=state+'Text'
if(data.resetText==null)$el.data('resetText',$el[val]())
$el[val](data[state]==null?this.options[state]:data[state])
setTimeout($.proxy(function(){if(state=='loadingText'){this.isLoading=true
$el.addClass(d).attr(d,d)}else if(this.isLoading){this.isLoading=false
$el.removeClass(d).removeAttr(d)}},this),0)}
Button.prototype.toggle=function(){var changed=true
var $parent=this.$element.closest('[data-toggle="buttons"]')
if($parent.length){var $input=this.$element.find('input')
if($input.prop('type')=='radio'){if($input.prop('checked')&&this.$element.hasClass('active'))changed=false
else $parent.find('.active').removeClass('active')}
if(changed)$input.prop('checked',!this.$element.hasClass('active')).trigger('change')}
if(changed)this.$element.toggleClass('active')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.button')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.button',(data=new Button(this,options)))
if(option=='toggle')data.toggle()
else if(option)data.setState(option)})}
var old=$.fn.button
$.fn.button=Plugin
$.fn.button.Constructor=Button
$.fn.button.noConflict=function(){$.fn.button=old
return this}
$(document).on('click.bs.button.data-api','[data-toggle^="button"]',function(e){var $btn=$(e.target)
if(!$btn.hasClass('btn'))$btn=$btn.closest('.btn')
Plugin.call($btn,'toggle')
e.preventDefault()})}(jQuery);+function($){'use strict';var Carousel=function(element,options){this.$element=$(element).on('keydown.bs.carousel',$.proxy(this.keydown,this))
this.$indicators=this.$element.find('.carousel-indicators')
this.options=options
this.paused=this.sliding=this.interval=this.$active=this.$items=null
this.options.pause=='hover'&&this.$element.on('mouseenter.bs.carousel',$.proxy(this.pause,this)).on('mouseleave.bs.carousel',$.proxy(this.cycle,this))}
Carousel.VERSION='3.2.0'
Carousel.DEFAULTS={interval:5000,pause:'hover',wrap:true}
Carousel.prototype.keydown=function(e){switch(e.which){case 37:this.prev();break
case 39:this.next();break
default:return}
e.preventDefault()}
Carousel.prototype.cycle=function(e){e||(this.paused=false)
this.interval&&clearInterval(this.interval)
this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval))
return this}
Carousel.prototype.getItemIndex=function(item){this.$items=item.parent().children('.item')
return this.$items.index(item||this.$active)}
Carousel.prototype.to=function(pos){var that=this
var activeIndex=this.getItemIndex(this.$active=this.$element.find('.item.active'))
if(pos>(this.$items.length-1)||pos<0)return
if(this.sliding)return this.$element.one('slid.bs.carousel',function(){that.to(pos)})
if(activeIndex==pos)return this.pause().cycle()
return this.slide(pos>activeIndex?'next':'prev',$(this.$items[pos]))}
Carousel.prototype.pause=function(e){e||(this.paused=true)
if(this.$element.find('.next, .prev').length&&$.support.transition){this.$element.trigger($.support.transition.end)
this.cycle(true)}
this.interval=clearInterval(this.interval)
return this}
Carousel.prototype.next=function(){if(this.sliding)return
return this.slide('next')}
Carousel.prototype.prev=function(){if(this.sliding)return
return this.slide('prev')}
Carousel.prototype.slide=function(type,next){var $active=this.$element.find('.item.active')
var $next=next||$active[type]()
var isCycling=this.interval
var direction=type=='next'?'left':'right'
var fallback=type=='next'?'first':'last'
var that=this
if(!$next.length){if(!this.options.wrap)return
$next=this.$element.find('.item')[fallback]()}
if($next.hasClass('active'))return(this.sliding=false)
var relatedTarget=$next[0]
var slideEvent=$.Event('slide.bs.carousel',{relatedTarget:relatedTarget,direction:direction})
this.$element.trigger(slideEvent)
if(slideEvent.isDefaultPrevented())return
this.sliding=true
isCycling&&this.pause()
if(this.$indicators.length){this.$indicators.find('.active').removeClass('active')
var $nextIndicator=$(this.$indicators.children()[this.getItemIndex($next)])
$nextIndicator&&$nextIndicator.addClass('active')}
var slidEvent=$.Event('slid.bs.carousel',{relatedTarget:relatedTarget,direction:direction})
if($.support.transition&&this.$element.hasClass('slide')){$next.addClass(type)
$next[0].offsetWidth
$active.addClass(direction)
$next.addClass(direction)
$active.one('bsTransitionEnd',function(){$next.removeClass([type,direction].join(' ')).addClass('active')
$active.removeClass(['active',direction].join(' '))
that.sliding=false
setTimeout(function(){that.$element.trigger(slidEvent)},0)}).emulateTransitionEnd($active.css('transition-duration').slice(0,-1)*1000)}else{$active.removeClass('active')
$next.addClass('active')
this.sliding=false
this.$element.trigger(slidEvent)}
isCycling&&this.cycle()
return this}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.carousel')
var options=$.extend({},Carousel.DEFAULTS,$this.data(),typeof option=='object'&&option)
var action=typeof option=='string'?option:options.slide
if(!data)$this.data('bs.carousel',(data=new Carousel(this,options)))
if(typeof option=='number')data.to(option)
else if(action)data[action]()
else if(options.interval)data.pause().cycle()})}
var old=$.fn.carousel
$.fn.carousel=Plugin
$.fn.carousel.Constructor=Carousel
$.fn.carousel.noConflict=function(){$.fn.carousel=old
return this}
$(document).on('click.bs.carousel.data-api','[data-slide], [data-slide-to]',function(e){var href
var $this=$(this)
var $target=$($this.attr('data-target')||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''))
if(!$target.hasClass('carousel'))return
var options=$.extend({},$target.data(),$this.data())
var slideIndex=$this.attr('data-slide-to')
if(slideIndex)options.interval=false
Plugin.call($target,options)
if(slideIndex){$target.data('bs.carousel').to(slideIndex)}
e.preventDefault()})
$(window).on('load',function(){$('[data-ride="carousel"]').each(function(){var $carousel=$(this)
Plugin.call($carousel,$carousel.data())})})}(jQuery);+function($){'use strict';var Collapse=function(element,options){this.$element=$(element)
this.options=$.extend({},Collapse.DEFAULTS,options)
this.transitioning=null
if(this.options.parent)this.$parent=$(this.options.parent)
if(this.options.toggle)this.toggle()}
Collapse.VERSION='3.2.0'
Collapse.DEFAULTS={toggle:true}
Collapse.prototype.dimension=function(){var hasWidth=this.$element.hasClass('width')
return hasWidth?'width':'height'}
Collapse.prototype.show=function(){if(this.transitioning||this.$element.hasClass('in'))return
var startEvent=$.Event('show.bs.collapse')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
var actives=this.$parent&&this.$parent.find('> .panel > .in')
if(actives&&actives.length){var hasData=actives.data('bs.collapse')
if(hasData&&hasData.transitioning)return
Plugin.call(actives,'hide')
hasData||actives.data('bs.collapse',null)}
var dimension=this.dimension()
this.$element.removeClass('collapse').addClass('collapsing')[dimension](0)
this.transitioning=1
var complete=function(){this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('')
this.transitioning=0
this.$element.trigger('shown.bs.collapse')}
if(!$.support.transition)return complete.call(this)
var scrollSize=$.camelCase(['scroll',dimension].join('-'))
this.$element.one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(350)[dimension](this.$element[0][scrollSize])}
Collapse.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass('in'))return
var startEvent=$.Event('hide.bs.collapse')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
var dimension=this.dimension()
this.$element[dimension](this.$element[dimension]())[0].offsetHeight
this.$element.addClass('collapsing').removeClass('collapse').removeClass('in')
this.transitioning=1
var complete=function(){this.transitioning=0
this.$element.trigger('hidden.bs.collapse').removeClass('collapsing').addClass('collapse')}
if(!$.support.transition)return complete.call(this)
this.$element
[dimension](0).one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(350)}
Collapse.prototype.toggle=function(){this[this.$element.hasClass('in')?'hide':'show']()}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.collapse')
var options=$.extend({},Collapse.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data&&options.toggle&&option=='show')option=!option
if(!data)$this.data('bs.collapse',(data=new Collapse(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.collapse
$.fn.collapse=Plugin
$.fn.collapse.Constructor=Collapse
$.fn.collapse.noConflict=function(){$.fn.collapse=old
return this}
$(document).on('click.bs.collapse.data-api','[data-toggle="collapse"]',function(e){var href
var $this=$(this)
var target=$this.attr('data-target')||e.preventDefault()||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,'')
var $target=$(target)
var data=$target.data('bs.collapse')
var option=data?'toggle':$this.data()
var parent=$this.attr('data-parent')
var $parent=parent&&$(parent)
if(!data||!data.transitioning){if($parent)$parent.find('[data-toggle="collapse"][data-parent="'+parent+'"]').not($this).addClass('collapsed')
$this[$target.hasClass('in')?'addClass':'removeClass']('collapsed')}
Plugin.call($target,option)})}(jQuery);+function($){'use strict';var backdrop='.dropdown-backdrop'
var toggle='[data-toggle="dropdown"]'
var Dropdown=function(element){$(element).on('click.bs.dropdown',this.toggle)}
Dropdown.VERSION='3.2.0'
Dropdown.prototype.toggle=function(e){var $this=$(this)
if($this.is('.disabled, :disabled'))return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
clearMenus()
if(!isActive){if('ontouchstart'in document.documentElement&&!$parent.closest('.navbar-nav').length){$('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click',clearMenus)}
var relatedTarget={relatedTarget:this}
$parent.trigger(e=$.Event('show.bs.dropdown',relatedTarget))
if(e.isDefaultPrevented())return
$this.trigger('focus')
$parent.toggleClass('open').trigger('shown.bs.dropdown',relatedTarget)}
return false}
Dropdown.prototype.keydown=function(e){if(!/(38|40|27)/.test(e.keyCode))return
var $this=$(this)
e.preventDefault()
e.stopPropagation()
if($this.is('.disabled, :disabled'))return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
if(!isActive||(isActive&&e.keyCode==27)){if(e.which==27)$parent.find(toggle).trigger('focus')
return $this.trigger('click')}
var desc=' li:not(.divider):visible a'
var $items=$parent.find('[role="menu"]'+desc+', [role="listbox"]'+desc)
if(!$items.length)return
var index=$items.index($items.filter(':focus'))
if(e.keyCode==38&&index>0)index--
if(e.keyCode==40&&index<$items.length-1)index++
if(!~index)index=0
$items.eq(index).trigger('focus')}
function clearMenus(e){if(e&&e.which===3)return
$(backdrop).remove()
$(toggle).each(function(){var $parent=getParent($(this))
var relatedTarget={relatedTarget:this}
if(!$parent.hasClass('open'))return
$parent.trigger(e=$.Event('hide.bs.dropdown',relatedTarget))
if(e.isDefaultPrevented())return
$parent.removeClass('open').trigger('hidden.bs.dropdown',relatedTarget)})}
function getParent($this){var selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&/#[A-Za-z]/.test(selector)&&selector.replace(/.*(?=#[^\s]*$)/,'')}
var $parent=selector&&$(selector)
return $parent&&$parent.length?$parent:$this.parent()}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.dropdown')
if(!data)$this.data('bs.dropdown',(data=new Dropdown(this)))
if(typeof option=='string')data[option].call($this)})}
var old=$.fn.dropdown
$.fn.dropdown=Plugin
$.fn.dropdown.Constructor=Dropdown
$.fn.dropdown.noConflict=function(){$.fn.dropdown=old
return this}
$(document).on('click.bs.dropdown.data-api',clearMenus).on('click.bs.dropdown.data-api','.dropdown form',function(e){e.stopPropagation()}).on('click.bs.dropdown.data-api',toggle,Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api',toggle+', [role="menu"], [role="listbox"]',Dropdown.prototype.keydown)}(jQuery);+function($){'use strict';var Modal=function(element,options){this.options=options
this.$body=$(document.body)
this.$element=$(element)
this.$backdrop=this.isShown=null
this.scrollbarWidth=0
if(this.options.remote){this.$element.find('.modal-content').load(this.options.remote,$.proxy(function(){this.$element.trigger('loaded.bs.modal')},this))}}
Modal.VERSION='3.2.0'
Modal.DEFAULTS={backdrop:true,keyboard:true,show:true}
Modal.prototype.toggle=function(_relatedTarget){return this.isShown?this.hide():this.show(_relatedTarget)}
Modal.prototype.show=function(_relatedTarget){var that=this
var e=$.Event('show.bs.modal',{relatedTarget:_relatedTarget})
this.$element.trigger(e)
if(this.isShown||e.isDefaultPrevented())return
this.isShown=true
this.checkScrollbar()
this.$body.addClass('modal-open')
this.setScrollbar()
this.escape()
this.$element.on('click.dismiss.bs.modal','[data-dismiss="modal"]',$.proxy(this.hide,this))
this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass('fade')
if(!that.$element.parent().length){that.$element.appendTo(that.$body)}
that.$element.show().scrollTop(0)
if(transition){that.$element[0].offsetWidth}
that.$element.addClass('in').attr('aria-hidden',false)
that.enforceFocus()
var e=$.Event('shown.bs.modal',{relatedTarget:_relatedTarget})
transition?that.$element.find('.modal-dialog').one('bsTransitionEnd',function(){that.$element.trigger('focus').trigger(e)}).emulateTransitionEnd(300):that.$element.trigger('focus').trigger(e)})}
Modal.prototype.hide=function(e){if(e)e.preventDefault()
e=$.Event('hide.bs.modal')
this.$element.trigger(e)
if(!this.isShown||e.isDefaultPrevented())return
this.isShown=false
this.$body.removeClass('modal-open')
this.resetScrollbar()
this.escape()
$(document).off('focusin.bs.modal')
this.$element.removeClass('in').attr('aria-hidden',true).off('click.dismiss.bs.modal')
$.support.transition&&this.$element.hasClass('fade')?this.$element.one('bsTransitionEnd',$.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()}
Modal.prototype.enforceFocus=function(){$(document).off('focusin.bs.modal').on('focusin.bs.modal',$.proxy(function(e){if(this.$element[0]!==e.target&&!this.$element.has(e.target).length){this.$element.trigger('focus')}},this))}
Modal.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on('keyup.dismiss.bs.modal',$.proxy(function(e){e.which==27&&this.hide()},this))}else if(!this.isShown){this.$element.off('keyup.dismiss.bs.modal')}}
Modal.prototype.hideModal=function(){var that=this
this.$element.hide()
this.backdrop(function(){that.$element.trigger('hidden.bs.modal')})}
Modal.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove()
this.$backdrop=null}
Modal.prototype.backdrop=function(callback){var that=this
var animate=this.$element.hasClass('fade')?'fade':''
if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate
this.$backdrop=$('<div class="modal-backdrop '+animate+'" />').appendTo(this.$body)
this.$element.on('click.dismiss.bs.modal',$.proxy(function(e){if(e.target!==e.currentTarget)return
this.options.backdrop=='static'?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)},this))
if(doAnimate)this.$backdrop[0].offsetWidth
this.$backdrop.addClass('in')
if(!callback)return
doAnimate?this.$backdrop.one('bsTransitionEnd',callback).emulateTransitionEnd(150):callback()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass('in')
var callbackRemove=function(){that.removeBackdrop()
callback&&callback()}
$.support.transition&&this.$element.hasClass('fade')?this.$backdrop.one('bsTransitionEnd',callbackRemove).emulateTransitionEnd(150):callbackRemove()}else if(callback){callback()}}
Modal.prototype.checkScrollbar=function(){if(document.body.clientWidth>=window.innerWidth)return
this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar()}
Modal.prototype.setScrollbar=function(){var bodyPad=parseInt((this.$body.css('padding-right')||0),10)
if(this.scrollbarWidth)this.$body.css('padding-right',bodyPad+this.scrollbarWidth)}
Modal.prototype.resetScrollbar=function(){this.$body.css('padding-right','')}
Modal.prototype.measureScrollbar=function(){var scrollDiv=document.createElement('div')
scrollDiv.className='modal-scrollbar-measure'
this.$body.append(scrollDiv)
var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth
this.$body[0].removeChild(scrollDiv)
return scrollbarWidth}
function Plugin(option,_relatedTarget){return this.each(function(){var $this=$(this)
var data=$this.data('bs.modal')
var options=$.extend({},Modal.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('bs.modal',(data=new Modal(this,options)))
if(typeof option=='string')data[option](_relatedTarget)
else if(options.show)data.show(_relatedTarget)})}
var old=$.fn.modal
$.fn.modal=Plugin
$.fn.modal.Constructor=Modal
$.fn.modal.noConflict=function(){$.fn.modal=old
return this}
$(document).on('click.bs.modal.data-api','[data-toggle="modal"]',function(e){var $this=$(this)
var href=$this.attr('href')
var $target=$($this.attr('data-target')||(href&&href.replace(/.*(?=#[^\s]+$)/,'')))
var option=$target.data('bs.modal')?'toggle':$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data())
if($this.is('a'))e.preventDefault()
$target.one('show.bs.modal',function(showEvent){if(showEvent.isDefaultPrevented())return
$target.one('hidden.bs.modal',function(){$this.is(':visible')&&$this.trigger('focus')})})
Plugin.call($target,option,this)})}(jQuery);+function($){'use strict';var Tooltip=function(element,options){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null
this.init('tooltip',element,options)}
Tooltip.VERSION='3.2.0'
Tooltip.DEFAULTS={animation:true,placement:'top',selector:false,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:'hover focus',title:'',delay:0,html:false,container:false,viewport:{selector:'body',padding:0}}
Tooltip.prototype.init=function(type,element,options){this.enabled=true
this.type=type
this.$element=$(element)
this.options=this.getOptions(options)
this.$viewport=this.options.viewport&&$(this.options.viewport.selector||this.options.viewport)
var triggers=this.options.trigger.split(' ')
for(var i=triggers.length;i--;){var trigger=triggers[i]
if(trigger=='click'){this.$element.on('click.'+this.type,this.options.selector,$.proxy(this.toggle,this))}else if(trigger!='manual'){var eventIn=trigger=='hover'?'mouseenter':'focusin'
var eventOut=trigger=='hover'?'mouseleave':'focusout'
this.$element.on(eventIn+'.'+this.type,this.options.selector,$.proxy(this.enter,this))
this.$element.on(eventOut+'.'+this.type,this.options.selector,$.proxy(this.leave,this))}}
this.options.selector?(this._options=$.extend({},this.options,{trigger:'manual',selector:''})):this.fixTitle()}
Tooltip.prototype.getDefaults=function(){return Tooltip.DEFAULTS}
Tooltip.prototype.getOptions=function(options){options=$.extend({},this.getDefaults(),this.$element.data(),options)
if(options.delay&&typeof options.delay=='number'){options.delay={show:options.delay,hide:options.delay}}
return options}
Tooltip.prototype.getDelegateOptions=function(){var options={}
var defaults=this.getDefaults()
this._options&&$.each(this._options,function(key,value){if(defaults[key]!=value)options[key]=value})
return options}
Tooltip.prototype.enter=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions())
$(obj.currentTarget).data('bs.'+this.type,self)}
clearTimeout(self.timeout)
self.hoverState='in'
if(!self.options.delay||!self.options.delay.show)return self.show()
self.timeout=setTimeout(function(){if(self.hoverState=='in')self.show()},self.options.delay.show)}
Tooltip.prototype.leave=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions())
$(obj.currentTarget).data('bs.'+this.type,self)}
clearTimeout(self.timeout)
self.hoverState='out'
if(!self.options.delay||!self.options.delay.hide)return self.hide()
self.timeout=setTimeout(function(){if(self.hoverState=='out')self.hide()},self.options.delay.hide)}
Tooltip.prototype.show=function(){var e=$.Event('show.bs.'+this.type)
if(this.hasContent()&&this.enabled){this.$element.trigger(e)
var inDom=$.contains(document.documentElement,this.$element[0])
if(e.isDefaultPrevented()||!inDom)return
var that=this
var $tip=this.tip()
var tipId=this.getUID(this.type)
this.setContent()
$tip.attr('id',tipId)
this.$element.attr('aria-describedby',tipId)
if(this.options.animation)$tip.addClass('fade')
var placement=typeof this.options.placement=='function'?this.options.placement.call(this,$tip[0],this.$element[0]):this.options.placement
var autoToken=/\s?auto?\s?/i
var autoPlace=autoToken.test(placement)
if(autoPlace)placement=placement.replace(autoToken,'')||'top'
$tip.detach().css({top:0,left:0,display:'block'}).addClass(placement).data('bs.'+this.type,this)
this.options.container?$tip.appendTo(this.options.container):$tip.insertAfter(this.$element)
var pos=this.getPosition()
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(autoPlace){var orgPlacement=placement
var $parent=this.$element.parent()
var parentDim=this.getPosition($parent)
placement=placement=='bottom'&&pos.top+pos.height+actualHeight-parentDim.scroll>parentDim.height?'top':placement=='top'&&pos.top-parentDim.scroll-actualHeight<0?'bottom':placement=='right'&&pos.right+actualWidth>parentDim.width?'left':placement=='left'&&pos.left-actualWidth<parentDim.left?'right':placement
$tip.removeClass(orgPlacement).addClass(placement)}
var calculatedOffset=this.getCalculatedOffset(placement,pos,actualWidth,actualHeight)
this.applyPlacement(calculatedOffset,placement)
var complete=function(){that.$element.trigger('shown.bs.'+that.type)
that.hoverState=null}
$.support.transition&&this.$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(150):complete()}}
Tooltip.prototype.applyPlacement=function(offset,placement){var $tip=this.tip()
var width=$tip[0].offsetWidth
var height=$tip[0].offsetHeight
var marginTop=parseInt($tip.css('margin-top'),10)
var marginLeft=parseInt($tip.css('margin-left'),10)
if(isNaN(marginTop))marginTop=0
if(isNaN(marginLeft))marginLeft=0
offset.top=offset.top+marginTop
offset.left=offset.left+marginLeft
$.offset.setOffset($tip[0],$.extend({using:function(props){$tip.css({top:Math.round(props.top),left:Math.round(props.left)})}},offset),0)
$tip.addClass('in')
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(placement=='top'&&actualHeight!=height){offset.top=offset.top+height-actualHeight}
var delta=this.getViewportAdjustedDelta(placement,offset,actualWidth,actualHeight)
if(delta.left)offset.left+=delta.left
else offset.top+=delta.top
var arrowDelta=delta.left?delta.left*2-width+actualWidth:delta.top*2-height+actualHeight
var arrowPosition=delta.left?'left':'top'
var arrowOffsetPosition=delta.left?'offsetWidth':'offsetHeight'
$tip.offset(offset)
this.replaceArrow(arrowDelta,$tip[0][arrowOffsetPosition],arrowPosition)}
Tooltip.prototype.replaceArrow=function(delta,dimension,position){this.arrow().css(position,delta?(50*(1-delta/dimension)+'%'):'')}
Tooltip.prototype.setContent=function(){var $tip=this.tip()
var title=this.getTitle()
$tip.find('.tooltip-inner')[this.options.html?'html':'text'](title)
$tip.removeClass('fade in top bottom left right')}
Tooltip.prototype.hide=function(){var that=this
var $tip=this.tip()
var e=$.Event('hide.bs.'+this.type)
this.$element.removeAttr('aria-describedby')
function complete(){if(that.hoverState!='in')$tip.detach()
that.$element.trigger('hidden.bs.'+that.type)}
this.$element.trigger(e)
if(e.isDefaultPrevented())return
$tip.removeClass('in')
$.support.transition&&this.$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(150):complete()
this.hoverState=null
return this}
Tooltip.prototype.fixTitle=function(){var $e=this.$element
if($e.attr('title')||typeof($e.attr('data-original-title'))!='string'){$e.attr('data-original-title',$e.attr('title')||'').attr('title','')}}
Tooltip.prototype.hasContent=function(){return this.getTitle()}
Tooltip.prototype.getPosition=function($element){$element=$element||this.$element
var el=$element[0]
var isBody=el.tagName=='BODY'
return $.extend({},(typeof el.getBoundingClientRect=='function')?el.getBoundingClientRect():null,{scroll:isBody?document.documentElement.scrollTop||document.body.scrollTop:$element.scrollTop(),width:isBody?$(window).width():$element.outerWidth(),height:isBody?$(window).height():$element.outerHeight()},isBody?{top:0,left:0}:$element.offset())}
Tooltip.prototype.getCalculatedOffset=function(placement,pos,actualWidth,actualHeight){return placement=='bottom'?{top:pos.top+pos.height,left:pos.left+pos.width/2-actualWidth/2}:placement=='top'?{top:pos.top-actualHeight,left:pos.left+pos.width/2-actualWidth/2}:placement=='left'?{top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth}:{top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width}}
Tooltip.prototype.getViewportAdjustedDelta=function(placement,pos,actualWidth,actualHeight){var delta={top:0,left:0}
if(!this.$viewport)return delta
var viewportPadding=this.options.viewport&&this.options.viewport.padding||0
var viewportDimensions=this.getPosition(this.$viewport)
if(/right|left/.test(placement)){var topEdgeOffset=pos.top-viewportPadding-viewportDimensions.scroll
var bottomEdgeOffset=pos.top+viewportPadding-viewportDimensions.scroll+actualHeight
if(topEdgeOffset<viewportDimensions.top){delta.top=viewportDimensions.top-topEdgeOffset}else if(bottomEdgeOffset>viewportDimensions.top+viewportDimensions.height){delta.top=viewportDimensions.top+viewportDimensions.height-bottomEdgeOffset}}else{var leftEdgeOffset=pos.left-viewportPadding
var rightEdgeOffset=pos.left+viewportPadding+actualWidth
if(leftEdgeOffset<viewportDimensions.left){delta.left=viewportDimensions.left-leftEdgeOffset}else if(rightEdgeOffset>viewportDimensions.width){delta.left=viewportDimensions.left+viewportDimensions.width-rightEdgeOffset}}
return delta}
Tooltip.prototype.getTitle=function(){var title
var $e=this.$element
var o=this.options
title=$e.attr('data-original-title')||(typeof o.title=='function'?o.title.call($e[0]):o.title)
return title}
Tooltip.prototype.getUID=function(prefix){do prefix+=~~(Math.random()*1000000)
while(document.getElementById(prefix))
return prefix}
Tooltip.prototype.tip=function(){return(this.$tip=this.$tip||$(this.options.template))}
Tooltip.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find('.tooltip-arrow'))}
Tooltip.prototype.validate=function(){if(!this.$element[0].parentNode){this.hide()
this.$element=null
this.options=null}}
Tooltip.prototype.enable=function(){this.enabled=true}
Tooltip.prototype.disable=function(){this.enabled=false}
Tooltip.prototype.toggleEnabled=function(){this.enabled=!this.enabled}
Tooltip.prototype.toggle=function(e){var self=this
if(e){self=$(e.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(e.currentTarget,this.getDelegateOptions())
$(e.currentTarget).data('bs.'+this.type,self)}}
self.tip().hasClass('in')?self.leave(self):self.enter(self)}
Tooltip.prototype.destroy=function(){clearTimeout(this.timeout)
this.hide().$element.off('.'+this.type).removeData('bs.'+this.type)}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.tooltip')
var options=typeof option=='object'&&option
if(!data&&option=='destroy')return
if(!data)$this.data('bs.tooltip',(data=new Tooltip(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.tooltip
$.fn.tooltip=Plugin
$.fn.tooltip.Constructor=Tooltip
$.fn.tooltip.noConflict=function(){$.fn.tooltip=old
return this}}(jQuery);+function($){'use strict';var Popover=function(element,options){this.init('popover',element,options)}
if(!$.fn.tooltip)throw new Error('Popover requires tooltip.js')
Popover.VERSION='3.2.0'
Popover.DEFAULTS=$.extend({},$.fn.tooltip.Constructor.DEFAULTS,{placement:'right',trigger:'click',content:'',template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'})
Popover.prototype=$.extend({},$.fn.tooltip.Constructor.prototype)
Popover.prototype.constructor=Popover
Popover.prototype.getDefaults=function(){return Popover.DEFAULTS}
Popover.prototype.setContent=function(){var $tip=this.tip()
var title=this.getTitle()
var content=this.getContent()
$tip.find('.popover-title')[this.options.html?'html':'text'](title)
$tip.find('.popover-content').empty()[this.options.html?(typeof content=='string'?'html':'append'):'text'](content)
$tip.removeClass('fade top bottom left right in')
if(!$tip.find('.popover-title').html())$tip.find('.popover-title').hide()}
Popover.prototype.hasContent=function(){return this.getTitle()||this.getContent()}
Popover.prototype.getContent=function(){var $e=this.$element
var o=this.options
return $e.attr('data-content')||(typeof o.content=='function'?o.content.call($e[0]):o.content)}
Popover.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find('.arrow'))}
Popover.prototype.tip=function(){if(!this.$tip)this.$tip=$(this.options.template)
return this.$tip}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.popover')
var options=typeof option=='object'&&option
if(!data&&option=='destroy')return
if(!data)$this.data('bs.popover',(data=new Popover(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.popover
$.fn.popover=Plugin
$.fn.popover.Constructor=Popover
$.fn.popover.noConflict=function(){$.fn.popover=old
return this}}(jQuery);+function($){'use strict';function ScrollSpy(element,options){var process=$.proxy(this.process,this)
this.$body=$('body')
this.$scrollElement=$(element).is('body')?$(window):$(element)
this.options=$.extend({},ScrollSpy.DEFAULTS,options)
this.selector=(this.options.target||'')+' .nav li > a'
this.offsets=[]
this.targets=[]
this.activeTarget=null
this.scrollHeight=0
this.$scrollElement.on('scroll.bs.scrollspy',process)
this.refresh()
this.process()}
ScrollSpy.VERSION='3.2.0'
ScrollSpy.DEFAULTS={offset:10}
ScrollSpy.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)}
ScrollSpy.prototype.refresh=function(){var offsetMethod='offset'
var offsetBase=0
if(!$.isWindow(this.$scrollElement[0])){offsetMethod='position'
offsetBase=this.$scrollElement.scrollTop()}
this.offsets=[]
this.targets=[]
this.scrollHeight=this.getScrollHeight()
var self=this
this.$body.find(this.selector).map(function(){var $el=$(this)
var href=$el.data('target')||$el.attr('href')
var $href=/^#./.test(href)&&$(href)
return($href&&$href.length&&$href.is(':visible')&&[[$href[offsetMethod]().top+offsetBase,href]])||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){self.offsets.push(this[0])
self.targets.push(this[1])})}
ScrollSpy.prototype.process=function(){var scrollTop=this.$scrollElement.scrollTop()+this.options.offset
var scrollHeight=this.getScrollHeight()
var maxScroll=this.options.offset+scrollHeight-this.$scrollElement.height()
var offsets=this.offsets
var targets=this.targets
var activeTarget=this.activeTarget
var i
if(this.scrollHeight!=scrollHeight){this.refresh()}
if(scrollTop>=maxScroll){return activeTarget!=(i=targets[targets.length-1])&&this.activate(i)}
if(activeTarget&&scrollTop<=offsets[0]){return activeTarget!=(i=targets[0])&&this.activate(i)}
for(i=offsets.length;i--;){activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(!offsets[i+1]||scrollTop<=offsets[i+1])&&this.activate(targets[i])}}
ScrollSpy.prototype.activate=function(target){this.activeTarget=target
$(this.selector).parentsUntil(this.options.target,'.active').removeClass('active')
var selector=this.selector+'[data-target="'+target+'"],'+
this.selector+'[href="'+target+'"]'
var active=$(selector).parents('li').addClass('active')
if(active.parent('.dropdown-menu').length){active=active.closest('li.dropdown').addClass('active')}
active.trigger('activate.bs.scrollspy')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.scrollspy')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.scrollspy',(data=new ScrollSpy(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.scrollspy
$.fn.scrollspy=Plugin
$.fn.scrollspy.Constructor=ScrollSpy
$.fn.scrollspy.noConflict=function(){$.fn.scrollspy=old
return this}
$(window).on('load.bs.scrollspy.data-api',function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this)
Plugin.call($spy,$spy.data())})})}(jQuery);+function($){'use strict';var Tab=function(element){this.element=$(element)}
Tab.VERSION='3.2.0'
Tab.prototype.show=function(){var $this=this.element
var $ul=$this.closest('ul:not(.dropdown-menu)')
var selector=$this.data('target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
if($this.parent('li').hasClass('active'))return
var previous=$ul.find('.active:last a')[0]
var e=$.Event('show.bs.tab',{relatedTarget:previous})
$this.trigger(e)
if(e.isDefaultPrevented())return
var $target=$(selector)
this.activate($this.closest('li'),$ul)
this.activate($target,$target.parent(),function(){$this.trigger({type:'shown.bs.tab',relatedTarget:previous})})}
Tab.prototype.activate=function(element,container,callback){var $active=container.find('> .active')
var transition=callback&&$.support.transition&&$active.hasClass('fade')
function next(){$active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active')
element.addClass('active')
if(transition){element[0].offsetWidth
element.addClass('in')}else{element.removeClass('fade')}
if(element.parent('.dropdown-menu')){element.closest('li.dropdown').addClass('active')}
callback&&callback()}
transition?$active.one('bsTransitionEnd',next).emulateTransitionEnd(150):next()
$active.removeClass('in')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.tab')
if(!data)$this.data('bs.tab',(data=new Tab(this)))
if(typeof option=='string')data[option]()})}
var old=$.fn.tab
$.fn.tab=Plugin
$.fn.tab.Constructor=Tab
$.fn.tab.noConflict=function(){$.fn.tab=old
return this}
$(document).on('click.bs.tab.data-api','[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault()
Plugin.call($(this),'show')})}(jQuery);+function($){'use strict';var Affix=function(element,options){this.options=$.extend({},Affix.DEFAULTS,options)
this.$target=$(this.options.target).on('scroll.bs.affix.data-api',$.proxy(this.checkPosition,this)).on('click.bs.affix.data-api',$.proxy(this.checkPositionWithEventLoop,this))
this.$element=$(element)
this.affixed=this.unpin=this.pinnedOffset=null
this.checkPosition()}
Affix.VERSION='3.2.0'
Affix.RESET='affix affix-top affix-bottom'
Affix.DEFAULTS={offset:0,target:window}
Affix.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset
this.$element.removeClass(Affix.RESET).addClass('affix')
var scrollTop=this.$target.scrollTop()
var position=this.$element.offset()
return(this.pinnedOffset=position.top-scrollTop)}
Affix.prototype.checkPositionWithEventLoop=function(){setTimeout($.proxy(this.checkPosition,this),1)}
Affix.prototype.checkPosition=function(){if(!this.$element.is(':visible'))return
var scrollHeight=$(document).height()
var scrollTop=this.$target.scrollTop()
var position=this.$element.offset()
var offset=this.options.offset
var offsetTop=offset.top
var offsetBottom=offset.bottom
if(typeof offset!='object')offsetBottom=offsetTop=offset
if(typeof offsetTop=='function')offsetTop=offset.top(this.$element)
if(typeof offsetBottom=='function')offsetBottom=offset.bottom(this.$element)
var affix=this.unpin!=null&&(scrollTop+this.unpin<=position.top)?false:offsetBottom!=null&&(position.top+this.$element.height()>=scrollHeight-offsetBottom)?'bottom':offsetTop!=null&&(scrollTop<=offsetTop)?'top':false
if(this.affixed===affix)return
if(this.unpin!=null)this.$element.css('top','')
var affixType='affix'+(affix?'-'+affix:'')
var e=$.Event(affixType+'.bs.affix')
this.$element.trigger(e)
if(e.isDefaultPrevented())return
this.affixed=affix
this.unpin=affix=='bottom'?this.getPinnedOffset():null
this.$element.removeClass(Affix.RESET).addClass(affixType).trigger($.Event(affixType.replace('affix','affixed')))
if(affix=='bottom'){this.$element.offset({top:scrollHeight-this.$element.height()-offsetBottom})}}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.affix')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.affix',(data=new Affix(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.affix
$.fn.affix=Plugin
$.fn.affix.Constructor=Affix
$.fn.affix.noConflict=function(){$.fn.affix=old
return this}
$(window).on('load',function(){$('[data-spy="affix"]').each(function(){var $spy=$(this)
var data=$spy.data()
data.offset=data.offset||{}
if(data.offsetBottom)data.offset.bottom=data.offsetBottom
if(data.offsetTop)data.offset.top=data.offsetTop
Plugin.call($spy,data)})})}(jQuery);;$(function()
{$('.middle input:text, .middle input:password, textarea').not('[class]').addClass('input-xlarge');$('.control-group label').addClass('control-label');var $dropdowns=$('li.dropdown');$dropdowns.on('mouseover',function()
{var $this=$(this);if($this.prop('hoverTimeout'))
{$this.prop('hoverTimeout',clearTimeout($this.prop('hoverTimeout')));}
$this.prop('hoverIntent',setTimeout(function()
{$this.addClass('open');},250));}).on('mouseleave',function()
{var $this=$(this);if($this.prop('hoverIntent'))
{$this.prop('hoverIntent',clearTimeout($this.prop('hoverIntent')));}
$this.prop('hoverTimeout',setTimeout(function()
{$this.removeClass('open');},250));});if('ontouchstart'in document.documentElement)
{$dropdowns.each(function()
{var $this=$(this);this.addEventListener('touchstart',function(e)
{if(e.touches.length===1)
{e.stopPropagation();if(!$this.hasClass('open'))
{if(e.target===this||e.target.parentNode===this)
{e.preventDefault();}
$dropdowns.removeClass('open');$this.addClass('open');document.addEventListener('touchstart',closeDropdown=function(e)
{e.stopPropagation();$this.removeClass('open');document.removeEventListener('touchstart',closeDropdown);});}}},false);});}});;/*!
Chosen, a Select Box Enhancer for jQuery and Prototype
by Patrick Filler for Harvest, http://getharvest.com

Version 1.8.7
Full source at https://github.com/harvesthq/chosen
Copyright (c) 2011-2018 Harvest http://getharvest.com

MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
This file is generated by `grunt build`, do not edit it by hand.
*/(function(){var $,AbstractChosen,Chosen,SelectParser,bind=function(fn,me){return function(){return fn.apply(me,arguments);};},extend=function(child,parent){for(var key in parent){if(hasProp.call(parent,key))child[key]=parent[key];}function ctor(){this.constructor=child;}ctor.prototype=parent.prototype;child.prototype=new ctor();child.__super__=parent.prototype;return child;},hasProp={}.hasOwnProperty;SelectParser=(function(){function SelectParser(){this.options_index=0;this.parsed=[];}
SelectParser.prototype.add_node=function(child){if(child.nodeName.toUpperCase()==="OPTGROUP"){return this.add_group(child);}else{return this.add_option(child);}};SelectParser.prototype.add_group=function(group){var group_position,i,len,option,ref,results1;group_position=this.parsed.length;this.parsed.push({array_index:group_position,group:true,label:group.label,title:group.title?group.title:void 0,children:0,disabled:group.disabled,classes:group.className});ref=group.childNodes;results1=[];for(i=0,len=ref.length;i<len;i++){option=ref[i];results1.push(this.add_option(option,group_position,group.disabled));}
return results1;};SelectParser.prototype.add_option=function(option,group_position,group_disabled){if(option.nodeName.toUpperCase()==="OPTION"){if(option.text!==""){if(group_position!=null){this.parsed[group_position].children+=1;}
this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:option.value,text:option.text,html:option.innerHTML,title:option.title?option.title:void 0,selected:option.selected,disabled:group_disabled===true?group_disabled:option.disabled,group_array_index:group_position,group_label:group_position!=null?this.parsed[group_position].label:null,classes:option.className,style:option.style.cssText});}else{this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:true});}
return this.options_index+=1;}};return SelectParser;})();SelectParser.select_to_array=function(select){var child,i,len,parser,ref;parser=new SelectParser();ref=select.childNodes;for(i=0,len=ref.length;i<len;i++){child=ref[i];parser.add_node(child);}
return parser.parsed;};AbstractChosen=(function(){function AbstractChosen(form_field,options1){this.form_field=form_field;this.options=options1!=null?options1:{};this.label_click_handler=bind(this.label_click_handler,this);if(!AbstractChosen.browser_is_supported()){return;}
this.is_multiple=this.form_field.multiple;this.set_default_text();this.set_default_values();this.setup();this.set_up_html();this.register_observers();this.on_ready();}
AbstractChosen.prototype.set_default_values=function(){this.click_test_action=(function(_this){return function(evt){return _this.test_active_click(evt);};})(this);this.activate_action=(function(_this){return function(evt){return _this.activate_field(evt);};})(this);this.active_field=false;this.mouse_on_container=false;this.results_showing=false;this.result_highlighted=null;this.is_rtl=this.options.rtl||/\bchosen-rtl\b/.test(this.form_field.className);this.allow_single_deselect=(this.options.allow_single_deselect!=null)&&(this.form_field.options[0]!=null)&&this.form_field.options[0].text===""?this.options.allow_single_deselect:false;this.disable_search_threshold=this.options.disable_search_threshold||0;this.disable_search=this.options.disable_search||false;this.enable_split_word_search=this.options.enable_split_word_search!=null?this.options.enable_split_word_search:true;this.group_search=this.options.group_search!=null?this.options.group_search:true;this.search_contains=this.options.search_contains||false;this.single_backstroke_delete=this.options.single_backstroke_delete!=null?this.options.single_backstroke_delete:true;this.max_selected_options=this.options.max_selected_options||Infinity;this.inherit_select_classes=this.options.inherit_select_classes||false;this.display_selected_options=this.options.display_selected_options!=null?this.options.display_selected_options:true;this.display_disabled_options=this.options.display_disabled_options!=null?this.options.display_disabled_options:true;this.include_group_label_in_selected=this.options.include_group_label_in_selected||false;this.max_shown_results=this.options.max_shown_results||Number.POSITIVE_INFINITY;this.case_sensitive_search=this.options.case_sensitive_search||false;return this.hide_results_on_select=this.options.hide_results_on_select!=null?this.options.hide_results_on_select:true;};AbstractChosen.prototype.set_default_text=function(){if(this.form_field.getAttribute("data-placeholder")){this.default_text=this.form_field.getAttribute("data-placeholder");}else if(this.is_multiple){this.default_text=this.options.placeholder_text_multiple||this.options.placeholder_text||AbstractChosen.default_multiple_text;}else{this.default_text=this.options.placeholder_text_single||this.options.placeholder_text||AbstractChosen.default_single_text;}
this.default_text=this.escape_html(this.default_text);return this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||AbstractChosen.default_no_result_text;};AbstractChosen.prototype.choice_label=function(item){if(this.include_group_label_in_selected&&(item.group_label!=null)){return"<b class='group-name'>"+(this.escape_html(item.group_label))+"</b>"+item.html;}else{return item.html;}};AbstractChosen.prototype.mouse_enter=function(){return this.mouse_on_container=true;};AbstractChosen.prototype.mouse_leave=function(){return this.mouse_on_container=false;};AbstractChosen.prototype.input_focus=function(evt){if(this.is_multiple){if(!this.active_field){return setTimeout(((function(_this){return function(){return _this.container_mousedown();};})(this)),50);}}else{if(!this.active_field){return this.activate_field();}}};AbstractChosen.prototype.input_blur=function(evt){if(!this.mouse_on_container){this.active_field=false;return setTimeout(((function(_this){return function(){return _this.blur_test();};})(this)),100);}};AbstractChosen.prototype.label_click_handler=function(evt){if(this.is_multiple){return this.container_mousedown(evt);}else{return this.activate_field();}};AbstractChosen.prototype.results_option_build=function(options){var content,data,data_content,i,len,ref,shown_results;content='';shown_results=0;ref=this.results_data;for(i=0,len=ref.length;i<len;i++){data=ref[i];data_content='';if(data.group){data_content=this.result_add_group(data);}else{data_content=this.result_add_option(data);}
if(data_content!==''){shown_results++;content+=data_content;}
if(options!=null?options.first:void 0){if(data.selected&&this.is_multiple){this.choice_build(data);}else if(data.selected&&!this.is_multiple){this.single_set_selected_text(this.choice_label(data));}}
if(shown_results>=this.max_shown_results){break;}}
return content;};AbstractChosen.prototype.result_add_option=function(option){var classes,option_el;if(!option.search_match){return'';}
if(!this.include_option_in_results(option)){return'';}
classes=[];if(!option.disabled&&!(option.selected&&this.is_multiple)){classes.push("active-result");}
if(option.disabled&&!(option.selected&&this.is_multiple)){classes.push("disabled-result");}
if(option.selected){classes.push("result-selected");}
if(option.group_array_index!=null){classes.push("group-option");}
if(option.classes!==""){classes.push(option.classes);}
option_el=document.createElement("li");option_el.className=classes.join(" ");if(option.style){option_el.style.cssText=option.style;}
option_el.setAttribute("data-option-array-index",option.array_index);option_el.innerHTML=option.highlighted_html||option.html;if(option.title){option_el.title=option.title;}
return this.outerHTML(option_el);};AbstractChosen.prototype.result_add_group=function(group){var classes,group_el;if(!(group.search_match||group.group_match)){return'';}
if(!(group.active_options>0)){return'';}
classes=[];classes.push("group-result");if(group.classes){classes.push(group.classes);}
group_el=document.createElement("li");group_el.className=classes.join(" ");group_el.innerHTML=group.highlighted_html||this.escape_html(group.label);if(group.title){group_el.title=group.title;}
return this.outerHTML(group_el);};AbstractChosen.prototype.results_update_field=function(){this.set_default_text();if(!this.is_multiple){this.results_reset_cleanup();}
this.result_clear_highlight();this.results_build();if(this.results_showing){return this.winnow_results();}};AbstractChosen.prototype.reset_single_select_options=function(){var i,len,ref,result,results1;ref=this.results_data;results1=[];for(i=0,len=ref.length;i<len;i++){result=ref[i];if(result.selected){results1.push(result.selected=false);}else{results1.push(void 0);}}
return results1;};AbstractChosen.prototype.results_toggle=function(){if(this.results_showing){return this.results_hide();}else{return this.results_show();}};AbstractChosen.prototype.results_search=function(evt){if(this.results_showing){return this.winnow_results();}else{return this.results_show();}};AbstractChosen.prototype.winnow_results=function(options){var escapedQuery,fix,i,len,option,prefix,query,ref,regex,results,results_group,search_match,startpos,suffix,text;this.no_results_clear();results=0;query=this.get_search_text();escapedQuery=query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");regex=this.get_search_regex(escapedQuery);ref=this.results_data;for(i=0,len=ref.length;i<len;i++){option=ref[i];option.search_match=false;results_group=null;search_match=null;option.highlighted_html='';if(this.include_option_in_results(option)){if(option.group){option.group_match=false;option.active_options=0;}
if((option.group_array_index!=null)&&this.results_data[option.group_array_index]){results_group=this.results_data[option.group_array_index];if(results_group.active_options===0&&results_group.search_match){results+=1;}
results_group.active_options+=1;}
text=option.group?option.label:option.text;if(!(option.group&&!this.group_search)){search_match=this.search_string_match(text,regex);option.search_match=search_match!=null;if(option.search_match&&!option.group){results+=1;}
if(option.search_match){if(query.length){startpos=search_match.index;prefix=text.slice(0,startpos);fix=text.slice(startpos,startpos+query.length);suffix=text.slice(startpos+query.length);option.highlighted_html=(this.escape_html(prefix))+"<em>"+(this.escape_html(fix))+"</em>"+(this.escape_html(suffix));}
if(results_group!=null){results_group.group_match=true;}}else if((option.group_array_index!=null)&&this.results_data[option.group_array_index].search_match){option.search_match=true;}}}}
this.result_clear_highlight();if(results<1&&query.length){this.update_results_content("");return this.no_results(query);}else{this.update_results_content(this.results_option_build());if(!(options!=null?options.skip_highlight:void 0)){return this.winnow_results_set_highlight();}}};AbstractChosen.prototype.get_search_regex=function(escaped_search_string){var regex_flag,regex_string;regex_string=this.search_contains?escaped_search_string:"(^|\\s|\\b)"+escaped_search_string+"[^\\s]*";if(!(this.enable_split_word_search||this.search_contains)){regex_string="^"+regex_string;}
regex_flag=this.case_sensitive_search?"":"i";return new RegExp(regex_string,regex_flag);};AbstractChosen.prototype.search_string_match=function(search_string,regex){var match;match=regex.exec(search_string);if(!this.search_contains&&(match!=null?match[1]:void 0)){match.index+=1;}
return match;};AbstractChosen.prototype.choices_count=function(){var i,len,option,ref;if(this.selected_option_count!=null){return this.selected_option_count;}
this.selected_option_count=0;ref=this.form_field.options;for(i=0,len=ref.length;i<len;i++){option=ref[i];if(option.selected){this.selected_option_count+=1;}}
return this.selected_option_count;};AbstractChosen.prototype.choices_click=function(evt){evt.preventDefault();this.activate_field();if(!(this.results_showing||this.is_disabled)){return this.results_show();}};AbstractChosen.prototype.keydown_checker=function(evt){var ref,stroke;stroke=(ref=evt.which)!=null?ref:evt.keyCode;this.search_field_scale();if(stroke!==8&&this.pending_backstroke){this.clear_backstroke();}
switch(stroke){case 8:this.backstroke_length=this.get_search_field_value().length;break;case 9:if(this.results_showing&&!this.is_multiple){this.result_select(evt);}
this.mouse_on_container=false;break;case 13:if(this.results_showing){evt.preventDefault();}
break;case 27:if(this.results_showing){evt.preventDefault();}
break;case 32:if(this.disable_search){evt.preventDefault();}
break;case 38:evt.preventDefault();this.keyup_arrow();break;case 40:evt.preventDefault();this.keydown_arrow();break;}};AbstractChosen.prototype.keyup_checker=function(evt){var ref,stroke;stroke=(ref=evt.which)!=null?ref:evt.keyCode;this.search_field_scale();switch(stroke){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0){this.keydown_backstroke();}else if(!this.pending_backstroke){this.result_clear_highlight();this.results_search();}
break;case 13:evt.preventDefault();if(this.results_showing){this.result_select(evt);}
break;case 27:if(this.results_showing){this.results_hide();}
break;case 9:case 16:case 17:case 18:case 38:case 40:case 91:break;default:this.results_search();break;}};AbstractChosen.prototype.clipboard_event_checker=function(evt){if(this.is_disabled){return;}
return setTimeout(((function(_this){return function(){return _this.results_search();};})(this)),50);};AbstractChosen.prototype.container_width=function(){if(this.options.width!=null){return this.options.width;}else{return this.form_field.offsetWidth+"px";}};AbstractChosen.prototype.include_option_in_results=function(option){if(this.is_multiple&&(!this.display_selected_options&&option.selected)){return false;}
if(!this.display_disabled_options&&option.disabled){return false;}
if(option.empty){return false;}
return true;};AbstractChosen.prototype.search_results_touchstart=function(evt){this.touch_started=true;return this.search_results_mouseover(evt);};AbstractChosen.prototype.search_results_touchmove=function(evt){this.touch_started=false;return this.search_results_mouseout(evt);};AbstractChosen.prototype.search_results_touchend=function(evt){if(this.touch_started){return this.search_results_mouseup(evt);}};AbstractChosen.prototype.outerHTML=function(element){var tmp;if(element.outerHTML){return element.outerHTML;}
tmp=document.createElement("div");tmp.appendChild(element);return tmp.innerHTML;};AbstractChosen.prototype.get_single_html=function(){return"<a class=\"chosen-single chosen-default\">\n  <span>"+this.default_text+"</span>\n  <div><b></b></div>\n</a>\n<div class=\"chosen-drop\">\n  <div class=\"chosen-search\">\n    <input class=\"chosen-search-input\" type=\"text\" autocomplete=\"off\" />\n  </div>\n  <ul class=\"chosen-results\"></ul>\n</div>";};AbstractChosen.prototype.get_multi_html=function(){return"<ul class=\"chosen-choices\">\n  <li class=\"search-field\">\n    <input class=\"chosen-search-input\" type=\"text\" autocomplete=\"off\" value=\""+this.default_text+"\" />\n  </li>\n</ul>\n<div class=\"chosen-drop\">\n  <ul class=\"chosen-results\"></ul>\n</div>";};AbstractChosen.prototype.get_no_results_html=function(terms){return"<li class=\"no-results\">\n  "+this.results_none_found+" <span>"+(this.escape_html(terms))+"</span>\n</li>";};AbstractChosen.browser_is_supported=function(){if("Microsoft Internet Explorer"===window.navigator.appName){return document.documentMode>=8;}
if(/iP(od|hone)/i.test(window.navigator.userAgent)||/IEMobile/i.test(window.navigator.userAgent)||/Windows Phone/i.test(window.navigator.userAgent)||/BlackBerry/i.test(window.navigator.userAgent)||/BB10/i.test(window.navigator.userAgent)||/Android.*Mobile/i.test(window.navigator.userAgent)){return false;}
return true;};AbstractChosen.default_multiple_text="Select Some Options";AbstractChosen.default_single_text="Select an Option";AbstractChosen.default_no_result_text="No results match";return AbstractChosen;})();$=jQuery;$.fn.extend({chosen:function(options){if(!AbstractChosen.browser_is_supported()){return this;}
return this.each(function(input_field){var $this,chosen;$this=$(this);chosen=$this.data('chosen');if(options==='destroy'){if(chosen instanceof Chosen){chosen.destroy();}
return;}
if(!(chosen instanceof Chosen)){$this.data('chosen',new Chosen(this,options));}});}});Chosen=(function(superClass){extend(Chosen,superClass);function Chosen(){return Chosen.__super__.constructor.apply(this,arguments);}
Chosen.prototype.setup=function(){this.form_field_jq=$(this.form_field);return this.current_selectedIndex=this.form_field.selectedIndex;};Chosen.prototype.set_up_html=function(){var container_classes,container_props;container_classes=["chosen-container"];container_classes.push("chosen-container-"+(this.is_multiple?"multi":"single"));if(this.inherit_select_classes&&this.form_field.className){container_classes.push(this.form_field.className);}
if(this.is_rtl){container_classes.push("chosen-rtl");}
container_props={'class':container_classes.join(' '),'title':this.form_field.title};if(this.form_field.id.length){container_props.id=this.form_field.id.replace(/[^\w]/g,'_')+"_chosen";}
this.container=$("<div />",container_props);this.container.width(this.container_width());if(this.is_multiple){this.container.html(this.get_multi_html());}else{this.container.html(this.get_single_html());}
this.form_field_jq.hide().after(this.container);this.dropdown=this.container.find('div.chosen-drop').first();this.search_field=this.container.find('input').first();this.search_results=this.container.find('ul.chosen-results').first();this.search_field_scale();this.search_no_results=this.container.find('li.no-results').first();if(this.is_multiple){this.search_choices=this.container.find('ul.chosen-choices').first();this.search_container=this.container.find('li.search-field').first();}else{this.search_container=this.container.find('div.chosen-search').first();this.selected_item=this.container.find('.chosen-single').first();}
this.results_build();this.set_tab_index();return this.set_label_behavior();};Chosen.prototype.on_ready=function(){return this.form_field_jq.trigger("chosen:ready",{chosen:this});};Chosen.prototype.register_observers=function(){this.container.on('touchstart.chosen',(function(_this){return function(evt){_this.container_mousedown(evt);};})(this));this.container.on('touchend.chosen',(function(_this){return function(evt){_this.container_mouseup(evt);};})(this));this.container.on('mousedown.chosen',(function(_this){return function(evt){_this.container_mousedown(evt);};})(this));this.container.on('mouseup.chosen',(function(_this){return function(evt){_this.container_mouseup(evt);};})(this));this.container.on('mouseenter.chosen',(function(_this){return function(evt){_this.mouse_enter(evt);};})(this));this.container.on('mouseleave.chosen',(function(_this){return function(evt){_this.mouse_leave(evt);};})(this));this.search_results.on('mouseup.chosen',(function(_this){return function(evt){_this.search_results_mouseup(evt);};})(this));this.search_results.on('mouseover.chosen',(function(_this){return function(evt){_this.search_results_mouseover(evt);};})(this));this.search_results.on('mouseout.chosen',(function(_this){return function(evt){_this.search_results_mouseout(evt);};})(this));this.search_results.on('mousewheel.chosen DOMMouseScroll.chosen',(function(_this){return function(evt){_this.search_results_mousewheel(evt);};})(this));this.search_results.on('touchstart.chosen',(function(_this){return function(evt){_this.search_results_touchstart(evt);};})(this));this.search_results.on('touchmove.chosen',(function(_this){return function(evt){_this.search_results_touchmove(evt);};})(this));this.search_results.on('touchend.chosen',(function(_this){return function(evt){_this.search_results_touchend(evt);};})(this));this.form_field_jq.on("chosen:updated.chosen",(function(_this){return function(evt){_this.results_update_field(evt);};})(this));this.form_field_jq.on("chosen:activate.chosen",(function(_this){return function(evt){_this.activate_field(evt);};})(this));this.form_field_jq.on("chosen:open.chosen",(function(_this){return function(evt){_this.container_mousedown(evt);};})(this));this.form_field_jq.on("chosen:close.chosen",(function(_this){return function(evt){_this.close_field(evt);};})(this));this.search_field.on('blur.chosen',(function(_this){return function(evt){_this.input_blur(evt);};})(this));this.search_field.on('keyup.chosen',(function(_this){return function(evt){_this.keyup_checker(evt);};})(this));this.search_field.on('keydown.chosen',(function(_this){return function(evt){_this.keydown_checker(evt);};})(this));this.search_field.on('focus.chosen',(function(_this){return function(evt){_this.input_focus(evt);};})(this));this.search_field.on('cut.chosen',(function(_this){return function(evt){_this.clipboard_event_checker(evt);};})(this));this.search_field.on('paste.chosen',(function(_this){return function(evt){_this.clipboard_event_checker(evt);};})(this));if(this.is_multiple){return this.search_choices.on('click.chosen',(function(_this){return function(evt){_this.choices_click(evt);};})(this));}else{return this.container.on('click.chosen',function(evt){evt.preventDefault();});}};Chosen.prototype.destroy=function(){$(this.container[0].ownerDocument).off('click.chosen',this.click_test_action);if(this.form_field_label.length>0){this.form_field_label.off('click.chosen');}
if(this.search_field[0].tabIndex){this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex;}
this.container.remove();this.form_field_jq.removeData('chosen');return this.form_field_jq.show();};Chosen.prototype.search_field_disabled=function(){this.is_disabled=this.form_field.disabled||this.form_field_jq.parents('fieldset').is(':disabled');this.container.toggleClass('chosen-disabled',this.is_disabled);this.search_field[0].disabled=this.is_disabled;if(!this.is_multiple){this.selected_item.off('focus.chosen',this.activate_field);}
if(this.is_disabled){return this.close_field();}else if(!this.is_multiple){return this.selected_item.on('focus.chosen',this.activate_field);}};Chosen.prototype.container_mousedown=function(evt){var ref;if(this.is_disabled){return;}
if(evt&&((ref=evt.type)==='mousedown'||ref==='touchstart')&&!this.results_showing){evt.preventDefault();}
if(!((evt!=null)&&($(evt.target)).hasClass("search-choice-close"))){if(!this.active_field){if(this.is_multiple){this.search_field.val("");}
$(this.container[0].ownerDocument).on('click.chosen',this.click_test_action);this.results_show();}else if(!this.is_multiple&&evt&&(($(evt.target)[0]===this.selected_item[0])||$(evt.target).parents("a.chosen-single").length)){evt.preventDefault();this.results_toggle();}
return this.activate_field();}};Chosen.prototype.container_mouseup=function(evt){if(evt.target.nodeName==="ABBR"&&!this.is_disabled){return this.results_reset(evt);}};Chosen.prototype.search_results_mousewheel=function(evt){var delta;if(evt.originalEvent){delta=evt.originalEvent.deltaY||-evt.originalEvent.wheelDelta||evt.originalEvent.detail;}
if(delta!=null){evt.preventDefault();if(evt.type==='DOMMouseScroll'){delta=delta*40;}
return this.search_results.scrollTop(delta+this.search_results.scrollTop());}};Chosen.prototype.blur_test=function(evt){if(!this.active_field&&this.container.hasClass("chosen-container-active")){return this.close_field();}};Chosen.prototype.close_field=function(){$(this.container[0].ownerDocument).off("click.chosen",this.click_test_action);this.active_field=false;this.results_hide();this.container.removeClass("chosen-container-active");this.clear_backstroke();this.show_search_field_default();this.search_field_scale();return this.search_field.blur();};Chosen.prototype.activate_field=function(){if(this.is_disabled){return;}
this.container.addClass("chosen-container-active");this.active_field=true;this.search_field.val(this.search_field.val());return this.search_field.focus();};Chosen.prototype.test_active_click=function(evt){var active_container;active_container=$(evt.target).closest('.chosen-container');if(active_container.length&&this.container[0]===active_container[0]){return this.active_field=true;}else{return this.close_field();}};Chosen.prototype.results_build=function(){this.parsing=true;this.selected_option_count=null;this.results_data=SelectParser.select_to_array(this.form_field);if(this.is_multiple){this.search_choices.find("li.search-choice").remove();}else{this.single_set_selected_text();if(this.disable_search||this.form_field.options.length<=this.disable_search_threshold){this.search_field[0].readOnly=true;this.container.addClass("chosen-container-single-nosearch");}else{this.search_field[0].readOnly=false;this.container.removeClass("chosen-container-single-nosearch");}}
this.update_results_content(this.results_option_build({first:true}));this.search_field_disabled();this.show_search_field_default();this.search_field_scale();return this.parsing=false;};Chosen.prototype.result_do_highlight=function(el){var high_bottom,high_top,maxHeight,visible_bottom,visible_top;if(el.length){this.result_clear_highlight();this.result_highlight=el;this.result_highlight.addClass("highlighted");maxHeight=parseInt(this.search_results.css("maxHeight"),10);visible_top=this.search_results.scrollTop();visible_bottom=maxHeight+visible_top;high_top=this.result_highlight.position().top+this.search_results.scrollTop();high_bottom=high_top+this.result_highlight.outerHeight();if(high_bottom>=visible_bottom){return this.search_results.scrollTop((high_bottom-maxHeight)>0?high_bottom-maxHeight:0);}else if(high_top<visible_top){return this.search_results.scrollTop(high_top);}}};Chosen.prototype.result_clear_highlight=function(){if(this.result_highlight){this.result_highlight.removeClass("highlighted");}
return this.result_highlight=null;};Chosen.prototype.results_show=function(){if(this.is_multiple&&this.max_selected_options<=this.choices_count()){this.form_field_jq.trigger("chosen:maxselected",{chosen:this});return false;}
this.container.addClass("chosen-with-drop");this.results_showing=true;this.search_field.focus();this.search_field.val(this.get_search_field_value());this.winnow_results();return this.form_field_jq.trigger("chosen:showing_dropdown",{chosen:this});};Chosen.prototype.update_results_content=function(content){return this.search_results.html(content);};Chosen.prototype.results_hide=function(){if(this.results_showing){this.result_clear_highlight();this.container.removeClass("chosen-with-drop");this.form_field_jq.trigger("chosen:hiding_dropdown",{chosen:this});}
return this.results_showing=false;};Chosen.prototype.set_tab_index=function(el){var ti;if(this.form_field.tabIndex){ti=this.form_field.tabIndex;this.form_field.tabIndex=-1;return this.search_field[0].tabIndex=ti;}};Chosen.prototype.set_label_behavior=function(){this.form_field_label=this.form_field_jq.parents("label");if(!this.form_field_label.length&&this.form_field.id.length){this.form_field_label=$("label[for='"+this.form_field.id+"']");}
if(this.form_field_label.length>0){return this.form_field_label.on('click.chosen',this.label_click_handler);}};Chosen.prototype.show_search_field_default=function(){if(this.is_multiple&&this.choices_count()<1&&!this.active_field){this.search_field.val(this.default_text);return this.search_field.addClass("default");}else{this.search_field.val("");return this.search_field.removeClass("default");}};Chosen.prototype.search_results_mouseup=function(evt){var target;target=$(evt.target).hasClass("active-result")?$(evt.target):$(evt.target).parents(".active-result").first();if(target.length){this.result_highlight=target;this.result_select(evt);return this.search_field.focus();}};Chosen.prototype.search_results_mouseover=function(evt){var target;target=$(evt.target).hasClass("active-result")?$(evt.target):$(evt.target).parents(".active-result").first();if(target){return this.result_do_highlight(target);}};Chosen.prototype.search_results_mouseout=function(evt){if($(evt.target).hasClass("active-result")||$(evt.target).parents('.active-result').first()){return this.result_clear_highlight();}};Chosen.prototype.choice_build=function(item){var choice,close_link;choice=$('<li />',{"class":"search-choice"}).html("<span>"+(this.choice_label(item))+"</span>");if(item.disabled){choice.addClass('search-choice-disabled');}else{close_link=$('<a />',{"class":'search-choice-close','data-option-array-index':item.array_index});close_link.on('click.chosen',(function(_this){return function(evt){return _this.choice_destroy_link_click(evt);};})(this));choice.append(close_link);}
return this.search_container.before(choice);};Chosen.prototype.choice_destroy_link_click=function(evt){evt.preventDefault();evt.stopPropagation();if(!this.is_disabled){return this.choice_destroy($(evt.target));}};Chosen.prototype.choice_destroy=function(link){if(this.result_deselect(link[0].getAttribute("data-option-array-index"))){if(this.active_field){this.search_field.focus();}else{this.show_search_field_default();}
if(this.is_multiple&&this.choices_count()>0&&this.get_search_field_value().length<1){this.results_hide();}
link.parents('li').first().remove();return this.search_field_scale();}};Chosen.prototype.results_reset=function(){this.reset_single_select_options();this.form_field.options[0].selected=true;this.single_set_selected_text();this.show_search_field_default();this.results_reset_cleanup();this.trigger_form_field_change();if(this.active_field){return this.results_hide();}};Chosen.prototype.results_reset_cleanup=function(){this.current_selectedIndex=this.form_field.selectedIndex;return this.selected_item.find("abbr").remove();};Chosen.prototype.result_select=function(evt){var high,item;if(this.result_highlight){high=this.result_highlight;this.result_clear_highlight();if(this.is_multiple&&this.max_selected_options<=this.choices_count()){this.form_field_jq.trigger("chosen:maxselected",{chosen:this});return false;}
if(this.is_multiple){high.removeClass("active-result");}else{this.reset_single_select_options();}
high.addClass("result-selected");item=this.results_data[high[0].getAttribute("data-option-array-index")];item.selected=true;this.form_field.options[item.options_index].selected=true;this.selected_option_count=null;if(this.is_multiple){this.choice_build(item);}else{this.single_set_selected_text(this.choice_label(item));}
if(this.is_multiple&&(!this.hide_results_on_select||(evt.metaKey||evt.ctrlKey))){if(evt.metaKey||evt.ctrlKey){this.winnow_results({skip_highlight:true});}else{this.search_field.val("");this.winnow_results();}}else{this.results_hide();this.show_search_field_default();}
if(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex){this.trigger_form_field_change({selected:this.form_field.options[item.options_index].value});}
this.current_selectedIndex=this.form_field.selectedIndex;evt.preventDefault();return this.search_field_scale();}};Chosen.prototype.single_set_selected_text=function(text){if(text==null){text=this.default_text;}
if(text===this.default_text){this.selected_item.addClass("chosen-default");}else{this.single_deselect_control_build();this.selected_item.removeClass("chosen-default");}
return this.selected_item.find("span").html(text);};Chosen.prototype.result_deselect=function(pos){var result_data;result_data=this.results_data[pos];if(!this.form_field.options[result_data.options_index].disabled){result_data.selected=false;this.form_field.options[result_data.options_index].selected=false;this.selected_option_count=null;this.result_clear_highlight();if(this.results_showing){this.winnow_results();}
this.trigger_form_field_change({deselected:this.form_field.options[result_data.options_index].value});this.search_field_scale();return true;}else{return false;}};Chosen.prototype.single_deselect_control_build=function(){if(!this.allow_single_deselect){return;}
if(!this.selected_item.find("abbr").length){this.selected_item.find("span").first().after("<abbr class=\"search-choice-close\"></abbr>");}
return this.selected_item.addClass("chosen-single-with-deselect");};Chosen.prototype.get_search_field_value=function(){return this.search_field.val();};Chosen.prototype.get_search_text=function(){return $.trim(this.get_search_field_value());};Chosen.prototype.escape_html=function(text){return $('<div/>').text(text).html();};Chosen.prototype.winnow_results_set_highlight=function(){var do_high,selected_results;selected_results=!this.is_multiple?this.search_results.find(".result-selected.active-result"):[];do_high=selected_results.length?selected_results.first():this.search_results.find(".active-result").first();if(do_high!=null){return this.result_do_highlight(do_high);}};Chosen.prototype.no_results=function(terms){var no_results_html;no_results_html=this.get_no_results_html(terms);this.search_results.append(no_results_html);return this.form_field_jq.trigger("chosen:no_results",{chosen:this});};Chosen.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove();};Chosen.prototype.keydown_arrow=function(){var next_sib;if(this.results_showing&&this.result_highlight){next_sib=this.result_highlight.nextAll("li.active-result").first();if(next_sib){return this.result_do_highlight(next_sib);}}else{return this.results_show();}};Chosen.prototype.keyup_arrow=function(){var prev_sibs;if(!this.results_showing&&!this.is_multiple){return this.results_show();}else if(this.result_highlight){prev_sibs=this.result_highlight.prevAll("li.active-result");if(prev_sibs.length){return this.result_do_highlight(prev_sibs.first());}else{if(this.choices_count()>0){this.results_hide();}
return this.result_clear_highlight();}}};Chosen.prototype.keydown_backstroke=function(){var next_available_destroy;if(this.pending_backstroke){this.choice_destroy(this.pending_backstroke.find("a").first());return this.clear_backstroke();}else{next_available_destroy=this.search_container.siblings("li.search-choice").last();if(next_available_destroy.length&&!next_available_destroy.hasClass("search-choice-disabled")){this.pending_backstroke=next_available_destroy;if(this.single_backstroke_delete){return this.keydown_backstroke();}else{return this.pending_backstroke.addClass("search-choice-focus");}}}};Chosen.prototype.clear_backstroke=function(){if(this.pending_backstroke){this.pending_backstroke.removeClass("search-choice-focus");}
return this.pending_backstroke=null;};Chosen.prototype.search_field_scale=function(){var div,i,len,style,style_block,styles,width;if(!this.is_multiple){return;}
style_block={position:'absolute',left:'-1000px',top:'-1000px',display:'none',whiteSpace:'pre'};styles=['fontSize','fontStyle','fontWeight','fontFamily','lineHeight','textTransform','letterSpacing'];for(i=0,len=styles.length;i<len;i++){style=styles[i];style_block[style]=this.search_field.css(style);}
div=$('<div />').css(style_block);div.text(this.get_search_field_value());$('body').append(div);width=div.width()+25;div.remove();if(this.container.is(':visible')){width=Math.min(this.container.outerWidth()-10,width);}
return this.search_field.width(width);};Chosen.prototype.trigger_form_field_change=function(extra){this.form_field_jq.trigger("input",extra);return this.form_field_jq.trigger("change",extra);};return Chosen;})(AbstractChosen);}).call(this);;function set_up_linked_fields(linked_fields_list){for(var i in linked_fields_list){set_up_linked_field(linked_fields_list[i]);}};function set_up_linked_field(linked_fields){$('form').on('change','select[name='+linked_fields.fields[0]+']',function(){var target_vals=linked_fields.values[$(this).val()];var target=$('select[name='+linked_fields.fields[1]+']');var target_selection_is_valid=(!$(this).val()||(target_vals&&(target_vals.indexOf(target.val())>-1)))||select_alternative_option(target,target_vals);if(!target_selection_is_valid){target.val('');}
target.trigger("liszt:updated");if(target_vals){$(target.next().find('li').get().reverse()).each(function(){if(target_vals.indexOf($(this).text())>-1){$(this).parent().prepend($(this).addClass('added').detach());}});}
if(!target_selection_is_valid){target.next().find('ul').scrollTop(0);}});$('form').on('change','select[name='+linked_fields.fields[1]+']',function(){var $source=$('select[name='+linked_fields.fields[0]+']');if($source.length){var target_val=$(this).val();if(target_val){target_val=$(this).find('option:selected').text();var target_vals=linked_fields.values[$source.val()]||[];if(target_vals.indexOf(target_val)==-1){var source_val='';if(linked_fields.update_source){for(var val in linked_fields.values){if(linked_fields.values[val].indexOf(target_val)>-1){source_val=val;break;}}}
$source.val(source_val);$source.trigger('liszt:updated');$(this).trigger('liszt:updated');}}}});for(var i in linked_fields.fields){$('select[name='+linked_fields.fields[i]+']').trigger('change');}};function select_alternative_option(target,valid_vals){var ret=false;var target_val=$(target).val();if(target_val){$(target).find('option[value='+target_val+']').each(function(){if(valid_vals.indexOf($(this).text())>-1){$(this).prop('selected',true);ret=true;}});}
return ret;};;$(document).ready(function(){var originals=[];$("#reset").click(function(){$('#filtersform select').each(function(){originals.push(this[0].firstChild.nodeValue)})
$(".chzn-results").val("");var f=($("ul .chzn-single span"))
for(var i=0;i<f.length;i++){f[i].firstChild.nodeValue=originals[i]}});});;var Star=function(options){var self=this;var defaults={className:'.droppable_image',parentName:'.folio-image-wrapper'};if(options&&!$.isEmptyObject(options)){defaults=$.extend(defaults,options);}
var init=function(){events();};var events=function(){var elements=$(defaults.className);findStarredInPage();elements.closest(defaults.parentName).on('mouseenter',function(event){dialog.init($(this).find(defaults.className));}).on('mouseleave',function(event){dialog.hide();});events_image_to_lightbox();};var events_image_to_lightbox=function(){var selectedCollection=getCurrentCollection();var image_to_lightbox=$("#image_to_lightbox");var imageid=image_to_lightbox.data('id');if(isInCollection(selectedCollection,imageid,'image')){image_to_lightbox.children().addClass('starred').removeClass('unstarred');image_to_lightbox.attr('data-original-title','Remove page from collection');}
image_to_lightbox.click(function(){if($(this).children().hasClass('starred')){removeFromCollection(image_to_lightbox,'image');$(this).children().removeClass('starred').addClass('unstarred');image_to_lightbox.attr('data-original-title','Add page to collection');}else{add_to_lightbox($(this),'image',imageid,false);$(this).children().removeClass('unstarred').addClass('starred');image_to_lightbox.attr('data-original-title','Remove page from collection');}
return false;}).tooltip();}
var dialog={init:function(image){var _self=this;if(!$("#dialog-star").length){_self.element=_self.create(image);_self.show(image);}},create:function(image){var element=null;return this.fill(image,element);},fill:function(image,element){var data=getData(image);var star=$('<span id="dialog-star" data-toggle="tooltip" data-container="body" title="Add image to collection" class="glyphicon glyphicon-star star-icon unstarred"></span>');var selectedCollection=getCurrentCollection();if(isInCollection(selectedCollection,data.id,data.type)){star.addClass('starred').removeClass("unstarred");star.attr('title','Image added to collection');}
star.tooltip();return star;},show:function(image){var element=this.element;image.append(element);this.events(element,image);},hide:function(){var element=$("#dialog-star");element.fadeOut().remove();},events:function(element,image){element.on('click',function(){if($(this).hasClass('starred')){removeFromCollection(image);}else{addToCollection(image);}
return false;});}};var getDataAttrName=function(image){return collection_types[image.data('type')].idattr||'id';}
var getData=function(image){return{'type':image.data('type'),'id':image.data(getDataAttrName(image))};};var addToCollection=function(image){var data=getData(image);if(add_to_lightbox(image,data.type,data.id,false)){dialog.element.addClass('starred').removeClass('unstarred');var _type=getDataAttrName(image);var element=$("[data-"+_type+"='"+data.id+"']");if(typeof element.data('add-star')!=='undefined'&&!element.data('add-star')){return false;}
var star="<span class='glyphicon glyphicon-star star-icon starred-image'></span>";if(element.find('.starred-image').length)return false;element.append(star);}};var removeFromCollection=function(image,type){var _self=this;var collections=JSON.parse(localStorage.getItem('collections'));var collection_id=getCurrentCollection();var collection=getCollection(collection_id);var data=getData(image);data.type+='s';for(var i=0;i<collection[data.type].length;i++){if(collection[data.type][i]==data.id){collection[data.type].splice(i,1);i--;notify('Image removed from Collection','success');break;}}
if(dialog.element){dialog.element.addClass('unstarred').removeClass('starred');}
var _type=getDataAttrName(image);var element=$("[data-"+_type+"='"+data.id+"']");element.find('.starred-image').remove();collections[collection.name]=collection;localStorage.setItem('collections',JSON.stringify(collections));update_collection_counter();};var getElementsFromCollections=function(){var collections=JSON.parse(localStorage.getItem('collections'));var collection;var arrays=['images','annotations'];var allElements={};$.each(collections,function(index,value){for(var i=0;i<arrays.length;i++){if(value.hasOwnProperty(values[i])){for(var j=0;j<value[arrays[i]].length;j++){allElements[value[arrays[i]][j]]=value.id;}}}});return allElements;};var getCollection=function(collection_id){var collections=JSON.parse(localStorage.getItem('collections'));var collection;$.each(collections,function(index,value){if(value.id==collection_id){collection=value;collection['name']=index;return false;}});return collection;};var isInCollection=function(collection_id,id,type){var collection=getCollection(collection_id);var found=false;type+='s';if(collection&&collection.hasOwnProperty(type)){for(var i=0;i<collection[type].length;i++){if(collection[type][i]==id){found=true;break;}}}
return found;};var getCurrentCollection=function(){return localStorage.getItem('selectedCollection');};var findStarredInPage=function(){var collection_id=getCurrentCollection();var graphs=$('.droppable_image[data-graph], .droppable_image[data-id]');var star="<span class='glyphicon glyphicon-star starred-image star-icon'></span>";$.each(graphs,function(index,value){value=$(value);var id=value.data('id');var type=value.data('type')||'annotation';var graphid=value.data('graph');if(graphid){id=graphid;}
if(isInCollection(collection_id,id,type)){if(typeof value.data('add-star')==='undefined'||value.data('add-star')){value.append(star);}}});};return{'init':init,"removeFromCollection":removeFromCollection,"getCurrentCollection":getCurrentCollection,"isInCollection":isInCollection};};$(document).ready(function(){var star=new Star();window.collection_star=star;star.init();});;init_search_page({"advanced_search_expanded":true,"filters":[{"html":"<li>\n    \n    \n    <select name=\"index\" id=\"catalogue-number-select\" class=\"chzn-select\" data-placeholder=\"Choose a Catalogue Number\">\n  <option value=\"\" selected>Catalogue Number</option>\n\n</select>\n    \n    \n  </li>\n\n  <li>\n    \n    \n    <select name=\"repository\" id=\"repository-select\" class=\"chzn-select\" data-placeholder=\"Choose a Repository\">\n  <option value=\"\" selected>Repository</option>\n\n  <option value=\"Place object (1), new_rep\">Place object (1), new_rep</option>\n\n</select>\n    \n    \n  </li>\n\n  <li>\n    \n    \n    <select name=\"ms_date\" id=\"date-select\" class=\"chzn-select\" data-placeholder=\"Choose a Date\">\n  <option value=\"\" selected>Date</option>\n\n</select>\n    \n    \n      \n    \n  </li>","label":"Manuscripts","key":"manuscripts"},{"html":"<li>\n    \n    \n    <select name=\"scribe\" id=\"scribe-select\" class=\"chzn-select\" data-placeholder=\"Choose a Scribe\">\n  <option value=\"\" selected>Scribe</option>\n\n</select>\n    \n    \n  </li>\n\n  <li>\n    \n    \n    <select name=\"repository\" id=\"repository-select\" class=\"chzn-select\" data-placeholder=\"Choose a Repository\">\n  <option value=\"\" selected>Repository</option>\n\n</select>\n    \n    \n  </li>\n\n  <li>\n    \n    \n    <select name=\"hand_place\" id=\"place-select\" class=\"chzn-select\" data-placeholder=\"Choose a Place\">\n  <option value=\"\" selected>Place</option>\n\n</select>\n    \n    \n  </li>\n\n  <li>\n    \n    \n    <select name=\"hand_date\" id=\"date-select\" class=\"chzn-select\" data-placeholder=\"Choose a Date\">\n  <option value=\"\" selected>Date</option>\n\n</select>\n    \n    \n      \n    \n  </li>","label":"Hands","key":"hands"},{"html":"<li>\n    \n    \n    <select name=\"scribe\" id=\"scribe-select\" class=\"chzn-select\" data-placeholder=\"Choose a Scribe\">\n  <option value=\"\" selected>Scribe</option>\n\n</select>\n    \n    \n  </li>\n\n  <li>\n    \n    \n    <select name=\"scriptorium\" id=\"place-select\" class=\"chzn-select\" data-placeholder=\"Choose a Place\">\n  <option value=\"\" selected>Place</option>\n\n</select>\n    \n    \n  </li>\n\n  <li>\n    \n    \n    <select name=\"scribe_date\" id=\"date-select\" class=\"chzn-select\" data-placeholder=\"Choose a Date\">\n  <option value=\"\" selected>Date</option>\n\n</select>\n    \n    \n  </li>\n\n  <li>\n    \n    \n    <select name=\"chartype\" id=\"chartype\" class=\"chzn-select\" data-placeholder=\"Choose a Character Type\">\n  <option value=\"\" selected>Character Type</option>\n\n</select>\n    \n    \n  </li>\n\n  <li>\n    \n    \n    <select name=\"character\" id=\"character\" class=\"chzn-select\" data-placeholder=\"Choose a Character\">\n  <option value=\"\" selected>Character</option>\n\n</select>\n    \n    \n  </li>\n\n  <li>\n    \n    \n    <select name=\"component\" id=\"component-select\" class=\"chzn-select\" data-placeholder=\"Choose a Component\">\n  <option value=\"\" selected>Component</option>\n\n</select>\n    \n    \n  </li>\n\n  <li>\n    \n    \n    <select name=\"feature\" id=\"feature-select\" class=\"chzn-select\" data-placeholder=\"Choose a Feature\">\n  <option value=\"\" selected>Feature</option>\n\n</select>\n    \n    \n      \n    \n  </li>","label":"Scribes","key":"scribes"},{"html":"<li>\n    \n    \n    <select name=\"script\" id=\"script\" class=\"chzn-select\" data-placeholder=\"Choose a Script\">\n  <option value=\"\" selected>Script</option>\n\n</select>\n    \n    \n  </li>\n\n  <li>\n    \n    \n    <select name=\"chartype\" id=\"chartype\" class=\"chzn-select\" data-placeholder=\"Choose a Character Type\">\n  <option value=\"\" selected>Character Type</option>\n\n</select>\n    \n    \n  </li>\n\n  <li>\n    \n    \n    <select name=\"character\" id=\"character\" class=\"chzn-select\" data-placeholder=\"Choose a Character\">\n  <option value=\"\" selected>Character</option>\n\n</select>\n    \n    \n  </li>\n\n  <li>\n    \n    \n    <select name=\"allograph\" id=\"allograph\" class=\"chzn-select\" data-placeholder=\"Choose an Allograph\">\n  <option value=\"\" selected>Allograph</option>\n\n</select>\n    \n    \n  </li>\n\n  <li>\n    \n    \n    <select name=\"component\" id=\"component\" class=\"chzn-select\" data-placeholder=\"Choose a Component\">\n  <option value=\"\" selected>Component</option>\n\n</select>\n    \n    \n  </li>\n\n  <li>\n    \n    \n    <select name=\"feature\" id=\"feature\" class=\"chzn-select\" data-placeholder=\"Choose a Feature\">\n  <option value=\"\" selected>Feature</option>\n\n  <option value=\"-1\">No Features</option>\n\n  <option value=\"-2\">One of more features</option>\n\n</select>\n    \n    \n      \n    \n  </li>","label":"Graphs","key":"graphs"}],"linked_fields":[{"fields":["chartype","character"],"values":{},"update_source":false},{"fields":["character","allograph"],"values":{},"update_source":true}]});;var api=new DigipalAPI({crossDomain:false,root:'/digipal/api'});var local_cache={};function update_dialog(prefix,data,selectedAnnotations,callback,cache){if(typeof annotator!=='undefined'&&annotator.selectedFeature!=='undefined'&&annotator.selectedFeature&&annotator.selectedFeature.isTemporary){callback('');}
var s='<div id="box_features_container">';var array_features_owned=features_saved(data.features);var allographs=data.allographs.components;var string_summary="";if(!allographs.length){s+='<p class="component" style="margin:0;">No common components</p>';string_summary="<span class='component_summary'>No componensts</span>";}else{$.each(allographs,function(idx){component=allographs[idx].name;component_id=allographs[idx].id;var features=allographs[idx].features;s+="<div class='component_labels' data-id='"+prefix+"component_"+component_id+"' style='border-bottom:1px solid #ccc'><b>"+component+" <span class='arrow_component fa fa-angle-double-down'></span></b>";s+="<div class='checkboxes_div btn-group'><span data-toggle='tooltip' data-container='body'  title='Check all' data-component = '"+component_id+"' class='check_all btn btn-xs btn-default'><i class='fa fa-check-square-o'></i></span> <span title='Unheck all' data-toggle='tooltip' data-container='body' data-component = '"+component_id+"' class='uncheck_all btn btn-xs btn-default'><i class='fa fa-square-o'></i></span><span data-component = '"+component_id+"' title='Check by default' data-toggle='tooltip' data-container='body' class='set_by_default btn btn-xs btn-default'><i class='fa fa-plus-square'></i></span></div></div>";s+="<div id='"+prefix+"component_"+component_id+"' data-hidden='false' class='feature_containers'>";string_summary+="<span class='component_summary' data-component='"+component_id+"'>"+allographs[idx].name+"</span>";var n=0;$.each(features,function(idx){var value=component_id+'::'+features[idx].id;var id=component_id+'_'+features[idx].id;var names=component+':'+features[idx].name;s+='<div class="row row-no-margin">';if(cache){var f=selectedAnnotations;var al='';var d=0;var temporary_vectors=[];var title='';var ann;for(var k=0;k<f.length;k++){var graph=cache.graphs[f[k]];var features_graph=graph.features;for(var j=0;j<features_graph.length;j++){if(features_graph[j].component_id==component_id&&features_graph[j].feature.indexOf(features[idx].name)>=0){d++;temporary_vectors.push(names);}}}
var array_features_owned_temporary=array_features_owned.concat(temporary_vectors);if(array_features_owned_temporary.indexOf(names)>=0){string_summary+="<span data-component='"+component_id+"' title='"+features[idx].name+"' data-feature = '"+features[idx].id+"' class='feature_summary'>"+features[idx].name+' '+al+"</span>";n++;}}
if(typeof annotator!=='undefined'){if(typeof annotator.selectedFeature!=="undefined"&&annotator.selectedFeature!==null&&annotator.selectedFeature.state=='Insert'){array_features_owned=annotator.selectedFeature.features;names=value;}
if(array_features_owned.indexOf(names)>=0){s+="<p class='col-md-2'><input id='"+id+"' type='checkbox' value='"+value+"' class='features_box' data-feature = '"+features[idx].id+"' checked /> ";}else{s+="<p class='col-md-2'><input id='"+id+"' type='checkbox' value='"+value+"' class='features_box' data-feature = '"+features[idx].id+"' /> ";}
s+="<p class='col-md-10'><label style='font-size:12px;display:inline;vertical-align:bottom;' for='"+id+"'>"+features[idx].name+"</label></p>";}else{if(array_features_owned.indexOf(names)>=0){s+="<p class='col-md-2'> <input id='"+id+"' type='checkbox' value='"+value+"' class='features_box' data-feature = '"+features[idx].id+"' checked />";}else{s+="<p class='col-md-2'> <input id='"+id+"' type='checkbox' value='"+value+"' class='features_box' data-feature = '"+features[idx].id+"'/>";}
s+="<p class='col-md-10'><label style='font-size:12px;display:inline;vertical-align:bottom;' for='"+id+"'>"+features[idx].name+"</label></p>";}
s+='</div>';});if(!n){string_summary+="<span class='feature_summary' data-feature = '0' data-component='"+component_id+"'>undefined</span>";}
s+="</div>";});}
s+="</div>";if(callback){callback(s,string_summary);}}
function features_saved(features){var array_features_owned=[];if(features&&features.length){for(var i=0;i<features.length;i++){for(var j=0;j<features[i].feature.length;j++){s=features[i].name;s+=':'+features[i].feature[j];array_features_owned.push(s);}
s='';}}
return array_features_owned;}
var load_group=function(group_element,cache,only_features,callback){if(!$('#allographs_loader_gif').length){$('.myModalLabel .deselect_all_graphs').after(" <img id='allographs_loader_gif' src='/static/digipal/images/ajax-loader3.gif' />");}
var graphs,graph,url,graphs_list=[];var content_type='graph';graphs=group_element.find('[data-graph]');$.each(graphs,function(){graph=$(this).data('graph');if(!cache.search('graph',graph)){graphs_list.push(graph);}});reload_cache(graphs_list,cache,only_features,callback);$("#allographs_loader_gif").remove();};var reload_cache=function(graphs,cache,only_features,callback){var url,content_type='graph';$('#features_container').html('<img style="position:absolute;top:40%;left:40%;" src="/static/digipal/images/ajax-loader4.gif" />');if(graphs.length){url='old/'+content_type+'/'+graphs.toString()+'/';if(only_features){url+='features';}
if(local_cache[url])return local_cache[url];api.request(url,function(data){for(var i=0;i<data.length;i++){var graph=data[i].graph;var allograph=data[i].allograph_id;if(!cache.search("allograph",allograph)&&!only_features){cache.update('allograph',allograph,data[i]);}
if(!cache.search("graph",graph)){cache.update('graph',graph,data[i]);}}
local_cache[url]=data;if(callback){callback(data);}});}else{if(callback){callback();}}};var get_graph=function(graph_id,data,cache){var result={};var graphs=cache.graphs;var graph=cache.graphs[graph_id];result['allographs']=cache.allographs[graph.allograph_id];result['features']=graph['features'];result['allograph_id']=graph.allograph_id;result['graph_id']=graph_id;result['hand_id']=graph['hand_id'];result['hands']=graph['hands'];result['aspects']=graph['aspects'];result['item_part']=graph['item_part'];return result;};function intersect(a,b){var intersection=[].concat(a);var temp=[];for(var i=0;i<b.length;i++){if(intersection.indexOf(b[i])<0){temp.push(b[i]);}}
for(i=0;i<intersection.length;i++){if(b.indexOf(intersection[i])<0){temp.push(intersection[i]);}}
for(i=0;i<intersection.length;i++){for(var g=0;g<temp.length;g++){if(temp[g]==intersection[i]){intersection.splice(i,1);i--;}}}
return intersection;}
function common_allographs(selectedAnnotations,cacheAnn,graph){var allographs=[],hands=[],item_parts=[];var cache=$.extend(true,{},cacheAnn);var select_hand=$('.myModal .hand_form');var select_allograph=$('.myModal .allograph_form');for(var j=0;j<selectedAnnotations.length;j++){var allograph_id=cache.graphs[selectedAnnotations[j]].allograph_id;var hand_id=cache.graphs[selectedAnnotations[j]].hand_id;var item_part=cache.graphs[selectedAnnotations[j]].item_part;allographs.push(allograph_id);hands.push(hand_id);item_parts.push(item_part);}
var flag_allograph=1,flag_hand=1,flag_ip=1;for(var h=1;h<allographs.length;h++){if(allographs[0]!=allographs[h]){flag_allograph=0;break;}}
for(h=1;h<hands.length;h++){if(hands[0]!=hands[h]){flag_hand=0;break;}}
for(h=1;h<item_parts.length;h++){if(item_parts[0]!=item_parts[h]){flag_ip=0;break;}}
if(!flag_allograph){select_allograph.val('------');}else{select_allograph.val(graph.allograph_id);}
if(!flag_hand&&flag_ip){select_hand.text('------');select_hand.val('');}else if(!flag_hand&&!flag_ip){select_hand.html('<option selected value>------</option>');}else{select_hand.val(graph.hand_id);}
select_hand.add(select_allograph).trigger('liszt:updated');}
function common_components(selectedAnnotations,_cacheAnnotations,data,type){if(!data){return false;}
var cacheAnnotations=$.extend(true,{},_cacheAnnotations);if(typeof type=='undefined'||!type){type="components";}
var allograph_id,allograph,allographs,allograph_names=[],cacheAnn=[];var ind=0;while(ind<selectedAnnotations.length){if(typeof cacheAnnotations.graphs[selectedAnnotations[ind]]!=='undefined'){allograph_id=cacheAnnotations.graphs[selectedAnnotations[ind]].allograph_id;allographs=$.extend(true,{},cacheAnnotations.allographs[allograph_id][type]);cacheAnn.push(allographs);}
ind++;}
var copy_data=data.slice(0);var n=0;var arrays=[];for(var i in cacheAnn){var array=[];if($.isEmptyObject(cacheAnn[i])){copy_data=[];return copy_data;}
for(var a in cacheAnn[i]){all=cacheAnn[i][a].name;array.push(all);}
arrays.push(array);n++;}
var ints=arrays[0],intersection;for(var h=0;h<arrays.length-1;h++){intersection=intersect(ints,arrays[h+1]);ints=intersection;}
for(var k=0;k<copy_data.length;k++){if(intersection.indexOf(copy_data[k].name)<0){copy_data.splice(k,1);k--;}}
return copy_data;}
function preprocess_features(graphs,_cache,type){var graph,all=[],features,component_id;var cache=$.extend(true,{},_cache);if(!type){type='features';}
for(var i=0;i<graphs.length;i++){graph_id=graphs[i];graph=cache.graphs[graph_id];features=graph[type];obj={graph:graph_id};for(var d=0;d<features.length;d++){if(type=='features'){component_id=features[d].component_id;}else{component_id=features[d].id;}
if(!obj.hasOwnProperty(component_id)){obj[component_id]={};obj[component_id][type]=[];}
var f;if(type=='features'){f=features[d].feature[0];}else{f=features[d].name;}
obj[component_id][type].push(f);}
all.push(obj);}
return all;}
function compute_features(graphs,checkboxes,type){var iterations;var ticked=[],unticked=[],indeterminate=[];var graph,graph_next,parent;if(type=='features'||!type){type='features';parent=checkboxes.closest('#box_features_container').parent();}else{parent=$('#notes_tab').parent();}
$.each(checkboxes,function(){var checkbox=$(this);var label=parent.find('label[for="'+checkbox.attr('id')+'"]');var val=label.text();var component=checkbox.val().split(':')[0];if(graphs.length>1){iterations=graphs.length-1;}else{iterations=1;}
for(var i=0;i<iterations;i++){if(graphs.length>1){if(graphs[i].hasOwnProperty(component)){graph=graphs[i][component][type];}else{graph=[];}
if(graphs[i+1].hasOwnProperty(component)){graph_next=graphs[i+1][component][type];}else{graph_next=[];}
if(graph.indexOf(val)>=0&&graph_next.indexOf(val)<0||graph.indexOf(val)<0&&graph_next.indexOf(val)>=0){indeterminate.push(checkbox.attr('id'));}else if(graph.indexOf(val)>=0&&graph_next.indexOf(val)>=0){checkbox.prop('checked',true);checkbox.prop('indeterminate',false);ticked.push(val);}else{checkbox.prop('checked',false);checkbox.prop('indeterminate',false);unticked.push(val);}}else if(graphs.length==1){if(!graphs[0].hasOwnProperty(component)||typeof graphs[0][component][type]=='undefined'){graph=[];}else{graph=graphs[0][component][type];}
if(graph.indexOf(val)>=0){checkbox.prop('checked',true);}else{checkbox.prop('checked',false);}
checkbox.prop('indeterminate',false);}else{return false;}}});for(ind=0;ind<indeterminate.length;ind++){parent.find('#'+indeterminate[ind]).prop('indeterminate',true);}}
function detect_common_features(selectedAnnotations,checkboxes,_cache){var cache=$.extend(true,{},_cache);var features_preprocessed=preprocess_features(selectedAnnotations,cache);compute_features(features_preprocessed,checkboxes);var aspects_processed=preprocess_features(selectedAnnotations,cache,"aspects");var aspects_checkbox=$('.aspect');compute_features(aspects_processed,aspects_checkbox,"aspects");checkboxes.add(aspects_checkbox).unbind().on('change',function(){var state=$(this).data('state');if(!state){state=1;$(this).data('state',state);}else if(state<2){state+=1;$(this).data('state',state);}else if(state===2){$(this).prop('indeterminate',true);state=0;$(this).data('state',state);}});}
function check_features_by_default(component_id,allograph_id,cache){var allograph=cache.allographs[allograph_id];var components=allograph.components;for(var component in components){if(components[component].hasOwnProperty('default')&&components[component].default.length){for(var i=0;i<components[component].default.length;i++){var default_feature=components[component].default[i].component+'::'+components[component].default[i].feature;var checkbox_val=$('input[value="'+default_feature+'"]');if(checkbox_val.length&&checkbox_val.val().split('::')[0]==component_id){checkbox_val.prop('checked',true);}}}}}
function updateStatus(msg,status){var running=running||true;if(typeof status=='undefined'){status='warning';}
if(running){clearInterval(timeout);$('#status').remove();}
var status_element=$('#status');if(!status_element.length){status_element=$('<div id="status">');$('body').append(status_element.hide());}
status_element.css('z-index',5000);status_class=status?' alert-'+status:'';status_element.attr('class','alert'+status_class);status_element.html(msg).fadeIn();var timeout=setTimeout(function(){status_element.fadeOut();running=false;},5000);if(typeof annotator!=='undefined'){annotator.map.render(annotator.map.div);}}
function load_aspects(aspects,graph,_cache){var aspects_list="";var graph_aspects=null;var cache=$.extend(true,{},_cache);if(cache.graphs.hasOwnProperty(graph)){if(cache.graphs[graph].hasOwnProperty('aspects')){graph_aspects=cache.graphs[graph].aspects;}}
if(aspects.length){for(var i=0;i<aspects.length;i++){var checked="";if(typeof graph_aspects!=="undefined"&&graph_aspects){for(var j=0;j<graph_aspects.length;j++){if(graph_aspects[j].id==aspects[i].id){checked="checked";break;}}}
aspects_list+="<div class='component_labels'><input "+checked+" data-checked='"+checked+"'  class='aspect' id='"+aspects[i].id+"' type='checkbox' value='"+aspects[i].id+"' /> <label for='"+aspects[i].id+"'>"+aspects[i].name+"</label></div>";aspects_list+="<div class='feature_containers'>";for(var j=0;j<aspects[i].features.length;j++){aspects_list+="<p class='feature'>- "+aspects[i].features[j].name+"</p>";}
aspects_list+="</div>";}}else{aspects_list+="<p class='component'>No common aspects (or not defined)</p>";}
return aspects_list;}
function init_note_field($field,annotator,note_key,placeholder){$field=$($field);$field.notebook({placeholder:placeholder||'Type description here...'});if(annotator&&annotator.selectedFeature){$field.html(annotator.selectedFeature[note_key]||'');}
$field.on('contentChange',function(e){if(e.originalEvent&&e.originalEvent.detail&&e.originalEvent.detail.content){annotator.selectedFeature[note_key]=e.originalEvent.detail.content;remove_url_div();}});return $field;}
function remove_url_div(){if($('.allograph_url_div').length){$('.allograph_url_div').remove();}
$('.tooltip').remove();$('.url_allograph').data('hidden',true);}
function setNotes(selectedFeature,dialog){var display_note=$('<div>');display_note.attr('id','id_display_note').attr('name','display_note').addClass('form-control');var internal_note=$('<div>');internal_note.attr('id','id_internal_note').attr('name','internal_note').addClass('form-control');display_note.notebook().html(selectedFeature.display_note);display_note.on('keyup',function(){selectedFeature.display_note=$(this).html();remove_url_div();}).on('contentChange',function(){selectedFeature.display_note=$(this).html();remove_url_div();});internal_note.notebook().html(selectedFeature.internal_note);internal_note.on('keyup',function(){selectedFeature.internal_note=$(this).html();remove_url_div();}).on('contentChange',function(){selectedFeature.internal_note=$(this).html();remove_url_div();});var notes="";notes+="<p id='label_display_note' class='component_labels' data-id='id_display_note' data-hidden='false'><b>Public Note</b></p>";notes+="<p id='label_internal_note' class='component_labels' data-id='id_internal_note' data-hidden='false'><b>Internal Note</b></p>";dialog.html(notes);$('#label_display_note').after(display_note);$('#label_internal_note').after(internal_note);}
function isNodeEmpty(node){var self_closed=["AREA","BR","COL","EMBED","HR","IMG","INPUT","LINK","META","PARAM"];if(node){var string=$.parseHTML(node);var emptyNodes=0;var value;for(var i=0;i<string.length;i++){if(string[i].nodeName=='#text'){value=string[i].nodeValue;}else{value=string[i].innerText;}
if(($.trim(value)===''||$.trim(value)=='Type display note here...'||$.trim(value)=='Type internal note here...')&&self_closed.indexOf(string[i].nodeName)<0){emptyNodes++;}}
return emptyNodes===string.length;}};function Dialog(){var open=false;var summary=true;var element_cache=false;var temp={};var defaultOptions={'container':'body','draggable':true,'summary':true,};var init=function(image_id,options,callback){$.extend(defaultOptions,options);create_dialog(image_id,function(selector){var d={'hide':hide,'update':update,'show':show,'selector':selector,'events':events,'edit_letter':edit_letter,'open':open,'set_label':set_label,'events_postLoading':events_postLoading};if(callback){callback(d);}});};var create_dialog=function(image_id,callback){var modal_features;var ABSOLUTE_URL='/digipal/page/dialog/';if(!$('.myModal#modal_features').length){var modal_element=$("<div class='myModal' id='modal_features'>");$(defaultOptions.container).append(modal_element);}
modal_features=$('.myModal');temp.image_id=image_id;var url;if(!element_cache){url=ABSOLUTE_URL+image_id+'/';$.ajax({type:'GET',url:url,success:function(data){if(!element_cache){modal_features.html(data);modal_features.append("<div id='summary'>");element_cache=data;}
selector=modal_features;if(callback){callback(selector);}
events(selector);}});}else{modal_features.html(element_cache);selector=modal_features;if(!$('#summary').length){selector.append("<div id='summary'>");}
if(callback){callback(selector);}
events(selector);}};var events=function(selector){var show_summary_button=$('#show_summary');var summary_element=$('#summary');if(defaultOptions.summary){summary_element.show();summary=true;show_summary_button.addClass('active');show_summary_button.unbind().click(function(){show_summary(show_summary_button,summary_element);});}else{summary_element.remove();summary=false;show_summary_button.remove();}
var allograph_form=selector.find('.allograph_form');allograph_form.unbind('change').on('change',function(){update_onChange($(this).val(),selector);});selector.find('.close').click(function(){hide();});if(defaultOptions.draggable){selector.draggable({handle:'.modal_header'});}
var maximized=false;var maximize_icon=$('#maximize');var myModal=selector;maximize_icon.on('click',function(){if(summary){summary_element.hide();}
if(!maximized){myModal.animate({'position':'fixed','top':"0px",'left':'59.5%',"width":'40%',"height":'100%'},400,function(){if(summary){summary_element.show();summary_element.css('bottom','95%');}
myModal.find('.modal-body').css("max-height","100%");maximize_icon.attr('title','Minimize box').removeClass('icon-resize-full').addClass('icon-resize-small');});maximized=true;$('.row-min-admin').css('width','60%');}else{if(summary){summary_element.show();}
myModal.animate({'position':'fixed','left':"55%",'top':"15%",'right':'',"width":'30%',"height":'60%'},400,function(){if(summary){summary_element.show();summary_element.css('bottom','90%');}
myModal.find('.modal-body').css("max-height","");maximize_icon.attr('title','Maximize box').removeClass('icon-resize-small').addClass('icon-resize-full');}).draggable();maximized=false;$('.row-min-admin').css('width','70%');}});selector.find("[data-toggle='tooltip']").tooltip();$('select').chosen().trigger('liszt:updated');};var events_postLoading=function(selector){selector.find('.check_all').click(function(event){var checkboxes=$(this).parent().parent().next().find('input[type=checkbox]');checkboxes.attr('checked',true);event.stopPropagation();});selector.find('.uncheck_all').click(function(event){var checkboxes=$(this).parent().parent().next().find('input[type=checkbox]');checkboxes.attr('checked',false);event.stopPropagation();});selector.find('.component_labels').click(function(){var div=$("#"+$(this).data('id'));if(div.data('hidden')===false){div.slideUp().data('hidden',true);$(this).next('.checkboxes_div').hide();$(this).find('.arrow_component').removeClass('fa-angle-double-up').addClass('fa-angle-double-down');}else{div.slideDown().data('hidden',false);$(this).next('.checkboxes_div').show();$(this).find('.arrow_component').removeClass('fa-angle-double-down').addClass('fa-angle-double-up');}});var set_by_default=selector.find('.set_by_default');set_by_default.on('click',function(event){var component_id=$(this).data('component');var allograph=selector.find('.allograph_form').val();check_features_by_default(component_id,allograph,editGraphsSearch.cache);event.stopPropagation();});$('[data-tooltip]').tooltip();};var show_summary=function(button,summary_element){if(summary){summary_element.animate({'right':0,'opacity':0,},350,function(){$(this).css({'display':'none'});});summary=false;button.removeClass('active');}else{summary_element.css({'display':'block'}).animate({'right':"40.3%",'opacity':1},350);summary=true;button.addClass('active');}};var hide=function(){selector.hide();open=false;};var show=function(){selector.show();open=true;};var set_label=function(label_value){var label=$('.myModalLabel .label-modal-value');label.html(label_value);};var update_onChange=function(allograph,selector){var ABSOLUTE_URL='/digipal/api/old/';var PREFIX='search_';var content_type='allograph';var url=ABSOLUTE_URL+content_type+'/'+allograph;var request=$.getJSON(url);request.done(function(allographs){update(PREFIX,allographs[0],[],function(s){selector.find('#features_container').html(s);events_postLoading(selector);});});};var edit_letter={init:function(graph){var editor_space=$('#image-editor-space');var img=$('[data-graph="'+graph+'"]').find('img');this.img=img.clone();this.temp={};editor_space.html(this.img);this.url=this.img.attr('src');this.parameters=this.get_parameters();this.events();},getParameter:function(paramName,searchString){var i,val,params=searchString.split("&");var parameters=[];for(i=0;i<params.length;i++){val=params[i].split("=");if(val[0]==paramName){parameters.push(unescape(val[1]));}}
return parameters;},resize:function(side,value){$('#editor-space-image').fadeIn();var temp=edit_letter.temp;var url=edit_letter.url;var old_url=edit_letter.parameters.RGN;var newRGN=edit_letter.parameters.RGN.split(',');if(side=='top'){newRGN[1]=value;}else if(side=='left'){newRGN[0]=value;}else if(side=='width'){newRGN[2]=value;}else{newRGN[3]=value;}
url=url.replace('RGN='+old_url,'RGN='+newRGN.toString());edit_letter.url=url;edit_letter.img.attr('src',url).on('load',function(){$('#editor-space-image').fadeOut();});edit_letter.parameters.RGN=newRGN.toString();},makeBounds:function(RGN){var W=annotator.dimensions[0];var H=annotator.dimensions[1];var left=RGN[0]*W;var top=H-(RGN[1]*H);var width=(RGN[2]*W);var height=(RGN[3]*H);},events:function(){var resize=this.resize;var temp=this.temp;var parameters=this.parameters;var resize_up=$('#resize-up');var resize_down=$('#resize-down');var resize_width=$('#resize-right');var resize_left=$('#resize-left');var move_up=$('#move-up');var move_down=$('#move-down');var move_right=$('#move-right');var move_left=$('#move-left');var edit_letter=self;var value=0.005;resize_up.on('click',function(){if(!temp['height']){temp['height']=parseFloat(parameters.height);}
temp['height']+=value;resize('height',temp['height']);});resize_down.on('click',function(){if(!temp['height']){temp['height']=parseFloat(parameters.height);}
temp['height']-=value;resize('height',temp['height']);});resize_left.on('click',function(){if(!temp['width']){temp['width']=parseFloat(parameters.width);}
temp['width']-=value;resize('width',temp['width']);});resize_width.on('click',function(){if(!temp['width']){temp['width']=parseFloat(parameters.width);}
temp['width']+=value;resize('width',temp['width']);});move_up.on('click',function(){if(!temp['top']){temp['top']=parseFloat(parameters.top);}
temp['top']-=value;resize('top',temp['top']);});move_down.on('click',function(){if(!temp['top']){temp['top']=parseFloat(parameters.top);}
temp['top']+=value;resize('top',temp['top']);});move_left.on('click',function(){if(!temp['left']){temp['left']=parseFloat(parameters.left);}
temp['left']-=value;resize('left',temp['left']);});move_right.on('click',function(){if(!temp['left']){temp['left']=parseFloat(parameters.left);}
temp['left']+=value;resize('left',temp['left']);});},get_parameters:function(){var WID=this.getParameter('WID',this.url);var RGN=this.getParameter('RGN',this.url).toString().split('&')[0];var coords=RGN.split(',');var left=coords[0];var top=coords[1];var height=coords[2];var width=coords[3];return{'WID':WID,'RGN':RGN,'left':left,'top':top,'height':height,'width':width};}};var update=update_dialog;return init;};var ABSOLUTE_URL='/digipal/page/';var getCookie=function(name){var cookieValue=null;if(document.cookie&&document.cookie!==''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break;}}}
return cookieValue;};var csrftoken=getCookie('csrftoken');$.ajaxSetup({headers:{"X-CSRFToken":csrftoken}});function delete_annotation(image_id,feature_id,callback){var url=ABSOLUTE_URL+image_id+'/delete/'+feature_id+'/';$.ajax({url:url,data:'',error:function(xhr,textStatus,errorThrown){updateStatus('Error in deleting annotation','danger');throw new Error(textStatus);},success:function(data){if(callback){callback();}
updateStatus('Annotation successfully deleted','success');}});}
function serializeObject(obj){var o={};var a=obj.serializeArray();$.each(a,function(){if(o[obj.name]){if(!o[obj.name].push){o[obj.name]=[o[obj.name]];}
o[obj.name].push(obj.value||'');}else{o[obj.name]=obj.value||'';}});return o;}
function make_form(){var select_allograph=$('.myModal');var form=select_allograph.find('.frmAnnotation');var obj={};var array_values_checked=[],array_values_unchecked=[];var features={};var has_features=false;if(select_allograph.find('.features_box').length){select_allograph.find('.features_box').each(function(){if($(this).is(':checked')&&!$(this).prop('indeterminate')){array_values_checked.push($(this).val());has_features=true;}else if(!$(this).is(':checked')&&!$(this).prop('indeterminate')){array_values_unchecked.push($(this).val());}});}
var features_labels=[];var components=$('.feature_containers');$.each(components,function(){if($(this).find('.features_box:checked').length){var component_id=$(this).attr('id');var component_name=$('[data-id="'+component_id+'"]');var component=$.trim(component_name.children('b').text());var features_labels_array=[];var features_input=$(this).find('.features_box:checked');var f_id,f_value,label_element;$.each(features_input,function(){f_id=$(this).attr('id');f_value=$(this).val();label_element=$('label[for="'+f_id+'"]');features_labels_array.push(label_element.text());});features_labels.push({'feature':features_labels_array,'name':component,'component_id':parseInt(f_value.split(':')[0],10)});}});features.has_features=has_features;features.features=array_values_checked;obj['feature']=array_values_checked;var form_serialized=form.serialize();var s='';for(i=0;i<array_values_checked.length;i++){s+='&feature='+array_values_checked[i];}
for(i=0;i<array_values_unchecked.length;i++){s+='&-feature='+array_values_unchecked[i];}
form_serialized+=s;var display_note,internal_note;display_note=$('#id_display_note');internal_note=$('#id_internal_note');if(!isNodeEmpty(display_note.html())){form_serialized+="&display_note="+display_note.html();}
if(!isNodeEmpty(internal_note.html())){form_serialized+="&internal_note="+internal_note.html();}
if(select_allograph.find('.aspect').length){var aspects=select_allograph.find('.aspect');aspects.each(function(){if($(this).is(':checked')&&!$(this).prop('indeterminate')){form_serialized+="&aspect="+$(this).val();}else if(!$(this).is(':checked')&&!$(this).prop('indeterminate')){form_serialized+="&-aspect="+$(this).val();}});}
return{'has_features':has_features,'features':features,'form_serialized':form_serialized,'features_labels':features_labels};}
function save(url,feature,data,callback){$.ajax({url:url,data:data,type:'POST',beforeSend:function(){updateStatus('Saving annotation ...','warning');},error:function(xhr,textStatus,errorThrown){updateStatus('Error in saving annotation','danger');},success:function(data){if(data['success']){updateStatus('Annotation successfully saved','success');}else{updateStatus('Error in saving annotation','danger');}
if(callback){callback(data);}}});};(function(){!function(a){return a.fn.bootstrapSwitch=function(b){var c;return c={init:function(){return this.each(function(){var b,c,d,e,f,g,h,i;return c=a(this),f=a("<span>",{"class":"switch-left",html:function(){var a,b;return a="ON",b=c.data("on-label"),null!=b&&(a=b),a}}),g=a("<span>",{"class":"switch-right",html:function(){var a,b;return a="OFF",b=c.data("off-label"),null!=b&&(a=b),a}}),e=a("<label>",{"for":c.attr("id"),html:function(){var a,b,d;return a="&nbsp;",b=c.data("label-icon"),d=c.data("text-label"),null!=b&&(a='<i class="icon '+b+'"></i>'),null!=d&&(a=d),a}}),b=a("<div>"),h=a("<div>",{"class":"has-switch",tabindex:0}),d=c.closest("form"),i=function(){return e.hasClass("label-change-switch")?void 0:e.trigger("mousedown").trigger("mouseup").trigger("click")},c.data("bootstrap-switch",!0),null!=c.data("on")&&f.addClass("switch-"+c.data("on")),null!=c.data("off")&&g.addClass("switch-"+c.data("off")),h.data("animated",!1),c.data("animated")!==!1&&h.addClass("switch-animate").data("animated",!0),b=c.wrap(b).parent(),h=b.wrap(h).parent(),c.attr("class")&&a.each(["switch-mini","switch-small","switch-large"],function(a,b){return c.attr("class").indexOf(b)>=0?h.addClass(b):void 0}),c.before(f).before(e).before(g),h.addClass(c.is(":checked")?"switch-on":"switch-off"),(c.is(":disabled")||c.is("[readonly]"))&&h.addClass("disabled"),c.on("keydown",function(a){return 32===a.keyCode?(a.stopImmediatePropagation(),a.preventDefault(),i()):void 0}).on("change",function(a,d){var e,f;return e=c.is(":checked"),f=h.hasClass("switch-off"),a.preventDefault(),b.css("left",""),f!==e||(e?h.removeClass("switch-off").addClass("switch-on"):h.removeClass("switch-on").addClass("switch-off"),h.data("animated")!==!1&&h.addClass("switch-animate"),"boolean"==typeof d&&d)?void 0:c.trigger("switch-change",{el:c,value:e})}),h.on("keydown",function(a){if(a.which&&!c.is(":disabled")&&!c.is("[readonly]"))switch(a.which){case 32:return a.preventDefault(),i();case 37:if(a.preventDefault(),c.is(":checked"))return i();break;case 39:if(a.preventDefault(),!c.is(":checked"))return i()}}),f.on("click",function(){return i()}),g.on("click",function(){return i()}),e.on("mousedown touchstart",function(a){var d;return d=!1,a.preventDefault(),a.stopImmediatePropagation(),h.removeClass("switch-animate"),c.is(":disabled")||c.is("[readonly]")||c.hasClass("radio-no-uncheck")?e.unbind("click"):e.on("mousemove touchmove",function(a){var c,e,f,g;return f=(a.pageX||a.originalEvent.targetTouches[0].pageX)-h.offset().left,e=f/h.width()*100,c=25,g=75,d=!0,c>e?e=c:e>g&&(e=g),b.css("left",e-g+"%")}).on("click touchend",function(a){return a.stopImmediatePropagation(),a.preventDefault(),e.unbind("mouseleave"),d?c.prop("checked",parseInt(e.parent().css("left"),10)>-25):c.prop("checked",!c.is(":checked")),d=!1,c.trigger("change")}).on("mouseleave",function(a){return a.preventDefault(),a.stopImmediatePropagation(),e.unbind("mouseleave mousemove").trigger("mouseup"),c.prop("checked",parseInt(e.parent().css("left"),10)>-25).trigger("change")}).on("mouseup",function(a){return a.stopImmediatePropagation(),a.preventDefault(),e.trigger("mouseleave")})}),d.data("bootstrap-switch")?void 0:d.bind("reset",function(){return window.setTimeout(function(){return d.find(".has-switch").each(function(){var b;return b=a(this).find("input"),b.prop("checked",b.is(":checked")).trigger("change")})},1)}).data("bootstrap-switch",!0)})},setDisabled:function(b){var c,d;return c=a(this),d=c.parents(".has-switch"),b?(d.addClass("disabled"),c.prop("disabled",!0)):(d.removeClass("disabled"),c.prop("disabled",!1)),c},toggleDisabled:function(){var b;return b=a(this),b.prop("disabled",!b.is(":disabled")).parents(".has-switch").toggleClass("disabled"),b},isDisabled:function(){return a(this).is(":disabled")},setReadOnly:function(b){var c,d;return c=a(this),d=c.parents(".has-switch"),b?(d.addClass("disabled"),c.prop("readonly",!0)):(d.removeClass("disabled"),c.prop("readonly",!1)),c},toggleReadOnly:function(){var b;return b=a(this),b.prop("readonly",!b.is("[readonly]")).parents(".has-switch").toggleClass("disabled"),b},isReadOnly:function(){return a(this).is("[readonly]")},toggleState:function(b){var c;return c=a(this),c.prop("checked",!c.is(":checked")).trigger("change",b),c},toggleRadioState:function(b){var c;return c=a(this),c.not(":checked").prop("checked",!c.is(":checked")).trigger("change",b),c},toggleRadioStateAllowUncheck:function(b,c){var d;return d=a(this),b?d.not(":checked").trigger("change",c):d.not(":checked").prop("checked",!d.is(":checked")).trigger("change",c),d},setState:function(b,c){var d;return d=a(this),d.prop("checked",b).trigger("change",c),d},setOnLabel:function(b){var c;return c=a(this),c.siblings(".switch-left").html(b),c},setOffLabel:function(b){var c;return c=a(this),c.siblings(".switch-right").html(b),c},setOnClass:function(b){var c,d,e;return c=a(this),d=c.siblings(".switch-left"),e=c.attr("data-on"),null!=b?(null!=e&&d.removeClass("switch-"+e),d.addClass("switch-"+b),c):void 0},setOffClass:function(b){var c,d,e;return c=a(this),d=c.siblings(".switch-right"),e=c.attr("data-off"),null!=b?(null!=e&&d.removeClass("switch-"+e),d.addClass("switch-"+b),c):void 0},setAnimated:function(b){var c,d;return c=a(this),d=c.parents(".has-switch"),null==b&&(b=!1),d.data("animated",b).attr("data-animated",b)[d.data("animated")!==!1?"addClass":"removeClass"]("switch-animate"),c},setSizeClass:function(b){var c,d;return c=a(this),d=c.parents(".has-switch"),a.each(["switch-mini","switch-small","switch-large"],function(a,c){return d[c!==b?"removeClass":"addClass"](c)}),c},setTextLabel:function(b){var c;return c=a(this),c.siblings("label").html(b||"&nbsp"),c},setTextIcon:function(b){var c;return c=a(this),c.siblings("label").html(b?'<i class="icon '+b+'"></i>':"&nbsp;"),c},state:function(){return a(this).is(":checked")},destroy:function(){var b,c,d;return c=a(this),b=c.parent(),d=b.closest("form"),b.children().not(c).remove(),c.unwrap().unwrap().off("change"),d.length&&d.off("reset").removeData("bootstrap-switch"),c}},c[b]?c[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?a.error("Method "+b+" does not exist!"):c.init.apply(this,arguments)},this}(jQuery)}).call(this);;function AnnotationsCache(){this.cache={};this.cache.allographs={};this.cache.graphs={};this.init=function(){return this.cache;};this.search=function(type,id){var obj;if(type=='allograph'){obj=this.cache.allographs;}else{obj=this.cache.graphs;}
if(obj.hasOwnProperty(id)){return true;}
return false;};this.update=function(type,id,object){var obj;if(type=='allograph'){obj=this.cache.allographs;obj[id]=object['allographs'];}else{obj=this.cache.graphs;obj[id]={};obj[id]['features']=object['features'];obj[id]['allograph_id']=object['allograph_id'];obj[id]['hand_id']=object['hand_id'];obj[id]['image_id']=object['image_id'];obj[id]['hands']=object['hands'];obj[id]['item_part']=object['item_part'];obj[id]['aspects']=object['aspects'];if(object.hasOwnProperty('internal_note')){obj[id]['internal_note']=object['internal_note'];}
if(object.hasOwnProperty('display_note')){obj[id]['display_note']=object['display_note'];}}
return obj;};this.clear=function(){this.cache.allographs={};this.cache.graphs={};};};!function(e,t,n){var o,a=function(){var e=function(e){return e&&"none"!=e?e.match(/(-?[0-9\.]+)/g):[1,0,0,1,0,0]},t=function(e){return e.css("-webkit-transform")||e.css("transform")||e.css("-moz-transform")||e.css("-o-transform")||e.css("-ms-transform")},n=function(n){var o=t(n);return e(o)},o=function(e,t){},a=function(e){return"matrix("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+")"},i=function(e){var t=n(e);return{x:parseInt(t[4]),y:parseInt(t[5])}},l=function(e,t){var i=n(e);i[0]=i[3]=t;var l=a(i);o(e,l)},c=function(e,t,i){var l=n(e);l[4]=t,l[5]=i;var c=a(l);o(e,c)},r=function(e,t){var i=n(e),l=t*(Math.PI/180),c=-1*l;i[1]=l,i[2]=c;var r=a(i);o(e,r)};return{scale:l,translate:c,rotate:r,getTranslate:i}}(),i="MacIntel"==n.navigator.platform,l=0,c=0,r={command:!1,shift:!1,isSelecting:!1},s={66:"bold",73:"italic",85:"underline",112:"h1",113:"h2",122:"undo"},d={keyboard:{isCommand:function(e,t,n){i&&e.metaKey||!i&&e.ctrlKey?t():n()},isShift:function(e,t,n){e.shiftKey?t():n()},isModifier:function(e,t){var n=e.which,o=s[n];o&&t.call(this,o)},isEnter:function(e,t){13===e.which&&t()},isArrow:function(e,t){(e.which>=37||e.which<=40)&&t()}},html:{addTag:function(n,o,a,i){var l=e(t.createElement(o));return l.attr("contenteditable",Boolean(i)),l.append(" "),n.append(l),a&&(r.focusedElement=n.children().last(),d.cursor.set(n,0,r.focusedElement)),l}},cursor:{set:function(e,o,a){var i;if(t.createRange){i=t.createRange();var l=n.getSelection(),c=e.children().last(),r=c.html().length-1,s=a?a[0]:c[0],d="undefined"!=typeof o?o:r;i.setStart(s,d),i.collapse(!0),l.removeAllRanges(),l.addRange(i)}else i=t.body.createTextRange(),i.moveToElementText(a),i.collapse(!1),i.select()}},selection:{save:function(){if(n.getSelection){var e=n.getSelection();if(e.rangeCount>0)return e.getRangeAt(0)}else if(t.selection&&t.selection.createRange)return t.selection.createRange();return null},restore:function(e){if(e)
if(n.getSelection){var o=n.getSelection();o.removeAllRanges(),o.addRange(e)}else t.selection&&e.select&&e.select()},getText:function(){var e="";return n.getSelection?e=n.getSelection().toString():t.getSelection?e=t.getSelection().toString():t.selection&&(e=t.selection.createRange().text),e},clear:function(){window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges():document.selection&&document.selection.empty()},getContainer:function(e){return n.getSelection&&e&&e.commonAncestorContainer?e.commonAncestorContainer:t.selection&&e&&e.parentElement?e.parentElement():null},getSelection:function(){return n.getSelection?n.getSelection():t.selection&&t.selection.createRange?t.selection:null}},validation:{isUrl:function(e){return/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(e)}}},u={updatePos:function(t,o){return;var i=n.getSelection(),l=i.getRangeAt(0),c=l.getBoundingClientRect(),r=o.width(),s=o.height(),d=(t.offset().left,{x:c.left+c.width/2-r/2,y:c.top-s-8+e(document).scrollTop()});a.translate(o,d.x,d.y)},updateState:function(e,t){t.find("button").removeClass("active");var o=n.getSelection(),a=[];u.checkForFormatting(o.focusNode,a);for(var i={b:"bold",i:"italic",u:"underline",h1:"h1",h2:"h2",a:"anchor",ul:"ul",ol:"ol",clear:"clear"},l=0;l<a.length;l++){var c=a[l];t.find("button."+i[c]).addClass("active")}},checkForFormatting:function(e,t){if(!e){return;}
var n=["b","i","u","h1","h2","ol","ul","li","a","clear"];("#text"===e.nodeName||-1!=n.indexOf(e.nodeName.toLowerCase()))&&("#text"!=e.nodeName&&t.push(e.nodeName.toLowerCase()),u.checkForFormatting(e.parentNode,t))},buildMenu:function(t,n){var a=d.html.addTag(n,"ul",!1,!1);for(var i in o.modifiers){var l=d.html.addTag(a,"li",!1,!1),c=d.html.addTag(l,"button",!1,!1);c.attr("editor-command",o.modifiers[i]),c.addClass(o.modifiers[i])}
n.find("button").click(function(n){n.preventDefault();var o=e(this).attr("editor-command");m.commands[o].call(t,n)});var r=d.html.addTag(n,"div",!1,!1);r.addClass("link-area");var s=d.html.addTag(r,"input",!1,!1);s.attr({type:"text"});var u=d.html.addTag(r,"button",!1,!1);u.attr({'class':"link-cancel"});u.click(function(t){t.preventDefault();e(this).closest(".editor");e(this).closest(".link-area").hide(),e(this).closest(".bubble").find("ul").show()})},show:function(){var t=e(this).parent().parent().find(".bubble");var parent;if(e(this).parent().parent().find('#notes_tab').length){parent=e(this).parent().parent().find('#notes_tab');}else{parent=e(this).parent().parent().find('#dialog_notes');}
t.length||(t=d.html.addTag(parent,"div",!1,!1),t.addClass("jquery-notebook bubble")),t.empty(),u.buildMenu(this,t),t.show(),u.updateState(this,t),t.hasClass("active")?t.removeClass("jump"):t.addClass("jump"),u.updatePos(e(this),t),t.addClass("active")},update:function(){var t=e(this).parent().parent().find(".bubble");u.updateState(this,t)},clear:function(){},hideButtons:function(){e(this).parent().parent().find(".bubble").find("ul").hide()},showButtons:function(){e(this).parent().parent().find(".bubble").find("ul").show()},showLinkInput:function(t){u.hideButtons.call(this);var n=this,o=e(this).parent().parent().find(".bubble").find("input[type=text]"),a=o.closest(".jquery-notebook").find("button.anchor").hasClass("active");var $linkarea=e(this).parent().parent().find(".link-area");if(!$linkarea.find('.link-ok').length){$linkarea.find('.link-cancel').before('<button class="link-ok"></button>');$linkarea.find('.link-ok').on('click',function(){var i=o;var e=i.val();d.validation.isUrl(e)?(o.url=e,m.commands.createLink(o,t),u.clear.call(n)):""===e&&a&&(m.commands.removeLink(o,t),u.clear.call(n))});}
o.unbind("keydown"),o.keydown(function(o){var i=e(this);d.keyboard.isEnter(o,function(){o.preventDefault();var e=i.val();d.validation.isUrl(e)?(o.url=e,m.commands.createLink(o,t),u.clear.call(n)):""===e&&a&&(m.commands.removeLink(o,t),u.clear.call(n))})}),o.bind("paste",function(){var t=e(this);setTimeout(function(){var e=t.val();/http:\/\/https?:\/\//.test(e)&&(e=e.substring(7),t.val(e))},1)});var i="http://";if(a){var l=e(d.selection.getContainer(t)).closest("a");i=l.prop("href")||i}
e(this).parent().parent().find(".link-area").show(),o.val(i).focus()},hideLinkInput:function(){e(this).parent().parent().find(".bubble").find(".link-area").hide()}},h={bindEvents:function(t){t.keydown(f.keydown),t.keyup(f.keyup),t.focus(f.focus),t.bind("paste",m.paste),t.mousedown(f.mouseClick),t.mouseup(f.mouseUp),t.mousemove(f.mouseMove),t.blur(f.blur),e("body").mouseup(function(e){e.target==e.currentTarget&&r.isSelecting&&f.mouseUp.call(t,e)})},setPlaceholder:function(t){return;if(/^\s*$/.test(e(this).text())){e(this).empty();var n=d.html.addTag(e(this),"p").addClass("placeholder");n.append(e(this).attr("editor-placeholder")),d.html.addTag(e(this),"p","undefined"!=typeof t.focus?t.focus:!1,!0)}else e(this).find(".placeholder").remove()},removePlaceholder:function(){e(this).find(".placeholder").remove()},preserveElementFocus:function(){var e=n.getSelection()?n.getSelection().anchorNode:t.activeElement;if(e){var o=e.parentNode,a=o!==r.focusedElement,i=this.children,l=0;o===this&&(o=e);for(var c=0;c<i.length;c++)
if(o===i[c]){l=c;break}
a&&(r.focusedElement=o,r.focusedElementIndex=l)}},setContentArea:function(t){var n=e("body").find(".jquery-editor").length+1;t.attr("data-jquery-notebook-id",n);var o=e("body");},prepare:function(e,t){if(o=t,h.setContentArea(e),e.attr("editor-mode",o.mode),e.attr("editor-placeholder",o.placeholder),e.attr("contenteditable",!0),e.css("position","relative"),e.addClass("jquery-notebook editor"),h.setPlaceholder.call(e,{}),h.preserveElementFocus.call(e),o.autoFocus===!0){var n=e.find("p:not(.placeholder)");d.cursor.set(e,0,n)}}},f={keydown:function(e){var t=this;r.command&&65===e.which&&setTimeout(function(){u.show.call(t)},50),d.keyboard.isCommand(e,function(){r.command=!0},function(){r.command=!1}),d.keyboard.isShift(e,function(){r.shift=!0},function(){r.shift=!1}),d.keyboard.isModifier.call(this,e,function(t){r.command&&m.commands[t].call(this,e)}),r.shift?d.keyboard.isArrow.call(this,e,function(){setTimeout(function(){var e=d.selection.getText();""!==e?u.show.call(t):u.clear.call(t)},100)}):d.keyboard.isArrow.call(this,e,function(){u.clear.call(t)}),13===e.which&&m.enterKey.call(this,e),27===e.which&&u.clear.call(this),86===e.which&&r.command&&m.paste.call(this,e),90===e.which&&r.command&&m.commands.undo.call(this,e)},keyup:function(t){d.keyboard.isCommand(t,function(){r.command=!1},function(){r.command=!0}),h.preserveElementFocus.call(this),h.removePlaceholder.call(this),/^\s*$/.test(e(this).text())&&(e(this).empty(),d.html.addTag(e(this),"p",!0,!0)),m.change.call(this)},focus:function(){r.command=!1,r.shift=!1;u.show.call(this);$('.editor_active').removeClass('editor_active');$('.jquery-notebook.editor:focus').addClass('editor_active');$('.jquery-notebook.bubble').css('opacity',1);},mouseClick:function(){if(r.isSelecting=!0,e(this).parent().find(".bubble:visible").length){var t=e(this).parent().find(".bubble:visible"),n=t.offset().left,o=t.offset().top,a=t.width(),i=t.height();if(l>n&&n+a>l&&c>o&&o+i>c)return}},mouseUp:function(e){var t=this;r.isSelecting=!1,setTimeout(function(){var n=d.selection.save();n&&(n.collapsed?u.clear.call(t):(u.show.call(t),e.preventDefault()))},50)},mouseMove:function(e){l=e.pageX,c=e.pageY},blur:function(){h.setPlaceholder.call(this,{focus:!1})}},m={commands:{bold:function(e){e.preventDefault(),t.execCommand("bold",!1),u.update.call(this),m.change.call(this)},italic:function(e){e.preventDefault(),t.execCommand("italic",!1),u.update.call(this),m.change.call(this)},underline:function(e){e.preventDefault(),t.execCommand("underline",!1),u.update.call(this),m.change.call(this)},anchor:function(e){e.preventDefault();var t=d.selection.save();u.showLinkInput.call(this,t),m.change.call(this)},createLink:function(e,n){d.selection.restore(n),t.execCommand("createLink",!1,e.url),u.update.call(this),m.change.call(this)},removeLink:function(t,n){var o=e(d.selection.getContainer(n)).closest("a");o.contents().first().unwrap(),m.change.call(this)},h1:function(n){n.preventDefault(),e(window.getSelection().anchorNode.parentNode).is("h1")?t.execCommand("formatBlock",!1,"<p>"):t.execCommand("formatBlock",!1,"<h1>"),u.update.call(this),m.change.call(this)},h2:function(n){n.preventDefault(),e(window.getSelection().anchorNode.parentNode).is("h2")?t.execCommand("formatBlock",!1,"<p>"):t.execCommand("formatBlock",!1,"<h2>"),u.update.call(this),m.change.call(this)},ul:function(e){e.preventDefault(),t.execCommand("insertUnorderedList",!1),u.update.call(this),m.change.call(this)},ol:function(e){e.preventDefault(),t.execCommand("insertOrderedList",!1),u.update.call(this),m.change.call(this)},undo:function(o){o.preventDefault(),t.execCommand("undo",!1);var a=n.getSelection(),i=a.getRangeAt(0),l=i.getBoundingClientRect();e(document).scrollTop(e(document).scrollTop()+l.top),m.change.call(this)},clear:function(){var text=e(this).parent().parent().find(".jquery-notebook.editor.editor_active");$(text.find("*").not("p,br,div").get().reverse()).each(function(){$(this).replaceWith(this.innerHTML);});}},enterKey:function(t){if("inline"===e(this).attr("editor-mode"))return t.preventDefault(),void t.stopPropagation();var n=d.selection.getSelection(),o=e(n.focusNode.parentElement),a=o.next();return false;if(!a.length&&"LI"!=o.prop("tagName")){var i=o.prop("tagName");if("OL"===i||"UL"===i){var l=o.children().last();l.length&&""===l.text()&&l.remove()}
d.html.addTag(e(this),"p",!0,!0),t.preventDefault(),t.stopPropagation()}
m.change.call(this)},paste:function(){var n=(e(this),"jqeditor-temparea"),o=d.selection.save(),a=e("#"+n);if(a.length<1){var i=e("body");a=e("<textarea></textarea>"),a.css({position:"absolute",left:-1e3}),a.attr("id",n),i.append(a)}
a.focus(),setTimeout(function(){for(var e="",n=a.val().split("\n"),i=0;i<n.length;i++)e+=["<p>",n[i],"</p>"].join("");a.val(""),d.selection.restore(o),t.execCommand("delete"),t.execCommand("insertHTML",!1,e),m.change.call(this)},500)},change:function(){var content=e(this).html();var t=e("#jquery-notebook-content-"+e(this).attr("data-jquery-notebook-id"));t.val(content);var o=new CustomEvent("contentChange",{detail:{content:content}});this.dispatchEvent(o)}};e.fn.notebook=function(t){return t=e.extend({},e.fn.notebook.defaults,t),h.prepare(this,t),h.bindEvents(this),this},e.fn.notebook.defaults={autoFocus:!1,placeholder:"Your text here...",mode:"multiline",modifiers:["bold","italic","underline","h1","h2","ol","ul","anchor","clear"]}}(jQuery,document,window);;function EditGraphsSearch(){var self=this;self.annotations={};self.selectedAnnotations=[];self.selectedAllograph=null;self.cache=new AnnotationsCache();var cache=self.cache.cache;var dialog=new Dialog();self.constants={'ABSOLUTE_URL':'/digipal/api/old/','PREFIX':'search_'};var init=function(){events();};var events=function(){var switcher=$('#toggle-annotations-mode');switcher.bootstrapSwitch();$('[data-graph]').tooltip('disable');switcher.on('switch-change',function(e,data){if($(this).bootstrapSwitch('state')){$('[data-graph]').tooltip('disable');}else{$('[data-graph]').tooltip('enable');}});var graphs=$('[data-graph]');graphs.on('click',function(event){if(switcher.bootstrapSwitch('state')){load_graph($(this));event.preventDefault();event.stopPropagation();return false;}});var select_all=$('.select_all');if(select_all.length){select_all.click(function(event){methods.select_all($(this));});}
var deselect_all=$('.deselect_all');if(deselect_all.length){deselect_all.click(function(event){methods.deselect_all($(this));});}
var toggle_all=$('.toggle-all');toggle_all.click(function(){methods.toggle_all($(this));});var to_lightbox=$('.to_lightbox');to_lightbox.click(function(){methods.to_lightbox($(this));});};var load_graph=function(element){var graph=element.data('graph');var allograph=element.data('allograph');var elements=$("[data-graph='"+graph+"']");var image_id=element.data('image-id');var data,url,request,content_type='graph';if(!element.find('.img-frame').hasClass('graph_active')){self.selectedAnnotations.push(graph);elements.find('.img-frame').addClass('graph_active');self.selectedAllograph=null;if(!self.cache.search("allograph",allograph)||!allograph){load_group(element.closest('[data-group="true"]'),self.cache,false,function(data){var output=get_graph(graph,data,cache);refresh(output,image_id);});}else if(self.cache.search("allograph",allograph)&&(!self.cache.search('graph',graph))){load_group(element.closest('[data-group="true"]'),self.cache,true,function(data){var output=get_graph(graph,data,cache);refresh(output,image_id);});}else{data={};data['allographs']=cache.allographs[allograph];data['features']=cache.graphs[graph]['features'];data['graph_id']=graph;data['allograph_id']=cache.graphs[graph]['allograph_id'];data['hand_id']=cache.graphs[graph]['hand_id'];data['internal_note']=cache.graphs[graph]['internal_note'];data['display_note']=cache.graphs[graph]['display_note'];data['aspects']=cache.graphs[graph]['aspects'];data['hands']=cache.graphs[graph]['hands'];refresh(data,image_id);}
self.selectedAllograph=allograph;}else{removeSelected(elements,graph);$('.myModalLabel .badge').html(self.selectedAnnotations.length);if(!self.selectedAnnotations.length){self.dialog.hide();}else{var checkboxes=$('.features_box');data={};graph=self.selectedAnnotations[self.selectedAnnotations.length-1];if(cache.graphs.hasOwnProperty(graph)){allograph=cache.graphs[graph]['allograph_id'];data['allographs']=cache.allographs[allograph];data['features']=cache.graphs[graph]['features'];data['allograph_id']=allograph;data['hand_id']=cache.graphs[graph]['hand_id'];data['hands']=cache.graphs[graph]['hands'];data['graph_id']=graph;data['aspects']=cache.graphs[graph]['aspects'];data['internal_note']=cache.graphs[graph]['internal_note'];data['display_note']=cache.graphs[graph]['display_note'];refresh(data,image_id);detect_common_features(self.selectedAnnotations,checkboxes,cache);}else{reload_cache(self.selectedAnnotations,self.cache,false,function(){allograph=cache.graphs[graph]['allograph_id'];data['allographs']=cache.allographs[allograph];data['features']=cache.graphs[graph]['features'];data['allograph_id']=allograph;data['hand_id']=cache.graphs[graph]['hand_id'];data['hands']=cache.graphs[graph]['hands'];data['graph_id']=graph;data['aspects']=cache.graphs[graph]['aspects'];data['internal_note']=cache.graphs[graph]['internal_note'];data['display_note']=cache.graphs[graph]['display_note'];refresh(data,image_id);detect_common_features(self.selectedAnnotations,checkboxes,cache);});}}
self.selectedAllograph=allograph;}
var panel=elements.closest('.allograph-item');if(!self.selectedAnnotations.length){panel.find('.to_lightbox').attr('disabled',true);}else{panel.find('.to_lightbox').attr('disabled',false);}};var refresh=function(data,image_id){var allographs=$.extend(true,{},data);var aspects_list=load_aspects(allographs.aspects,data.graph_id,cache);if(self.selectedAnnotations.length>1){allographs.components=common_components(self.selectedAnnotations,cache,allographs.components);allographs.aspects=common_components(self.selectedAnnotations,cache,allographs.aspects,'aspects');}
var selectedAnnotation=self.selectedAnnotations[self.selectedAnnotations.length-1];var graph=cache.graphs[selectedAnnotation];if(!self.dialog){dialog(image_id,{},function(dialog_instance){self.dialog=dialog_instance;self.dialog.update(self.constants.PREFIX,allographs,self.selectedAnnotations,function(s,string_summary){self.dialog.selector.find('#features_container').html(s);self.dialog.selector.find('#dialog_aspects').html(aspects_list);self.dialog.show();var select_hand=self.dialog.selector.find('.hand_form');var checkboxes=self.dialog.selector.find('.features_box');var summary=$('#summary');rewriteHands(select_hand,graph.hands);detect_common_features(self.selectedAnnotations,checkboxes,cache);common_allographs(self.selectedAnnotations,cache,graph);setNotes(data,self.dialog.selector.find('#dialog_notes'));self.dialog.events_postLoading(self.dialog.selector);var allograph_label=self.dialog.selector.find('.allograph_form option:selected').text();self.dialog.set_label(allograph_label);if(0){self.dialog.selector.find('.allograph_form').val(allographs.allograph_id);self.dialog.selector.find('.hand_form').val(allographs.hand_id);}
summary.html(string_summary);var delete_button=self.dialog.selector.find('#delete');delete_button.click(function(event){methods.delete();});var save_button=self.dialog.selector.find('#save');save_button.click(function(event){methods.save();});var set_all_by_default=self.dialog.selector.find('.set_all_by_default');set_all_by_default.on('click',function(event){var components=[];var allograph=self.dialog.selector.find('.allograph_form').val();for(var i in cache.allographs){for(var j=0;j<cache.allographs[i].length;j++){var component=cache.allographs[i][j].id;components.push(component);}}
for(var c in components){check_features_by_default(components[c],allograph,cache);}
event.stopPropagation();});var deselect_all_graphs=$('.deselect_all_graphs');deselect_all_graphs.click(function(){$('.img-frame.graph_active').removeClass('graph_active');self.selectedAnnotations=[];self.dialog.hide();});self.annotation_editor=$(self.dialog.selector.find('#annotation-editor-tab')).annotation_editor().data('annotation_editor');var tabs=$('a[data-toggle="tab"]');tabs.on('shown.bs.tab',function(e){if(e.target.getAttribute('data-target')=='#edit'){self.dialog.edit_letter.init(self.selectedAnnotations[self.selectedAnnotations.length-1]);}
if(e.target.getAttribute('data-target')=='#annotation-editor-tab'){self.annotation_editor.set_graphids(self.selectedAnnotations);}});$('input[data-checked="checked"]').prop('checked',true);if(self.dialog.selector.find('.badge').length){self.dialog.selector.find('.badge').html(self.selectedAnnotations.length);}else{self.dialog.selector.find('.label-modal-value').after(' <span class="badge badge default"> '+self.selectedAnnotations.length+'</span>');}
$('select').trigger('liszt:updated');},cache);});}else{self.dialog.update(self.constants.PREFIX,allographs,self.selectedAnnotations,function(s,string_summary){self.dialog.selector.find('#features_container').html(s);self.dialog.show();setNotes(data,self.dialog.selector.find('#dialog_notes'));var select_hand=self.dialog.selector.find('.hand_form');var checkboxes=self.dialog.selector.find('.features_box');var summary=$('#summary');rewriteHands(select_hand,graph.hands);detect_common_features(self.selectedAnnotations,checkboxes,cache);common_allographs(self.selectedAnnotations,cache,graph);self.dialog.selector.find('#dialog_aspects').html(aspects_list);summary.html(string_summary);var allograph_label=self.dialog.selector.find('.allograph_form option:selected').text();self.dialog.set_label(allograph_label);if(0){self.dialog.selector.find('.allograph_form').val(allographs.allograph_id);self.dialog.selector.find('.hand_form').val(allographs.hand_id);}
if($('.myModal .badge').length){$('.myModal .badge').html(self.selectedAnnotations.length);}else{$('.label-modal-value').after(' <span class="badge badge default"> '+self.selectedAnnotations.length+'</span>');}
$('input[data-checked="checked"]').prop('checked',true);self.dialog.events_postLoading(self.dialog.selector);$('select').trigger('liszt:updated');self.annotation_editor.set_graphids(self.selectedAnnotations);},cache);}};var methods={save:function(){var graph,feature;var data=make_form();var url,image_id;var hand,allograph;var graphs=[];for(var i=0;i<self.selectedAnnotations.length;i++){graph=self.selectedAnnotations[i];image_id=cache.graphs[graph].image_id;vector_id=cache.graphs[graph].vector_id;vector={};vector['id']=graph;vector['image']=image_id;vector['vector_id']=vector_id;graphs.push(vector);}
if(self.annotation_editor){self.annotation_editor.save();}
url='/digipal/api/graph/save/'+JSON.stringify(graphs)+'/';save(url,graphs,data.form_serialized,function(data){var new_graphs=data['graphs'];for(var ind=0;ind<new_graphs.length;ind++){var new_graph=new_graphs[ind].graph,new_allograph=new_graphs[ind].allograph_id;self.cache.update('graph',new_graph,new_graphs[ind]);self.cache.update('allograph',new_allograph,new_graphs[ind]);}});},delete:function(){var image_id;var msg,graph,annotation_id;if(self.selectedAnnotations.length==1){msg='You are about to delete 1 annotation. Continue?';graph=self.selectedAnnotations[0];image_id=cache.graphs[graph].image_id;if(confirm(msg)){delete_annotation(image_id,graph,function(){var graph_element=$('[data-graph="'+graph+'"]');graph_element.fadeOut().remove();self.selectedAnnotations=[];delete cache.graphs[graph];});self.dialog.hide();}}else{msg='You are about to delete '+self.selectedAnnotations.length+' annotations. Continue?';if(confirm(msg)){for(var i=0;i<self.selectedAnnotations.length;i++){graph=self.selectedAnnotations[i];image_id=cache.graphs[graph].image_id;delete_annotation(image_id,graph);var graph_element=$('[data-graph="'+graph+'"]');graph_element.fadeOut().remove();delete cache.graphs[graph];}
self.selectedAnnotations=[];$('.label-modal-value').after(' <span class="badge badge default">0</span>');self.dialog.hide();}}},deselect_all:function(button){var key=button.data('key');var ul=$('div[data-key="'+key+'"]');var panel=ul.parent();panel.find('.to_lightbox').attr('disabled',true);var inputs=$('input[data-key="'+key+'"]');var annotations=ul.find('[data-graph] .img-frame.graph_active').parent().parent();$.each(annotations,function(){load_graph($(this));});if(self.dialog.open){self.dialog.hide();}},select_all:function(button){var key=button.data('key');var ul=$('div[data-key="'+key+'"]');var panel=ul.parent();panel.find('.to_lightbox').attr('disabled',false);var annotations=ul.find('[data-graph]').find('.img-frame').not('.graph_active').parent().parent();load_graph($(annotations[i][0]));},toggle_all:function(button){var graphs_elements=button.next().find('[data-graph]');if(!button.data('checked')){button.data('checked',true);graphs_elements.click();}else{button.data('checked',false);var graphs=[];$.each(graphs_elements,function(){graphs.push($(this).data('graph'));});for(var i=0;i<self.selectedAnnotations.length;i++){if(graphs.indexOf(self.selectedAnnotations[i])>=0){$('a[data-graph="'+self.selectedAnnotations[i]+'"]').find('.img-frame').removeClass('graph_active');self.selectedAnnotations.splice(i,1);i--;}}
if(!self.selectedAnnotations.length){self.dialog.hide();}
graphs_elements.click();}},to_lightbox:function(button){add_to_lightbox(button,'annotation',self.selectedAnnotations,true);}};var rewriteHands=function(select_hand,hands){var string_hand_select='<option>------</option>';if(hands.length){for(var h=0;h<hands.length;h++){string_hand_select+='<option value="'+hands[h].id+'">'+
hands[h].label+'</option>';}}
select_hand.html(string_hand_select);};var removeSelected=function(elements,graph){elements.find('.img-frame').removeClass("graph_active");for(var j=0;j<self.selectedAnnotations.length;j++){if(self.selectedAnnotations[j]==graph){self.selectedAnnotations.splice(j,1);j--;}}};return{'init':init,'cache':self.cache.cache};}
var editGraphsSearch;$(document).ready(function(){editGraphsSearch=new EditGraphsSearch();editGraphsSearch.init();});;