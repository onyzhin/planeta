/*===========================================================
 GULP: APP TASKS :: Vendor - include vendor js files
===========================================================*/
// Modernizr v1.7  www.modernizr.com
window.Modernizr=function(a,b,c){function G(){e.input=function(a){for(var b=0,c=a.length;b<c;b++)t[a[b]]=!!(a[b]in l);return t}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)l.setAttribute("type",f=a[d]),e=l.type!=="text",e&&(l.value=m,l.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&l.style.WebkitAppearance!==c?(g.appendChild(l),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(l,null).WebkitAppearance!=="textfield"&&l.offsetHeight!==0,g.removeChild(l)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=l.checkValidity&&l.checkValidity()===!1:/^color$/.test(f)?(g.appendChild(l),g.offsetWidth,e=l.value!=m,g.removeChild(l)):e=l.value!=m)),s[a[d]]=!!e;return s}("search tel url email datetime date month week time datetime-local number range color".split(" "))}function F(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+p.join(c+" ")+c).split(" ");return!!E(d,b)}function E(a,b){for(var d in a)if(k[a[d]]!==c&&(!b||b(a[d],j)))return!0}function D(a,b){return(""+a).indexOf(b)!==-1}function C(a,b){return typeof a===b}function B(a,b){return A(o.join(a+";")+(b||""))}function A(a){k.cssText=a}var d="1.7",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l=b.createElement("input"),m=":)",n=Object.prototype.toString,o=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),p="Webkit Moz O ms Khtml".split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v,w=function(a){var c=b.createElement("style"),d=b.createElement("div"),e;c.textContent=a+"{#modernizr{height:3px}}",h.appendChild(c),d.id="modernizr",g.appendChild(d),e=d.offsetHeight===3,c.parentNode.removeChild(c),d.parentNode.removeChild(d);return!!e},x=function(){function d(d,e){e=e||b.createElement(a[d]||"div");var f=(d="on"+d)in e;f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=C(e[d],"function"),C(e[d],c)||(e[d]=c),e.removeAttribute(d))),e=null;return f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),y=({}).hasOwnProperty,z;C(y,c)||C(y.call,c)?z=function(a,b){return b in a&&C(a.constructor.prototype[b],c)}:z=function(a,b){return y.call(a,b)},r.flexbox=function(){function c(a,b,c,d){a.style.cssText=o.join(b+":"+c+";")+(d||"")}function a(a,b,c,d){b+=":",a.style.cssText=(b+o.join(c+";"+b)).slice(0,-b.length)+(d||"")}var d=b.createElement("div"),e=b.createElement("div");a(d,"display","box","width:42px;padding:0;"),c(e,"box-flex","1","width:10px;"),d.appendChild(e),g.appendChild(d);var f=e.offsetWidth===42;d.removeChild(e),g.removeChild(d);return f},r.canvas=function(){var a=b.createElement("canvas");return a.getContext&&a.getContext("2d")},r.canvastext=function(){return e.canvas&&C(b.createElement("canvas").getContext("2d").fillText,"function")},r.webgl=function(){return!!a.WebGLRenderingContext},r.touch=function(){return"ontouchstart"in a||w("@media ("+o.join("touch-enabled),(")+"modernizr)")},r.geolocation=function(){return!!navigator.geolocation},r.postmessage=function(){return!!a.postMessage},r.websqldatabase=function(){var b=!!a.openDatabase;return b},r.indexedDB=function(){for(var b=-1,c=p.length;++b<c;){var d=p[b].toLowerCase();if(a[d+"_indexedDB"]||a[d+"IndexedDB"])return!0}return!1},r.hashchange=function(){return x("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},r.history=function(){return !!(a.history&&history.pushState)},r.draganddrop=function(){return x("dragstart")&&x("drop")},r.websockets=function(){return"WebSocket"in a},r.rgba=function(){A("background-color:rgba(150,255,150,.5)");return D(k.backgroundColor,"rgba")},r.hsla=function(){A("background-color:hsla(120,40%,100%,.5)");return D(k.backgroundColor,"rgba")||D(k.backgroundColor,"hsla")},r.multiplebgs=function(){A("background:url(//:),url(//:),red url(//:)");return(new RegExp("(url\\s*\\(.*?){3}")).test(k.background)},r.backgroundsize=function(){return F("backgroundSize")},r.borderimage=function(){return F("borderImage")},r.borderradius=function(){return F("borderRadius","",function(a){return D(a,"orderRadius")})},r.boxshadow=function(){return F("boxShadow")},r.textshadow=function(){return b.createElement("div").style.textShadow===""},r.opacity=function(){B("opacity:.55");return/^0.55$/.test(k.opacity)},r.cssanimations=function(){return F("animationName")},r.csscolumns=function(){return F("columnCount")},r.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";A((a+o.join(b+a)+o.join(c+a)).slice(0,-a.length));return D(k.backgroundImage,"gradient")},r.cssreflections=function(){return F("boxReflect")},r.csstransforms=function(){return!!E(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},r.csstransforms3d=function(){var a=!!E(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);a&&"webkitPerspective"in g.style&&(a=w("@media ("+o.join("transform-3d),(")+"modernizr)"));return a},r.csstransitions=function(){return F("transitionProperty")},r.fontface=function(){var a,c,d=h||g,e=b.createElement("style"),f=b.implementation||{hasFeature:function(){return!1}};e.type="text/css",d.insertBefore(e,d.firstChild),a=e.sheet||e.styleSheet;var i=f.hasFeature("CSS2","")?function(b){if(!a||!b)return!1;var c=!1;try{a.insertRule(b,0),c=/src/i.test(a.cssRules[0].cssText),a.deleteRule(a.cssRules.length-1)}catch(d){}return c}:function(b){if(!a||!b)return!1;a.cssText=b;return a.cssText.length!==0&&/src/i.test(a.cssText)&&a.cssText.replace(/\r+|\n+/g,"").indexOf(b.split(" ")[0])===0};c=i('@font-face { font-family: "font"; src: url(data:,); }'),d.removeChild(e);return c},r.video=function(){var a=b.createElement("video"),c=!!a.canPlayType;if(c){c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"');var d='video/mp4; codecs="avc1.42E01E';c.h264=a.canPlayType(d+'"')||a.canPlayType(d+', mp4a.40.2"'),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"')}return c},r.audio=function(){var a=b.createElement("audio"),c=!!a.canPlayType;c&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"'),c.mp3=a.canPlayType("audio/mpeg;"),c.wav=a.canPlayType('audio/wav; codecs="1"'),c.m4a=a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;"));return c},r.localstorage=function(){try{return!!localStorage.getItem}catch(a){return!1}},r.sessionstorage=function(){try{return!!sessionStorage.getItem}catch(a){return!1}},r.webWorkers=function(){return!!a.Worker},r.applicationcache=function(){return!!a.applicationCache},r.svg=function(){return!!b.createElementNS&&!!b.createElementNS(q.svg,"svg").createSVGRect},r.inlinesvg=function(){var a=b.createElement("div");a.innerHTML="<svg/>";return(a.firstChild&&a.firstChild.namespaceURI)==q.svg},r.smil=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"animate")))},r.svgclippaths=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"clipPath")))};for(var H in r)z(r,H)&&(v=H.toLowerCase(),e[v]=r[H](),u.push((e[v]?"":"no-")+v));e.input||G(),e.crosswindowmessaging=e.postmessage,e.historymanagement=e.history,e.addTest=function(a,b){a=a.toLowerCase();if(!e[a]){b=!!b(),g.className+=" "+(b?"":"no-")+a,e[a]=b;return e}},A(""),j=l=null,f&&a.attachEvent&&function(){var a=b.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function p(a,b){var c=-1,d=a.length,e,f=[];while(++c<d)e=a[c],(b=e.media||b)!="screen"&&f.push(p(e.imports,b),e.cssText);return f.join("")}function o(a){var b=-1;while(++b<e)a.createElement(d[b])}var c="abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",d=c.split("|"),e=d.length,f=new RegExp("(^|\\s)("+c+")","gi"),g=new RegExp("<(/*)("+c+")","gi"),h=new RegExp("(^|[^\\n]*?\\s)("+c+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),i=b.createDocumentFragment(),j=b.documentElement,k=j.firstChild,l=b.createElement("body"),m=b.createElement("style"),n;o(b),o(i),k.insertBefore(m,k.firstChild),m.media="print",a.attachEvent("onbeforeprint",function(){var a=-1,c=p(b.styleSheets,"all"),k=[],o;n=n||b.body;while((o=h.exec(c))!=null)k.push((o[1]+o[2]+o[3]).replace(f,"$1.iepp_$2")+o[4]);m.styleSheet.cssText=k.join("\n");while(++a<e){var q=b.getElementsByTagName(d[a]),r=q.length,s=-1;while(++s<r)q[s].className.indexOf("iepp_")<0&&(q[s].className+=" iepp_"+d[a])}i.appendChild(n),j.appendChild(l),l.className=n.className,l.innerHTML=n.innerHTML.replace(g,"<$1font")}),a.attachEvent("onafterprint",function(){l.innerHTML="",j.removeChild(l),j.appendChild(n),m.styleSheet.cssText=""})}(a,b),e._enableHTML5=f,e._version=d,g.className=g.className.replace(/\bno-js\b/,"")+" js "+u.join(" ");return e}(this,this.document);
/*
 * zNice 
 * version: 1.0 (07.12.2013)
 * by Vitaliy Grozinskiy (zendo@ukr.net) 
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * To Use: place in the head 
 *  <link href="style/zNice.css" rel="stylesheet" type="text/css" />
 *  <script type="text/javascript" src="js/jquery.zNice.js"></script>
 *
 * And apply the zNice class to the form you want to style, or use $(selector).zNice(settings);
 *
 *
 * Based on jNice by Sean Mooney (sean@whitespace-creative.com) 
 * 
 ******************************************** */
(function($){
	$.fn.zNice = function(settings){
		var self = this;
		self.selectItems=$();
		if (typeof(settings)==='undefined') settings={};
		$.extend(
			settings,
			{
				//aBackground  : true,
				sExpandSelector : '.zNice-select-text,.zNice-select-open'
			}
		);
		

		if (settings.destroy){
			destroy(self);
			return false;
		}

		function makeBackground($element) {
			$element.addClass('zNice-aBackground');
			$element.append('<span class="zNice-bgtl"></span><span class="zNice-bgtr"></span><span class="zNice-bgbl"></span><span class="zNice-bgbr"></span><span class="zNice-bgsl"></span><span class="zNice-bgsr"></span>');
		}

		self.isDisabled = function($element){
			if ($element[0].disabled)
				$element.disable();
			else
				$element.enable();
		}


		
		self.makeWrap = function($element){
			var $wrapper=$('<span class="zNice-wrap"></span>');
			$element.before($wrapper)
			$element.appendTo($wrapper);
			if (typeof($element.attr('class'))!=='undefined'){
				var c=$element.attr('class').split(' ');
				$(c).each(function(i){
					if (this.length>0) $element.removeClass(c[i]);
					$wrapper.addClass(c[i]);
				})
			}
			$wrapper.prepend('<span class="zNice-bg"></span>');
			$element.focus(function(){ 
				$wrapper.addClass('zNice-focus');
			}).blur(function(){
				$wrapper.removeClass('zNice-focus');
			});

			$element.disable = function($element){
				this.zDisabled=true;
				this.zWrap.addClass('zNice-disabled');
			}
			$element.enable = function($element){
				this.zDisabled=false;
				this.zWrap.removeClass('zNice-disabled');
			}
			return	$wrapper;
		}

		self.tareaAdd = function(){
			var $element = $(this);
			var $wrapper = self.makeWrap($element)
			$wrapper.addClass('zNice-tArea');
			
			if (settings.aBackground){
				makeBackground($wrapper);
			}
		};

		self.tinputAdd = function(){
			var $element = $(this);
			var $wrapper = self.makeWrap($element)
			$wrapper.addClass('zNice-tInput');
			
			if (settings.aBackground){
				makeBackground($wrapper);
			}
			
			if (typeof($element.data('image'))!=='undefined'){
				$wrapper.addClass('zNice-tInput-image').append('<span class="zNice-image"><span class="vfix"></span><img src="'+$element.data('image')+'" alt=""/></span>');
			}
			if (typeof($element.data('color'))!=='undefined'){
				$wrapper.addClass('zNice-tInput-color').append('<span class="zNice-color" style="background:'+$element.data('color')+'"></span>');
			}
			if (typeof($element.data('ztype'))!=='undefined'){
				if ($element.data('ztype')=='qInput'){
					$wrapper.addClass('zNice-qInput');
					$wrapper.removeClass('zNice-tInput');
					$wrapper.wrapInner('<span class="zNice-tInput"></span>')
					$wrapper.append('<span class="zNice-qInput-control zNice-qInput-inc"></span>').prepend('<span class="zNice-qInput-control zNice-qInput-dec"></span>')
					$('.zNice-qInput-control',$wrapper).click(function(event){
						event.preventDefault();
						if ($(this).is('.zNice-qInput-inc')) $element.val($element.val()*1+1);
						else $element.val($element.val()>1 ? $element.val()-1 : 1);
						$element.change();
					})
					$element.keypress(function(e){
						e.preventDefault();
						var str1='';
						var c = String.fromCharCode(e.which);
						var str=$(this).val()+c;
						for (i=0;i<=str.length;i++)
							if(str[i]*1>-1) str1=str1+str[i];
						str1=str1.substr(0,5);
						$(this).val(str1);
						$(this).change();
						if($(this).val()==0) $(this).val('1');
					})

					/*click remove val*/
						// $('.zNice-qInput input').click(function(){
						// 	$(this).val('');
						// }).blur(function(){
						// 	var V = $(this).val();
						// 	V = V =="" ? 1 :V;
						// 	$(this).val(V);
						// });		
				}
			}
		};
		self.checkAdd = function(){
			var $element = $(this);
			$element.zWrap = self.makeWrap($element);
			$element.zWrap.addClass('zNice-checkbox');
			self.isDisabled($element);


				
			$element.change(function(e){
				if(this.checked){ $element.zWrap.addClass('zNice-checked'); 	}
				else { $element.zWrap.removeClass('zNice-checked'); }
			});
			
			/* set the default state */
			if (this.checked) {$element.zWrap.addClass('zNice-checked');}
		};
		self.radioAdd = function(){
			var $element = $(this);
			var $form=$element.closest('form');

			$element.zWrap = self.makeWrap($element);
			$element.zWrap.addClass('zNice-radio');
			self.isDisabled($element);


				
			$element.change(function(){
				if(this.checked){ 
					$element.zWrap.addClass('zNice-checked'); 	
					$('input:radio[name="'+ $element.attr('name') +'"]',$form).not($element).each(function(){
						var $element=$(this).data('zNice-radio');
						$element.attr('checked',false);
						$element.zWrap.removeClass('zNice-checked');
					});
				}
				else { $element.zWrap.addClass('zNice-checked'); }
			});
		
			/* set the default state */
			if (this.checked) {$element.zWrap.addClass('zNice-checked');}
			$element.data('zNice-radio',$element);
		};
		self.selectAdd = function(){
			var $element = $(this);
			var $multiple = $element.attr('multiple');
			$element.zWrap = self.makeWrap($element);
			$element.zWrap.addClass('zNice-select');
			$element.zOptions=new Array();
			if($multiple) {
				$element.zWrap.addClass('selectMultiple');
				var placeholder = $element.attr('data-placeholder');
				$element.zText=$('<span class="zNice-select-text"><span class="zNice-select-item">'+placeholder+'</span></span>');
			}
			else{
				$element.zText=$('<span class="zNice-select-text"></span>');
			}
			$element.zOpener=$('<span class="zNice-select-open"></span>');
			$element.zOptionsList=$('<ul class="zNice-select-list"></ul>');
			$element.zWrap.append($element.zText,$element.zOpener,$element.zOptionsList);
			self.isDisabled($element);


			/* Expanding select*/
			$element.expand = function(){
				$element.zWrap.addClass('zNice-expanded');
				$element.zExpanded=true;
			}
			/* Contracting select*/
			$element.contract = function(){
				$element.zWrap.removeClass('zNice-expanded');
				$element.zExpanded=false;
			}

			/* Changing select option*/
			$element.selectOption = function(index,event){
				var $option=$($element.zOptions[index]).data('zNiceOption');
				var optionIndex=$element.find('option').index($option.element)
				if (typeof(event)==='undefined') event=true;

				if(!$multiple) $($element.zOptions).removeClass('zNice-selected');
				else $element.change();

				$option.toggleClass('zNice-selected');
				var optionLength = $element.zOptionsList.find('.zNice-selected').length
				if(!$multiple) $element.zText.html($($element.zOptions[index]).html());
				else {
					$element.zText.html('<span class="multipleText">Выбрано '+optionLength+'</span>');
				}
				if (event && $element[0].selectedIndex != optionIndex) {
					$element[0].selectedIndex = optionIndex;
					$element.change();
				}
				else 
					$element[0].selectedIndex = optionIndex;
			}

			/* Init/reinit Select*/
			$element.updateOptions = function(){
				$element.find('option').each(function(){
					$element.addOption(this);
				})
				if(!$multiple) $element.selectOption($element[0].selectedIndex,false);
				
			}

			/* Adding option to select*/
			$element.addOption = function(option,oIndex){
				if (typeof(oIndex)==='undefined') oIndex=99999;
				var $option=$('<li></li>');
				$option.element=option;
				$option.html('<span class="zNice-select-item">'+$(option).html()+'</span>');
				if ($(option).data('disabled')=='disabled') $option.addClass('zNice-disabled');
				if (typeof($(option).data('color'))!=='undefined') {
					$option.find('.zNice-select-item').addClass('zNice-select-color').prepend('<b class="zNice-color" style="background:'+$(option).data('color')+'"></b>');
				}
				if (typeof($(option).data('image'))!=='undefined') {
					$option.find('.zNice-select-item').addClass('zNice-select-image').prepend('<span class="zNice-image"><img src="'+$(option).data('image')+'" alt="" /></span>');
				}

				if (oIndex==0) $element.zOptionsList.prepend($option);
				else if (oIndex>$element.zOptions.length) $element.zOptionsList.append($option);
				else $element.zOptionsList.find('li:eq('+oIndex+')').prepend($option);
				$option.click(function(){
					$element.selectOption($($element.zOptions).index(this));
					if(!$multiple) self.selectHide()
				})
				$option.data('zNiceOption',$option);
				$element.zOptions.push($option[0]);
			}
			$element.zWrap.on('click',settings.sExpandSelector,function(e){
				
				if (!$element.zExpanded && !$element.zDisabled) {
					self.selectHide();
					$element.expand();
				}
				else self.selectHide();
				e.preventDefault();
				return false;
			});
			$element.keydown(function(e){
				var selectedIndex = this.selectedIndex;
				switch(e.keyCode){
					case 40: /* Down */
						if (selectedIndex < this.options.length - 1){ $element.selectOption(selectedIndex+1); }
						break;
					case 38: /* Up */
						if (selectedIndex > 0){ $element.selectOption(selectedIndex-1); }
						break;
					default:
						return;
						break;
				}
				return false;
			})
			$element.updateOptions();
			self.selectItems.push($element);
		}
		self.selectShow = function(){
			$selects=this.selectItems;
			$selects.each(function(){
				this.expand()
			})
		}
		self.selectHide = function(){
			$selects=this.selectItems;
			$selects.each(function(){
				this.contract();
			})
		}


		self.checkExternalClick = function(event) {
			if ($(event.target).parents('.zNice-expanded').length === 0) { self.selectHide(); }
		};
		$(document).mousedown(self.checkExternalClick);

		
		if (self.data('zNice')) return false;
		self.data('zNice',self);

		/* each form */
		return this.each(function(){
			var formThis = this;
			$('input:submit, input:reset, input:button,.button', this).each(ButtonAdd);
			$('.button',this).each(function(){
				$(this).mousedown(function(){ 
					$(this).addClass('zNiceClicked');
					return false;
				});
			});
			$(document).mouseup(function(){
				$('.button.zNiceClicked').removeClass('zNiceClicked');
			})
			$('textarea', this).each(self.tareaAdd);
			$('input:text, input:password, input[type="email"]', this).each(self.tinputAdd);
			$('input:checkbox', this).each(self.checkAdd);
			$('input:radio', this).each(self.radioAdd);
			$('input:file', this).each(IfileAdd);
			$('select', this).each(self.selectAdd);
			/* Add a new handler for the reset action */
			$(this).bind('reset',function(){var form;var action = function(){ Reset(form); }; window.setTimeout(action, 10); });
			$('.zNiceHidden').css({opacity:0});

		});

	};/* End the Plugin */


	var Reset = function(form){
		var sel;
		$('.zNiceSelectWrapper select', form).each(function(){sel = (this.selectedIndex<0) ? 0 : this.selectedIndex; $('ul', $(this).parent()).each(function(){$('a:eq('+ sel +')', this).click();});});
		$('.zNiceCheckbox, .zNiceRadio', form).removeClass('zNiceChecked');
		$('input:checkbox, input:radio', form).each(function(){
			if($(this).is(':checked')){$('a', $(this).parent()).addClass('zNiceChecked');}
		});
	};

	var IfileAdd = function(){
		iclass=$(this).attr('class');
		title=$(this).attr('title');
		var $input = $(this).addClass('zNiceInput').wrap('<span class="zNiceInputWrapper fileupload '+(typeof(iclass)!='undefined'? iclass : '') +'"></span>').before('<span class="zNiceInputBg"><span class="zNiceInputLeft">'+(typeof($(this).attr('placeholder'))!='undefined' ? $(this).attr('placeholder') : '')+'</span><span class="zNiceInputRight"></span></span><span class="ubutton"><span class="ileft">'+(typeof(title)!=='undefined' ? title : 'Обзор')+'</span><span class="iright"></span></span>');
		var $wrapper = $input.parents('.zNiceInputWrapper');
		$input.focus(function(){ 
			$wrapper.addClass('zNiceInputWrapper_hover');
		}).blur(function(){
			$wrapper.removeClass('zNiceInputWrapper_hover');
		});
		// $input.change(function(){
		// 	filename=$(this).val();
		// 	filename=filename.split('\\');
		// 	if($input.is('.exFile')){
		// 		$('.ileft',$wrapper).html(filename[filename.length-1]).css('color','#030303');
		// 		if($('.ileft',$wrapper).text()=='') $('.ileft',$wrapper).text(title);
		// 	}
		// 	else $('.iright',$wrapper).html(filename[filename.length-1]).css('color','#030303');
		// });

		$input.change(function(){
			$input.trigger('blur');
			filename=$(this).val();
			filename=filename.split('\\');
			$('.zNiceInputBg .zNiceInputLeft',$wrapper).html(filename[filename.length-1]);
		});

		$('.ubutton', $wrapper).click(function() {
			$input.trigger('click');
		});
	};

	var ButtonAdd = function(){
		if (!$(this).is('.button')){
			value=$(this).attr('value');
			iclass=$(this).attr('class');
			$(this).attr('class','');
			$(this).attr('value','');
			$(this).wrap('<span class="button '+(typeof(iclass)!='undefined'? iclass : '') +'"></span>');
			$(this).parent().append('<span class="ileft">'+value+'</span>');
			$(this).parent().append('<span class="iright"></span>');
		}
		else{
			value=$(this).html();
			$(this).html('<span class="ileft">'+value+'</span><span class="iright"></span>');
		}
	};

	var destroy = function(form){
		$(form)
			.removeData('zNice')
			.removeClass('zNice');

		$('.zNice-wrap,.button,.zNiceInputWrapper', form).each(function() {
			var $self = $(this);
			$self.removeClass('zNice-select zNice-tInput zNice-qInput zNice-radio zNice-checkbox zNice-checked zNice-valid zNice-wrap  zNiceInputBg zNiceInputLeft zNiceInputWrapper zNiceInputRight   zNiceInput button ubutton fileupload ileft iright ');
			var selfClass = $self.attr('class'),
				selfValue = $self.find('.ileft').text() == 'undefined' ? 'Submit' : selfValue;
			$self.find('input , select , textarea')
				.clone()
				.addClass(selfClass)
				.attr('value',selfValue)
				.appendTo($self.parent());
			$self.remove();
		});
	};

	/* Automatically apply to any forms with class zNice */
	$(function(){$('.zNice').zNice();});
})(jQuery);