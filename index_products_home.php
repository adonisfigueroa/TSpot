<?php 
	global $body_classes;
	$body_classes = array('interior','products');
	include("_inc/_header.php");
?>
<section id="masthead">
	<div class="featured-posts-title">
		<h1>TechSpot Product Finder</h1>
	</div>
	<div class="wrapper">
		<ul class="featured-posts">
			<li  style="background-image:url('images/tmp/cpu.jpg');">
				<a href="#">
					<hgroup>
						<h3>Smartphones</h3>
						<h2>Sony Xperia Z1 Compact</h2>
					</hgroup>
					<div class="rating excellent">
						<span>91</span>
					</div>
					
				</a>
			</li>
			<li style="background-image:url('images/tmp/amd.jpg');">
				<a href="#">
					<hgroup>
						<h3>Cameras</h3>
						<h2>Camera Powershot SX280 HS</h2>
					</hgroup>
					<div class="rating good">
						<span>80</span>
					</div>
				</a>
			</li>
			<li style="background-image:url('images/tmp/iphone.jpg');">
				<a href="#">
					<hgroup>
						<h3>Routers</h3>
						<h2>D-Link DIR-868L Wireless AC1750 Dual Band Giga...</h2>
					</hgroup>
					<div class="rating good">
						<span>84</span>
					</div>
				</a>
			</li>
			<li style="background-image:url('images/tmp/nokia.jpg');">
				<a href="#">
					<hgroup>
						<h3>Routers</h3>
						<h2>D-Link DIR-868L Wireless AC1750 Dual Band Giga...</h2>
					</hgroup>
					<div class="rating average">
						<span>71</span>
					</div>
				</a>
			</li>
			<li style="background-image:url('images/tmp/windows8.jpg');">
				<a href="#">
					<hgroup>
						<h3>Smartphones</h3>
						<h2>Sony Xperia Z1 Compact</h2>
					</hgroup>
					<div class="rating excellent">
						<span>91</span>
					</div>
				</a>
			</li>
			<li style="background-image:url('images/tmp/amazon.jpg');">
				<a href="#">
					<hgroup>
						<h3>Cameras</h3>
						<h2>Camera Powershot SX280 HS</h2>
					</hgroup>
					<div class="rating good">
						<span>76</span>
					</div>
				</a>
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
		<div class="col-2-3">
			<div class="wrapperMobileOnly">		
				<div id="LookUpMobile">
					<div class="SideTitle">
						<h3>Look Up products</h3>
					</div>
					<form action="/search" method="get">
						<input class="ProdSearch" type="text" name="productsearch" placeholder="Search here...">
					</form>
				</div>
				<div id="CategoryListMobile">
					<ul>
				    <li class="has_more">
				        <a href="#" class="SideToggle">
				           <div class="SideTitle">
							   <h3>Computer Hardware</h3>
							   <span class="arrow"></span>
						   </div>													
				        </a>
				        
				        <div class="SideProdContent CompHard">
					        <ul class="sub">
					        	<div class="col-1-2">
					            <li class="">
					                <a href="/products/cases/">
					                    <span class="arrow"></span> Cases																
					                </a>
					            </li>
					            <li class="">
					                <a href="/products/cooling/">
					                    <span class="arrow"></span> Cooling																
					                </a>
					            </li>
					            <li class="">
					                <a href="/products/graphics-cards/">
					                    <span class="arrow"></span> Graphics Cards																
					                </a>
					            </li>
					            <li class="">
					                <a href="/products/keyboards/">
					                    <span class="arrow"></span> Keyboards																
					                </a>
					            </li>
					            <li class="">
					                <a href="/products/mice/">
					                    <span class="arrow"></span> Mice																
					                </a>
					            </li>
					            <li class="">
					                <a href="/products/monitors/">
					                    <span class="arrow"></span> Monitors																
					                </a>
					            </li>
					            <li class="">
					                <a href="/products/motherboards/">
					                    <span class="arrow"></span> Motherboards																
					                </a>
					            </li>
					            <li class="">
					                <a href="/products/power-supplies/">
					                    <span class="arrow"></span> Power Supplies																
					                </a>
					            </li>
					        	</div>
					        	<div class="col-1-2-last">
					            <li class="">
					                <a href="/products/printers/">
					                    <span class="arrow"></span> Printers																
					                </a>
					            </li>
					            <li class="">
					                <a href="/products/processors/">
					                    <span class="arrow"></span> Processors																
					                </a>
					            </li>
					            <li class="">
					                <a href="/products/routers/">
					                    <span class="arrow"></span> Routers																
					                </a>
					            </li>
					            <li class="">
					                <a href="/products/scanners/">
					                    <span class="arrow"></span> Scanners																
					                </a>
					            </li>
					            <li class="">
					                <a href="/products/sound-cards/">
					                    <span class="arrow"></span> Sound Cards																
					                </a>
					            </li>
					            <li class="">
					                <a href="/products/speakers/">
					                    <span class="arrow"></span> Speakers																
					                </a>
					            </li>
					            <li class="">
					                <a href="/products/storage/">
					                    <span class="arrow"></span> Storage																
					                </a>
					            </li>
					        	</div>
					        </ul>
				        </div>
				    </li>
				    <li class="has_more">
				        <a href="#" class="SideToggle">
				           <div class="SideTitle">
							   <h3>Desktop & Mobile</h3>
							   <span class="arrow"></span>
						   </div>													
				        </a>
				        <div class="SideProdContent DeskMobi">
				        <ul class="sub">
				        	<div class="col-1-2">
				            <li class="">
				                <a href="/products/desktop-pcs/">
				                    <span class="arrow"></span> Desktop PCs																
				                </a>
				            </li>
				            <li class="">
				                <a href="/products/laptops/">
				                    <span class="arrow"></span> Laptops																
				                </a>
				            </li>
				        	</div>
				            <div class="col-1-2-last">
				            <li class="">
				                <a href="/products/servers/">
				                    <span class="arrow"></span> Servers																
				                </a>
				            </li>
				            <li class="">
				                <a href="/products/tablets/">
				                    <span class="arrow"></span> Tablets																
				                </a>
				            </li>
				            </div>
				        </ul>
				        </div>
				    </li>
				    <li class="has_more">
				        <a href="#">
				           <div class="SideTitle">
							   <h3>PC Gaming</h3>
						   </div>													
				        </a>
				        <div class="SideProdContent"></div>
				       	   <div class="col-1-2"></div>
				       	   <div class="col-1-2-last"></div>
				    </li>
				    <li class="has_more">
				       <a href="#" class="SideToggle">
				           <div class="SideTitle">
							   <h3>Electronics</h3>
							   <span class="arrow"></span>
						   </div>													
				        </a>
				        <div class="SideProdContent Elec">
				        <ul class="sub">
				        	<div class="col-1-2">
				            <li class="">
				                <a href="/products/camcorders/">
				                    <span class="arrow"></span> Camcorders																
				                </a>
				            </li>
				            <li class="">
				                <a href="/products/cameras/">
				                    <span class="arrow"></span> Cameras																
				                </a>
				            </li>
				            <li class="">
				                <a href="/products/gps/">
				                    <span class="arrow"></span> GPS																
				                </a>
				            </li>
				            <li class="">
				                <a href="/products/headsets/">
				                    <span class="arrow"></span> Headsets																
				                </a>
				            </li>
				            <li class="">
				                <a href="/products/audio-video/">
				                    <span class="arrow"></span> Home Audio & Video																
				                </a>
				            </li>
				        	</div>
				        	<div class="col-1-2-last">
				            <li class="">
				                <a href="/products/mp3-players/">
				                    <span class="arrow"></span> MP3 Players																
				                </a>
				            </li>
				            <li class="">
				                <a href="/products/projectors/">
				                    <span class="arrow"></span> Projectors																
				                </a>
				            </li>
				            <li class="">
				                <a href="/products/remotes/">
				                    <span class="arrow"></span> Remotes																
				                </a>
				            </li>
				            <li class="">
				                <a href="/products/tvs/">
				                    <span class="arrow"></span> TVs																
				                </a>
				            </li>
				        	</div>
				        </ul>
				        </div>
				    </li>
				</ul>
				</div>
				<div class="ListHeader">
					<h3>Trending Tech Products</h3>
				</div>
				<div class="post-list-product">
					<?php for($i=0;$i<20;$i++) : ?>
						<article>
							<div class="product-img">
								<img src="images/tmp/post-image-3.jpg" alt="post-image-1" />
							</div><!-- /.article-img -->
							<div class="ProdListInfo">
								<h4><a href="#">Amazon Kindle Fire</a></h4>
								<div class="ProdListCat"><a href="#">Tablets</a></div>
								<time>Last Review: January 17, 2014</time>
							</div>
							<div class="prod-meta">
								<div class="intRank">174</div>
								<div class="price">$199</div>
								
									<a href="#" class="review_score good">
										<h2 class="score">83</h2>
										<span class="review"><strong>34</strong> reviews</span>
									</a>
								
							</div><!-- /.post-meta -->
							<div class="clearfix"></div>
						</article>
					<?php endfor; ?>
				</div><!-- /.post-list -->
				<a href="#">
					<div class="post-load-more">
						<span>Load more products...</span>
					</div>
				</a>
				<?php include("_inc/_pager.php"); ?>
			</div>
		</div>
		<div id="sidebar">
			<div id="LookUp">
				<div class="SideTitle">
					<h3>Look Up products</h3>
				</div>
				<form action="/search" method="get">
					<input class="ProdSearch" type="text" name="productsearch" placeholder="Search here...">
				</form>
			</div>
			<div id="CategoryList">
				<ul>
				    <li class="has_more open">
				        <a href="#" class="SideToggle">
				           <div class="SideTitle">
							   <h3>Computer Hardware</h3>
							   <span class="arrow"></span>
						   </div>													
				        </a>
				        
				        <div class="SideProdContent CompHard">
					        <ul class="sub">
					        	<div class="col-1-2">
					            <li class="">
					                <a href="/products/cases/">
					                    <span class="arrow"></span> Cases																
					                </a>
					            </li>
					            <li class="">
					                <a href="/products/cooling/">
					                    <span class="arrow"></span> Cooling																
					                </a>
					            </li>
					            <li class="">
					                <a href="/products/graphics-cards/">
					                    <span class="arrow"></span> Graphics Cards																
					                </a>
					            </li>
					            <li class="">
					                <a href="/products/keyboards/">
					                    <span class="arrow"></span> Keyboards																
					                </a>
					            </li>
					            <li class="">
					                <a href="/products/mice/">
					                    <span class="arrow"></span> Mice																
					                </a>
					            </li>
					            <li class="">
					                <a href="/products/monitors/">
					                    <span class="arrow"></span> Monitors																
					                </a>
					            </li>
					            <li class="">
					                <a href="/products/motherboards/">
					                    <span class="arrow"></span> Motherboards																
					                </a>
					            </li>
					            <li class="">
					                <a href="/products/power-supplies/">
					                    <span class="arrow"></span> Power Supplies																
					                </a>
					            </li>
					        	</div>
					        	<div class="col-1-2-last">
					            <li class="">
					                <a href="/products/printers/">
					                    <span class="arrow"></span> Printers																
					                </a>
					            </li>
					            <li class="">
					                <a href="/products/processors/">
					                    <span class="arrow"></span> Processors																
					                </a>
					            </li>
					            <li class="">
					                <a href="/products/routers/">
					                    <span class="arrow"></span> Routers																
					                </a>
					            </li>
					            <li class="">
					                <a href="/products/scanners/">
					                    <span class="arrow"></span> Scanners																
					                </a>
					            </li>
					            <li class="">
					                <a href="/products/sound-cards/">
					                    <span class="arrow"></span> Sound Cards																
					                </a>
					            </li>
					            <li class="">
					                <a href="/products/speakers/">
					                    <span class="arrow"></span> Speakers																
					                </a>
					            </li>
					            <li class="">
					                <a href="/products/storage/">
					                    <span class="arrow"></span> Storage																
					                </a>
					            </li>
					        	</div>
					        </ul>
				        </div>
				    </li>
				    <li class="open has_more">
				        <a href="#" class="SideToggle">
				           <div class="SideTitle">
							   <h3>Desktop & Mobile</h3>
							   <span class="arrow"></span>
						   </div>													
				        </a>
				        <div class="SideProdContent DeskMobi">
				        <ul class="sub">
				        	<div class="col-1-2">
				            <li class="">
				                <a href="/products/desktop-pcs/">
				                    <span class="arrow"></span> Desktop PCs																
				                </a>
				            </li>
				            <li class="">
				                <a href="/products/laptops/">
				                    <span class="arrow"></span> Laptops																
				                </a>
				            </li>
				        	</div>
				            <div class="col-1-2-last">
				            <li class="">
				                <a href="/products/servers/">
				                    <span class="arrow"></span> Servers																
				                </a>
				            </li>
				            <li class="">
				                <a href="/products/tablets/">
				                    <span class="arrow"></span> Tablets																
				                </a>
				            </li>
				            </div>
				        </ul>
				        </div>
				    </li>
				    <li class="open">
				        <a href="#">
				           <div class="SideTitle">
							   <h3>PC Gaming</h3>
						   </div>													
				        </a>
				        <div class="SideProdContent"></div>
				       	   <div class="col-1-2"></div>
				       	   <div class="col-1-2-last"></div>
				    </li>
				    <li class="open has_more">
				       <a href="#" class="SideToggle">
				           <div class="SideTitle">
							   <h3>Electronics</h3>
							   <span class="arrow"></span>
						   </div>													
				        </a>
				        <div class="SideProdContent Elec">
				        <ul class="sub">
				        	<div class="col-1-2">
				            <li class="">
				                <a href="/products/camcorders/">
				                    <span class="arrow"></span> Camcorders																
				                </a>
				            </li>
				            <li class="">
				                <a href="/products/cameras/">
				                    <span class="arrow"></span> Cameras																
				                </a>
				            </li>
				            <li class="">
				                <a href="/products/gps/">
				                    <span class="arrow"></span> GPS																
				                </a>
				            </li>
				            <li class="">
				                <a href="/products/headsets/">
				                    <span class="arrow"></span> Headsets																
				                </a>
				            </li>
				            <li class="">
				                <a href="/products/audio-video/">
				                    <span class="arrow"></span> Home Audio & Video																
				                </a>
				            </li>
				        	</div>
				        	<div class="col-1-2-last">
				            <li class="">
				                <a href="/products/mp3-players/">
				                    <span class="arrow"></span> MP3 Players																
				                </a>
				            </li>
				            <li class="">
				                <a href="/products/projectors/">
				                    <span class="arrow"></span> Projectors																
				                </a>
				            </li>
				            <li class="">
				                <a href="/products/remotes/">
				                    <span class="arrow"></span> Remotes																
				                </a>
				            </li>
				            <li class="">
				                <a href="/products/tvs/">
				                    <span class="arrow"></span> TVs																
				                </a>
				            </li>
				        	</div>
				        </ul>
				        </div>
				    </li>
				</ul>
			</div>
		</div>
		<div class="clearfix"></div>
	</div><!-- /.wrapper -->
</section>

<?php include("_inc/_footer.php"); ?>