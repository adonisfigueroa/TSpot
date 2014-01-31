$(document).ready(function() {
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
	
	$(".rating_bar").each(function(i) {
		$(this).css("width", $(this).data("score")+'%');
	});
  
  $(".right-links .search a").hover(function() {
    $("#search_field").focus();
  });
	
	$("body.article .social-column").css({
		// Used to stretch the social widget column container
		// to match the height of the overall page content.
		'height': $("#content").outerHeight()
	});
	
	$("body.news .social-column").css({
		// Used to stretch the social widget column container
		// to match the height of the overall page content.
		'height': $("article").outerHeight(false)
	});
	
	
	$(".scroll").stick_in_parent({
		'parent': '.social-column',
		'offset_top': 100
	});	
	
	$(".localScroll").click(function(e){
  	e.preventDefault();
  	var speed = ($.isNumeric($(this).data("speed"))) ? $(this).data("speed") : 2000;
  	$("html, body").animate({ scrollTop: $(this.hash).offset().top }, speed);
	});
	
	$("#main-menu .wrapper > ul > li").hover(xmenuHover,xmenuHoverOut);
  
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
	$('.article-menu .menu-items a').click(function(e) {
		e.preventDefault();
		
		// Add active class to article menu item
		$('.article-menu .menu-items a').removeClass('active');
		$(this).addClass('active');
		var id = $(this).attr('id');
		$('.article-menu').removeClass('pub-description');
		$('.article-menu').removeClass('similar-soft');
		$('.article-menu').addClass(id);
		
 		// Hide div with descriptions
		var slider = $(this).attr('slider');
		$(this).parent().parent().parent().find('.ps-item').addClass('hide');
		$(this).parent().parent().parent().find('#' + slider).removeClass('hide');
	});
});


function xmenuHover() {
  var $this = $(this);
  var delay = 500, setTimeoutConst;
  
  if ($this.children("a").hasClass("active")) {
    return false;
  } 
  
  setTimeoutConst = setTimeout(function() {
		$this.stop(true,true).siblings("li").removeClass("active").children("a").removeClass("active").siblings(".nav-submenu").hide();
			
		if (!$this.children(".nav-submenu").length) {
			$this.append("<div class='nav-submenu' style='display: none;'></div>");
		}
		
		$this.children(".nav-submenu").load(
		  "../_inc/nav-submenus/"+$this.children("a").data("source")+'.html', 
		  function() {
  			$this.children("a").addClass("active");
  			$this.children(".nav-submenu").slideDown();
  			
  			$(".submenu > li > a").click(function(e) {
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
	$this.children("a").removeClass("active").siblings(".nav-submenu").slideUp();
	clearTimeout(setTimeoutConst);
	return false;
}