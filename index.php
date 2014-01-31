<?php 
	global $body_classes;
	$body_classes = array('home');
	include("_inc/_header.php");
?>

<section id="masthead">
	<div class="wrapper">
		
		<ul class="featured-posts">
			<li class="tall" style="background-image:url('images/tmp/cpu.jpg');">
				<a href="#">
					<hgroup>
						<h3>Graphics Cards</h3>
						<h2>AMD Radeon R9 290X Review: Titan-class performance at half the price</h2>
					</hgroup>
				</a>
			</li>
			<li style="background-image:url('images/tmp/amd.jpg');">
				<a href="#">
					<hgroup>
						<h3>Graphics Cards</h3>
						<h2>AMD Radeon R9 290X Review: Titan-class performance at half the price</h2>
					</hgroup>
				</a>
			</li>
			<li style="background-image:url('images/tmp/iphone.jpg');">
				<a href="#">
					<hgroup>
						<h3>Graphics Cards</h3>
						<h2>AMD Radeon R9 290X Review: Titan-class performance at half the price</h2>
					</hgroup>
				</a>
			</li>
			<li class="tall" style="background-image:url('images/tmp/nokia.jpg');">
				<a href="#">
					<hgroup>
						<h3>Graphics Cards</h3>
						<h2>AMD Radeon R9 290X Review: Titan-class performance at half the price</h2>
					</hgroup>
				</a>
			</li>
			<li style="background-image:url('images/tmp/windows8.jpg');">
				<a href="#">
					<hgroup>
						<h3>Graphics Cards</h3>
						<h2>AMD Radeon R9 290X Review: Titan-class performance at half the price</h2>
					</hgroup>
				</a>
			</li>
			<li style="background-image:url('images/tmp/amazon.jpg');">
				<a href="#">
					<hgroup>
						<h3>Graphics Cards</h3>
						<h2>AMD Radeon R9 290X Review: Titan-class performance at half the price</h2>
					</hgroup>
				</a>
			</li>
			<li style="background-image:url('images/tmp/batman.jpg');">
				<a href="#">
					<hgroup>
						<h3>Graphics Cards</h3>
						<h2>AMD Radeon R9 290X Review: Titan-class performance at half the price</h2>
					</hgroup>
				</a>
			</li>
		</ul>
		
	</div><!-- /.wrapper -->
	<div class="clearfix"></div>
</section>

<div class="cta">
	<div class="wrapper">
		<img class="TopAd" src="images/tmp/cta1.jpg" alt="cta1" width="970" height="90" />
	</div><!-- /.wrapper -->
</div>

<section id="content">
	<div class="wrapper">
		<div class="col-2-3">
			
			<section class="slide-sort-selector">
				<nav class="post-type-selector">
					<ul>
						<li class="indicator"></li>
						<li class="active"><a href="#">Latest Headlines</a></li>
						<li><a href="#">Trending</a></li>
					</ul>
				</nav>
				<ul class="layout-selector">
					<li class="indicator"></li>
					<li class="standard active"><a href="#">Standard</a></li>
					<li class="full"><a href="#">Full</a></li>
				</ul>
				<div class="clearfix"></div>
			</section>
			
			<div class="post-list">
			<?php for($i=0;$i<10;$i++) : ?>
			<article>
				<div class="article-img">
					<img src="images/tmp/post-image-1.jpg" alt="post-image-1" width="180" height="120" />
				</div><!-- /.article-img -->
				
				<div class="article-content">
					<h2><a href="#">Amazon's trio of biospheres gets two thumbs up fro Seattle Design Review Board</a></h2>
					<time>Posted 4 hours ago by Shawn Knight | Filed in <a href="#">Industry News</a>, <a href="#">The Web</a></time>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					
					<div class="post-meta">
						<a href="#" class="read-more">Read More</a>
						<a href="#" class="comment-count">Comments <span class="highlight">1</span></a>
					</div><!-- /.post-meta -->
					
				</div><!-- /.article-content -->
				
				<div class="clearfix"></div>
			</article>
			<?php endfor; ?>
			
			</div><!-- /.post-list -->
			
		</div>
		<div id="sidebar">
			<img src="images/tmp/ford-ad.jpg" alt="ford-ad" width="300" height="600" style="margin-bottom: 30px;" />
			
			<h3 class="section-header red"><a href="#">Most Popular</a></h3>
			<ul class="teaser-list">
				<li>
					<a href="#">
						<span class="img-wrap"><img src="images/tmp/osx.jpg" alt="osx" width="120" height="80" /></span>
						<p>Apple likely to launch Mac OS X Mavericks in late October</p>
					</a>
				</li>
				<li>
					<a href="#">
						<span class="img-wrap"><img src="images/tmp/iphone2.jpg" alt="osx" width="120" height="80" /></span>
						<p>Apple likely to launch Mac OS X Mavericks in late October</p>
					</a>
				</li>
				<li>
					<a href="#">
						<span class="img-wrap"><img src="images/tmp/comic.jpg" alt="osx" width="120" height="80" /></span>
						<p>Apple likely to launch Mac OS X Mavericks in late October</p>
					</a>
				</li>
				<li>
					<a href="#">
						<span class="img-wrap"><img src="images/tmp/keyboard.jpg" alt="osx" width="120" height="80" /></span>
						<p>Apple likely to launch Mac OS X Mavericks in late October</p>
					</a>
				</li>
				<li>
					<a href="#">
						<span class="img-wrap"><img src="images/tmp/office.jpg" alt="osx" width="120" height="80" /></span>
						<p>Apple likely to launch Mac OS X Mavericks in late October</p>
					</a>
				</li>
			</ul>
			
			<h3 class="section-header orange"><a href="#">Another Block</a></h3>
			<ul class="teaser-list reviews">
				<li>
					<a href="#">
						<span class="img-wrap"><img src="images/tmp/osx.jpg" alt="osx" width="120" height="80" /></span>
						<p>Apple iPhone 5s Review
							<span class="rating_bar green" data-score="90"></span>
						</p>
					</a>
				</li>
				<li>
					<a href="#">
						<span class="img-wrap"><img src="images/tmp/iphone2.jpg" alt="osx" width="120" height="80" /></span>
						<p>Google Nexus 5 Review
							<span class="rating_bar green" data-score="95"></span>
						</p>
					</a>
				</li>
				<li>
					<a href="#">
						<span class="img-wrap"><img src="images/tmp/comic.jpg" alt="osx" width="120" height="80" /></span>
						<p>Sony Xperia Z1 Review
							<span class="rating_bar blue" data-score="80"></span>
						</p>
					</a>
				</li>
				<li>
					<a href="#">
						<span class="img-wrap"><img src="images/tmp/keyboard.jpg" alt="osx" width="120" height="80" /></span>
						<p>HTC One Mini Review
							<span class="rating_bar purple" data-score="60"></span>
						</p>
					</a>
				</li>
				<li>
					<a href="#">
						<span class="img-wrap"><img src="images/tmp/office.jpg" alt="osx" width="120" height="80" /></span>
						<p>LG G2 Review
							<span class="rating_bar green" data-score="90"></span>
						</p>
					</a>
				</li>
			</ul>
			
		</div>
		<div class="clearfix"></div>
	</div><!-- /.wrapper -->
</section>

<?php include("_inc/_footer.php"); ?>