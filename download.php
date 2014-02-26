<?php
	global $body_classes;
	$body_classes = array('interior','download');
	require_once("_inc/_header.php");
?>


<div class="cta grey top-adverbox">
	<div class="wrapper">
		<img class="TopAd" src="images/tmp/cta1.jpg" alt="cta1" width="970" height="90" />
	</div><!-- /.wrapper -->
</div><!-- /.cta -->

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
            <div class="mirror"><a href="#" class="mirror-1">Mirror #1</a></div>
            <div class="mirror"><a href="#" class="mirror-2">Mirror #2</a></div>
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

          <p>It supports many new devices inputs, formats, metadata and improves most of the current ones, preparing for the next-gen codecs. Rincewind fixes around a thousand bugs, in more than 7000 commits from 140 volunteers.</p>

          <p>Audio</p>

          <ul>
          <li>Rewritten audio core, allowing better volume and device management.</li>
          <li>Rewrite of the audio modules, to adapt to the new core.</li>
          <li>Correct support for multi-channel layouts in all formats: 5.1, 6.1 and 7.1</li>
          <li>New audio outputs for Windows Vista, Android, iOS, OpenBSD and OSSv4.</li>
          <li>New remapping, gain, stereo widening, downmixing effects.</li>
          <li>Higher samplerate, precision, live configuration in the core.</li>
          <li>Numerous new audio metadata format supported.</li>
          </ul>

          <p>Video</p>
          <ul>
          <li>Port the OpenGL output to OpenGL ES.</li>
          <li>Support color conversion shaders in glsl on Android and iOS.</li>
          <li>New outputs for OpenMax IL on mobile and Decklink Blackmagic.</li>
          <li>New video outputs for iOS using OpenGL ES2.</li>
          <li>Support for deinterlacing for higher bit depth and XYZ colorspace.</li>
          <li>New anaglyph filter for side-by-side 3D.</li>
          <li>4K-ready :)</li>
          </ul>

          <p>Codecs</p>
          <ul>
          <li>Add hardware decoding for OS X using VDADecoder.</li>
          <li>Add hardware decoding for Android using MediaCodec.</li>
          <li>Add hardware decoding for GNU/Linux using VDPAU.</li>
          <li>Add hardware encoding for Windows using Intel QuickSyncVideo.</li>
          <li>Support for G2M4, MSS1, MSS2, TSCC2, CDXL, Ut, VBLE video codecs.</li>
          <li>Support for Ulead DV audio, Indeo Audio Coder, RealAudio Lossless audio.</li>
          <li>Support for SCTE-27 and complete EIA-608 subtitles.</li>
          </ul>

          <p>Formats</p>
          <ul>
          <li>Support for fragmented MP4, Wave/RF64 files.</li>
          <li>Extended metadata tags and cover art support in Ogg, AVI, MP4 and MKV.</li>
          <li>Support FLAC, Atrac, ADPCM, DV Type 1, 12bits DV audio in AVI.</li>
          <li>Extended support for AVI, MKV and MJPEG streams.</li>
          <li>Better recording of AVI and MKV format.</li>
          <li>Audio fingerprinting using AcoustID.</li>
          </ul>

          <p>Input and Devices</p>
          <ul>
          <li>Support for screen input on OSX Lion and later.</li>
          <li>Support for Microsoft Smooth Streaming, developed by Viotech.net</li>
          <li>New RTMP input module, using libavformat!</li>
          <li>Support for VNC/rfb and Remote Desktop view-only modes.</li>
          <li>Important improvements on Blu-Ray, Dash, v4l2 and HTTP inputs.</li>
          <li>New AVFoundation OS X and shm framebuffer inputs.</li>
          </ul>

          <p>For Anime fans</p>
          <ul>
          <li>New 6.1 downmixer to 5.1 and Stereo from MKV/Flac 6.1.</li>
          <li>Correct YUV->RGB color matrix in the OpenGL shaders.</li>
          <li>Improved MKV support for seeking, and resiliancy.</li>
          <li>Editions support in MKV.</li>
          <li>Better subtitles and metadata support from MKV.</li>
          <li>Various ASS subtitles improvements.</li>
          </ul>

          <p>For Mobile</p>
          <ul>
          <li>Port to Android, from 2.1 to 4.3, on ARMv6, ARMv7, x86 and MIPS.</li>
          <li>New port to iOS, from iOS 5 to 7, on all iPads and iPhones after 3GS.</li>
          <li>Partial port to WinRT, for Windows 8, 8.1 and WP8.</li>
          <li>OpenGL ES optimized outputs.</li>
          <li>Improvements of OpenMAX IL decoders, encoders and renderers.</li>
          <li>New audio, video outputs and interfaces for mobiles.</li>
          </ul>

          <p>For developers</p>
          <ul>
          <li>libVLC and most modules are now LGPLv2.1+.</li>
          <li>libVLC media framework can now be used in all types of applications.</li>
          <li>libVLC SDK packages now exists, in addition to more examples.</li>
          <li>Improved libVLC API, for better control.</li>
          <li>VLC’s web plugins now support windowless mode, for smoother integration with HTML elements.</li>
          </ul>

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
