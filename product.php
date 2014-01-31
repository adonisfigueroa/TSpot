<?php 
	global $body_classes;
	$body_classes = array('interior','product');
	require_once("_inc/_header.php");
?>


<div class="cta grey top-ad">
	<div class="wrapper">
		<img src="images/tmp/cta1.jpg" alt="cta1" width="970" height="90" />
	</div><!-- /.wrapper -->
</div><!-- /.cta -->

<hgroup>
	<div class="wrapper">
		<ul class="category-chicklets">
			<li class="electronics"><a href="#">Electronics</a></li>
			<li class="hardware"><a href="#">Hardware</a></li>
		</ul>
		
		<section class="title-group">
			<h1 class="large">GoPro Hero 3 Plus</h1>
		</section>
	</div><!-- /.wrapper -->
</hgroup>

<section id="product_info">
  <div class="wrapper">
    <figure>
      <img src="/images/product-photo.jpg" alt="product-photo" width="663" height="453" />
    </figure>
    
    <div class="product-desc">
      <div class="score" itemprop="review" itemscope="" itemtype="http://data-vocabulary.org/Review-aggregate">
				<div class="number average">
											<meta itemprop="rating" content="3.55">71									</div>
				<div class="breakdown">
											Based on <a href="#reviews" class="anchor_slide"><span itemprop="count">53</span> reviews</a>
										<ul>
						<li>
							<h5>Excellent:</h5>
							<div class="bar">
								<div class="excellent" style="width: 36.842105263158%"></div>
							</div>
							<div class="count">7</div>
						</li>
						<li>
							<h5>Good:</h5>
							<div class="bar">
								<div class="good" style="width: 98%"></div>
							</div>
							<div class="count">19</div>
						</li>
						<li>
							<h5>Average:</h5>
							<div class="bar">
								<div class="average" style="width: 63.157894736842%"></div>
							</div>
							<div class="count">12</div>
						</li>
						<li>
							<h5>Bad:</h5>
							<div class="bar">
								<div class="bad" style="width: 78.947368421053%"></div>
							</div>
							<div class="count">15</div>
						</li>
					</ul>
				</div>
			</div>
      
      <div class="pros">
        <h3>Pros:</h3>
        <ul>
          <li>Improved image quality over Hero3+</li>
          <li>Improved battery life</li>
          <li>Superview mode</li>
        </ul>
      </div>
      
      <div class="cons">
        <h3>Cons:</h3>
        <ul>
          <li>Relatively expersive</li>
          <li>External mic requires USB adapter</li>
        </ul>
      </div>
      
      <nav>
        <ul>
          <li><a href="#">See more <span class="blue">Pros</span> &amp; <span class="red">Cons</span></a></li>
          <li><a href="#">See all reviews</a></li>
        </ul>
      </nav>
      
    </div>
    <div class="clearfix"></div>
  </div><!-- /.wrapper -->
</section>

<section id="content">
	<div class="wrapper">
		
		<div class="col-2-3">
			<article>
				<div class="col-1-2 wide-gut">
  				<h3 class="section-header blue"><a href="#"><span>Editors</span> Liked</a></h3>
  				<ul class="pros">
    				<li>Porta Condimentum Pharetra Inceptos Cras</li>
    				<li>Porta Condimentum Pharetra Inceptos Cras</li>
    				<li>Porta Condimentum Pharetra Inceptos Cras</li>
    				<li>Porta Condimentum Pharetra Inceptos Cras</li>
    				<li>Porta Condimentum Pharetra Inceptos Cras</li>
  				</ul>
				</div>
				
				<div class="col-1-2-last wide-gut cons">
  				<h3 class="section-header red"><a href="#"><span>Editors</span> Didn't Like</a></h3>
          <ul class="cons">
    				<li>Porta Condimentum Pharetra Inceptos Cras</li>
    				<li>Porta Condimentum Pharetra Inceptos Cras</li>
    				<li>Porta Condimentum Pharetra Inceptos Cras</li>
    				<li>Porta Condimentum Pharetra Inceptos Cras</li>
    				<li>Porta Condimentum Pharetra Inceptos Cras</li>
  				</ul>
				</div>
						
				<div class="clearfix"></div>	
				
				<a href="#" class="wide-button">Show more...</a>
			</article>
			
			<section class="also-looked-at">
  			<h3>People researching this <span>product</span> also looked at...</h3>
  			<ul class="teaser-list">
  				<li>
  					<a href="#">
  						<span class="img-wrap" style="background-image: url(images/tmp/osx.jpg);">
                <span class="rating bad">62</span>
  						</span>
  						<h3>Apple iPhone 5s Review it's better than you think</h3>
  					</a>
  				</li>
  				<li>
  					<a href="#">
  						<span class="img-wrap" style="background-image: url(images/tmp/osx.jpg);">
  						  <span class="rating good">69</span>
  						</span>
  						<h3>Apple iPhone 5s Review it's better than you think</h3>
  					</a>
  				</li>
  				<li>
  					<a href="#">
  						<span class="img-wrap" style="background-image: url(images/tmp/osx.jpg);">
  						  <span class="rating excellent">60</span>
  						</span>
  						<h3>Apple iPhone 5s Review it's better than you think</h3>
  					</a>
  				</li>
  				<li>
  					<a href="#">
  						<span class="img-wrap" style="background-image: url(images/tmp/osx.jpg);">
  						  <span class="rating average">60</span>
  						</span>
  						<h3>Apple iPhone 5s Review it's better than you think</h3>
  					</a>
  				</li>
				</ul>
  			<div class="clearfix"></div>
			</section>
			
			<section class="expert-reviews-and-ratings">
  			<h3>Expert reviews and ratings</h3>
  			
  			<?php for($i=0; $i<5; $i++) : ?>
        <div class="comment">
          
          <cite>
            By <a href="#" class="user">The Verge</a> on <time>December 06, 2013</time>
          </cite>
          
          <span class="rating bad">62</span>
          
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
        </div><!-- /.comment -->
        <?php endfor; ?>
  			
  			<a href="#" class="wide-button">Show more...</a>
  			
			</section>
			
		</div><!-- /.col-2-3 -->
		
		<aside id="sidebar" class="right">
			<img src="images/tmp/ad-le-web.jpg" alt="ad-le-web" width="300" height="250" style="margin-bottom: 50px;" />
			
			<h3 class="section-header orange" style="font-size: 1.5em;"><a href="#"><span>Also In </span>Camcorders</a></h3>
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
			
		</aside><!-- /#sidebar -->
		<div class="clearfix"></div>
	</div><!-- /.wrapper -->
</section><!-- /#content -->

<?php include("_inc/_footer.php"); ?>