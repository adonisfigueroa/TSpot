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
			
			$(".slide-sort-selector ul li a").click(function(e) {
				e.preventDefault();
				var offset = $(this).position();
				var width = $(this).outerWidth(false);
				var left_position = offset.left + Math.floor(width / 2) - 3; // Subtract 3 to account for arrow thickness
				
				$(this).parent().addClass("active").siblings().removeClass("active").closest("ul").children("li.indicator").animate({
					left: left_position+'px'
				},500,function() {});
			});
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
	$("#Stripes").click(function(){
		$("#GlobalWrapper").toggleClass('activebar');
	});
	//MastHead height Variator
	$("#masthead ul.variation-1").parent().parent().addClass("SmallHead");
	$("#masthead ul.variation-2").parent().parent().addClass("SmallHead");
	$("#masthead ul.variation-3").parent().parent().addClass("SmallHead");
	$("#masthead ul.variation-4").parent().parent().addClass("BigHead");
	$("#masthead ul.variation-5").parent().parent().addClass("BigHead");
	
	//main menu
	//$("#main-menu .wrapper > ul > li").hoverIntent(xmenuHoverB,xmenuHoverOutB);
  
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
  var delay = 200, setTimeoutConst;
  var wasVisible = $('.nav-submenu').is(":visible");
  if ($this.children("a").hasClass("active")) {
    return false;
  } 
  
  setTimeoutConst = setTimeout(function() {
		$this.stop(true,true).siblings("li").removeClass("active").children("a").removeClass("active").siblings(".nav-submenu").hide();
			
		if (!$this.children(".nav-submenu").length) {
			$this.append("<div class='nav-submenu ' style='display: none;'></div>");
		}
		
		$this.children(".nav-submenu").load(
		  "../_inc/nav-submenus/"+$this.children("a").data("source")+'.html', 
		  function() {
  			$this.children("a").addClass("active");
  			$(".nav-submenu > ul.SubHeader").parent().addClass("withHeader");
  			if (!wasVisible) {
	  			$this.children(".nav-submenu").slideDown("fast");
	  			setTimeout(check, 500);
  			}
  			else{
	  			$this.children(".nav-submenu").show(0);
  			}
  			$(".submenu > li > a").hover(function(e) {
  				e.preventDefault();
  				$(this).parent("li").addClass("active").siblings("li").removeClass("active");
  				//$(this).siblings("ul.recent-items").show();
  			});
  		});
  }, delay);
  return false;
}

function xmenuHoverOut() {
	var $this = $(this);
	setTimeout(function() {
		$this.children("a").removeClass("active").siblings(".nav-submenu").hide();
		clearTimeout(setTimeoutConst);
		return false
		});	
}
/*function xmenuHoverB() {
	var $this = $(this);
	var wasVisible = $('.nav-submenu').is(":visible");
	if ($this.children("a").hasClass("active")) {
    return false;
  } 

}*/