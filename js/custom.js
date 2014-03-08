/*!
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license.
 * Copyright 2007, 2013 Brian Cherne
 */
(function(e){e.fn.hoverIntent=function(t,n,r){var i={interval:100,sensitivity:7,timeout:0};if(typeof t==="object"){i=e.extend(i,t)}else if(e.isFunction(n)){i=e.extend(i,{over:t,out:n,selector:r})}else{i=e.extend(i,{over:t,out:t,selector:n})}var s,o,u,a;var f=function(e){s=e.pageX;o=e.pageY};var l=function(t,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);if(Math.abs(u-s)+Math.abs(a-o)<i.sensitivity){e(n).off("mousemove.hoverIntent",f);n.hoverIntent_s=1;return i.over.apply(n,[t])}else{u=s;a=o;n.hoverIntent_t=setTimeout(function(){l(t,n)},i.interval)}};var c=function(e,t){t.hoverIntent_t=clearTimeout(t.hoverIntent_t);t.hoverIntent_s=0;return i.out.apply(t,[e])};var h=function(t){var n=jQuery.extend({},t);var r=this;if(r.hoverIntent_t){r.hoverIntent_t=clearTimeout(r.hoverIntent_t)}if(t.type=="mouseenter"){u=n.pageX;a=n.pageY;e(r).on("mousemove.hoverIntent",f);if(r.hoverIntent_s!=1){r.hoverIntent_t=setTimeout(function(){l(n,r)},i.interval)}}else{e(r).off("mousemove.hoverIntent",f);if(r.hoverIntent_s==1){r.hoverIntent_t=setTimeout(function(){c(n,r)},i.timeout)}}};return this.on({"mouseenter.hoverIntent":h,"mouseleave.hoverIntent":h},i.selector)}})(jQuery)


