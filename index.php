<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!-- Consider adding an manifest.appcache: h5bp.com/d/Offline -->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
	<meta charset="utf-8">

	<!-- 	
		Make a DNS handshake with a foreign domain, so the connection 
		goes faster when the user eventually needs to access it. 
		This works well for loading in assets (like images) from another domain, 
		or a JavaScript library from a CDN.
	-->
	<link rel="dns-prefetch" href="//ajax.googleapis.com">

	<!-- Hide page from search engines. !IMPORTANT -->
	<meta name="robots" content="noindex">

	<!-- Use the .htaccess and remove these lines to avoid edge case issues. More info: h5bp.com/b/378 -->
	<!-- 
		IE10 does not support plugins, such as Flash, in Metro Mode. 
		If your site requires plugins, you can let users know that via the 
		X-UA-Compatible meta element (requiresActiveX=true), which will prompt them to switch to Desktop Mode.
	-->
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1,requiresActiveX=true">

	<title>Atalanta</title>
	
	<!-- META -->
	<meta http-equiv="Content-Language" content="en-gb">
	<meta http-equiv="imagetoolbar" content="false">
	<meta name="MSSmartTagsPreventParsing" content="true">
	<meta name="robots" content="all">
	
	<meta name="Author" content="Adam Brewer">
	<link type="text/plain" rel="author" href="humans.txt" />
	<meta name="Copyright" content="">
	
	<meta name="description" content="A way to visualize the runs I've done over time.">
	<meta name="keywords" content="running, ultra, marathon, 100 miles, ultra running, barefoot running, barefoot">
	
	
	<!-- Mobile viewport optimized: j.mp/bplateviewport -->
	<!-- Remove 'initial-scale' to prevent mobile devices zooming-in -->
	<meta name="viewport" content="width=device-width, initial-scale=1"> 

	<link href="assets/css/reset.css" rel="stylesheet"> <!-- reset with clearfix -->
	<link href="assets/css/core.css" rel="stylesheet"> <!-- core stylesheet -->

	<script src="assets/js/libs/modernizr-2.5.min.js"></script> <!-- Always check for latest version -->

</head>
<body>

	<div id="wrapper">
			
		<header id="header">
			
			<nav id="navigation" role="navigation">
				
			</nav> <!-- #navigation -->
			
		</header> <!-- #header -->
			
		<section id="content" role="main">
			
			<article>
				
			</article>
				
		</section> <!-- #content -->
		
		<footer id="footer">
			
		</footer> <!-- #footer -->
			
	</div> <!-- #wrapper -->
	
	<script type="text/javascript" charset="utf-8">
		/*
		 * Init global object (for creating base_url methods, etc.)
		 */
		var Site = {
			basePath: "<?php echo $_SERVER['HTTP_HOST']; ?>"
		};

		var b = document.documentElement;
		b.setAttribute("data-useragent",  navigator.userAgent);
		b.setAttribute("data-platform", navigator.platform );
	</script>

	<script src="assets/js/libs/jquery-1.7.2.min.js"></script>
	<script src="assets/js/libs/underscore-min.js"></script>
	<script src="assets/js/libs/underscore.math.js"></script>
	<script src="assets/js/libs/underscore.deferred.js"></script>
	<script src="assets/js/libs/moment.js"></script>
	<script src="assets/js/libs/miso.ds.0.2.1.js"></script>
	<script src="assets/js/libs/d3.v2.js"></script>
	
	<script src="assets/js/script.js"></script>
	
</body>
</html>
