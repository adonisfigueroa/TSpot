<?php
	//global $not_home;
?>
<!--
 ______  ____    ____     __  __  ____    ____    _____   ______   
/\__  _\/\  _`\ /\  _`\  /\ \/\ \/\  _`\ /\  _`\ /\  __`\/\__  _\  
\/_/\ \/\ \ \L\_\ \ \/\_\\ \ \_\ \ \,\L\_\ \ \L\ \ \ \/\ \/_/\ \/  
   \ \ \ \ \  _\L\ \ \/_/_\ \  _  \/_\__ \\ \ ,__/\ \ \ \ \ \ \ \  
    \ \ \ \ \ \L\ \ \ \L\ \\ \ \ \ \/\ \L\ \ \ \/  \ \ \_\ \ \ \ \ 
     \ \_\ \ \____/\ \____/ \ \_\ \_\ `\____\ \_\   \ \_____\ \ \_\
      \/_/  \/___/  \/___/   \/_/\/_/\/_____/\/_/    \/_____/  \/_/
-->
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:og="http://ogp.me/ns#"
      xmlns:fb="http://www.facebook.com/2008/fbml">
<head>
	<meta charset=utf-8>
	<title>TechSpot</title>
	<meta name="viewport" content="width=device-width,maximum-scale=1,initial-scale=1,user-scalable=no"> 
	
	<meta property="og:site_name" content="TechSpot" />
	<meta property="og:locale" content="en_us" />
	<meta property="fb:app_id" content="216891305041073" />
	<meta name="application-name" content="TechSpot"/>
	<meta name="title" content="TechSpot - Technology News, Reviews and Analysis" />
	<meta name="description" content="Technology News, Reviews and Analysis. TechSpot is read daily by tech enthusiasts, computer power users and IT decision makers from around the world." />
	<meta name="keywords" content="TechSpot, technology, PC technology, computer, windows, hardware, software, reviews, PC gaming, tech news, software downloads, drivers, techspot.com" />
	<meta name="google-site-verification" content="8pBdaOxYepAWI-HEyqFYy-l8BQtnuxshvyXqoHAjU_0" />

	<link rel="canonical" href="http://www.techspot.com" />
	<link rel="alternate" media="only screen and (max-width: 640px)" href="http://m.techspot.com/" />
	<link rel="alternate" type="application/rss+xml" title="TechSpot" href="http://www.techspot.com/backend.xml" />
	<link href="https://plus.google.com/118312224622074258671" rel="publisher">
	
	<meta property="og:type" content="website" />
	<meta property="og:title" content="TechSpot - Technology News, Reviews and Analysis" />
	<meta property="og:url" content="http://www.techspot.com" />
	<meta property="og:image" content="http://static.techspot.com/images2/techspot_logo.jpg" />
	<meta property="og:description" content="TechSpot is a leading PC technology publication read daily by thousands of tech enthusiasts, computer power users and IT decision makers from around the world." />
	
	<link rel="apple-touch-icon-precomposed" href="http://static.techspot.com/apple-touch-icon.png" />
	<link rel="icon" type="image/x-icon" href="http://static.techspot.com/favicon.png" />
	<link rel="shortcut icon" type="image/x-icon" href="http://static.techspot.com/favicon.png" />
	
	<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
	<script type="text/javascript" src="/js/jquery.sticky-kit.min.js"></script>
	<!--<script type="text/javascript" src="/js/jquery.countup.js"></script>-->
	<script type="text/javascript" src="/js/jquery.flexslider-min.js"></script>
	<script type="text/javascript" src="/js/imagesloaded.pkgd.min.js"></script>
	<script type="text/javascript" src="/js/afterresize.min.js"></script>
	<script type="text/javascript" src="/js/custom.js"></script>
	<link href='http://fonts.googleapis.com/css?family=Roboto:300,400,500,700,500italic,400italic,700italic' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Roboto+Condensed:400,700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="/css/styles.css" />
	
</head>
<body class="<?php echo implode(" ",$body_classes); ?>">
<div id="Mobileheader">
	<nav id="flyout-main-menu">
		<h1 id="logo"><a href="#">TechSpot</a></h1>
		<div class="wrapper">
			<ul>
				<li><a href="#" data-source="trending">Trending</a></li>
				<li><a href="#" data-source="reviews">Reviews</a></li>
				<li><a href="#" data-source="features">Features</a></li>
				<li><a href="#" data-source="product-finder">Product Finder</a></li>
				<li><a href="#" data-source="downloads">Downloads</a></li>
				<li><a href="#" data-source="forums">Forums</a></li>
				<li></li>
			</ul>
		</div>
	</nav>