$(document).ready(function() {
		$(window).load(function(){
			$(".slide-sort-selector ul li.active").each(function() {
				var offset = $(this).position();
				var width = $(this).outerWidth(false);
				var left_position = offset.left + Math.floor(width / 2) - 3; // Subtract 3 to account for arrow thickness
		
				$(this).parent("ul").children("li.indicator").css({
					left: left_position+'px'
				});
				
			});
			
			var animate_slide = function(e, self) {
				e.preventDefault();
				var offset = self.position();
				var width = self.outerWidth(false);
				var left_position = offset.left + Math.floor(width / 2) - 3; // Subtract 3 to account for arrow thickness
				
				self.parent().addClass("active").siblings().removeClass("active").closest("ul").children("li.indicator").animate({
					left: left_position+'px'
				},500,function() {});
			}

			$(".slide-sort-selector .post-type-selector li a").click(function(e) {
				if($(this).closest('li').hasClass('active'))
					return false

				var view = $(this).attr('href').replace('#', '')

				if(view == 'trending')
					$('.slide-sort-selector .layout-selector').fadeOut(500)
				else
					$('.slide-sort-selector .layout-selector').fadeIn(500)

				TS.Home.loadNews(view, readCookie('view_news'))

				animate_slide(e, $(this))
			})

			$(".slide-sort-selector .layout-selector li a").click(function(e) {
				if($(this).closest('li').hasClass('active'))
					return false

				var view = $(this).attr('href').replace('#', '')

				createCookie('view_news', view, 365)
				TS.Home.loadNews('latest_news', view)

				animate_slide(e, $(this))
			})
		});
			
	$(".rating_bar").each(function(i) {
		$(this).css("width", $(this).data("score")+'%');
	});
  
	  $(".right-links .search a").hover(function() {
	    $("#search_field").focus();
	  });
	  
	  
	$(window).load(function(){
		$(window).on("resize", function () {
			var SelectorHeight = $("article").height();
			if (($(window).width())>500) {
				$("body.article .social-column").css({
					// Used to stretch the social widget column container
					// to match the height of the overall page content.
					'height': ($("article").height())-80
				});
			} else {
				$("body.article .social-column").css({
					'height': 0,
					'margin-bottom': 60
				});
			}
			if (($(window).width())>500) {
				$("body.news .social-column").css({
					// Used to stretch the social widget column container
					// to match the height of the overall page content.
					'height': ($("article").height())-80
				});
			} else {
				$("body.news .social-column").css({
					'height': 0,
					'margin-bottom': 60
				});
			}
		}).resize();
		
		//Social element sticky trigger depending on window Width for responsive.
	    	if (($(window).width())>500) {
		    	$(".scroll").stick_in_parent({
				'parent': '.social-column',
				'offset_top': 120
				});
	    	}
	    
	})
	$(".localScroll").click(function(e){
  	e.preventDefault();
  	var speed = ($.isNumeric($(this).data("speed"))) ? $(this).data("speed") : 2000;
  	$("html, body").animate({ scrollTop: $(this.hash).offset().top }, speed);
	});
	//mobile menu part
	$("#Stripes").parent().click(function(){
		$("#GlobalWrapper").toggleClass('activebar');
	});
	//MastHead height Variator
	$("#masthead ul.variation-1").parent().parent().addClass("SmallHead");
	$("#masthead ul.variation-2").parent().parent().addClass("SmallHead");
	$("#masthead ul.variation-3").parent().parent().addClass("SmallHead");
	$("#masthead ul.variation-4").parent().parent().addClass("BigHead");
	$("#masthead ul.variation-5").parent().parent().addClass("BigHead");
	
	//main menu
	$("#main-menu .wrapper > ul > li").hoverIntent(xmenuHover,xmenuHoverOut);
	
  
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
	
	// Download slider
	$('body.interior.download .slide-sort-selector li').click(function(e) {
		e.preventDefault();
		
 		// Hide div with descriptions
		var slider = $(this).attr('slider');
		$(this).parent().parent().parent().parent().find('.ps-item').addClass('hide');
		$(this).parent().parent().parent().parent().find('#' + slider).removeClass('hide');
	});
	$('.SideToggle').click(function(e)
	{
		if($(this).attr('href') == '#')
		e.preventDefault()
		
		$(this).parent('li').toggleClass('open')
	});
	//Alternate List
	$('.products .post-list-product article:nth-child(even)').addClass('alternate');
	$('.features .category ul li:nth-child(even)').addClass('alternate');
	$('.reviews .category ul li:nth-child(even)').addClass('alternate');
	
	//Computes if the Article.php .big should overflow or not when the sidebar is next to it.
	$(window).load(function(){
    $(window).on("resize", function () {
	    if (($(window).width())>760) {
	   	var SidePos = $('.TopScrollElement').offset().top;   
			$(".big").each(function (){
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
	}).resize();
	
	//compute if the Article.php .side-object should overflow or not when the sidebar is next to it.
	
	$(window).on("resize", function () {
	    if (($(window).width())>760) {
	   	var SidePos = $('.TopScrollElement').offset().top;   
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
	}).resize();	
	});
	$('.imgwrap').flexslider({
       animation: "slide"
  });
});
	
		



function xmenuHover() {
  var $this = $(this);
  var delay = 0, setTimeoutConst;
  var wasVisible = $(".nav-submenu").is(":visible");
  if ($this.children("a").hasClass("active")) {
    return false;
  } 
  setTimeoutConst = setTimeout(function() {
		$this.stop(true,true).siblings("li").removeClass("active").children("a").removeClass("active").siblings(".nav-submenu").fadeOut(100);
			
		if (!$this.children(".nav-submenu").length) {
			$this.append("<div class='nav-submenu ' style='display: none;'></div>");
		}
		$this.children(".nav-submenu").load(
		  "../static/nav-submenus/"+$this.children("a").data("source")+'.html',
		  function() {
		  	
  			$this.children("a").addClass("active");
  			$(".submenu > li > a").hover(function(e) {
  				e.preventDefault();
  				$(this).parent("li").addClass("active").siblings("li").removeClass("active");

  				//$(this).siblings("ul.recent-items").show();
  			});
  			$("ul.SubHeader").parent().addClass("withHeader");
  			if (!wasVisible) {
	  			$this.children(".nav-submenu").slideDown(200);		  			
  			}
  			else {
	  			$this.children(".nav-submenu").slideDown(0);
  			}
  		});
  }, delay);
  return false;
}

function xmenuHoverOut() {
	var $this = $(this);
	setTimeout(function() {
		$this.children("a").removeClass("active").siblings(".nav-submenu").fadeOut(50);
		clearTimeout(setTimeoutConst);
		return false
		},1000);	
}