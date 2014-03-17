<?php
	global $body_classes;
	$body_classes = array('interior','download');
	require_once("_inc/_header.php");
?>
<hgroup>
	<div class="wrapper">
		<ul class="category-chicklets">
			<li class="electronics"><a href="#">Downloads</a></li>
			<li class="hardware"><a href="#">Game Demos</a></li>
		</ul>

		<section class="title-group">
			<figure>
  		  <img src="/images/cone.png" alt="cone" width="73" height="83" />
  		</figure>
			<h1 class="large">VLC Media Player 2.1.2</h1>
			<h2>A highly portable and popular multimedia player for multiple audio and video formats.</h2>
		</section>
		<section id="product_info" class="clearfix">
		  <div class="product-wrapper">
  		  <div class="product-details">
          <div class="developer"><div class="items"><label>Developer:</label></div><div class="item"><a href="#">UltraRech Internet Corp.</a></div></div>
          <div class="last-updated"><div class="items"><label>Last Updated:</label></div><div class="item"> December 23, 2013</div></div>
          <div class="license"><div class="items"><label>License:</label></div><div class="item">Freeware</div></div>
          <div class="os-support"><div class="items"><label>OS Support:</label></div><div class="item">Windows (all)</div></div>
          <div class="file-size"><div class="items"><label>File size:</label></div><div class="item">1.9MB</div></div>
          <div class="downloads"><div class="items"><label>Downloads:</label></div><div class="item">121,131</div></div>
          <div class="last-week"><div class="items"><label>Last week:</label></div><div class="item"> 7,259</div></div>
          <div class="user-rating"><div class="items"><label>User Rating:</label></div><div class="item"> (228 votes)</div></div>
  		  </div>
  		  <div class="download-product">
          <div class="download-wrapper clearfix">
            <div class="download-link"><a href="#" class="download">Download</a></div>
            <div class="facebook-like"><a href="#" class="fb-like"></a></div>
          </div>
          <div class="mirror-wrapper clearfix">
            <ul class="inline">
            	<li><a href="#"><span></span>Mirror #1</a></li>
				<li><a href="#"><span></span>Mirror #2</a></li>
            </ul>
          </div>

          <div class="google-ads">
            <figure> <img src="/images/tmp/google-ads.png"  width="270" height="78" /></figure>
          </div>

  		  </div>
		  </div>
		</section>
	</div><!-- /.wrapper -->
</hgroup>


<section id="content">
	<div class="wrapper">

		<div class="col-2-3">
		<div class="wrapperMobileOnly">
			<article>
			  <section class="slide-sort-selector menu-items">
				<nav class="post-type-selector">
					<ul>
						<li class="indicator"></li>
						<li class="active" id="pub-description" slider="pub-desc"><a href="#">Publisher's Description</a></li>
						<li id="similar-soft" slider="sim-soft"><a href="#">Similar Software</a><span class="number">10</span></li>
					</ul>
				</nav>
				<div class="clearfix"></div>	
			  </section>
			  <!--<div class="article-menu pub-description">
			    <div class="menu-items"><a id="pub-description" class="active" href="#" slider="pub-desc">Publisher's Description</a><a id="similar-soft" href="#" slider="sim-soft">Similar Software</a><span class="number">10</span></div>-->
			  <div id="pub-desc" class="ps-item publisher-description">
			    <p>With a new audio core, hardware decoding and encoding, port to mobile platforms, preparation for Ultra-HD video and a special care to support more formats, 2.1 is a major upgrade for VLC  Rincewind has a new rendering pipeline for audio, with better effiency, volume and device management, to improve VLC audio support.</p>



			  </div>
			  <div id="sim-soft" class="ps-item similar-software hide">
				  <p> Similar software</p>
			  </div>
			</article>
			</div>
		</div><!-- /.col-2-3 -->

		<aside id="sidebar" class="right">
			<img src="images/tmp/ad-le-web.jpg" alt="ad-le-web" width="300" height="250" style="margin-bottom: 50px;" />

			<?php include("_inc/blocks/_downloads.php"); ?>

			<?php include("_inc/blocks/_forums.php"); ?>

		</aside><!-- /#sidebar -->
		<div class="clearfix"></div>
	</div><!-- /.wrapper -->
</section><!-- /#content -->

<?php include("_inc/_footer.php"); ?>
