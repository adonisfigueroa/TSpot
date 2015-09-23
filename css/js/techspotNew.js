/* Plugin */

/*!
 * hoverIntent v1.8.0 // 2014.06.29 // jQuery v1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */
(function($){$.fn.hoverIntent=function(handlerIn,handlerOut,selector){var cfg={interval:100,sensitivity:6,timeout:0};if(typeof handlerIn==="object"){cfg=$.extend(cfg,handlerIn)}else{if($.isFunction(handlerOut)){cfg=$.extend(cfg,{over:handlerIn,out:handlerOut,selector:selector})}else{cfg=$.extend(cfg,{over:handlerIn,out:handlerIn,selector:handlerOut})}}var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if(Math.sqrt((pX-cX)*(pX-cX)+(pY-cY)*(pY-cY))<cfg.sensitivity){$(ob).off("mousemove.hoverIntent",track);ob.hoverIntent_s=true;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=false;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=$.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type==="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).on("mousemove.hoverIntent",track);if(!ob.hoverIntent_s){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).off("mousemove.hoverIntent",track);if(ob.hoverIntent_s){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.on({"mouseenter.hoverIntent":handleHover,"mouseleave.hoverIntent":handleHover},cfg.selector)}})(jQuery);

/*
 * jQuery FlexSlider v2.2.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
;(function(e){e.flexslider=function(t,n){var r=e(t);r.vars=e.extend({},e.flexslider.defaults,n);var i=r.vars.namespace,s=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,o=("ontouchstart"in window||s||window.DocumentTouch&&document instanceof DocumentTouch)&&r.vars.touch,u="click touchend MSPointerUp",a="",f,l=r.vars.direction==="vertical",c=r.vars.reverse,h=r.vars.itemWidth>0,p=r.vars.animation==="fade",d=r.vars.asNavFor!=="",v={},m=true;e.data(t,"flexslider",r);v={init:function(){r.animating=false;r.currentSlide=parseInt(r.vars.startAt?r.vars.startAt:0,10);if(isNaN(r.currentSlide))r.currentSlide=0;r.animatingTo=r.currentSlide;r.atEnd=r.currentSlide===0||r.currentSlide===r.last;r.containerSelector=r.vars.selector.substr(0,r.vars.selector.search(" "));r.slides=e(r.vars.selector,r);r.container=e(r.containerSelector,r);r.count=r.slides.length;r.syncExists=e(r.vars.sync).length>0;if(r.vars.animation==="slide")r.vars.animation="swing";r.prop=l?"top":"marginLeft";r.args={};r.manualPause=false;r.stopped=false;r.started=false;r.startTimeout=null;r.transitions=!r.vars.video&&!p&&r.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in t){if(e.style[t[n]]!==undefined){r.pfx=t[n].replace("Perspective","").toLowerCase();r.prop="-"+r.pfx+"-transform";return true}}return false}();if(r.vars.controlsContainer!=="")r.controlsContainer=e(r.vars.controlsContainer).length>0&&e(r.vars.controlsContainer);if(r.vars.manualControls!=="")r.manualControls=e(r.vars.manualControls).length>0&&e(r.vars.manualControls);if(r.vars.randomize){r.slides.sort(function(){return Math.round(Math.random())-.5});r.container.empty().append(r.slides)}r.doMath();r.setup("init");if(r.vars.controlNav)v.controlNav.setup();if(r.vars.directionNav)v.directionNav.setup();if(r.vars.keyboard&&(e(r.containerSelector).length===1||r.vars.multipleKeyboard)){e(document).bind("keyup",function(e){var t=e.keyCode;if(!r.animating&&(t===39||t===37)){var n=t===39?r.getTarget("next"):t===37?r.getTarget("prev"):false;r.flexAnimate(n,r.vars.pauseOnAction)}})}if(r.vars.mousewheel){r.bind("mousewheel",function(e,t,n,i){e.preventDefault();var s=t<0?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(s,r.vars.pauseOnAction)})}if(r.vars.pausePlay)v.pausePlay.setup();if(r.vars.slideshow&&r.vars.pauseInvisible)v.pauseInvisible.init();if(r.vars.slideshow){if(r.vars.pauseOnHover){r.hover(function(){if(!r.manualPlay&&!r.manualPause)r.pause()},function(){if(!r.manualPause&&!r.manualPlay&&!r.stopped)r.play()})}if(!r.vars.pauseInvisible||!v.pauseInvisible.isHidden()){r.vars.initDelay>0?r.startTimeout=setTimeout(r.play,r.vars.initDelay):r.play()}}if(d)v.asNav.setup();if(o&&r.vars.touch)v.touch();if(!p||p&&r.vars.smoothHeight)e(window).bind("resize orientationchange focus",v.resize);r.find("img").attr("draggable","false");setTimeout(function(){r.vars.start(r)},200)},asNav:{setup:function(){r.asNav=true;r.animatingTo=Math.floor(r.currentSlide/r.move);r.currentItem=r.currentSlide;r.slides.removeClass(i+"active-slide").eq(r.currentItem).addClass(i+"active-slide");if(!s){r.slides.on(u,function(t){t.preventDefault();var n=e(this),s=n.index();var o=n.offset().left-e(r).scrollLeft();if(o<=0&&n.hasClass(i+"active-slide")){r.flexAnimate(r.getTarget("prev"),true)}else if(!e(r.vars.asNavFor).data("flexslider").animating&&!n.hasClass(i+"active-slide")){r.direction=r.currentItem<s?"next":"prev";r.flexAnimate(s,r.vars.pauseOnAction,false,true,true)}})}else{t._slider=r;r.slides.each(function(){var t=this;t._gesture=new MSGesture;t._gesture.target=t;t.addEventListener("MSPointerDown",function(e){e.preventDefault();if(e.currentTarget._gesture)e.currentTarget._gesture.addPointer(e.pointerId)},false);t.addEventListener("MSGestureTap",function(t){t.preventDefault();var n=e(this),i=n.index();if(!e(r.vars.asNavFor).data("flexslider").animating&&!n.hasClass("active")){r.direction=r.currentItem<i?"next":"prev";r.flexAnimate(i,r.vars.pauseOnAction,false,true,true)}})})}}},controlNav:{setup:function(){if(!r.manualControls){v.controlNav.setupPaging()}else{v.controlNav.setupManual()}},setupPaging:function(){var t=r.vars.controlNav==="thumbnails"?"control-thumbs":"control-paging",n=1,s,o;r.controlNavScaffold=e('<ol class="'+i+"control-nav "+i+t+'"></ol>');if(r.pagingCount>1){for(var f=0;f<r.pagingCount;f++){o=r.slides.eq(f);s=r.vars.controlNav==="thumbnails"?'<img src="'+o.attr("data-thumb")+'"/>':"<a>"+n+"</a>";if("thumbnails"===r.vars.controlNav&&true===r.vars.thumbCaptions){var l=o.attr("data-thumbcaption");if(""!=l&&undefined!=l)s+='<span class="'+i+'caption">'+l+"</span>"}r.controlNavScaffold.append("<li>"+s+"</li>");n++}}r.controlsContainer?e(r.controlsContainer).append(r.controlNavScaffold):r.append(r.controlNavScaffold);v.controlNav.set();v.controlNav.active();r.controlNavScaffold.delegate("a, img",u,function(t){t.preventDefault();if(a===""||a===t.type){var n=e(this),s=r.controlNav.index(n);if(!n.hasClass(i+"active")){r.direction=s>r.currentSlide?"next":"prev";r.flexAnimate(s,r.vars.pauseOnAction)}}if(a===""){a=t.type}v.setToClearWatchedEvent()})},setupManual:function(){r.controlNav=r.manualControls;v.controlNav.active();r.controlNav.bind(u,function(t){t.preventDefault();if(a===""||a===t.type){var n=e(this),s=r.controlNav.index(n);if(!n.hasClass(i+"active")){s>r.currentSlide?r.direction="next":r.direction="prev";r.flexAnimate(s,r.vars.pauseOnAction)}}if(a===""){a=t.type}v.setToClearWatchedEvent()})},set:function(){var t=r.vars.controlNav==="thumbnails"?"img":"a";r.controlNav=e("."+i+"control-nav li "+t,r.controlsContainer?r.controlsContainer:r)},active:function(){r.controlNav.removeClass(i+"active").eq(r.animatingTo).addClass(i+"active")},update:function(t,n){if(r.pagingCount>1&&t==="add"){r.controlNavScaffold.append(e("<li><a>"+r.count+"</a></li>"))}else if(r.pagingCount===1){r.controlNavScaffold.find("li").remove()}else{r.controlNav.eq(n).closest("li").remove()}v.controlNav.set();r.pagingCount>1&&r.pagingCount!==r.controlNav.length?r.update(n,t):v.controlNav.active()}},directionNav:{setup:function(){var t=e('<ul class="'+i+'direction-nav"><li><a class="'+i+'prev" href="#">'+r.vars.prevText+'</a></li><li><a class="'+i+'next" href="#">'+r.vars.nextText+"</a></li></ul>");if(r.controlsContainer){e(r.controlsContainer).append(t);r.directionNav=e("."+i+"direction-nav li a",r.controlsContainer)}else{r.append(t);r.directionNav=e("."+i+"direction-nav li a",r)}v.directionNav.update();r.directionNav.bind(u,function(t){t.preventDefault();var n;if(a===""||a===t.type){n=e(this).hasClass(i+"next")?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(n,r.vars.pauseOnAction)}if(a===""){a=t.type}v.setToClearWatchedEvent()})},update:function(){var e=i+"disabled";if(r.pagingCount===1){r.directionNav.addClass(e).attr("tabindex","-1")}else if(!r.vars.animationLoop){if(r.animatingTo===0){r.directionNav.removeClass(e).filter("."+i+"prev").addClass(e).attr("tabindex","-1")}else if(r.animatingTo===r.last){r.directionNav.removeClass(e).filter("."+i+"next").addClass(e).attr("tabindex","-1")}else{r.directionNav.removeClass(e).removeAttr("tabindex")}}else{r.directionNav.removeClass(e).removeAttr("tabindex")}}},pausePlay:{setup:function(){var t=e('<div class="'+i+'pauseplay"><a></a></div>');if(r.controlsContainer){r.controlsContainer.append(t);r.pausePlay=e("."+i+"pauseplay a",r.controlsContainer)}else{r.append(t);r.pausePlay=e("."+i+"pauseplay a",r)}v.pausePlay.update(r.vars.slideshow?i+"pause":i+"play");r.pausePlay.bind(u,function(t){t.preventDefault();if(a===""||a===t.type){if(e(this).hasClass(i+"pause")){r.manualPause=true;r.manualPlay=false;r.pause()}else{r.manualPause=false;r.manualPlay=true;r.play()}}if(a===""){a=t.type}v.setToClearWatchedEvent()})},update:function(e){e==="play"?r.pausePlay.removeClass(i+"pause").addClass(i+"play").html(r.vars.playText):r.pausePlay.removeClass(i+"play").addClass(i+"pause").html(r.vars.pauseText)}},touch:function(){var e,n,i,o,u,a,f=false,d=0,v=0,m=0;if(!s){t.addEventListener("touchstart",g,false);function g(s){if(r.animating){s.preventDefault()}else if(window.navigator.msPointerEnabled||s.touches.length===1){r.pause();o=l?r.h:r.w;a=Number(new Date);d=s.touches[0].pageX;v=s.touches[0].pageY;i=h&&c&&r.animatingTo===r.last?0:h&&c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:h&&r.currentSlide===r.last?r.limit:h?(r.itemW+r.vars.itemMargin)*r.move*r.currentSlide:c?(r.last-r.currentSlide+r.cloneOffset)*o:(r.currentSlide+r.cloneOffset)*o;e=l?v:d;n=l?d:v;t.addEventListener("touchmove",y,false);t.addEventListener("touchend",b,false)}}function y(t){d=t.touches[0].pageX;v=t.touches[0].pageY;u=l?e-v:e-d;f=l?Math.abs(u)<Math.abs(d-n):Math.abs(u)<Math.abs(v-n);var s=500;if(!f||Number(new Date)-a>s){t.preventDefault();if(!p&&r.transitions){if(!r.vars.animationLoop){u=u/(r.currentSlide===0&&u<0||r.currentSlide===r.last&&u>0?Math.abs(u)/o+2:1)}r.setProps(i+u,"setTouch")}}}function b(s){t.removeEventListener("touchmove",y,false);if(r.animatingTo===r.currentSlide&&!f&&!(u===null)){var l=c?-u:u,h=l>0?r.getTarget("next"):r.getTarget("prev");if(r.canAdvance(h)&&(Number(new Date)-a<550&&Math.abs(l)>50||Math.abs(l)>o/2)){r.flexAnimate(h,r.vars.pauseOnAction)}else{if(!p)r.flexAnimate(r.currentSlide,r.vars.pauseOnAction,true)}}t.removeEventListener("touchend",b,false);e=null;n=null;u=null;i=null}}else{t.style.msTouchAction="none";t._gesture=new MSGesture;t._gesture.target=t;t.addEventListener("MSPointerDown",w,false);t._slider=r;t.addEventListener("MSGestureChange",E,false);t.addEventListener("MSGestureEnd",S,false);function w(e){e.stopPropagation();if(r.animating){e.preventDefault()}else{r.pause();t._gesture.addPointer(e.pointerId);m=0;o=l?r.h:r.w;a=Number(new Date);i=h&&c&&r.animatingTo===r.last?0:h&&c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:h&&r.currentSlide===r.last?r.limit:h?(r.itemW+r.vars.itemMargin)*r.move*r.currentSlide:c?(r.last-r.currentSlide+r.cloneOffset)*o:(r.currentSlide+r.cloneOffset)*o}}function E(e){e.stopPropagation();var n=e.target._slider;if(!n){return}var r=-e.translationX,s=-e.translationY;m=m+(l?s:r);u=m;f=l?Math.abs(m)<Math.abs(-r):Math.abs(m)<Math.abs(-s);if(e.detail===e.MSGESTURE_FLAG_INERTIA){setImmediate(function(){t._gesture.stop()});return}if(!f||Number(new Date)-a>500){e.preventDefault();if(!p&&n.transitions){if(!n.vars.animationLoop){u=m/(n.currentSlide===0&&m<0||n.currentSlide===n.last&&m>0?Math.abs(m)/o+2:1)}n.setProps(i+u,"setTouch")}}}function S(t){t.stopPropagation();var r=t.target._slider;if(!r){return}if(r.animatingTo===r.currentSlide&&!f&&!(u===null)){var s=c?-u:u,l=s>0?r.getTarget("next"):r.getTarget("prev");if(r.canAdvance(l)&&(Number(new Date)-a<550&&Math.abs(s)>50||Math.abs(s)>o/2)){r.flexAnimate(l,r.vars.pauseOnAction)}else{if(!p)r.flexAnimate(r.currentSlide,r.vars.pauseOnAction,true)}}e=null;n=null;u=null;i=null;m=0}}},resize:function(){if(!r.animating&&r.is(":visible")){if(!h)r.doMath();if(p){v.smoothHeight()}else if(h){r.slides.width(r.computedW);r.update(r.pagingCount);r.setProps()}else if(l){r.viewport.height(r.h);r.setProps(r.h,"setTotal")}else{if(r.vars.smoothHeight)v.smoothHeight();r.newSlides.width(r.computedW);r.setProps(r.computedW,"setTotal")}}},smoothHeight:function(e){if(!l||p){var t=p?r:r.viewport;e?t.animate({height:r.slides.eq(r.animatingTo).height()},e):t.height(r.slides.eq(r.animatingTo).height())}},sync:function(t){var n=e(r.vars.sync).data("flexslider"),i=r.animatingTo;switch(t){case"animate":n.flexAnimate(i,r.vars.pauseOnAction,false,true);break;case"play":if(!n.playing&&!n.asNav){n.play()}break;case"pause":n.pause();break}},uniqueID:function(t){t.find("[id]").each(function(){var t=e(this);t.attr("id",t.attr("id")+"_clone")});return t},pauseInvisible:{visProp:null,init:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++){if(e[t]+"Hidden"in document)v.pauseInvisible.visProp=e[t]+"Hidden"}if(v.pauseInvisible.visProp){var n=v.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(n,function(){if(v.pauseInvisible.isHidden()){if(r.startTimeout)clearTimeout(r.startTimeout);else r.pause()}else{if(r.started)r.play();else r.vars.initDelay>0?setTimeout(r.play,r.vars.initDelay):r.play()}})}},isHidden:function(){return document[v.pauseInvisible.visProp]||false}},setToClearWatchedEvent:function(){clearTimeout(f);f=setTimeout(function(){a=""},3e3)}};r.flexAnimate=function(t,n,s,u,a){if(!r.vars.animationLoop&&t!==r.currentSlide){r.direction=t>r.currentSlide?"next":"prev"}if(d&&r.pagingCount===1)r.direction=r.currentItem<t?"next":"prev";if(!r.animating&&(r.canAdvance(t,a)||s)&&r.is(":visible")){if(d&&u){var f=e(r.vars.asNavFor).data("flexslider");r.atEnd=t===0||t===r.count-1;f.flexAnimate(t,true,false,true,a);r.direction=r.currentItem<t?"next":"prev";f.direction=r.direction;if(Math.ceil((t+1)/r.visible)-1!==r.currentSlide&&t!==0){r.currentItem=t;r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");t=Math.floor(t/r.visible)}else{r.currentItem=t;r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");return false}}r.animating=true;r.animatingTo=t;if(n)r.pause();r.vars.before(r);if(r.syncExists&&!a)v.sync("animate");if(r.vars.controlNav)v.controlNav.active();if(!h)r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");r.atEnd=t===0||t===r.last;if(r.vars.directionNav)v.directionNav.update();if(t===r.last){r.vars.end(r);if(!r.vars.animationLoop)r.pause()}if(!p){var m=l?r.slides.filter(":first").height():r.computedW,g,y,b;if(h){g=r.vars.itemMargin;b=(r.itemW+g)*r.move*r.animatingTo;y=b>r.limit&&r.visible!==1?r.limit:b}else if(r.currentSlide===0&&t===r.count-1&&r.vars.animationLoop&&r.direction!=="next"){y=c?(r.count+r.cloneOffset)*m:0}else if(r.currentSlide===r.last&&t===0&&r.vars.animationLoop&&r.direction!=="prev"){y=c?0:(r.count+1)*m}else{y=c?(r.count-1-t+r.cloneOffset)*m:(t+r.cloneOffset)*m}r.setProps(y,"",r.vars.animationSpeed);if(r.transitions){if(!r.vars.animationLoop||!r.atEnd){r.animating=false;r.currentSlide=r.animatingTo}r.container.unbind("webkitTransitionEnd transitionend");r.container.bind("webkitTransitionEnd transitionend",function(){r.wrapup(m)})}else{r.container.animate(r.args,r.vars.animationSpeed,r.vars.easing,function(){r.wrapup(m)})}}else{if(!o){r.slides.eq(r.currentSlide).css({zIndex:1}).animate({opacity:0},r.vars.animationSpeed,r.vars.easing);r.slides.eq(t).css({zIndex:2}).animate({opacity:1},r.vars.animationSpeed,r.vars.easing,r.wrapup)}else{r.slides.eq(r.currentSlide).css({opacity:0,zIndex:1});r.slides.eq(t).css({opacity:1,zIndex:2});r.wrapup(m)}}if(r.vars.smoothHeight)v.smoothHeight(r.vars.animationSpeed)}};r.wrapup=function(e){if(!p&&!h){if(r.currentSlide===0&&r.animatingTo===r.last&&r.vars.animationLoop){r.setProps(e,"jumpEnd")}else if(r.currentSlide===r.last&&r.animatingTo===0&&r.vars.animationLoop){r.setProps(e,"jumpStart")}}r.animating=false;r.currentSlide=r.animatingTo;r.vars.after(r)};r.animateSlides=function(){if(!r.animating&&m)r.flexAnimate(r.getTarget("next"))};r.pause=function(){clearInterval(r.animatedSlides);r.animatedSlides=null;r.playing=false;if(r.vars.pausePlay)v.pausePlay.update("play");if(r.syncExists)v.sync("pause")};r.play=function(){if(r.playing)clearInterval(r.animatedSlides);r.animatedSlides=r.animatedSlides||setInterval(r.animateSlides,r.vars.slideshowSpeed);r.started=r.playing=true;if(r.vars.pausePlay)v.pausePlay.update("pause");if(r.syncExists)v.sync("play")};r.stop=function(){r.pause();r.stopped=true};r.canAdvance=function(e,t){var n=d?r.pagingCount-1:r.last;return t?true:d&&r.currentItem===r.count-1&&e===0&&r.direction==="prev"?true:d&&r.currentItem===0&&e===r.pagingCount-1&&r.direction!=="next"?false:e===r.currentSlide&&!d?false:r.vars.animationLoop?true:r.atEnd&&r.currentSlide===0&&e===n&&r.direction!=="next"?false:r.atEnd&&r.currentSlide===n&&e===0&&r.direction==="next"?false:true};r.getTarget=function(e){r.direction=e;if(e==="next"){return r.currentSlide===r.last?0:r.currentSlide+1}else{return r.currentSlide===0?r.last:r.currentSlide-1}};r.setProps=function(e,t,n){var i=function(){var n=e?e:(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo,i=function(){if(h){return t==="setTouch"?e:c&&r.animatingTo===r.last?0:c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:r.animatingTo===r.last?r.limit:n}else{switch(t){case"setTotal":return c?(r.count-1-r.currentSlide+r.cloneOffset)*e:(r.currentSlide+r.cloneOffset)*e;case"setTouch":return c?e:e;case"jumpEnd":return c?e:r.count*e;case"jumpStart":return c?r.count*e:e;default:return e}}}();return i*-1+"px"}();if(r.transitions){i=l?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)";n=n!==undefined?n/1e3+"s":"0s";r.container.css("-"+r.pfx+"-transition-duration",n);r.container.css("transition-duration",n)}r.args[r.prop]=i;if(r.transitions||n===undefined)r.container.css(r.args);r.container.css("transform",i)};r.setup=function(t){if(!p){var n,s;if(t==="init"){r.viewport=e('<div class="'+i+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(r).append(r.container);r.cloneCount=0;r.cloneOffset=0;if(c){s=e.makeArray(r.slides).reverse();r.slides=e(s);r.container.empty().append(r.slides)}}if(r.vars.animationLoop&&!h){r.cloneCount=2;r.cloneOffset=1;if(t!=="init")r.container.find(".clone").remove();v.uniqueID(r.slides.first().clone().addClass("clone").attr("aria-hidden","true")).appendTo(r.container);v.uniqueID(r.slides.last().clone().addClass("clone").attr("aria-hidden","true")).prependTo(r.container)}r.newSlides=e(r.vars.selector,r);n=c?r.count-1-r.currentSlide+r.cloneOffset:r.currentSlide+r.cloneOffset;if(l&&!h){r.container.height((r.count+r.cloneCount)*200+"%").css("position","absolute").width("100%");setTimeout(function(){r.newSlides.css({display:"block"});r.doMath();r.viewport.height(r.h);r.setProps(n*r.h,"init")},t==="init"?100:0)}else{r.newSlides.css({width:r.computedW,"float":"left",display:"block"});r.container.width((r.count+r.cloneCount)*200+"%");r.setProps(n*r.computedW,"init");setTimeout(function(){r.doMath();r.newSlides.css({width:r.computedW,"float":"left",display:"block"});if(r.vars.smoothHeight)v.smoothHeight()},t==="init"?100:0)}}else{r.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"});if(t==="init"){if(!o){r.slides.css({opacity:0,display:"block",zIndex:1}).eq(r.currentSlide).css({zIndex:2}).animate({opacity:1},r.vars.animationSpeed,r.vars.easing)}else{r.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+r.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(r.currentSlide).css({opacity:1,zIndex:2})}}if(r.vars.smoothHeight)v.smoothHeight()}if(!h)r.slides.removeClass(i+"active-slide").eq(r.currentSlide).addClass(i+"active-slide");r.vars.init(r)};r.doMath=function(){var e=r.slides.first(),t=r.vars.itemMargin,n=r.vars.minItems,i=r.vars.maxItems;r.w=r.viewport===undefined?r.width():r.viewport.width();r.h=e.height();r.boxPadding=e.outerWidth()-e.width();if(h){r.itemT=r.vars.itemWidth+t;r.minW=n?n*r.itemT:r.w;r.maxW=i?i*r.itemT-t:r.w;r.itemW=r.minW>r.w?(r.w-t*(n-1))/n:r.maxW<r.w?(r.w-t*(i-1))/i:r.vars.itemWidth>r.w?r.w:r.vars.itemWidth;r.visible=Math.floor(r.w/r.itemW);r.move=r.vars.move>0&&r.vars.move<r.visible?r.vars.move:r.visible;r.pagingCount=Math.ceil((r.count-r.visible)/r.move+1);r.last=r.pagingCount-1;r.limit=r.pagingCount===1?0:r.vars.itemWidth>r.w?r.itemW*(r.count-1)+t*(r.count-1):(r.itemW+t)*r.count-r.w-t}else{r.itemW=r.w;r.pagingCount=r.count;r.last=r.count-1}r.computedW=r.itemW-r.boxPadding};r.update=function(e,t){r.doMath();if(!h){if(e<r.currentSlide){r.currentSlide+=1}else if(e<=r.currentSlide&&e!==0){r.currentSlide-=1}r.animatingTo=r.currentSlide}if(r.vars.controlNav&&!r.manualControls){if(t==="add"&&!h||r.pagingCount>r.controlNav.length){v.controlNav.update("add")}else if(t==="remove"&&!h||r.pagingCount<r.controlNav.length){if(h&&r.currentSlide>r.last){r.currentSlide-=1;r.animatingTo-=1}v.controlNav.update("remove",r.last)}}if(r.vars.directionNav)v.directionNav.update()};r.addSlide=function(t,n){var i=e(t);r.count+=1;r.last=r.count-1;if(l&&c){n!==undefined?r.slides.eq(r.count-n).after(i):r.container.prepend(i)}else{n!==undefined?r.slides.eq(n).before(i):r.container.append(i)}r.update(n,"add");r.slides=e(r.vars.selector+":not(.clone)",r);r.setup();r.vars.added(r)};r.removeSlide=function(t){var n=isNaN(t)?r.slides.index(e(t)):t;r.count-=1;r.last=r.count-1;if(isNaN(t)){e(t,r.slides).remove()}else{l&&c?r.slides.eq(r.last).remove():r.slides.eq(t).remove()}r.doMath();r.update(n,"remove");r.slides=e(r.vars.selector+":not(.clone)",r);r.setup();r.vars.removed(r)};v.init()};e(window).blur(function(e){focused=false}).focus(function(e){focused=true});e.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:false,animationLoop:true,smoothHeight:false,startAt:0,slideshow:true,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:false,thumbCaptions:false,pauseOnAction:true,pauseOnHover:false,pauseInvisible:true,useCSS:true,touch:true,video:false,controlNav:true,directionNav:true,prevText:"Previous",nextText:"Next",keyboard:true,multipleKeyboard:false,mousewheel:false,pausePlay:false,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:true,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}};e.fn.flexslider=function(t){if(t===undefined)t={};if(typeof t==="object"){return this.each(function(){var n=e(this),r=t.selector?t.selector:".slides > li",i=n.find(r);if(i.length===1&&t.allowOneSlide===true||i.length===0){i.fadeIn(400);if(t.start)t.start(n)}else if(n.data("flexslider")===undefined){new e.flexslider(this,t)}})}else{var n=e(this).data("flexslider");switch(t){case"play":n.play();break;case"pause":n.pause();break;case"stop":n.stop();break;case"next":n.flexAnimate(n.getTarget("next"),true);break;case"prev":case"previous":n.flexAnimate(n.getTarget("prev"),true);break;default:if(typeof t==="number")n.flexAnimate(t,true)}}}})(jQuery);

/*
 Sticky-kit v1.0.4 | WTFPL | Leaf Corcoran 2014 | http://leafo.net
*/
(function(){var b,m;b=this.jQuery;m=b(window);b.fn.stick_in_parent=function(e){var u,n,f,s,B,l,C;null==e&&(e={});s=e.sticky_class;u=e.inner_scrolling;f=e.parent;n=e.offset_top;null==n&&(n=0);null==f&&(f=void 0);null==u&&(u=!0);null==s&&(s="is_stuck");B=function(a,e,l,v,y,p,t){var q,z,k,w,c,d,A,x,g,h;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);d=a.parent();null!=f&&(d=d.closest(f));if(!d.length)throw"failed to find stick parent";q=k=!1;g=b("<div />");g.css("position",a.css("position"));A=function(){var c,
b;c=parseInt(d.css("border-top-width"),10);b=parseInt(d.css("padding-top"),10);e=parseInt(d.css("padding-bottom"),10);l=d.offset().top+c+b;v=d.height();c=k?(k=!1,q=!1,a.insertAfter(g).css({position:"",top:"",width:"",bottom:""}),g.detach(),!0):void 0;y=a.offset().top-parseInt(a.css("margin-top"),10)-n;p=a.outerHeight(!0);t=a.css("float");g.css({width:a.outerWidth(!0),height:p,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":t});if(c)return h()};A();if(p!==v)return w=void 0,
c=n,h=function(){var b,h,r,f;r=m.scrollTop();null!=w&&(h=r-w);w=r;k?(f=r+p+c>v+l,q&&!f&&(q=!1,a.css({position:"fixed",bottom:"",top:c}).trigger("sticky_kit:unbottom")),r<y&&(k=!1,c=n,"left"!==t&&"right"!==t||a.insertAfter(g),g.detach(),b={position:"",width:"",top:""},a.css(b).removeClass(s).trigger("sticky_kit:unstick")),u&&(b=m.height(),p>b&&!q&&(c-=h,c=Math.max(b-p,c),c=Math.min(n,c),k&&a.css({top:c+"px"})))):r>y&&(k=!0,b={position:"fixed",top:c},b.width="border-box"===a.css("box-sizing")?a.outerWidth()+
"px":a.width()+"px",a.css(b).addClass(s).after(g),"left"!==t&&"right"!==t||g.append(a),a.trigger("sticky_kit:stick"));if(k&&(null==f&&(f=r+p+c>v+l),!q&&f))return q=!0,"static"===d.css("position")&&d.css({position:"relative"}),a.css({position:"absolute",bottom:e,top:"auto"}).trigger("sticky_kit:bottom")},x=function(){A();return h()},z=function(){m.off("scroll",h);b(document.body).off("sticky_kit:recalc",x);a.off("sticky_kit:detach",z);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:""});
d.position("position","");if(k)return a.insertAfter(g).removeClass(s),g.remove()},m.on("touchmove",h),m.on("scroll",h),m.on("resize",x),b(document.body).on("sticky_kit:recalc",x),a.on("sticky_kit:detach",z),setTimeout(h,0)}};l=0;for(C=this.length;l<C;l++)e=this[l],B(b(e));return this}}).call(this);

/*!
 * imagesLoaded PACKAGED v3.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("eventEmitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(this,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function c(e){this.img=e}function f(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);for(var i=n.querySelectorAll("img"),r=0,o=i.length;o>r;r++){var s=i[r];this.addImage(s)}}},s.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),c.prototype=new t,c.prototype.check=function(){var e=v[this.img.src]||new f(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},c.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return f.prototype=new t,f.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},f.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},f.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},f.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},f.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},f.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});

/*
 * AfterResize
 */
(function(f){"use strict";var k={action:function(){},runOnLoad:false,duration:500};var b=k,e=false,g;var c={};c.init=function(){for(var a=0;a<=arguments.length;a++){var d=arguments[a];switch(typeof d){case"function":b.action=d;break;case"boolean":b.runOnLoad=d;break;case"number":b.duration=d;break}}return this.each(function(){if(b.runOnLoad){b.action()}f(this).resize(function(){c.timedAction.call(this)})})};c.timedAction=function(h,i){var j=function(){var a=b.duration;if(e){var d=new Date()-g;a=b.duration-d;if(a<=0){clearTimeout(e);e=false;b.action();return}}l(a)};var l=function(a){e=setTimeout(j,a)};g=new Date();if(typeof i==='number'){b.duration=i}if(typeof h==='function'){b.action=h}if(!e){j()}};f.fn.afterResize=function(a){if(c[a]){return c[a].apply(this,Array.prototype.slice.call(arguments,1))}else{return c.init.apply(this,arguments)}}})(jQuery);


// Equal Heights Plugin
$.fn.equalHeights=function(a,b){tallest=a?a:0,this.each(function(){$(this).height()>tallest&&(tallest=$(this).height())}),b&&tallest>b&&(tallest=b);return this.each(function(){$(this).height(tallest)})};

// jQuery Later HTML Plugin
(function(a){var b=[],c;getViewportDimensions=function(){var b=window.innerHeight,c=window.innerWidth,d=document.compatMode;if(d||!a.support.boxModel)c=d=="CSS1Compat"?document.documentElement.clientWidth:document.body.clientWidth,b=d=="CSS1Compat"?document.documentElement.clientHeight:document.body.clientHeight;return{height:b,width:c}},elementInView=function(b){var c=a(b).width(),d=a(b).height(),e=a(b).offset(),f=getViewportDimensions(),g=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop,h=document.documentElement.scrollLeft?document.documentElement.scrollLeft:document.body.scrollLeft;return e.top<g+f.height&&e.left<h+f.width&&e.top+d>g&&e.left+c>h},replaceLaterHtml=function(b){var c=a(b),d=c.html(),e=c.data("delay")||1;d=d.replace(/<l:script/g,"<script"),d=d.replace(/<\/[\s]*l:script>/g,"</script>"),setTimeout(function(){removeWrapper(c).replaceWith(d)},e)},removeWrapper=function(b){var c=a(b),d=c.parent(".x_later_html");d.length&&c.unwrap().siblings(".x_later_html_remove").remove();return c},a.fn.laterHtml=function(){var d=this.each(function(){var c=a(this);if(c.data("inview")){var d,e;c.wrap('<div class="x_later_html" />');var f=c.parent(".x_later_html");(d=c.data("placeholder-width"))&&f.width(d),(e=c.data("placeholder-height"))&&f.height(e),elementInView(f[0])?replaceLaterHtml(c):(f.prepend('<span class="x_later_html_remove">&nbsp;</span>'),b.push(c))}else replaceLaterHtml(this)});b.length&&(c=b.length,a(window).bind("scroll.xLaterHtml",function(){var d,e;for(i=0;i<b.length;i++)d=b[i][0],e=a(d).parent(".x_later_html"),e.length&&elementInView(e[0])&&(replaceLaterHtml(d),b[i][0]=null,c--);c<=0&&(a(window).unbind(".xLaterHtml"),b=[])}));return d},a(function(){a('script[type="text/x-later-html"]').laterHtml()})})(jQuery);

//Btn New Share
(function(e){e.fn.jqSocialSharer=function(t){var n=e.extend({popUpWidth:550,popUpHeight:450,popUpTop:100,useCurrentLocation:false},t);return this.each(function(t,r){e(this).bind("click",function(t){t.preventDefault();var r=e(this).data("social"),i=n.popUpWidth,s=n.popUpHeight,o=screen.height,u=screen.width,a=Math.round(u/2-i/2),f=n.popUpTop,l,c=n.useCurrentLocation,h=c?window.location:encodeURIComponent(r.url),p=r.text,d=encodeURIComponent(r.image);switch(r.type){case"facebook":l="http://www.facebook.com/sharer.php?u="+h+"&t="+p;break;case"twitter":l="http://twitter.com/share?url="+h+"&text="+p;break;case"plusone":l="https://plusone.google.com/_/+1/confirm?hl=en&url="+h;break;case"pinterest":l="http://pinterest.com/pin/create/button/?url="+h+"&media="+d+"&description="+p;break}window.open(l,"","left="+a+" , top="+f+", width="+i+", height="+s+", personalbar=0, toolbar=0, scrollbars=1, resizable=1")})})}})(jQuery)

//ZDSticky
var __ZDSTICKY=__ZDSTICKY||function(){var e=0,i=1200,d=null,t=null,o=null,a=null,r=null,s=null,n=null,c=null,l=null,y=null,S=null,h=null,p=null,k=e=null,b="",z="leaderboard",x="body",u=768,g=function(e,i,a){e||(e=d,i=t,a=o);var r=jQuery(window).scrollTop();(b.length?r+b.height():r)<=a.top?(e.removeClass("zdStickyFixed").addClass("zdUnSticky").css({position:"",top:"","margin-top":""}),i.removeClass("zdStickyFixed"),e==d&&jQuery(document.body).removeClass("hasStickyLeaderboard"),F()):e.animate({"margin-top":-e.height()+"px"},400,function(){e.removeClass("zdStickyFixed").addClass("zdUnSticky").css({position:"",top:"","margin-top":""}),i.removeClass("zdStickyFixed"),e==d&&jQuery(document.body).removeClass("hasStickyLeaderboard"),F()})},C=function(e){-1!=z.indexOf("leaderboard")&&e&&e.containerId&&(jQuery("#"+e.containerId).closest(".zdStickyLeaderboard").length||jQuery("#"+e.containerId).hasClass("zdStickyLeaderboard"))?g(d,t,o):-1!=z.indexOf("sidebartop")&&e&&e.containerId&&(jQuery("#"+e.containerId).closest(".zdStickyTopSidebar").length||jQuery("#"+e.containerId).hasClass("zdStickyTopSidebar"))?g(topSidebar,topSidebarPlaceholder,s):-1!=z.indexOf("sidebarmid")&&e&&e.containerId&&(jQuery("#"+e.containerId).closest(".zdStickyMidSidebar").length||jQuery("#"+e.containerId).hasClass("zdStickyMidSidebar"))?g(topSidebar,topSidebarPlaceholder,s):-1!=z.indexOf("sidebarbottom")&&e&&e.containerId&&(jQuery("#"+e.containerId).closest(".zdStickyBottomSidebar").length||jQuery("#"+e.containerId).hasClass("zdStickyBottomSidebar"))&&g(topSidebar,topSidebarPlaceholder,s)},m=function(e){var i=0;return jQuery(e).children().filter(":visible").each(function(){i+=jQuery(this).outerHeight()}),i},f=function(){d.length&&(t.css({"min-height":m(d)+"px"}),d.children("div").attr("align","center")),a.length&&r.css({"min-height":m(a)+"px"}),n.length&&c.css({"min-height":m(n)+"px"}),y.length&&S.css({"min-height":m(y)+"px"}),F()},v=function(){e=p.offset().top+p.height(),k=0,t.length&&(o=t.offset()||null)&&(o.bottom=o.top+d.height(),k=d.hasClass("zdStickyFixed")?parseInt(d.css("top").replace("px",""))+d.height():b.length?jQuery(b).scrollTop()+jQuery(b).height():0),r.length&&(s=r.offset()||null)&&(s.bottom=s.top+a.height()),c.length&&(l=c.offset()||null)&&(l.bottom=l.top+n.height()),S.length&&(h=S.offset()||null)&&(h.bottom=h.top+y.height())},F=function(p){if(!(u&&jQuery(window).width()<u)){var z=jQuery(window).scrollTop();p=z,v(),o&&!d.hasClass("zdUnSticky")?(b.length?z+b.height():z)>o.top?(d.hasClass("zdStickyFixed")||(d.addClass("zdStickyFixed").css("position","fixed"),t.addClass("zdStickyFixed"),jQuery(document.body).addClass("hasStickyLeaderboard")),p=z+k):d.hasClass("zdStickyFixed")&&(d.removeClass("zdStickyFixed").css("position",""),t.removeClass("zdStickyFixed"),jQuery(document.body).removeClass("hasStickyLeaderboard")):o&&(p=z+o.top),s&&p>=s.top?(l&&p<=l.top&&(n.removeClass("zdStickyFixed").css({top:"",position:""}),c.removeClass("zdStickyFixed")),h&&p<=h.top&&(y.removeClass("zdStickyFixed").css({top:"",position:""}),S.removeClass("zdStickyFixed")),z=s.top+a.height()+i,l&&z>l.top?z=l.top-10:h&&z>h.top&&(z=h.top-10),a.hasClass("zdUnSticky")||(p+a.height()>z?(z-=p+a.height(),z=k-Math.abs(z),z>k&&(z=k),a.addClass("zdStickyFixed").css({top:z,position:"fixed"})):a.addClass("zdStickyFixed").css({top:k,position:"fixed"}),r.addClass("zdStickyFixed")),a.height(),l&&p>=l.top&&!n.hasClass("zdUnSticky")&&(p+n.height()>e?(z=h.top-(p+n.height()),z=k-Math.abs(z),z>k&&(z=k),n.addClass("zdStickyFixed").css({top:z,position:"fixed"}),c.addClass("zdStickyFixed")):h&&p+n.height()>=h.top?(z=h.top-(p+n.height()),z=k-Math.abs(z),z>k&&(z=k),n.addClass("zdStickyFixed").css({top:z,position:"fixed"}),c.addClass("zdStickyFixed")):(!h||p<=h.top)&&(n.addClass("zdStickyFixed").css({top:k,position:"fixed"}),c.addClass("zdStickyFixed")),a.hasClass("zdStickyFixed")),h&&p>=h.top&&!y.hasClass("zdUnSticky")&&(p+y.height()>e?(z=e-(p+y.height()),z=k-Math.abs(z),z>k&&(z=k),y.addClass("zdStickyFixed").css({top:z,position:"fixed"})):y.addClass("zdStickyFixed").css({top:k,position:"fixed"}),S.addClass("zdStickyFixed"))):(a.removeClass("zdStickyFixed").css({top:"",position:""}),r.removeClass("zdStickyFixed"),n.removeClass("zdStickyFixed").css({top:"",position:""}),c.removeClass("zdStickyFixed"),y.removeClass("zdStickyFixed").css({top:"",position:""}),S.removeClass("zdStickyFixed"))}};return{init:function(e){var o="function"==typeof e?e():e;switch(o||(o={}),e={pageContainerElement:"#content",unstickLeaderboardAfterTimeout:8e3,unstickOnViewable:"leaderboard",refreshViewableAdsAfter:-1,sidebarStickyRange:1200,extraCSS:""},(void 0!==typeof o.hostname?o.hostname:null)||window.location.hostname){case"it.toolbox.com":e.pageContainerElement="#content",e.fixedNavBar="div.dynaheader-navbar.dynaheader-fixednav",e.extraCSS="#zdStickyTopSidebar.zdStickyFixed > div, .zdStickyBottomSidebar.zdStickyFixed > div { width: 346px; padding: 10px 0px; } .hasStickyLeaderboard #zdStickyTopSidebar.zdStickyFixed > div, .hasStickyLeaderboard #zdStickyBottomSidebar.zdStickyFixed > div { top: 145px; }"}for(var s in o)e[s]=o[s];if(z=z?z.toLowerCase():"","all"==z&&(z="leaderboard sidebartop sidebarmid sidebarbottom"),u=e.minimumWindowWidth?parseInt(u):u,!(u&&jQuery(window).width()<u)){d="string"==typeof e.topLeaderboardAdContainer?jQuery(e.topLeaderboardAdContainer):e.topLeaderboardAdContainer?e.topLeaderboardAdContainer:jQuery(".zdStickyLeaderboard").eq(0),a="string"==typeof e.sidebarTopAdContainer?jQuery(e.sidebarTopAdContainer):e.sidebarTopAdContainer?e.sidebarTopAdContainer:jQuery(".zdStickyTopSidebar").eq(0),n="string"==typeof e.sidebarMidAdContainer?jQuery(e.sidebarMidAdContainer):e.sidebarMidAdContainer?e.sidebarMidAdContainer:jQuery(".zdStickyMidSidebar").eq(0),y="string"==typeof e.sidebarBottomAdContainer?jQuery(e.sidebarBottomAdContainer):e.sidebarBottomAdContainer?e.sidebarBottomAdContainer:jQuery("#zdStickyBottomSidebar").eq(0),d.length?(d.addClass("zdStickyLeaderboard").before('<div id="zdStickyLeaderboardPlaceholder"></div>'),t=jQuery("#zdStickyLeaderboardPlaceholder")):t=jQuery(),a.length?(a.addClass("zdStickyTopSidebar").before('<div id="zdStickyTopSidebarPlaceholder"></div>'),r=jQuery("#zdStickyTopSidebarPlaceholder")):r=jQuery(),n.length?(n.addClass("zdStickyMidSidebar").before('<div id="zdStickyMidSidebarPlaceholder"></div>'),c=jQuery("#zdStickyMidSidebarPlaceholder")):c=jQuery(),y.length?(y.addClass("zdStickyBottomSidebar").before('<div id="zdStickyBottomSidebarPlaceholder"></div>'),S=jQuery("#zdStickyBottomSidebarPlaceholder")):S=jQuery(),i="string"==typeof e.sidebarStickyRange?parseInt(e.sidebarStickyRange):e.sidebarStickyRange?e.sidebarStickyRange:1200,p="string"==typeof e.pageContent?jQuery(e.pageContent):e.pageContent?e.pageContent:jQuery(),!p.length&&a&&(p=a.parentsUntil("body")),!p.length&&n&&(p=n.parentsUntil("body")),!p.length&&y&&(p=y.parentsUntil("body")),p.length||(p=jQuery("body")),b="string"==typeof e.fixedNavBar?jQuery(e.fixedNavBar):e.fixedNavBar?e.fixedNavBar:jQuery(),x=e.adBackgroundColor?e.adBackgroundColor:x,v(),s=e.extraCSS;var o=x&&jQuery(x).length?"background-color: "+jQuery(x).css("background-color")+";":x?"background: "+x+";":"",l=b.length?jQuery(b).height():0;b.length&&10010>parseInt(b.css("z-index"))&&b.css("z-index",10010);var h="",k="",m="",j="";d.length&&(h="min-width: "+d.css("display","block").width()+"px;",d.css("display","")),a.length&&(k="min-width: "+a.css("display","block").width()+"px;",a.css("display",""),a.get(0).align="center"),n.length&&(m="min-width: "+n.css("display","block").width()+"px;",n.css("display",""),n.get(0).align="center"),y.length&&(j="min-width: "+y.css("display","block").width()+"px;",y.css("display",""),y.get(0).align="center"),o="<style type='text/css'> .zdStickyLeaderboard { position: relative; height: auto; min-height: 90px; } .zdStickyFixed { position: fixed; } .zdStickyFixed.zdUnSticky { position: relative; top: 0px; } .zdStickyLeaderboard.zdStickyFixed { position: fixed; top: "+l+"px; z-index: 10005; text-align: center; } .zdStickyTopSidebar, .zdStickyMidSidebar, .zdStickyBottomSidebar { min-height: 250px; text-align: center; position: relative; } .zdStickyTopSidebar { z-index: 10003; } .zdStickyMidSidebar { z-index: 10004; } .zdStickyBottomSidebar { z-index: 10005; } .zdStickyTopSidebar.zdStickyFixed, .zdStickyMidSidebar.zdStickyFixed, .zdStickyBottomSidebar.zdStickyFixed { position: fixed; z-index: 10003; top: "+l+"px; "+k+" } .zdStickyBottomSidebar.zdStickyFixed { z-index: 10002; "+m+" } .zdStickyBottomSidebar.zdStickyFixed { z-index: 10000; "+j+" } #zdStickyLeaderboardPlaceholder.zdStickyFixed, #zdStickyTopSidebarPlaceholder.zdStickyFixed, #zdStickyMidSidebarPlaceholder.zdStickyFixed, #zdStickyBottomSidebarPlaceholder.zdStickyFixed { position: relative; z-index: 0; min-height: 90px; }  #zdStickyLeaderboardPlaceholder, #zdStickyTopSidebarPlaceholder, #zdStickyMidSidebarPlaceholder, #zdStickyBottomSidebarPlaceholder { position: absolute; z-index: -1; visibility: hidden; }  #zdStickyLeaderboardPlaceholder.zdUnSticky, #zdStickyTopSidebarPlaceholder.zdUnSticky, #zdStickyMidSidebarPlaceholder.zdUnSticky, #zdStickyBottomSidebarPlaceholder.zdUnSticky { position: absolute; min-height: 90px; z-index: -1; visibility: hidden; } ",s&&(o+=s),jQuery(o+" </style>").appendTo("head"),f(),F(),jQuery(window).scroll(F),0<e.unstickLeaderboardAfterTimeout&&setTimeout(g,e.unstickLeaderboardAfterTimeout),window.ZDVTools&&window.ZDVTools.onViewable.push(C),d.addClass("zdStickyLeaderboard"),a.addClass("zdStickyTopSidebar"),y.addClass("zdStickyBottomSidebar"),jQuery(".zdUnSticky").removeClass("zdUnSticky")}},detectAnchors:v,refreshGeometry:v,unstickAdUnit:g,DFPSlotRendered:function(e){e.isEmpty||f()},onLoad:f}}();

// jQuery HC-Sticky
// =============
// Version: 1.2.43
// Copyright: Some Web Media
// Author: Some Web Guy
// Author URL: http://twitter.com/some_web_guy
// Website: http://someweblog.com/
// Plugin URL: https://github.com/somewebmedia/hc-sticky
// License: Released under the MIT License www.opensource.org/licenses/mit-license.php
// Description: Cross-browser jQuery plugin that makes any element attached to the page and always visible while you scroll.
(function(e,t,n){"use strict";var r=function(e){console.log(e)};var i=e(t),s=t.document,o=e(s);var u=function(){var e,t=3,n=s.createElement("div"),r=n.getElementsByTagName("i");while(n.innerHTML="<!--[if gt IE "+ ++t+"]><i></i><![endif]-->",r[0]){}return t>4?t:e}();var a=function(){var e=t.pageXOffset!==n?t.pageXOffset:s.compatMode=="CSS1Compat"?t.document.documentElement.scrollLeft:t.document.body.scrollLeft,r=t.pageYOffset!==n?t.pageYOffset:s.compatMode=="CSS1Compat"?t.document.documentElement.scrollTop:t.document.body.scrollTop;if(typeof a.x=="undefined"){a.x=e;a.y=r}if(typeof a.distanceX=="undefined"){a.distanceX=e;a.distanceY=r}else{a.distanceX=e-a.x;a.distanceY=r-a.y}var i=a.x-e,o=a.y-r;a.direction=i<0?"right":i>0?"left":o<=0?"down":o>0?"up":"first";a.x=e;a.y=r};i.on("scroll",a);e.fn.style=function(n){if(!n)return null;var r=e(this),i;var o=r.clone().css("display","none");o.find("input:radio").attr("name","copy-"+Math.floor(Math.random()*100+1));r.after(o);var u=function(e,n){var i;if(e.currentStyle){i=e.currentStyle[n.replace(/-\w/g,function(e){return e.toUpperCase().replace("-","")})]}else if(t.getComputedStyle){i=s.defaultView.getComputedStyle(e,null).getPropertyValue(n)}i=/margin/g.test(n)?parseInt(i)===r[0].offsetLeft?i:"auto":i;return i};if(typeof n=="string"){i=u(o[0],n)}else{i={};e.each(n,function(e,t){i[t]=u(o[0],t)})}o.remove();return i||null};e.fn.extend({hcSticky:function(r){if(this.length==0)return this;this.pluginOptions("hcSticky",{top:0,bottom:0,bottomEnd:0,innerTop:0,innerSticker:null,className:"sticky",wrapperClassName:"wrapper-sticky",stickTo:null,responsive:true,followScroll:true,offResolutions:null,onStart:e.noop,onStop:e.noop,on:true,fn:null},r||{},{reinit:function(){e(this).hcSticky()},stop:function(){e(this).pluginOptions("hcSticky",{on:false}).each(function(){var t=e(this),n=t.pluginOptions("hcSticky"),r=t.parent("."+n.wrapperClassName);var i=t.offset().top-r.offset().top;t.css({position:"absolute",top:i,bottom:"auto",left:"auto",right:"auto"}).removeClass(n.className)})},off:function(){e(this).pluginOptions("hcSticky",{on:false}).each(function(){var t=e(this),n=t.pluginOptions("hcSticky"),r=t.parent("."+n.wrapperClassName);t.css({position:"relative",top:"auto",bottom:"auto",left:"auto",right:"auto"}).removeClass(n.className);r.css("height","auto")})},on:function(){e(this).each(function(){e(this).pluginOptions("hcSticky",{on:true,remember:{offsetTop:i.scrollTop()}}).hcSticky()})},destroy:function(){var t=e(this),n=t.pluginOptions("hcSticky"),r=t.parent("."+n.wrapperClassName);t.removeData("hcStickyInit").css({position:r.css("position"),top:r.css("top"),bottom:r.css("bottom"),left:r.css("left"),right:r.css("right")}).removeClass(n.className);i.off("resize",n.fn.resize).off("scroll",n.fn.scroll);t.unwrap()}});if(r&&typeof r.on!="undefined"){if(r.on){this.hcSticky("on")}else{this.hcSticky("off")}}if(typeof r=="string")return this;return this.each(function(){var r=e(this),s=r.pluginOptions("hcSticky");var f=function(){var e=r.parent("."+s.wrapperClassName);if(e.length>0){e.css({height:r.outerHeight(true),width:function(){var t=e.style("width");if(t.indexOf("%")>=0||t=="auto"){if(r.css("box-sizing")=="border-box"||r.css("-moz-box-sizing")=="border-box"){r.css("width",e.width())}else{r.css("width",e.width()-parseInt(r.css("padding-left")-parseInt(r.css("padding-right"))))}return t}else{return r.outerWidth(true)}}()});return e}else{return false}}()||function(){var t=r.style(["width","margin-left","left","right","top","bottom","float","display"]);var n=r.css("display");var i=e("<div>",{"class":s.wrapperClassName}).css({display:n,height:r.outerHeight(true),width:function(){if(t["width"].indexOf("%")>=0||t["width"]=="auto"&&n!="inline-block"&&n!="inline"){r.css("width",parseFloat(r.css("width")));return t["width"]}else if(t["width"]=="auto"&&(n=="inline-block"||n=="inline")){return r.width()}else{return t["margin-left"]=="auto"?r.outerWidth():r.outerWidth(true)}}(),margin:t["margin-left"]?"auto":null,position:function(){var e=r.css("position");return e=="static"?"relative":e}(),"float":t["float"]||null,left:t["left"],right:t["right"],top:t["top"],bottom:t["bottom"],"vertical-align":"top"});r.wrap(i);if(u===7){if(e("head").find("style#hcsticky-iefix").length===0){e('<style id="hcsticky-iefix">.'+s.wrapperClassName+" {zoom: 1;}</style>").appendTo("head")}}return r.parent()}();if(r.data("hcStickyInit"))return;r.data("hcStickyInit",true);var l=s.stickTo&&(s.stickTo=="document"||s.stickTo.nodeType&&s.stickTo.nodeType==9||typeof s.stickTo=="object"&&s.stickTo instanceof(typeof HTMLDocument!="undefined"?HTMLDocument:Document))?true:false;var c=s.stickTo?l?o:typeof s.stickTo=="string"?e(s.stickTo):s.stickTo:f.parent();r.css({top:"auto",bottom:"auto",left:"auto",right:"auto"});i.load(function(){if(r.outerHeight(true)>c.height()){f.css("height",r.outerHeight(true));r.hcSticky("reinit")}});var h=function(e){if(r.hasClass(s.className))return;e=e||{};r.css({position:"fixed",top:e.top||0,left:e.left||f.offset().left}).addClass(s.className);s.onStart.apply(r[0]);f.addClass("sticky-active")},p=function(e){e=e||{};e.position=e.position||"absolute";e.top=e.top||0;e.left=e.left||0;if(r.css("position")!="fixed"&&parseInt(r.css("top"))==e.top)return;r.css({position:e.position,top:e.top,left:e.left}).removeClass(s.className);s.onStop.apply(r[0]);f.removeClass("sticky-active")};var d=function(t){if(!s.on||!r.is(":visible"))return;if(r.outerHeight(true)>=c.height()){p();return}var n=s.innerSticker?e(s.innerSticker).position().top:s.innerTop?s.innerTop:0,o=f.offset().top,u=c.height()-s.bottomEnd+(l?0:o),d=f.offset().top-s.top+n,v=r.outerHeight(true)+s.bottom,m=i.height(),g=i.scrollTop(),y=r.offset().top,b=y-g,w;if(typeof s.remember!="undefined"&&s.remember){var E=y-s.top-n;if(v-n>m&&s.followScroll){if(E<g&&g+m<=E+r.height()){s.remember=false}}else{if(s.remember.offsetTop>E){if(g<=E){h({top:s.top-n});s.remember=false}}else{if(g>=E){h({top:s.top-n});s.remember=false}}}return}if(g>d){if(u+s.bottom-(s.followScroll&&m<v?0:s.top)<=g+v-n-(v-n>m-(d-n)&&s.followScroll?(w=v-m-n)>0?w:0:0)){p({top:u-v+s.bottom-o})}else if(v-n>m&&s.followScroll){if(b+v<=m){if(a.direction=="down"){h({top:m-v})}else{if(b<0&&r.css("position")=="fixed"){p({top:y-(d+s.top-n)-a.distanceY})}}}else{if(a.direction=="up"&&y>=g+s.top-n){h({top:s.top-n})}else if(a.direction=="down"&&y+v>m&&r.css("position")=="fixed"){p({top:y-(d+s.top-n)-a.distanceY})}}}else{h({top:s.top-n})}}else{p()}};var v=false,m=false;var g=function(){b();y();if(!s.on)return;var e=function(){if(r.css("position")=="fixed"){r.css("left",f.offset().left)}else{r.css("left",0)}};if(s.responsive){if(!m){m=r.clone().attr("style","").css({visibility:"hidden",height:0,overflow:"hidden",paddingTop:0,paddingBottom:0,marginTop:0,marginBottom:0});f.after(m)}var t=f.style("width");var n=m.style("width");if(n=="auto"&&t!="auto"){n=parseInt(r.css("width"))}if(n!=t){f.width(n)}if(v){clearTimeout(v)}v=setTimeout(function(){v=false;m.remove();m=false},250)}e();if(r.outerWidth(true)!=f.width()){var i=r.css("box-sizing")=="border-box"||r.css("-moz-box-sizing")=="border-box"?f.width():f.width()-parseInt(r.css("padding-left"))-parseInt(r.css("padding-right"));i=i-parseInt(r.css("margin-left"))-parseInt(r.css("margin-right"));r.css("width",i)}};r.pluginOptions("hcSticky",{fn:{scroll:d,resize:g}});var y=function(){if(s.offResolutions){if(!e.isArray(s.offResolutions)){s.offResolutions=[s.offResolutions]}var t=true;e.each(s.offResolutions,function(e,n){if(n<0){if(i.width()<n*-1){t=false;r.hcSticky("off")}}else{if(i.width()>n){t=false;r.hcSticky("off")}}});if(t&&!s.on){r.hcSticky("on")}}};y();i.on("resize",g);var b=function(){var r=false;if(e._data(t,"events").scroll!=n){e.each(e._data(t,"events").scroll,function(e,t){if(t.handler==s.fn.scroll){r=true}})}if(!r){s.fn.scroll(true);i.on("scroll",s.fn.scroll)}};b()})}})})(jQuery,this);(function(e,t){"use strict";e.fn.extend({pluginOptions:function(n,r,i,s){if(!this.data(n))this.data(n,{});if(n&&typeof r=="undefined")return this.data(n).options;i=i||r||{};if(typeof i=="object"||i===t){return this.each(function(){var t=e(this);if(!t.data(n).options){t.data(n,{options:e.extend(r,i||{})});if(s){t.data(n).commands=s}}else{t.data(n,e.extend(t.data(n),{options:e.extend(t.data(n).options,i||{})}))}})}else if(typeof i=="string"){return this.each(function(){e(this).data(n).commands[i].call(this)})}else{return this}}})})(jQuery)

var menuIntervalLoop;
function menuInterval(){
	clearInterval( menuIntervalLoop );
	menuIntervalLoop=setInterval(startMenuControl,3000);
	return menuIntervalLoop;
}

function startMenuControl(){
	var isHovered = $('#dk_menu').is(":hover");
	if(!isHovered){
		$('#dk_menu li a').removeClass("active").siblings(".nav-submenu").fadeOut(100);
		stopMenuControl();
	}
}

function stopMenuControl(){
	clearInterval( menuIntervalLoop );
}


mainMenuPreloaded = false;
function xmenuHover()
{
	var $this = $(this);
	var delay = 0, setTimeoutConst;
	var wasVisible = $(".nav-submenu").is(":visible");
	if (wasVisible) {
		var SlideTime = 0;
	} else {
		var SlideTime = 160;
	}
	if( $('#dk_menu').length&&!$('#dk_menu').hasClass('espMobileMenu') ){
		menuInterval();
	}
	if ($this.children("a").hasClass("active")) {
		return false;
	}
	
	setTimeoutConst = setTimeout(function()
	{
		$this.stop(true,true).siblings("li").removeClass("active").children("a").removeClass("active").siblings(".nav-submenu").hide();
		if (!$this.children(".nav-submenu").length) {
			$this.append("<div class='nav-submenu ' style='display: none;'></div>");
		}
		
		if ($this.children(".nav-submenu").children(".wrapper").children().length > 0) // if the content has been loaded just show it
		{
			
			$this.children("a").addClass("activeFirst");
			$this.children("a").addClass("active");
			$this.imagesLoaded( function()
			{
				$(".loadAnim").hide();	
			});
			$(".submenu > li > a").hover(function(e)
			{
				e.preventDefault();
				$(this).parent("li").addClass("active").siblings("li").removeClass("active");
				
				//$(this).siblings("ul.recent-items").show();
			});
			$("ul.SubHeader").parent().addClass("withHeader");
			$this.children(".nav-submenu").fadeIn(SlideTime,function(){
				$this.children("a").removeClass("activeFirst");
			});
			
		} else { // we need to load the contents for each tab
			
			if (mainMenuPreloaded === false) {
				$.get( "/static/nav-submenus/downloads.html", function(data) {
					$("#dk_menu a[data-source='downloads']").siblings(".nav-submenu").children(".wrapper").html(data);
				});
				$.get( "/static/nav-submenus/features.html", function(data) {
					$("#dk_menu a[data-source='features']").siblings(".nav-submenu").children(".wrapper").html(data);
				});
				$.get( "/static/nav-submenus/forums.html", function(data) {
					$("#dk_menu a[data-source='forums']").siblings(".nav-submenu").children(".wrapper").html(data);
				});
				$.get( "/static/nav-submenus/product-finder.html", function(data) {
					$("#dk_menu a[data-source='product-finder']").siblings(".nav-submenu").children(".wrapper").html(data);
				});
				$.get( "/static/nav-submenus/reviews.html", function(data) {
					$("#dk_menu a[data-source='reviews']").siblings(".nav-submenu").children(".wrapper").html(data);
				});
				$.get( "/static/nav-submenus/trending.html", function(data) {
					$("#dk_menu a[data-source='trending']").siblings(".nav-submenu").children(".wrapper").html(data);
				});
				$.get( "/static/nav-submenus/store.html", function(data) {
					$("#dk_menu a[data-source='store']").siblings(".nav-submenu").children(".wrapper").html(data);
				});
				mainMenuPreloaded = true;
			}
			$this.children(".nav-submenu").children(".wrapper").load("/static/nav-submenus/"+$this.children("a").data("source")+'.html',
				function()
				{
					$this.imagesLoaded( function() {
						$(".loadAnim").hide();	
					});
					
					$this.children("a").addClass("activeFirst");
					$this.children("a").addClass("active");
					$(".submenu > li > a").hover(function(e) {
						e.preventDefault();
						$(this).parent("li").addClass("active").siblings("li").removeClass("active");
						//$(this).siblings("ul.recent-items").show();
					});
					$("ul.SubHeader").parent().addClass("withHeader");
					$this.children(".nav-submenu").fadeIn(SlideTime,function(){
						$this.children("a").removeClass("activeFirst");
					});
				});
		}		
	}, delay);
	return false;
}

function xmenuHoverOut()
{
	var $this = $(this);
	var delay = 0, setTimeoutConst;
	setTimeout(function() {
		$this.children("a").removeClass("active").siblings(".nav-submenu").fadeOut(100);
		clearTimeout(setTimeoutConst);
		var SlideTime = 240;
		return false
	},50);
}

//Fijar ad top
hideAdSpeed=7000;
function TSzdsticky(){
	__ZDSTICKY.init({
		topLeaderboardAdContainer: jQuery('.ctaSticky').eq(0),
		unstickLeaderboardAfterTimeout:hideAdSpeed,
		pageContent: jQuery('#content'),
		fixedNavBar: '#header-ts',
		extraCSS: '.ctaSticky.zdStickyFixed {width: 100%; left: 0px;}'
	});
}//TSzdsticky

var hideSidebarSpeed=10000;
var newSpacePx=50;
var newSpacePx2=100;
var initSpacePx=180;
var hcFollowPx=1200;
var hcFollowPxDownload=1500;
var hcFollowPxCategory=1500;
var doSticky=1;
var flagDetect=0;

var changeDoSticky=setTimeout(function(){
	doSticky=0;
},hideSidebarSpeed,function(){clearTimeout(changeDoSticky)});

var countCheck=0;
var saveHeight=0;
function checkForHideCta(passHeight){
	passHeight = passHeight || 0;
	if(passHeight!=0){saveHeight=passHeight;}
	
	if($('.ctaSticky').hasClass('zdUnSticky')){
		var stickySide1=$('.stickySide1');
		if(stickySide1.hasClass('sticky')){
			stickySide1.animate({"top":saveHeight+"px"},'fast');
		}
	}else{
		if(countCheck<=25){
			setTimeout(checkForHideCta,500);
		}
	}
	countCheck++;
}

function fixSidebar(){
	var ctaSticky=$('.ctaSticky').eq(0);
	var sidebarId=$('#sidebar');
	var sticky1=$('.stickySide1');
	var sticky2=$('.stickySide2');
	
	var sticky1H=sticky1.height();
	var sticky2H=sticky2.height();
	var sidebarH=sidebarId.height();
	
	if( $('body').hasClass('home') ){
		if(sticky1.length){
			sidebarId.css({'overflow':'visible'});
			
			var setArticle=setTimeout(function(){
				
				checkForHideCta(newSpacePx);
				
				sticky1.hcSticky({
					top: newSpacePx,
					stickTo: $('.wrapperMobileOnly'),
					bottomEnd: sticky2H+500,
					followScroll:false,
					onStart:function(){
						if( ctaSticky.hasClass('zdStickyFixed') ){
							sticky1.css('top',initSpacePx);
						}
					}
				});
				sticky2.hcSticky({
					top: newSpacePx2,
					stickTo: $('.wrapperMobileOnly'),
					bottomEnd: sticky2H+1200,
					followScroll:false,
					onStart:function(){
						sticky1.hcSticky('off');
					}
				});
				
			},250,function(){clearTimeout(setArticle);});
		}
	}//Home Index?
	
	if( $('body').hasClass('article') ){
		if(sticky1.length){
			sidebarId.css({'overflow':'visible'});
			
			var setArticle=setTimeout(function(){
				var artBody=$('.articleBody');
				var artBodyH=artBody.height();
				
				var maxH1=4500;
				var maxH2=1000;
				
				if( artBodyH>(maxH1+maxH2)){
					maxH1=artBodyH-maxH1;
					maxH2=maxH1-maxH2;
				}else{
					maxH1=sticky1H+250;
					maxH2=sticky1H+200;
				}
				
				var noSticky=0;
				
				checkForHideCta(newSpacePx2);
				
				if( artBody.height() < sidebarH*2 ){ sticky1H=0; }
				if( artBody.height() < sidebarH+500 ){ var noSticky=1; }
				
				if(noSticky==0){
					
					sticky1.hcSticky({
						top: newSpacePx2,
						stickTo: artBody,
						bottomEnd:maxH1,
						followScroll:false,
						onStart:function(){
							if( ctaSticky.hasClass('zdStickyFixed') ){
								sticky1.css('top',initSpacePx+newSpacePx);
							}
						}
					});
					sticky2.hcSticky({
						top: newSpacePx2,
						stickTo: artBody,
						bottomEnd:maxH2,
						followScroll:false,
						onStart:function(){
							if(sticky1H==0){ sticky2.hcSticky('off'); }
							else{ sticky1.hcSticky('off'); }
						}
					});
					
				}
				
			},250,function(){clearTimeout(setArticle);});
		}
	}//article/Reviews?
	
	if( $('body').hasClass('news') ){
		if(sticky1.length){
			sidebarId.css({'overflow':'visible'});
			var artBody=$('.articleBody');
			var noSticky=0;
			
			checkForHideCta(150);
			
			if( artBody.height() < sidebarH*2 ){ sticky1H=0; }
			if( artBody.height() < sidebarH+500 ){ var noSticky=1; }
			
			if(noSticky==0){
				sticky1.hcSticky({
					top: newSpacePx2+newSpacePx,
					stickTo: artBody,
					followScroll:false,
					bottomEnd: 500,
					onStart:function(){
						if( ctaSticky.hasClass('zdStickyFixed') ){
							sticky1.css('top',initSpacePx+newSpacePx2);
						}
					}
				});
				sticky2.hcSticky({
					top: newSpacePx2,
					stickTo: artBody,
					followScroll:false,
					onStart:function(){
						if(sticky1H==0){ sticky2.hcSticky('off'); }
						else{
							sticky1.hcSticky('off');
							sticky2.hcSticky('off');
						}
					}
				});
			}
		}
	}//News?
	
	if( $('body').hasClass('download-index') ){
		if(sticky1.length){
			sidebarId.css({'overflow':'visible'});
			var artBody=$('.col-2-3');
			var spaceEnd=(artBody.height()-hcFollowPxDownload)-sidebarId.height();
			if(spaceEnd<100){spaceEnd=150;}
			
			checkForHideCta(newSpacePx2);
			
			sticky1.hcSticky({
				top: newSpacePx2,
				stickTo: artBody,
				followScroll:false,
				bottomEnd: spaceEnd,
				onStart:function(){
					if( ctaSticky.hasClass('zdStickyFixed') ){
						sticky1.css('top',initSpacePx+newSpacePx);
					}
					if(doSticky==0&&flagDetect==0){sticky1.hcSticky('off');}
					flagDetect=1;
				}
			});
		}
	}//Downloads Index?
	
	if( $('body').hasClass('category') ){
		if(sticky1.length){
			sidebarId.css({'overflow':'visible'});
			var artBody=$('.col-2-3');
			var spaceEnd=(artBody.height()-hcFollowPxCategory)-sidebarId.height();
			if(spaceEnd<100){spaceEnd=150;}
			
			checkForHideCta(newSpacePx2);
			
			sticky1.hcSticky({
				top: newSpacePx2,
				stickTo: artBody,
				followScroll:false,
				bottomEnd: spaceEnd,
				onStart:function(){
					if( ctaSticky.hasClass('zdStickyFixed') ){
						sticky1.css('top',initSpacePx+newSpacePx);
					}
					if(doSticky==0&&flagDetect==0){sticky1.hcSticky('off');}
					flagDetect=1;
				}
			});
		}
	}//Category/Tags?
	
	if( $('body').hasClass('products') ){
		if(sticky1.length){
			sidebarId.css({'overflow':'visible'});
			sticky2.hcSticky({
				top: newSpacePx2,
				bottomEnd: 250,
				followScroll:false
			});
		}
	}//Products?
	
	if( $('body').hasClass('product') ){
		if(sticky1.length){
			sidebarId.css({'overflow':'visible'});
			var artBody=$('.wrapperMobileOnly');
			
			if(artBody.height()>(sidebarId.height()+750)){
				
				checkForHideCta(newSpacePx2);
				
				sticky1.hcSticky({
					top: newSpacePx,
					stickTo: artBody,
					bottomEnd: sticky2H+500,
					followScroll:false,
					onStart:function(){
						if( ctaSticky.hasClass('zdStickyFixed') ){
							sticky1.css('top',initSpacePx+newSpacePx);
						}
						if(doSticky==0&&flagDetect==0){sticky1.hcSticky('off');}
						flagDetect=1;
					}
				});
				sticky2.hcSticky({
					top: newSpacePx2,
					stickTo: artBody,
					bottomEnd: sticky2H+500,
					followScroll:false,
					onStart:function(){
						sticky1.hcSticky('off');
					}
				});
			}
			
		}
	}//Producto?
	
	if( $('body').hasClass('node3') ){
		if(sticky1.length){
			sidebarId.css({'overflow':'visible'});
			var artBody=$('.mainContent');
			checkForHideCta(-80);
			
			var bEnd=300;
			if(artBody.height()>3500){ bEnd=1000; }
			else if(artBody.height()>5000){ bEnd=2000; }
			else{ bEnd=500; }
			
			sticky1.hcSticky({
				top: -80,
				stickTo: artBody,
				followScroll:false,
				bottomEnd: bEnd,
				onStart:function(){
					if( ctaSticky.hasClass('zdStickyFixed') ){
						sticky1.css('top',50);
					}
				}
			});
			sticky2.hcSticky({
				top: newSpacePx2,
				stickTo: artBody,
				followScroll:false,
				onStart:function(){
					sticky1.hcSticky('off');
					sticky2.hcSticky('off');
				}
			});
		}
	}//Temas Foro?
	
}//fixSidebar


function TSMainMenuInit()
{
	var setTimeZD=setTimeout(TSzdsticky,250,function(){clearTimeout(setTimeZD);});
	
	//main menu
	$("#main-menu .wrapper > ul > li").hoverIntent({over:xmenuHover,out:xmenuHoverOut,interval:(75)});
	$("#main-menu").hoverIntent(toggleFast, toggleInit);
	function toggleFast() {
		$("#main-menu .wrapper > ul > li").hoverIntent({over:xmenuHover,out:xmenuHoverOut,interval:(0)});
	}
	function toggleInit() {
		$("#main-menu .wrapper > ul > li").hoverIntent({over:xmenuHover,out:xmenuHoverOut,interval:(75)});
	}
	
	//Desactiva click en movil
	$('.espMobileMenu > li > a').click(function(e){ e.preventDefault(); return false; });
	//$('.espMobileLogin > li > a').prop("href", "#Login")
	$('.espMobileLogin > li > a').click(function(e){ e.preventDefault(); return false; });
	
	//mobile menu part
	$("#Stripes").parent().click(function(e){
		e.preventDefault();
		var wrap = $("#GlobalWrapper");
		if ( wrap.children('#header-ts').hasClass('activebar'))
		{
			wrap.removeClass('WrapperLayering');
			$("#Stripes").parent('a').removeClass('CoverEntirePage');
			//setTimeout(function(){
				wrap.parent().children("#Mobileheader").removeClass('MenuLayering');
				//wrap.parent().children("#Mobileheader").hide(0);
			//},80);
		}
		else {
			//wrap.parent().children("#Mobileheader").show();
			wrap.parent().children("#Mobileheader").addClass('MenuLayering');
			wrap.addClass('WrapperTrans');
			//setTimeout(function(){
				$("#Stripes").parent('a').addClass('CoverEntirePage');
				wrap.addClass('WrapperLayering');
			//},80);
		};
		wrap.children().addClass('flyout');
		wrap.children().toggleClass('activebar');
	});
}

function TSTopMenu()
{
	if( ($(window).width())<760 )
	{
		var varBol=0;
		
		$('.login-dropdown').addClass('loginEspBlock');
		$(".login > a").click(function(e){
			$(this).parent().toggleClass('hover');
			e.preventDefault();
			return false;
		});
		
		$(".group > a").click(function(e){
			$(this).parent().toggleClass('hover'); disableLink(e);
		});
		
		$(".search > a").click(function(e){
			$(this).parent().toggleClass('hover');
			$("#header-ts").addClass('forceFixed');
			e.preventDefault();
		});

		$(document, '#header-ts').mouseup(function (e)
		{
				var container_login = $(".login");

				if (!container_login.is(e.target) // if the target of the click isn't the container...
						&& container_login.has(e.target).length === 0) // ... nor a descendant of the container
				{
						container_login.removeClass('hover');
				}


				var container_group = $(".group");

				if (!container_group.is(e.target) // if the target of the click isn't the container...
						&& container_group.has(e.target).length === 0) // ... nor a descendant of the container
				{
						container_group.removeClass('hover');
				}


				var container_search = $(".search");

				if (!container_search.is(e.target) // if the target of the click isn't the container...
						&& container_search.has(e.target).length === 0) // ... nor a descendant of the container
				{
						container_search.removeClass('hover');
				}
		});
		
	} else {
		var varBol=1;
		
		//$(".login > a").unbind('click', disableLink);
		$(".login > a").click(function(e){window.location.href=$(this).attr('href')});
		
		var tmpPrevDelayLogin=0;
		
		$(".login").mouseenter(function(){
			//Hide other
			$(".group").removeClass('hover');
			$(".group").children(".social-dropdown").hide(0);
			removeSearch($('.search'),0);
			
			$(this).addClass('hover');
			$(this).children(".login-dropdown").fadeIn('fast');
			tmpPrevDelayLogin=1;
		});
		
		$(".login").mouseleave(function(){
			var vThis=this;
			tmpPrevDelayLogin=0;
			setTimeout(function () {
				if(tmpPrevDelayLogin==0){
					$(vThis).removeClass('hover');
					$(vThis).children(".login-dropdown").fadeOut(200);
				}
			}, 500);
		});

		var mVarRenderSocial=0;
		var tmpPrevDelaySocial=0;
		var tmpPrevSearch=0;
		
		$(".group").mouseenter(function(){
			//Hide other
			$(".login").removeClass('hover');
			$(".login").children(".login-dropdown").hide(0);
			removeSearch($('.search'),0);
			
			function mRenderSocial(){
				//Render Facebook
				$('.socialrow.fb .WidgetArea').html('<iframe src="http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.facebook.com%2Ftechspot&amp;send=false&amp;layout=button_count&amp;width=100&amp;show_faces=false&amp;locale=en_US&amp;action=like&amp;colorscheme=light&amp;font=arial&amp;height=21&amp;appId=216891305041073" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:90px; margin: 0px 9px 0px 0px; float:left; height:21px;" allowTransparency="true"></iframe>');
				
				//Render Google+
				gapi.plusone.go();
				
				//Render Twitter
				(function() {
					var s = document.createElement('SCRIPT');
					var c = document.getElementsByTagName('script')[0];
					s.type = 'text/javascript';
					s.defer = "defer";
					s.async = true;
					s.src = 'http://platform.twitter.com/widgets.js';
					c.parentNode.insertBefore(s, c);
				})();
				function renderTweetButton(twBtn){
					var $target = $("#"+twBtn),
						toinsert = '<iframe allowtransparency="true" frameborder="0" scrolling="no" src="http://platform.twitter.com/widgets/follow_button.html?screen_name=techspot&show_count=false" style="width:70px; height:20px;"></iframe>';
					$target.html(toinsert);
				}
				renderTweetButton("twFollowBtn");
			}
			
			$(this).addClass('hover');
			if(mVarRenderSocial==0){
				mRenderSocial();
			}
			mVarRenderSocial=1;
			
			
			$(this).children(".social-dropdown").fadeIn('fast');
			tmpPrevDelaySocial=1;
		});
		$(".group").mouseleave(function(){
			tmpPrevDelaySocial=0;
			var vThis=this;
			setTimeout(function () {
				if(tmpPrevDelaySocial==0){
					$(vThis).removeClass('hover');
					$(vThis).children(".social-dropdown").fadeOut(200);
				}
			}, 500);
		});
		
		$(".search").mouseenter(function(){
			//Hide other
			$(".login").removeClass('hover');
			$(".login").children(".login-dropdown").hide(0);
			$(".group").removeClass('hover');
			$(".group").children(".social-dropdown").hide(0);
			
			$(this).addClass('hover');
			tmpPrevSearch=1;
		});
		/*$(".search").mouseleave(function(){
			removeSearch(this);
		});*/
		
		/*window.setInterval(function(){
			if(!$("#search_field").val()){
				$(".search").addClass('Val');
			}
			else {
				$(".search").removeClass('Val');
				$(document).mouseup(function (e)
				{
					var container = $(".search");
	
				if (!container.is(e.target) // if the target of the click isn't the container...
						&& container.has(e.target).length === 0) // ... nor a descendant of the container
				{
						container.addClass('Val').removeClass('hover');
						$("#search_field").val('');
						
				}
				});
			}
		}, 10);*/
	}
	
	function removeSearch(varThis,varBol){
		if(varBol==0){
			$(varThis).removeClass('hover');
			$(".search_form").fadeOut(200,function(){
				el_search.remove();
				$("#header-ts").removeClass('forceFixed');
			});
		}else{
			tmpPrevSearch=0;
			setTimeout(function(){
				if(tmpPrevSearch==0){
					$(".search_form").fadeOut(200,function(){
						$(varThis).removeClass('hover');
						el_search.remove();
						$("#header-ts").addClass('forceFixed');
					});
				}
			},2500);
		}
	}
	
	//moveSearch
	var el_search = $('<input autofocus="autofocus" type="text" name="q" id="q" class="text" placeholder="what are you looking for?" value="" />')
	$(".search").mouseenter(function(){
		if( $('.search_form').find(".text").length ){
			
		}else{
			$(".search_form").hide().append(el_search).fadeIn('fast');
		}
		
		el_search.focus();
	});
	$(".search").click( function(){
		el_search.focus();
	})
	$(".search").mouseleave(function(){
		removeSearch(this,varBol);
	});
	
}

function TSAlerts(tsToken) {
	window.refreshAlerts = true
	var tsToken = (typeof tsToken == 'undefined') ? (window._xf_token || XenForo._csrfToken) : tsToken

	$(document).on('mouseenter', '.login .loggedin', function()
	{
		var list = $('#alerts_list')
		var loading = $('#alerts_loading')

		if(!window.refreshAlerts)
			return false;

		$.ajax({
			global: false, // Xenforo Hide Overlay Progress to login option
			url: '/community/account/alerts-popup',
			data: {
				'_xfToken': tsToken,
				'_xfResponseType': 'json'
			},
			beforeSend: function()
			{
				window.refreshAlerts = false
				loading.show()
				list.html('<p>Loading&hellip;</p>')
			},
			success: function(data)
			{
				data.templateHtml = data.templateHtml.replace('\n', '').replace('\t', '').trim() //jquery accepts html beginning with '<'
				var html = $(data.templateHtml)

				var attr
				html.find('[src],[href]').each(function()
				{
					attr = $(this).attr('src') ? 'src' : 'href'
					if($(this).attr(attr).indexOf('://') < 0)
						$(this).attr(attr, '/community/' + $(this).attr(attr))
				})
				list.html(html)
			},
			complete: function()
			{
				loading.hide()
				$('#alerts_count').fadeOut(300, function(){ $(this).remove(); })
			},
			error: function()
			{
				list.html('<p>An error ocurred.</p>')
			},
			dataType: 'json'
		})

		setTimeout('window.refreshAlerts = true;', 60000)
	})

	$(document).on('click', '#alerts_list .list_item', function(e)
	{
		if(e.target.nodeName.toLowerCase() != 'a')
			window.location = $(this).find('h3 a:last').attr('href')
	})
}


!function($)
{
	// User friendly dates
	function prettyDate(date_str){
		var time_formats = [
			[60, 'just now'],
			[90, '1 minute'], // 60*1.5
			[3500, 'minutes', 60], // 60*60, 60
			[5400, '1 hour'], // 60*60*1.5
			[86400, 'hours', 3600], // 60*60*24, 60*60
			[129600, '1 day'], // 60*60*24*1.5
			[604800, 'days', 86400], // 60*60*24*7, 60*60*24
			[907200, '1 week'], // 60*60*24*7*1.5
			[2628000, 'weeks', 604800], // 60*60*24*(365/12), 60*60*24*7
			[3942000, '1 month'], // 60*60*24*(365/12)*1.5
			[31536000, 'months', 2628000], // 60*60*24*365, 60*60*24*(365/12)
			[47304000, '1 year'], // 60*60*24*365*1.5
			[3153600000, 'years', 31536000], // 60*60*24*365*100, 60*60*24*365
			[4730400000, '1 century'] // 60*60*24*365*100*1.5
		]

		//No daylight savings (Nov - March) = 21600, Daylight savings = 18000
		var time = ('' + date_str).replace(/-/g,"/").replace(/[TZ]/g," "),
			dt = new Date,
			seconds = ( ((dt - new Date(time) + ( dt.getTimezoneOffset() * 60000)) / 1000) - 18000),
			token = ' ago',
			i = 0,
			format

		if (seconds < 0) {
			seconds = Math.abs(seconds)
			token = ''
		}

		while (format = time_formats[i++]) {
			if (seconds < format[0]) {
				if (format.length == 2) {
					return format[1] + (i > 1 ? token : ''); // Conditional so we don't return Just Now Ago
				} else {
					return Math.round(seconds / format[2]) + ' ' + format[1] + (i > 1 ? token : '')
				}
			}
		}
		// overflow for centuries
		if(seconds > 4730400000)
			return Math.round(seconds / 4730400000) + ' Centuries' + token

		return date_str
	}

	// If jQuery is included in the page, adds a jQuery plugin to handle it as well
	$.fn.prettyDate = function(){
		return this.each(function(){
			var date = prettyDate(this.title)
			if(date)
				jQuery(this).text(date)
		})
	}

	var showPrettyDates = function()
	{
		//var elems = $('.story_meta span[title], .date_author span[title]', '#news_container')
		//elems = elems.add($('.date [title]', '#comments_list'))
		var elems = $('article .article-content time span[title]', '#news_container')
		elems = elems.add($('.comment cite time a[title]', '#div_comments'))

		if(elems.length)
		{
			elems.prettyDate()
			setTimeout('showPrettyDates()', 30000)
		}
	}
	window.showPrettyDates = showPrettyDates

	function createCookie(name, value, days)
	{
		if(days){
			var date = new Date()
			date.setTime(date.getTime()+(days*24*60*60*1000))
			var expires = "; expires="+date.toGMTString()
		}
		else
			var expires = ""
		document.cookie = name + "=" + value + expires + "; path=/"
	}
	window.createCookie = createCookie

	function readCookie(name)
	{
		var nameEQ = name + "="
		var ca = document.cookie.split(';')
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i]
			while (c.charAt(0)==' ')
				c = c.substring(1,c.length)
			if (c.indexOf(nameEQ) == 0)
				return c.substring(nameEQ.length,c.length)
		}
		return null
	}
	window.readCookie = readCookie

	function eraseCookie(name)
	{
		createCookie(name,"",-1)
	}
	window.eraseCookie = eraseCookie

	function isScrolledIntoView(elem)
	{
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + $(window).height();

		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();

		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}

	function isScrolledAfterView(elem)
	{
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + $(window).height();

		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();

		return (elemBottom <= docViewBottom);
	}

	var doc = $(document)
	var util = {
					browser : {
			   		bot: /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)
					}
			}

	var TS = {
		init : function() //All sections
		{
			var _self = this
			
			function disableLink(e) // cancels the event
			{
				e.preventDefault();
				return false;
			}
			
			//Active btnShare
			$(".btnShare").jqSocialSharer();

			/*
			$(document).ready(function() {
				//desktop-only ad removal on mobile (on load, the window much be inferior to 760px on width
				if (($(window).width())<760) {
					$(".mobile-hide").empty();
				}
				else {
					$(".mobile-only").empty();
				}
			})
			*/
			
			//adStick
			var doStickParent=''; var doStickFollowPx=1500; var doStickLong=2500;
			
			function doStick(parent,offset,clase){
				$(".adStick").stick_in_parent({'parent':parent,'offset_top':offset,'sticky_class':'is_stuck '+clase});
			}

			$(".rating_bar").each(function(i) {
				$(this).css("width", $(this).data("score")+'%');
			});

			$('#header-ts .header-top .right-links ul li.social.search').hover(function() {
				setTimeout(function(){
					$("#search_field").focus();
				}, 0);
			});

			/*
			$(window).load(function()
			{
				$('social-column').trigger("sticky_kit:recalc");
				$(window).resize( function (){
					//$(".social-column").addClass('flowglitch');
					$('social-column').trigger("sticky_kit:recalc");
				});
			})
			*/

			/*//Social element sticky trigger depending on window Width for responsive.
			$(window).afterResize( function() {
				if( ($(window).width())>760 ) {
					$("body.article .social-column").css({
						// Used to stretch the social widget column container
						// to match the height of the overall page content.
						'height': ($("article").height())-50
					});
					$("body.news .social-column").css({
						// Used to stretch the social widget column container
						// to match the height of the overall page content.
						'height': ($("article").height())-50
					});
					$(".scroll").stick_in_parent({
						'parent': '.social-column',
						'offset_top': 120
					});
				} else {
					$("body.article .social-column").css({
						'height': 35,
						'margin-bottom': 25
					});
					$("body.news .social-column").css({
						'height': 35,
						'margin-bottom': 25
					});
					$(".scroll").trigger("sticky_kit:detach");	
				}
			}, true, 100 );*/

			$(".localScroll").click(function(e){
				e.preventDefault();
				var speed = ($.isNumeric($(this).data("speed"))) ? $(this).data("speed") : 2000;
				$("html, body").animate({ scrollTop: $(this.hash).offset().top }, speed);
			});

			//MastHead height Variator
			$("#masthead ul.variation-1").parent().parent().addClass("SmallHead");
			$("#masthead ul.variation-2").parent().parent().addClass("SmallHead");
			$("#masthead ul.variation-3").parent().parent().addClass("SmallHead");
			$("#masthead ul.variation-4").parent().parent().addClass("BigHead");
			$("#masthead ul.variation-5").parent().parent().addClass("BigHead");
			$("#masthead ul.variation-5a").parent().parent().addClass("SmallHead");
/*
			//main menu
			$("#main-menu .wrapper > ul > li").hoverIntent({over:xmenuHover,out:xmenuHoverOut,interval:(75)});
			$("#main-menu").hoverIntent(toggleFast, toggleInit);
			function toggleFast() {
				$("#main-menu .wrapper > ul > li").hoverIntent({over:xmenuHover,out:xmenuHoverOut,interval:(0)});
			}
			function toggleInit() {
				$("#main-menu .wrapper > ul > li").hoverIntent({over:xmenuHover,out:xmenuHoverOut,interval:(75)});
			}
*/
			$('.blink').each(function() {
				var elem = $(this);
				setInterval(function() {
						if (elem.css('visibility') == 'hidden') {
								elem.css('visibility', 'visible');
						} else {
								elem.css('visibility', 'hidden');
						}
				}, 1200);
			});

			// TEMPORARY JS UTILS
			$("body.article section.title-group").click(function(e) {
				$(this).toggleClass("centered");
			});
			
			$('.SideToggle').click(function(e)
			{
				if($(this).attr('href') == '#')
				e.preventDefault()
				
				$(this).parent('li').toggleClass('open')
			});
			
			//Computes if the Article.php .big should overflow or not when the sidebar is next to it.
			/*$(window).on("resize", function ()
			{
				if (($(window).width())>760) {
					var SidePos = 0;
					//if( $(".TopScrollElement").offset() )
						//SidePos = $(".TopScrollElement").offset().top;
					SidePos = $(".TopScrollElement").offset().top
					$(".big").each(function ()
					{
						var BigImgPos = $(this).offset().top,
							FullWidth = $('body #GlobalWrapper #content > .wrapper').width(),
							ArticleWidth = $('.col-2-3-last').width(),
							DynamicMargin = (FullWidth - ArticleWidth),
							FullImgWidth = (FullWidth - (ArticleWidth * 10 / 100));
						if (BigImgPos > SidePos) {
							$(this).css('max-width', 'none');
							$(this).css('width', FullImgWidth);
							$(this).css('margin-left', -DynamicMargin);
						} else {
							$(this).css('max-width', '100%');
							$('.big').css('margin-left', '0');
						}
					});
				} else {
					$('.big').css('max-width', '100%');
					$('.big').css('margin-left', '0');
				}
			}).resize();*/

			//compute if the Article.php .side-object should overflow or not when the sidebar is next to it.
			/*$(window).on("resize", function ()
			{
				if (($(window).width())>760)
				{
					var SidePos = 0;
					//if( $(".TopScrollElement").offset() )
						//SidePos = $(".TopScrollElement").offset().top;
					SidePos = $(".TopScrollElement").offset().top;
					$(".side-object").each(function (){
						var QuotePos = $(this).offset().top;
						if (QuotePos < SidePos) {
							$(this).addClass('QuoteWithNoSpace');
						} else {
							$(this).removeClass('QuoteWithNoSpace');
						}
					});
				} else {
					$('.side-object').removeClass('QuoteWithNoSpace');
				}
			}).resize();*/



			$('.imgwrap').flexslider({
				animation: "slide",
				slideshowSpeed: 5000,
				pauseOnHover: true,
				start: function(){
					$('.imgwrap .slides li').removeClass('hidden');
				}
			});

			$.ajaxSetup({
				cache: true
			});
			

			//TS Header Events
			this.Login.init()
			//this.Alerts.init()
			//this.Search.init()
			


			/**** SCRIPTS BY SECTION ****/
			if( $('#ts_section').length )
			{
				var ts_section = $('#ts_section').val();
				switch( ts_section )
				{
					case 'index':
					case 'top-stories':
						this.Home.init(); break;

					case 'story-preview':
					case 'story':
						this.Story.init(); break;

					case 'downloads':
					case 'download':
					case 'download-preview':
					case 'download_similar':
						this.DownloadsSection.init( ts_section ); break;

					case 'drivers':
					case 'driver':
					case 'driver_essential':
					case 'driver-preview':
						this.DriversSection.init( ts_section ); break;

					case 'product-finder':
					case 'pf_category':
					case 'pf_product':
						this.ProductFinder.init( ts_section ); break;

					case 'reviews':
					case 'reviews_category':
					case 'reviews_subcategory':
					case 'review':
					case 'review-preview':
						this.ReviewsSection.init( ts_section ); break;

					case 'guides':
					case 'guides_category':
					case 'guides_subcategory':
					case 'guide':
					case 'article':
						this.FeaturesSection.init( ts_section ); break;

					case 'gallery_by_review':
						this.Mediagallery.init( ts_section ); break;
				}
			}
		},

		Slide : {
			init : function() {
				//Adds ability to click on the navicon to hover depending the viewport
				$(".slide-sort-selector ul li.active").ready(function() {
					$(".slide-sort-selector ul li.active").each(function() {
						var offset = $(this).position();
						var width = $(this).outerWidth(false);
						var left_position = offset.left + Math.floor(width / 2) - 3; // Subtract 3 to account for arrow thickness
				
						$(this).parent("ul").children("li.indicator").css({
							left: left_position+'px'
						});
						
					});
				})
			},

			animate : function(e, el) {
				e.preventDefault();
				var offset = el.position();
				var width = el.outerWidth(false);
				var left_position = offset.left + Math.floor(width / 2) - 3; // Subtract 3 to account for arrow thickness
				
				el.parent().addClass("active").siblings().removeClass("active").closest("ul").children("li.indicator").animate({
					left: left_position+'px'
				},500,function() {});
			},
		},

		SocialColumn : {
			init : function() {
				$(window).load(function() {
					$('social-column').trigger("sticky_kit:recalc");
					$(window).resize( function (){
						//$(".social-column").addClass('flowglitch');
						$('social-column').trigger("sticky_kit:recalc");
					});
				})

				this.afterResize()
			},

			afterResize : function() {
				//Social element sticky trigger depending on window Width for responsive.
				$(window).afterResize( function() {
					if( ($(window).width())>760 ) {
						$("body.article .social-column").css({
							// Used to stretch the social widget column container
							// to match the height of the overall page content.
							'height': ($("#content-header").height()) + ($(".cta").height()) + ($(".articleBody").height())
						});
						$("body.news .social-column").css({
							// Used to stretch the social widget column container
							// to match the height of the overall page content.
							'height': ($(".articleBody").height())-50
						});
						//share mini news
						
						//Stick Social
						var doStickSocial=0;
						if( $('body').hasClass('news') ){
							var tmpNewsAlto=+$('.articleBody').height();
							if(tmpNewsAlto<320){
								$('.tags').hide();
							}else if(tmpNewsAlto<400){
								$('.tags').css({'max-height':'96px','overflow':'hidden'});
							}else{doStickSocial=1;}
						}else{doStickSocial=1;}
						
						if(doStickSocial==1){
							$(".scroll").stick_in_parent({
								'parent': '.social-column',
								'offset_top': 110
							});
						}//doStickSocial
						//Stick Social
						
					} else {
						$("body.article .social-column").css({
							'height': 35,
							'margin-bottom': 25
						});
						$("body.news .social-column").css({
							'height': 35,
							'margin-bottom': 25
						});
						$(".scroll").trigger("sticky_kit:detach");	
					}
				}, true, 100 );
			}
		},

		Login : {
			init : function() {
				doc.on('click', '#bt_ts_login', function(e)
				{
					e.preventDefault()

					$.ajax({
						type: 'POST',
						url: '/index.php?action=dologin',
						data: {lusername: $('#ts_login').val(), lpassword: $('#ts_password').val()},
						success: function( msg ){
							if( msg == 'error' )
							{
								$('#ts_login').focus()
								$('#ts_login_error').fadeIn(500).delay(5000).fadeOut(500)
							}else{
								window.location.href=window.location.href
							}
						},
						error: function( obj ){
							alert('An error occurred, please try again.')
						}
					})
				})
			}
		},

		Alerts : {
			init: function() {
				window.refreshAlerts = true

				doc.on('mouseenter', '.login .loggedin', function()
				{
					var list = $('#alerts_list')
					var loading = $('#alerts_loading')

					if(!window.refreshAlerts)
						return false;

					$.ajax({
						global: false, // Xenforo Hide Overlay Progress to login option
						url: '/community/account/alerts-popup',
						data: {
							'_xfToken': window._xf_token || XenForo._csrfToken,
							'_xfResponseType': 'json'
						},
						beforeSend: function()
						{
							window.refreshAlerts = false
							loading.show()
							list.html('<p>Loading&hellip;</p>')
						},
						success: function(data)
						{
							data.templateHtml = data.templateHtml.replace('\n', '').replace('\t', '').trim() //jquery accepts html beginning with '<'
							var html = $(data.templateHtml)

							var attr
							html.find('[src],[href]').each(function()
							{
								attr = $(this).attr('src') ? 'src' : 'href'
								if($(this).attr(attr).indexOf('://') < 0)
									$(this).attr(attr, '/community/' + $(this).attr(attr))
							})
							list.html(html)
						},
						complete: function()
						{
							loading.hide()
							$('#alerts_count').fadeOut(300, function(){ $(this).remove(); })
						},
						error: function()
						{
							list.html('<p>An error ocurred.</p>')
						},
						dataType: 'json'
					})

					setTimeout('window.refreshAlerts = true;', 60000)
				})

				doc.on('click', '#alerts_list .list_item', function(e)
				{
					if(e.target.nodeName.toLowerCase() != 'a')
						window.location = $(this).find('h3 a:last').attr('href')
				})
			}
		},

		Search : {
			_search : '',

			init : function() {
				var _self = this
				console.log(_self);

				var el_search = $('<input autofocus="autofocus" type="text" name="q" id="q" class="text" placeholder="what are you looking for?" value="" />')
				$(".search").mouseenter(function(){
					if( !_self._search || (typeof _self._search === "undefined") )
						_self._search = ''
					el_search.val(_self._search)
					$(".search_form").append(el_search)
					el_search.focus();
				});
				$(".search").click( function(){
					el_search.focus();
				})
				$(".search").mouseleave(function(){
					_self._search = el_search.val()
					el_search.remove();
				});
			}
		},

		Home : {
			_page : 1,
			_news_type : '',
			_mode_news : '',
			_gaq:[],

			init : function()
			{
				var _self = this;

				doc.on('click', '#read_more', function(e)
				{
					e.preventDefault()
					_self.loadNews("", "", true)
				})

				TS.Slide.init()

				$(".slide-sort-selector .post-type-selector li a").click(function(e) {
					if($(this).closest('li').hasClass('active'))
						return false

					//if( $(this).attr('href').indexOf('#') == '' )

					var view = $(this).attr('href').replace('#', '')

					if( view == '/trending/' )
					{
							location.href = view
							return
					}else if(view == 'trending')
						$('.slide-sort-selector .layout-selector').fadeOut(500)
					else
						$('.slide-sort-selector .layout-selector').fadeIn(500)

					_self.loadNews(view, readCookie('view_news'));
					
					TS.Slide.animate(e, $(this));
					console.log(view);
					e.preventDefault();
				})

				$(".slide-sort-selector .layout-selector li a").click(function(e) {
					if($(this).closest('li').hasClass('active'))
						return false

					var view = $(this).attr('href').replace('#', '')

					createCookie('view_news', view, 365)
					_self.loadNews('latest_news', view)

					TS.Slide.animate(e, $(this))
				})
			},

			loadNews : function(news_type, mode_news, more)
			{
				var _self = this
				var container = $('#news_container')
				var loading = $('<div class="loading">Loading</div>').fadeTo(0, 0.5)

				if(more)
				{
					_self._news_type = 'latest_news'
					$('#read_more').addClass('waiting')
					_self._page++
				}else{
					_self._page = 1
					_self._news_type = (typeof news_type == 'undefined') ? 'latest_news' : news_type
					_self._mode_news = (typeof mode_news == 'undefined') ? 'headline' : mode_news

					if(_self._news_type == 'latest_news')
						$('#read_more').show()
					else
						$('#read_more').hide()

					container.prepend(loading)
				}

				if(_self._gaq)
				{
					var track_hash = _self._news_type
					if(_self._news_type == 'latest_news' && _self._mode_news == 'headline')
					{
						track_hash += '_page_' + _self._page
					}else if(_self._news_type == 'latest_news' && _self._mode_news == 'full'){
						track_hash += '_full'
					}
					_self._gaq.push(['_trackPageview', window.location.pathname + '#' + track_hash, 'clicked'])
				}

				$.ajax({
					type: "POST",
					data: {mode_news: _self._mode_news, news_type: _self._news_type, page: _self._page},
					url: '/index.php?action='+_self._news_type,
					contentType: "application/x-www-form-urlencoded;charset=ISO-8859-1",
					error: function(objeto)
					{
						alert('An error occurred, please try again.')
						$('#read_more').removeClass('waiting')
						loading.remove()
					},
					success: function(news)
					{

						if(more)
						{
							$('.post-list article:last').addClass('next_page')
							$('#read_more').removeClass('waiting')
							container.append(news)
							$('.post-list article.next_page:last + article').addClass('new_page')
							$('html,body').animate({ scrollTop: $('.next_page:last').next('article').offset().top - 120 }, 500)
						}else{
							loading.remove();
							container.html(news);
						}

						if(_self._mode_news == 'full' && _self._news_type != 'trending')
						{
							$('.comments-pager').removeClass('hidden')
							$('#read_more').addClass('hidden')
							container.addClass('fullview')
						}else if(_self._news_type != 'trending'){
							$('#read_more').removeClass('hidden')
							$('.comments-pager').removeClass('hidden')
							container.removeClass('fullview')
							if(_self._page == 5)
								$('#read_more').addClass('hidden')
						}

						if(_self._news_type == 'trending')
						{
							$('#read_more, .comments-pager').addClass('hidden')
							container.removeClass('fullview')
						}

						showPrettyDates()
					}
				})
			}
		},

		Story : {
			_page : 1,
			_loading : false,
			_loadCommentsByHash : false,
			_comment_id : '',

			init : function()
			{
				var _self = this
				
				TS.SocialColumn.init()

				doc.on('click', '#mobComBut a', function(e){
					e.preventDefault()

					$('#comments').show()
					$('html,body').animate({ scrollTop: $('#comments').offset().top - 140 }, 500)
					$(this).parent().parent("#mobComBut").hide()
				})

				/*$(document).ready(function() {
					loadStoryMedia();
				})*/
				
				// Load Comments if hashtag is #commentsOffset and mobile
				if( window.location.hash=='#commentsOffset' && ($(window).width()) <= 768 )
				{
					$("#mobComBut a.ComBut").hide()
					$("#mobCom_load_more").show()
					window.onload = function()
					{
						$("#mobComBut a.ComBut").trigger('click');
					};
				}

				// Load Comments if hashtag is #comments_####
				if (!util.browser.bot && window.location.hash.substring(0, 9)=='#comment_')
				{
					_self._comment_id = window.location.hash
					_self._loadCommentsByHash = true

					loadStoryMedia();
				}

				function loadStoryMedia()
				{
					var numCom = $('#numCom').val()
					var commentStyle = {
							backgroundColor : "#fdfce5",
							border: "10px solid #fdfce5",
							marginLeft: "-10px"
					    }
					if (_self._page == 1 && !_self._loading && numCom > 0)
					{
						var elem = $('nav.page-nav.prev-next')//End story
						if (_self._loadCommentsByHash || (elem && isScrolledAfterView(elem)))
						{
							/*$('.comment img').each( function(){
								if( $(this).attr('data-href') )
								{
									$(this).attr('src', $(this).attr('data-href')).removeAttr('data-href');
								}
							})

							$('.comment p.container-media-video iframe').each( function(){
								if( $(this).attr('data-href') )
								{
									$(this).attr('src', $(this).attr('data-href')).removeAttr('data-href');
								}
							})

							_self._page++*/


							$('#load_more').show().addClass('waiting');
							_self._loading = true
							$.ajax({
								type: "POST",
								data: {story_id: $('#story_id').val(), page: 1 },
								url: '/index.php?action=get-comments',
								success: function(data)
								{
									$('#div_comments').append(data)
									_self._page++
									_self._loading = false
									$('#load_more').hide();

									if(numCom <= 50)
										$('#load_more').hide();

									showPrettyDates();

									if (_self._comment_id)
									{
										if (_self._comment_id.substring(9)>50) {
											$('html,body').animate({ scrollTop: $('#comment_50').offset().top - 80 }, 100)
											loadStoryMedia();
										} else {
											$('html,body').animate({ scrollTop: $(_self._comment_id).offset().top - 80 }, 500)
											$(document).find(_self._comment_id).css( commentStyle )
										}
									}
								}
							})
						}
					}else if (_self._page == 2 && !_self._loading && numCom > 50)
					{
						var elem = $(".comment").eq(-10);//10 comments before last
						if (_self._loadCommentsByHash || (elem && isScrolledAfterView(elem)))
						{
							$('#load_more').show().addClass('waiting');
							_self._loading = true
							$.ajax({
								type: "POST",
								data: {story_id: $('#story_id').val(), page: 2 },
								url: '/index.php?action=get-comments',
								success: function(data)
								{
									$('#div_comments').append(data)
									_self._page++
									_self._loading = false
									$('#load_more').hide();

									showPrettyDates();

									if (_self._comment_id && _self._comment_id.substring(9)>50) {
										$('html,body').animate({ scrollTop: $(_self._comment_id).offset().top - 80 }, 500)
										$(document).find(_self._comment_id).css( commentStyle )
									}
								}
							})
						}
					}
				}

				$(window).scroll(function()
				{
					loadStoryMedia();
				})

				this.init_comments()
			},

			init_comments : function()
			{
				var _self = this

				function insertNewsComment()
				{
					if( $('#message').val().length > 0 )
					{
						var form = $('#news_comments')
						var button = $('#post_new_comment')
						var button_txt = button.text()

						story_table = false
						if ($('#div_comments .comment').length < 1)
						{
							story_table = true
							n_rows = 0
						}else{
							n_rows = $('#div_comments .comment').length
						}

						button.find('span').html('&hellip;')
						button.attr('disabled', 'disabled')

						if( $('#thread_subscribe_email:checked').is(':checked') )
							watch_state = 'watch_email'
						else if( $('#thread_subscribe:checked').is(':checked') )
							watch_state = 'watch_no_email'
						else watch_state = ''

						$.ajax({
							type: "POST",
							data: { message: $('#message').val(), category: $('#category').val(),
									urll: $('#urll').val(), story: $('#story').val(), ajax: true,
									watch_state: watch_state, row: n_rows, story_table: story_table,
									_xfToken: (window._xf_token || XenForo._csrfToken)
							},
							//url: '/postcomment.html',
							url: '/index.php?action=newpost',
							contentType: "application/x-www-form-urlencoded;charset=ISO-8859-1",
							error: function(objeto)
							{
								button.find('span').text(button_txt)
								button.removeAttr('disabled')
								alert('An error occurred, please try again.')
							},
							success: function(news)
							{
								news = $(news)
								//news.fadeTo(0, 0).addClass('new')

								button.find('span').text(button_txt)
								button.removeAttr('disabled')

								$('#message').val("")
								messageDelay()
								if ($('#div_comments .comment').length < 1){
									$('#comments').prepend(news) // Append all section

									//$('#n_comments_1').html('<span id="n_comments_2">1</span> comment')
								}else{
									$('#div_comments').append(news) // Append only comments

									n_comments = $('#n_comments').text()
									$('#n_comments').html(parseInt(n_comments) + 1)

									/*n_comments = $('#n_comments_2').text()
									if(parseInt(n_comments) == 1)
										$('#n_comments_1').html('<span id="n_comments_2">2</span> comments')
									else
										$('#n_comments_2').html(parseInt(n_comments) + 1)*/
								}
								$('html,body').animate({ scrollTop: news.offset().top - 92 }, 500)

								news.delay(500).fadeTo(500, 1)

								var p_message = $('<p class="message">Comment added succesfully.</p>')
								p_message.hide()
								$('#message').before(p_message)
								p_message.delay(500).slideDown(500)
								
								if( $('#isSponsored').val() == '1' )
								{
									tldr.click(tldr.CLICK_TYPE.comment);
								}
							}
						})
					}else{
						alert("Please insert a comment.")
					}
				}
				window.insertNewsComment = insertNewsComment

				var ts_timer, ts_timer_count
				function messageDelay()
				{
					var message = $('#message')
					var button = $('#post_new_comment')
					var button_text = button.find('span')
					button.attr('data-text', button.text())
					message.attr('disabled', 'disabled')
					button.attr('disabled', 'disabled')
					button_text.html('Please wait <strong>15</strong>s&hellip;')
					ts_timer_count = 14
					ts_timer = setInterval("countDelay()", 1000)
				}

				function countDelay()
				{
					var message = $('#message')
					var button = $('#post_new_comment')
					var button_seconds = button.find('strong')
					var button_text = button.find('span')

					if(ts_timer_count == 0)
					{
						$('#news_comments').find('.message').slideUp(500, function(){ $(this).remove(); })
						message.removeAttr('disabled')
						button.removeAttr('disabled')
						button_text.text(button.attr('data-text'))
						clearInterval(ts_timer)
						return
					}
					button_seconds.text(ts_timer_count)
					ts_timer_count--
				}
				window.countDelay = countDelay



				doc.on('change', '#thread_subscribe', function(e, data){
					var subscribe = $(this).is(':checked')

					if( !subscribe )
					{
						createCookie('subscribe_on_post', 'no', 365)
						$('#thread_subscribe_email')
							.removeAttr("checked")
							.attr("disabled", "disabled")
					}else{
						createCookie('subscribe_on_post', 'yes', 365)
						$('#thread_subscribe_email')
							.attr("checked", "checked")
							.removeAttr("disabled")
					}
				})

				doc.on('change', '#thread_subscribe_email', function(){
					var subscribe = $(this).is(':checked')

					createCookie('subscribe_email_notification', (subscribe ? 'yes' : 'no'), 365)
				})

				doc.on('change', '#thread_subscribe_email', function(){
					var subscribe = $(this).is(':checked')

					createCookie('subscribe_email_notification', (subscribe ? 'yes' : 'no'), 365)
				})

				doc.on('click', '.opt_reply', function(e){
					e.preventDefault()

					post_id = $(this).attr('id').substring(6)

					$.ajax({
						type: 'POST',
						url: '/index.php?action=reply',
						data: {post_id: post_id},
						success: function( response ){
							msg = $('#message').val() + response
							$('#message').val(msg)
							$('#message').focus()
						},
						error: function( obj ){
							alert('An error occurred, please try again.')
						}
					})
				});
				
				doc.on('click', '.opt_like', function(e){
					e.preventDefault()

					post_id = $(this).attr('id').substring(5)
					post_n = $(this).attr('href').substring(9)
					
					var oThis = $(this)
					var type = oThis.html()

					$.ajax({
						type: 'POST',
						url: '/index.php?action=like',
						data: {post_id: post_id, story: $('#story').val(), type: type, post_n: post_n },
						success: function( response ){
							el_like = oThis.closest('div.comment').find('.comment_likes')
							el_like.html(response)
							if(oThis.html() == 'Like')
								oThis.html('Unlike')
							else
								oThis.html('Like')

							el_like.fadeOut(0).delay(100).fadeIn(500)
						},
						error: function( obj ){
							alert('An error occurred, please try again.')
						}
					})
				});
			}
		},

		DownloadsSection : {
			init : function( ts_section )
			{
				switch( ts_section )
				{
					case 'downloads':
						this.Dw_Home.init()
						break;
					case 'download':
					case 'download-preview':
					case 'download_similar':
						this.Download.init()
						break;
				}
			},

			Dw_Home : {
				_page : 1,
				_sort : 'date',

				init : function()
				{
					var _self = this

					$('#more_downloads').click(function(e)
					{
						e.preventDefault()

						_self.loadDownloads('', true)
					})
				},

				loadDownloads : function(sort, more)
				{
					var _self = this

					var container = $('#downloads_list')
					var loading = $('<div class="loading">Loading</div>').fadeTo(0, 0.5)

					if(more)
					{
						_self._page++

						$('#more_downloads').addClass('waiting')
					}else{
						_self._page = 1
						_self._sort = (typeof sort == 'undefined') ? 'date' : sort

						container.prepend(loading)
					}

					$.ajax({
						type: "POST",
						data: {sort: _self._sort, page: _self._page},
						url: '/downloads.php?action=downloads',
						contentType: "application/x-www-form-urlencoded;charset=ISO-8859-1",
						error: function(objeto)
						{
							alert('An error occurred, please try again.')
							$('#more_downloads').removeClass('waiting')
							loading.remove()
						},
						success: function(downloads)
						{
							if(more)
							{
								container.find('.li_download:last').addClass('next_page')
								$('#more_downloads').removeClass('waiting')
								container.append(downloads)
								container.find('.next_page:last').next('.li_download').addClass('new_page')
								if( container.find('.new_page:last').length > 0 )
									$('html,body').animate({ scrollTop: container.find('.new_page:last').offset().top - 120 }, 500)
							}else{
								loading.remove()
								container.html(downloads)
							}
							
							if( _self._page == 3 )
							{
								//$('#ajax_pager').addClass('hidden')
								$('.post-load-more').addClass('hidden')
							}
						}
					})
				}
			},

			Download : {
				description_loaded : false,
				similars_loaded : false,

				init : function()
				{
					var _self = this

					TS.Slide.init()

					if( $('#ts_section').length && $('#ts_section').val()=='download_similar' )
						this.similars_loaded = true
					else this.description_loaded = true

					// Download slider
					$(".slide-sort-selector .post-type-selector li a").click(function(e)
					{
						e.preventDefault()

						// Hide div with descriptions
						var slider = $(this).parent().attr('slider');
						$(this).closest('article').find('.ps-item').addClass('hide');
						$(this).closest('article').find('#' + slider).removeClass('hide');

						if($(this).closest('li').hasClass('active'))
							return false

						if( $(this).closest('li').attr('id') == 'similar-soft' )
						{
							$('#sim-soft').removeClass('hidden')
							$('#pub-desc').addClass('hidden')

							if( !_self.similars_loaded )
							{
								$.ajax({
									type: "POST",
									data: {id: $('#download_id').val() },
									url: '/downloads.php?action=similars',
									contentType: "application/x-www-form-urlencoded;charset=ISO-8859-1",
									error: function(object)
									{
										alert('An error occurred, please try again.')
									},
									success: function(downloads)
									{
										$('#sim-soft ul').html(downloads)
										_self.similars_loaded = true;
									}
								})
							}
						}else if( $(this).closest('li').attr('id') == 'pub-description' )
						{
							$('#pub-desc').removeClass('hidden')
							$('#sim-soft').addClass('hidden')

							if( !_self.description_loaded )
							{
								$.ajax({
									type: "POST",
									data: {id: $('#download_id').val() },
									url: '/downloads.php?action=description',
									contentType: "application/x-www-form-urlencoded;charset=ISO-8859-1",
									error: function(object)
									{
										alert('An error occurred, please try again.')
									},
									success: function(downloads)
									{
										$('#pub-desc').html(downloads)
										_self.description_loaded = true;
									}
								})
							}
						}else if( $(this).closest('li').attr('id') == 'similar-download' )
						{
							location.href = $(this).attr('href')
						}

						TS.Slide.animate(e, $(this))
					})

					$('#dw_vote').click(function(e)
					{
						e.preventDefault()
						
						vote = $('#vote').val()
						if( vote >= 1 && vote <= 5 )
						{
							$.ajax({
								type: 'POST',
								url: '/downloads.php?action=vote',
								data: {id: $('#download_id').val(), vote: vote },
								success: function( response ){
									el = $('#userRating')
									
									if( $(response).filter('#msgVote').hasClass('voteError') )
									{
										el.append( $(response).filter('#msgVote') )
									} else {
										el.html(response)
										el.fadeOut(0).delay(100).fadeIn(500)
									}
								},
								error: function( obj ){
									alert('An error occurred, please try again.')
								}
							})
						} else {
							html = "<div id='msgVote' class='voteError'>Please select your rating.</div>"
							
							el = $('#userRating')
							
							console.log( el.find('.voteError').length )
							
							if( el.find('.voteError').length > 0 )
								el.find('.voteError').replaceWith( html )
							else el.append( html )
						}
					})

					$('#download_open_options').click(function(e) {
						e.preventDefault();
						
						$('.download_options').animate({ 'background-color' : '#F4CF0F' }, { duration: 250 })
							.animate({ 'background-color' : '#fff6b3' }, { duration: 250 });
					});

					//Single option
					$('.download_button').click(function(e) {
						if ($('.download-warning').length) {
							if (!$('.download-warning input#check-warning').is(':checked')) {
								e.preventDefault();

								$('.download-warning').addClass('alert')
							}
						}
					})

					//Multiple options
					$('.download_options ul li a').click(function(e) {
						if ($('.download-warning').length) {
							if (!$('.download-warning input#check-warning').is(':checked')) {
								e.preventDefault();

								$('.download-warning').addClass('alert')
							}
						}
					});
				}
			}
		},

		DriversSection : {
			init : function( ts_section )
			{
				switch( ts_section )
				{
					case 'drivers':
						this.Dr_Home.init();
						break;
					case 'driver':
					case 'driver_essential':
					case 'driver-preview':
						this.Driver.init()
						break;
				}
			},

			Dr_Home : {
				_page : 1,
				_sort : 'date',

				init : function()
				{
					var _self = this

					$('#more_drivers').click(function(e)
					{
						e.preventDefault()

						_self.loadDrivers('', true)
					})
				},

				loadDrivers : function(sort, more)
				{
					var _self = this

					var container = $('#downloads_list')
					var loading = $('<div class="loading">Loading</div>').fadeTo(0, 0.5)

					if(more)
					{
						_self._page++

						$('#more_drivers').addClass('waiting')
					}else{
						_self._page = 1
						_self._sort = (typeof sort == 'undefined') ? 'date' : sort

						container.prepend(loading)
					}

					$.ajax({
						type: "POST",
						data: {sort: _self._sort, page: _self._page},
						url: '/driverController.php?action=drivers',
						contentType: "application/x-www-form-urlencoded;charset=ISO-8859-1",
						error: function(objeto)
						{
							alert('An error occurred, please try again.')
							$('#more_drivers').removeClass('waiting')
							loading.remove()
						},
						success: function(drivers)
						{
							if(more)
							{
								container.find('.li_download:last').addClass('next_page')
								$('#more_drivers').removeClass('waiting')
								container.append(drivers)
								container.find('.next_page:last').next('.li_driver').addClass('new_page')
								if( container.find('.new_page:last').length > 0 )
									$('html,body').animate({ scrollTop: container.find('.new_page:last').offset().top - 120 }, 500)
							}else{
								loading.remove()
								container.html(drivers)
							}
							
							if( _self._page == 3 )
							{
								//$('#ajax_pager').addClass('hidden')
								$('.post-load-more').addClass('hidden')
							}
						}
					})
				}
			},

			Driver : {
				description_loaded : false,
				similars_loaded : true,

				init : function()
				{
					var _self = this

					//Link to Similars
					$('.download-product .see_related a').click(function(e)
					{
						e.preventDefault()

						$(".slide-sort-selector .post-type-selector li#similar-soft a").trigger('click');
						$('html,body').animate({ scrollTop: $('.slide-sort-selector .post-type-selector li#similar-soft a').offset().top - 80 }, 500);
					})


					TS.Slide.init()

					if( $('#ts_section').length && $('#ts_section').val()=='driver_similar' )
						this.similars_loaded = true
					else this.description_loaded = true

					// Driver slider
					$(".slide-sort-selector .post-type-selector li a").click(function(e)
					{
						e.preventDefault()

						// Hide div with descriptions
						var slider = $(this).parent().attr('slider');
						$(this).closest('article').find('.ps-item').addClass('hide');
						$(this).closest('article').find('#' + slider).removeClass('hide');

						if($(this).closest('li').hasClass('active'))
							return false

						if( $(this).closest('li').attr('id') == 'similar-soft' )
						{
							$('#sim-soft').removeClass('hidden')
							$('#pub-desc').addClass('hidden')

							if( !_self.similars_loaded )
							{
								$.ajax({
									type: "POST",
									data: {id: $('#driver_id').val() },
									url: '/driver.php?action=similars',
									contentType: "application/x-www-form-urlencoded;charset=ISO-8859-1",
									error: function(object)
									{
										alert('An error occurred, please try again.')
									},
									success: function(drivers)
									{
										$('#sim-soft ul').html(drivers)
										_self.similars_loaded = true;
									}
								})
							}
						}else if( $(this).closest('li').attr('id') == 'pub-description' )
						{
							$('#pub-desc').removeClass('hidden')
							$('#sim-soft').addClass('hidden')

							if( !_self.description_loaded )
							{
								$.ajax({
									type: "POST",
									data: {id: $('#driver_id').val() },
									url: '/driverController.php?action=description',
									contentType: "application/x-www-form-urlencoded;charset=ISO-8859-1",
									error: function(object)
									{
										alert('An error occurred, please try again.')
									},
									success: function(drivers)
									{
										$('#pub-desc').html(drivers)
										_self.description_loaded = true;
									}
								})
							}
						}

						TS.Slide.animate(e, $(this))
					})


					$('#download_open_options').click(function(e)
					{
						e.preventDefault();
						
						$('.download_options').animate({ 'background-color' : '#F4CF0F' }, { duration: 250 })
							.animate({ 'background-color' : '#fff6b3' }, { duration: 250 });
					});
				}
			}
		},

		ProductFinder : {
			init : function( ts_section )
			{
				switch( ts_section )
				{
					case 'product-finder':
						this.PF_Home.init()
						this.ProductsFilter.init()
						break;
					case 'pf_category':
						this.Category.init()
						this.ProductsFilter.init()
						break;
					case 'pf_product':
						this.Product.init()
						break;
				}
			},

			ProductsFilter: {
				init : function( )
				{
					var _self = this

					this.sendFilterTimer = null
					this.products_page = 1

					var elem = $('#AddFilter')

					/*$('.sorter .open', elem).click(function(e)
					{
						e.preventDefault()

						$('.sorter > ul').fadeToggle(200)
					})

					$('.sorter > ul a', elem).click(function(e)
					{
						e.preventDefault()
						
						_self.products_page = 1
						$('#sort').val($(this).data('sort'))
						$('#sorted_by').text($(this).text())
						
						_self.loadProducts()
						
						$(this).closest('ul').fadeOut(300)
					})*/


					// No products matched your criteria --> Restart search
					$('#go_back_search').click(function(e)
					{
						e.preventDefault()

						$('#productsearch').val('')
						$('.ProdSearch').val('')
						$('#form_search').trigger('submit')
					})

					$('#form_search').submit(function(e)
					{
						e.preventDefault()
						$('#productsearch').val($('#form_search .ProdSearch').val())
						_self.form_search(elem, $('#form_search .ProdSearch'))
					})

					$('#form_search_mobil').submit(function(e)
					{
						e.preventDefault()
						$('#productsearch').val($('#form_search_mobil .ProdSearch').val())
						_self.form_search(elem, $('#form_search_mobil .ProdSearch'))
					})

					$('#load_more').click(function(e)
					{
						e.preventDefault()

						_self.products_page++

						if(_self.products_page >= 5)
							$(this).hide()

						$(this).addClass('waiting')
						_self.loadProducts(1, false, function(){ $('#load_more').removeClass('waiting'); })
					})
				},

				form_search : function( filter, toSearch )
				{
					var _self = this

					filter.find('.active').removeClass('active')

					//sorts TO-DO

					if(toSearch.val() != '')
					{
						$('.ListHeader h3').text('Search Results for: ' + toSearch.val())
						$('.comments-pager').hide()
					}else{
						$('.ListHeader h3').text($('.ListHeader h3').data('text'))
						$('.comments-pager').show()
					}

					_self.products_page = 1
					_self.loadProducts(1)
				},

				loadProducts : function(delay, replace_with, callback)
				{
					var _self = this

					replace_with = replace_with == undefined ? true : replace_with
					delay = delay || 500

					clearTimeout(this.sendFilterTimer)
					this.sendFilterTimer = setTimeout(function()
					{
						var list = $('.post-list-product')
						var search_elems = $('.active input, .active select', this.context)
						if($('#productsearch').val() != '')
						{
							$('.sorter').hide()
							search_elems = search_elems.add($('#productsearch'))
						}else{
							$('.sorter').show()
						}
						if($('#subcategories').val() != '')
							search_elems = search_elems.add($('#subcategories'))
						if($('#sort').val() != '')
							search_elems = search_elems.add($('#sort'))
						var vars = search_elems.serialize()

						vars += (vars.length ? '&' : '') + 'page=' + _self.products_page

						var loading = $('<div class="loading">Loading</div>').fadeTo(0, 0.5)

						var action = ''
						if($('#ts_section').length && $('#ts_section').val()=='product-finder') //Home
							if($('#productsearch').val() != '') //Search - Not Feature Products
								var action = '?action=pf_search'

						$.ajax({
							url: document.URL + action,
							data: vars,
							beforeSend: function()
							{
								list.append(loading)
								if(_self.products_page == 1)
									$('#load_more').show()
							},
							success: function(data)
							{
								data = $.trim(data)
								var has_results = !!data.length

								if(replace_with)
									list.html(data)
								else
									list.append(data)

								if($(data).filter('article').length < 20)
									$('#load_more').hide()

								//$('.comment-page-numbers').toggleClass('hidden', vars != 'page=1')

								$('#results_message').toggleClass('hidden', has_results)
								//$('#categories_latest').toggleClass('hidden', !has_results)
							},
							complete: function()
							{
								loading.remove()
								callback && callback.call()
							},
							dataType: 'html'
						})
					}, delay)
				}
			},

			PF_Home :{
				init : function( )
				{
					//Alternate List
					// $('.products .post-list-product article:nth-child(even)').addClass('alternate');
				}
			},

			Category : {
				init : function( )
				{
					//Alternate List
					// $('.products .post-list-product article:nth-child(even)').addClass('alternate');
				}
			},

			Product : {
				init : function( )
				{
					var _self = this
					this.reviews_page = 1
					this.reviews_type = 'all'

					$('ul', '#pros_cons').equalHeights()

					$('.expand', '#pros_cons').click(function(e)
					{
						e.preventDefault()
						var container = $('#pros_cons')
						container.toggleClass('collapsed')
						$('ul', container).css('height', 'auto').equalHeights()

						var label = $(this).text()
						$(this).text($(this).data('alt-label'))
						$(this).data('alt-label', label)

						$('html,body').animate({ scrollTop: $('#pros_cons').offset().top - 15 }, 500)
					})

					$('#load_more').click(function(e)
					{
						e.preventDefault()

						_self.reviews_page++
						if(_self.reviews_page >= 5)
							$(this).hide()

						$('#load_more').addClass('waiting')
						_self.loadReviews(_self.reviews_page, _self.reviews_type, false, function(){
							$('#load_more').removeClass('waiting') })
					})
				},

				loadReviews : function(page, type, replace_list, callback)
				{
					page = page || 1
					type = type || 'all'
					replace_list = replace_list == undefined ? true : replace_list

					var list = $('.reviews_list')
					var loading = $('<div class="loading">Loading</div>').fadeTo(0, 0.5)
					$.ajax({
						url: document.URL,
						data: { type: type, page: page },
						beforeSend: function()
						{
							list.append(loading)
						},
						success: function(data)
						{
							if(replace_list)
								list.html(data)
							else
								list.append(data)

							if( !$.trim(data).length || $(data).filter('div.comment').length < 10 )
								$('#load_more').hide()
						},
						complete: function()
						{
							loading.remove()
							callback && callback.call()
						},
						dataType: 'html'
					})
				}
			}
		},

		FeatureComments : {
			_page : 1,
			_loading : false,
			_top_comments_loaded : false,
			_comment_id : '',
			_loadCommentsByHash: false,

			init : function()
			{
				var _self = this

				var commentStyle = {
		      backgroundColor : "#fdfce5",
		      border: "10px solid #fdfce5",
		      marginLeft: "-10px"
		    }

				// Load Comments if hashtag is #allcomments
				if( window.location.hash=='#allcomments' )
				{
					loadAllComments()
				}

				$("#load_all_comments").click(function(e) {
					$('html,body').animate({ scrollTop: $('#allcomments').offset().top - 15 }, 500)

					$("#allcomments").trigger('click');
				})

				$("#allcomments").click(function(e) {
					$(this).hide()
					$("#load_all_comments").hide()

					$('#div_comments .likedposts').addClass('hidden')
					$('#div_comments .allcomments').removeClass('hidden')
					$('#div_comments > .comment').remove() //If new comment -> remove

					var container = $('#div_comments .allcomments')
					var loading = $('<div class="loading">Loading</div>').fadeTo(0, 0.5)

					container.prepend(loading)

					$.ajax({
						type: "POST",
						data: {story_id: $('#story_id').val(), page: -1 },
						url: '/index.php?action=get-comments',
						contentType: "application/x-www-form-urlencoded;charset=ISO-8859-1",
						error: function(object)
						{
							alert('An error occurred, please try again.')
						},
						success: function(comments)
						{
							var text = 'User Comments: <span id="n_comments">' + $('#reviewComments').val() + '</span>'
							$('#comments_title').html( text )
							$('#div_comments .allcomments').html(comments)

							showPrettyDates();

							if (_self._comment_id) {
								$('html,body').animate({ scrollTop: $(_self._comment_id).offset().top - 80 }, 500)
								$(document).find(_self._comment_id).css( commentStyle )
							}
						}
					})
				})

				// Load Comments if hashtag is #comments_####
				if (!util.browser.bot && window.location.hash.substring(0, 9)=='#comment_')
				{
					_self._comment_id = window.location.hash
					_self._loadCommentsByHash = true

					loadAllComments();
				}

				function loadAllComments()
				{
					$("#load_all_comments").hide()

					$('#div_comments .likedposts').addClass('hidden')
					$('#div_comments .allcomments').removeClass('hidden')

					var container = $('#div_comments .allcomments')
					var loading = $('<div class="loading">Loading</div>').fadeTo(0, 0.5)

					container.prepend(loading)

					window.onload = function()
					{
						$("#allcomments").trigger('click');
					};
				}

				function loadTopRatedComments()
				{
					var numCom = $('#numCom').val()
					if( !_self._top_comments_loaded && !_self._loading && numCom > 0 )
					{
						var elem = $('nav.page-nav')//End story
						if( elem && isScrolledAfterView(elem) )
						{
							$('#load_all_comments').show().addClass('waiting');
							_self._loading = true

							$.ajax({
								type: "POST",
								data: {id: $('#review_id').val(), page: 1 },
								url: '/reviews.php?action=get_top_rated_comments',
								success: function(data)
								{
									$('#div_comments .likedposts').html(data)
									_self._page++
									_self._loading = false
									_self._top_comments_loaded = true
									$('#load_all_comments').removeClass('waiting');

									showPrettyDates();
								}
							})
						}
					}
				}
/*
				function loadComments()
				{
					var numCom = $('#numCom').val()
					if( _self._page == 1 && !_self._loading && numCom > 0 )
					{
						var elem = $('nav.page-nav')//End story
						if( elem && isScrolledAfterView(elem) )
						{
							$('#load_all_comments').show().addClass('waiting');
							_self._loading = true
							$.ajax({
								type: "POST",
								data: {story_id: $('#story_id').val(), page: 1 },
								url: '/index.php?action=get-comments',
								success: function(data)
								{
									$('#div_comments').append(data)
									_self._page++
									_self._loading = false
									$('#load_all_comments').removeClass('waiting');

									//if(numCom <= 50)
									//	$('#load_all_comments').removeClass('waiting');
								}
							})
						}
					}else if( _self._page == 2 && !_self._loading && numCom > 50 )
					{
						var elem = $(".comment").eq(-10);//10 comments before last
						if( elem && isScrolledAfterView(elem) )
						{
							$('#load_more').show().addClass('waiting');
							_self._loading = true
							$.ajax({
								type: "POST",
								data: {story_id: $('#story_id').val(), page: 2 },
								url: '/index.php?action=get-comments',
								success: function(data)
								{
									$('#div_comments').append(data)
									_self._page++
									_self._loading = false
									$('#load_more').hide();
								}
							})
						}
					}
				}*/

				$(window).scroll(function()
				{
					loadTopRatedComments();
				})
			}
		},

		ReviewsSection : {
			init : function( ts_section )
			{
				switch( ts_section )
				{
					case 'reviews':
						this.Rv_Home.init()
						break;
					case 'reviews_category':
					case 'reviews_subcategory':
						this.Category.init()
						break;
					case 'review':
					case 'review-preview':
						this.Review.init()
						break;
				}
			},

			Rv_Home : {
				init : function( )
				{
					//Alternate List
					//$('.reviews .category ul li:nth-child(even)').addClass('alternate');
				}
			},

			Category : {
				init : function( )
				{
					//Alternate List
					//$('.reviews .category ul li:nth-child(even)').addClass('alternate');
				}
			},

			Review : {
				init : function( )
				{
					//Begin - Social Column
					TS.SocialColumn.init()

					TS.Story.init_comments()

					TS.FeatureComments.init()
				}
			}
		},

		FeaturesSection : {
			init : function( ts_section )
			{
				switch( ts_section )
				{
					case 'guides':
						this.Feat_Home.init()
						break;
					case 'guides_category':
					case 'guides_subcategory':
						this.Category.init()
						break;
					case 'guide':
					case 'article':
						this.Feature.init()
						break;
				}
			},

			Feat_Home : {
				init : function( )
				{
					//Alternate List
					$('.features .category ul li:nth-child(even)').addClass('alternate');
				}
			},

			Category : {
				init : function( )
				{
					//Alternate List
					$('.features .category ul li:nth-child(even)').addClass('alternate');
				}
			},

			Feature : {
				init : function( )
				{
					//Begin - Social Column
					TS.SocialColumn.init()

					TS.Story.init_comments()

					TS.FeatureComments.init()
				}
			}
		},

		Mediagallery : {
			init : function( ts_section )
			{
				switch( ts_section )
				{
					case 'gallery_by_review':
						this.GalleryReview.init()
						break;
				}
			},

			GalleryReview : {
				init : function( )
				{
					$('.flex-next', '.flex-direction-nav').ready(function() {
						var hash = window.location.hash
						if( hash )
						{
							hash = hash.substring(1, hash.length)
							var selected = $('ul li.'+hash+' a', '.image_list')
							selected.trigger('click');
						}
					})

					$('.flex-prev', '.flex-direction-nav').click(function(e){
						e.preventDefault();

						var selected = $('ul li.selected', '.image_list')
						var prev = selected.prev()
						if( prev.length < 1 ) //click on first element, then Get Last element
							prev = $('ul li:last', '.image_list')
						var href = prev.find('a').attr('href')

						$('a', '.view_image').attr('href', href)
						$('a img', '.view_image').attr('src', href)

						selected.removeClass('selected');
						prev.addClass('selected')

						var new_link = prev.attr('data-href')
						if (history.pushState)
							history.pushState(null, null, new_link)
					});
					$('.flex-next', '.flex-direction-nav').click(function(e){
						e.preventDefault();

						var selected = $('ul li.selected', '.image_list')
						var next = selected.next()
						if( next.length < 1 ) //click on last element, then Get First element
							next = $('ul li:first', '.image_list')
						var href = next.find('a').attr('href')

						$('a', '.view_image').attr('href', href)
						$('a img', '.view_image').attr('src', href)

						selected.removeClass('selected');
						next.addClass('selected')

						var new_link = next.attr('data-href')
						if (history.pushState)
							history.pushState(null, null, new_link)
					});

					$('ul li a', '.image_list').click(function(e){
						e.preventDefault();

						var href = $(this).attr('href')

						$('a', '.view_image').attr('href', href)
						$('a img', '.view_image').attr('src', href)

						$('ul li.selected', '.image_list').removeClass('selected');
						var el_li = $(this).parent('li')
						el_li.addClass('selected')

						var new_link = el_li.attr('data-href')
						if (history.pushState)
							history.pushState(null, null, new_link)
					})
					$(document).keydown(function(e){
						if (e.keyCode == 37) {//left
							e.preventDefault();
							$('.flex-prev', '.flex-direction-nav').trigger('click');
						}else if (e.keyCode == 39) {//right
							e.preventDefault();
							$('.flex-next', '.flex-direction-nav').trigger('click');
						}
					});
				}
			}
		}
	}

	$(function()
	{
		TS.init()
	})
}(jQuery);