<?php 
	global $body_classes;
	$body_classes = array('interior','features');
	include("_inc/_header.php");
?>
<div class="cta grey top-adverbox">
	<div class="wrapper">
		<!--<img class="TopAd" src="images/tmp/cta1.jpg" alt="cta1"  />-->
	</div>
</div>
<section id="masthead">
	<div class="featured-posts-title">
		<h1>Features and Guides</h1>
	</div>
	<div class="wrapper">
		<ul class="featured-posts">
			<li class="tall" style="background-image:url('images/tmp/cpu.jpg');">
				<a href="#">
					<hgroup>
						<h3>Graphics Cards</h3>
						<h2>AMD Radeon R9 290X Review: Titan-class performance at half the price</h2>
					</hgroup>
				</a>
				<div class="FGheadCom">
					<span>22</span>
					<span class="triangle"></span>
				</div>
			</li>
			<li style="background-image:url('images/tmp/amd.jpg');">
				<a href="#">
					<hgroup>
						<h3>Graphics Cards</h3>
						<h2>AMD Radeon R9 290X Review: Titan-class performance at half the price</h2>
					</hgroup>
				</a>
				<div class="FGheadCom">
					<span>22</span>
					<span class="triangle"></span>
				</div>
			</li>
			<li style="background-image:url('images/tmp/iphone.jpg');">
				<a href="#">
					<hgroup>
						<h3>Graphics Cards</h3>
						<h2>AMD Radeon R9 290X Review: Titan-class performance at half the price</h2>
					</hgroup>
				</a>
				<div class="FGheadCom">
					<span>22</span>
					<span class="triangle"></span>
				</div>
			</li>
			<li style="background-image:url('images/tmp/nokia.jpg');">
				<a href="#">
					<hgroup>
						<h3>Graphics Cards</h3>
						<h2>AMD Radeon R9 290X Review: Titan-class performance at half the price</h2>
					</hgroup>
				</a>
				<div class="FGheadCom">
					<span>22</span>
					<span class="triangle"></span>
				</div>
			</li>
			<li style="background-image:url('images/tmp/windows8.jpg');">
				<a href="#">
					<hgroup>
						<h3>Graphics Cards</h3>
						<h2>AMD Radeon R9 290X Review: Titan-class performance at half the price</h2>
					</hgroup>
				</a>
				<div class="FGheadCom">
					<span>22</span>
					<span class="triangle"></span>
				</div>
			</li>
		</ul>
		
	</div><!-- /.wrapper -->
	<div class="clearfix"></div>
</section>

<div class="cta">
	<div class="wrapper">
		<img class="TopAd Desktop" src="images/tmp/cta1.jpg" alt="cta1" width="970" height="90" />
	</div><!-- /.wrapper -->
</div>

<section id="content">
	<div class="wrapper">
		<div id="sidebar">
			<ul>
				<li class="has_more">
					<a href="#" class="SideToggle">
						<div class="SideTitle">
							<h3>Categories</h3>
							<span class="arrow"></span>
						</div>
					</a>
					<div id="CategoryList">
						<ul class="sub">
							<li class="">
							<a href="/reviews/cpu/">
								<span class="arrow"></span>
								<span>CPU</span>
							</a>
						</li>
							<li class="">
							<a href="/reviews/motherboards/">
								<span class="arrow"></span>
								<span>Motherboards</span>
							</a>
						</li>
							<li class="">
							<a href="/reviews/graphics-cards/">
								<span class="arrow"></span>
								<span>Graphics Cards</span>
							</a>
						</li>
							<li class="">
							<a href="/reviews/laptops/">
								<span class="arrow"></span>
								<span>Laptops</span>
							</a>
						</li>
							<li class="">
							<a href="/reviews/desktop-pcs/">
								<span class="arrow"></span>
								<span>Desktop PCs</span>
							</a>
						</li>
							<li class="">
							<a href="/reviews/tablets/">
								<span class="arrow"></span>
								<span>Tablets</span>
							</a>
						</li>
							<li class="">
							<a href="/reviews/smartphones/">
								<span class="arrow"></span>
								<span>Smartphones</span>
							</a>
						</li>
							<li class="">
							<a href="/reviews/storage/">
								<span class="arrow"></span>
								<span>Storage</span>
							</a>
						</li>
							<li class="">
							<a href="/reviews/input-devices/">
								<span class="arrow"></span>
								<span>Input Devices</span>
							</a>
						</li>
							<li class="">
							<a href="/reviews/cases/">
								<span class="arrow"></span>
								<span>Cases</span>
							</a>
						</li>
							<li class="">
							<a href="/reviews/audio/">
								<span class="arrow"></span>
								<span>Audio</span>
							</a>
						</li>
							<li class="">
							<a href="/reviews/software/">
								<span class="arrow"></span>
								<span>Software</span>
							</a>
						</li>
							<li class="">
							<a href="/reviews/games/">
								<span class="arrow"></span>
								<span>Games</span>
							</a>
						</li>
					</ul>
				</div>
			</li>
			</ul>
		</div>
		<div class="col-2-3">
			<div class="wrapperMobileOnly">
			<div class="ListHeader">
				<h3>Trending Tech Products</h3>
			</div>		
				<div class="Category" id="review">
					<ul>
					<?php for($i=0;$i<10;$i++) : ?>
						<li>
							<div class="info home">
								<div class="img">
									<a href="http://www.techspot.com/review/781-amd-a10-7850k-graphics-performance/">
										<img src="http://static.techspot.com/articles-info/article-pics/781.jpg" alt="AMD A10-7850K Dual Graphics Performance">
									</a>
								</div>
							</div>
					
							<h3><a href="http://www.techspot.com/review/781-amd-a10-7850k-graphics-performance/">AMD A10-7850K Dual Graphics Performance</a></h3>
							<p>By Steven Walton on February 14, 2014
							</p><div class="desc">AMD Kaveri APUs can be paired with two discrete GPUs: the Radeon R7 240 and R7 250. Both are sub-$100 cards that we wouldn't recommend for gaming, but when combined with the A10's on-die GPU we could see performance with bigger implications for value-oriented builders.</div>
							<!--<div class="more_info">
								<div class="score average">70</div>
							</div>-->
						</li>
					<?php endfor; ?>
					<ul>
				</div>
				<!-- /.post-list -->
				<a href="#">
					<div class="post-load-more">
						<span>Load more features...</span>
					</div>
				</a>
				<?php include("_inc/_pager.php"); ?>
			</div>
		</div>
		<div class="clearfix"></div>
	</div><!-- /.wrapper -->
</section>

<?php include("_inc/_footer.php"); ?>