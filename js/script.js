(function($){
	$(document).ready(function(){
		
		// background image with jquery.backstretch.min.js
		$(".banner-image").backstretch('images/banner.jpg');

		// Fixed header
		//-----------------------------------------------
		$(window).scroll(function() {
			if (($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		$(window).load(function() {
			if (($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		// Closing navbar after clicking on the menu-item on mobile view
		if($(window).width() < 768){
			$(".main-navigation .navbar-default .navbar-nav > li > a").bind("click", function(event){
				$("#navbar-collapse-1").collapse("hide");
			});
		}

		//Scroll Spy (bootstrap for nav bar and sections)
		//-----------------------------------------------
		if($(".scrollspy").length>0) {
			$('body').scrollspy({ 
				target: '.scrollspy',
				offset: 152
			});
		}

		//Smooth Scroll to sections
		//-----------------------------------------------
		if ($(".smooth-scroll").length>0) {
			$('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						if($(window).width() > 767){
							$('html,body').animate({
								scrollTop: target.offset().top-151
							}, 1000);
						}
						// for mobile phones
						if($(window).width() < 768){
							$('html,body').animate({
								scrollTop: target.offset().top-40
							}, 1000);
						}
						return false;
					}
				}
			});
		}

		// Animations with modernizr.js and jquery.appear.js
		//-----------------------------------------------
		if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
			$("[data-animation-effect]").each(function() {
				var $this = $(this),
				animationEffect = $this.attr("data-animation-effect");
				if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
					$this.appear(function() {
						setTimeout(function() {
							$this.addClass('animated object-visible ' + animationEffect);
						}, 500);
					}, {accX: 0, accY: -130});
				} else {
					$this.addClass('object-visible');
				}
			});
		};

		//Modal
		//-----------------------------------------------
		if($(".modal").length>0) {
			$(".modal").each(function() {
				$(".modal").prependTo( "body" );
			});
		}

	}); // End document ready
})(this.jQuery);

// Google map
var myLatLng = {lat: 50.437500, lng: 30.578200};
function initMap() {
	var map = new google.maps.Map(document.getElementById("map"), {
		center: myLatLng,
		scrollwheel: false,
		zoom: 5,
		mapTypeControl: false
	});

	var styles = [
	    {
	      stylers: [
	        { hue: "#339BEB" },
	        { saturation: -10 }
	      ]
	    },{
	    //type of geographic characteristics on the map
	      featureType: "road",
	      elementType: "geometry",
	      stylers: [
	        { lightness: 100 },
	        { visibility: "simplified" }
	      ]
	    },{
	    // hide visibility of roads
	      featureType: "road",
	      elementType: "labels",
	      stylers: [
	        { visibility: "off" }
	      ]
	    },{
	      featureType: "administrative.country",
	      elementType: "geometry",
	      stylers: [
	      	 { color: "#339BEB" }
	      ]
	    }
	  ];

  	map.setOptions({styles: styles});

	// create a marker and set its position
	marker = new google.maps.Marker({
		map: map,
		animation: google.maps.Animation.DROP,
		position: myLatLng,
		title: "Kyiv",
		color: "#339BEB"
	});
	marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}