</div>
<div id="GlobalWrapper">
<header id="header"<?php if (in_array('interior', $body_classes)) : ?> class="interior"<?php endif; ?>>
	<div class="header-top">
		<div class="wrapper">
			<div id="MobileMenu"><a><svg id="Stripes" class="" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 50 50" xml:space="preserve">
					<rect class="a" width="50" height="7"></rect>
					<rect class="b" y="20" width="50" height="7"></rect>
					<rect class="c" y="40" width="50" height="7"></rect>
				</svg></a></div>  
			<div class="right-links">
				<ul>
					<li class="login">
						<a style="cursor:pointer" href="http://google.com">Login <span class="blink">_</span></a>
						<div class="login-dropdown dropdown">
							<div class="pad why-register">
								<h4>Welcome to TechSpot</h4>
								<small><a href="">Why should I register?</a></small>
							</div>
							<div class="pad login">
								<small><a href="">Sign up for a new account</a> or log in here:</small>
								<form class="login-form">
									<label><input name="username" type="text" placeholder="Username" /></label>
									<label><input name="password" type="password" placeholder="Password" /></label>
									<div align="center">
										<input type="submit" class="submit blue" />
										<small><a href="#">Forgot your password?</a></small>
									</div>
								</form>
							</div>
							
							<div class="pad login-social" align="center">
								<a href=""><img src="http://static.techspot.com/images2/login-facebook-trans.png" width="155" height="29" /></a>
								<a href=""><img src="http://static.techspot.com/images2/login-twitter-trans.png" width="155" height="29" /></a>
							</div>
							
						</div>
					</li>
					<li class="group social"><a style="cursor:pointer;">Social Sharing</a>
						<div class="social-dropdown dropdown">
							<div class="pad social">
								<h4>Find TechSpot on...</h4>
							</div>
							<div class="social socialrow fb">
								<h4>Facebook</h4>
								<div class="WidgetArea"></div>
							</div>
							<div class="social socialrow gp">
								<h4>Google+</h4>
								<div class="WidgetArea"></div>
							</div>
							<div class="social socialrow tw">
								<h4>Twitter</h4>
								<div class="WidgetArea"></div>
							</div>
							<div class="social socialrow yt">
								<a href="#"><h4>Youtube</h4></a>
							</div>
							<div class="social socialrow st">
								<a href="#"><h4>Steam</h4></a>
							</div>
							<div class="pad rss">
								<a href="#">Subscribe to our RSS feed</a>
							</div>
							<div class="pad newsletter">
								Get our weekly newsletter
								<form class="newsletter_form">
									<input type="text" name="email" value="" placeholder="Email Address" />
								</form>
							</div>
						</div>
					</li>
					<li class="search social"><a style="cursor:pointer">Search</a>
						<form class="search_form">
							<input autofocus type="text" name="search" id="search_field" value="" placeholder="what are you looking for?" />
						</form>
					</li>
				</ul>
			</div>
			<h1 id="logo"><a href="#">TechSpot</a></h1>
			<div class="clearfix"></div>
		</div><!-- /.wrapper -->
	</div>
	<nav id="main-menu" class="menu">
		<div class="wrapper">
			<ul id="dk_menu">
				<li>
					<a href="#" data-source="trending">Trending</a>
					<div class='nav-submenu ' style='display: none;'>
						<div class="loadAnim">
								<img src="images/loading.gif" alt="loading gif">
							</div>
						<div class="wrapper">
						</div>
					</div>
				</li>
				<li>
					<a href="#" data-source="reviews">Reviews</a>
					<div class='nav-submenu ' style='display: none;'>
						<div class="loadAnim">
								<img src="images/loading.gif" alt="loading gif">
							</div>
						<div class="wrapper">
						</div>
					</div>
				</li>
				<li>
					<a href="#" data-source="features">Features</a>
					<div class='nav-submenu ' style='display: none;'>
						<div class="loadAnim">
								<img src="images/loading.gif" alt="loading gif">
							</div>
						<div class="wrapper">
						</div>
					</div>
				</li>
				<li>
					<a href="#" data-source="product-finder">Product Finder</a>
					<div class='nav-submenu ' style='display: none;'>
						<div class="loadAnim">
								<img src="images/loading.gif" alt="loading gif">
							</div>
						<div class="wrapper">
						</div>
					</div>
				</li>
				<li id="SpecialHeightF">
					<a href="#" data-source="forums">Forums</a>
					<div class='nav-submenu ' style='display: none;'>
						<ul class="SubHeader" id="forums">
							<li class="NoArrow"><a href="">Recent Activity</a></li>
							<li class="OArrow"><a href="">Most Recent Topics</a></li>
							<li class="NoArrow"><a href="">Watched Topics</a></li>
						</ul>
						<div class="loadAnim">
								<img src="images/loading.gif" alt="loading gif">
							</div>
						<div class="wrapper">	
						</div>
					</div>
				</li>
				<li id="SpecialHeightD">
					<a href="#" data-source="downloads">Downloads</a>
					<div class='nav-submenu ' style='display: none;'>
						<ul class="SubHeader" id="download">
							<li class="NoArrow"><a href="">Most Popular</a></li>
							<li class="OArrow"><a href="">Editors Choice</a></li>
							<li class="GArrow"><a href="">Latest Drivers</a></li>
						</ul>
						<div class="loadAnim">
								<img src="images/loading.gif" alt="loading gif">
							</div>
						<div class="wrapper">
						</div>
					</div>
				</li>
			</ul>
		</div><!-- /.wrapper -->
		
	</nav>
	
	<div class="clearfix"></div>
	
</header>
