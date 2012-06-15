/***
	KenBurning Slider 0.11 by Simbirsk
	
	Based on:
    Simple jQuery Slideshow Script
    Released by Jon Raasch (jonraasch.com)
***/
(function ($) {
	$.fn.kenBurning = function (options) {
		var defaults = {
			zoom : 20,
			time : 6000
		};
		var settings = $.extend(defaults, options);
		
		var zoomMax = (100 + settings.zoom) + "%";
		var zoomStepIn = (100 + (settings.zoom * 0.2)) + "%";
		var zoomStepOut = (100 + (settings.zoom * 0.8)) + "%";

		var timeStep1 = settings.time * 0.2;
		var timeStep2 = settings.time * 0.8;

		var $container = $(this);
		var animation = "in";

		$(function () {
			$container.addClass('kenburning-container');
			$.fn.kenBurning.rotate();
		    setInterval("$.fn.kenBurning.rotate()", settings.time);
		});
	
		$.fn.kenBurning.rotate = function() {
		    var $active = $container.find('img.active');
	
		    if ($active.length === 0) $active = $container.find('img:last');
	
		    // use this to pull the images in the order they appear in the markup
		    var $next =  $active.next().length ? $active.next()
		        : $container.find('img:first');
	
		    $active.addClass('last-active').removeClass('active');
	
			if (animation === "in") {
			    $next.css({
					left	:	"0",
					right	:	"auto",
			    	opacity	:	0.0,
			    	width	:	"100%"
			    })
			        .addClass('active')
			        .animate({opacity: 1.0, width: zoomStepIn}, timeStep1, "linear")
			        .animate({width: zoomMax}, timeStep2, "linear", function () {
			            $active.removeClass('last-active');
			        });
			    animation = "out";
		    } else {
				$next.css({
					left	:	"auto",
					right	:	"0",
					opacity	:	0.0,
					width	:	zoomMax
				})
				    .addClass('active')
				    .animate({opacity: 1.0, width: zoomStepOut}, timeStep1, "linear")
				    .animate({width: "100%"}, timeStep2, "linear", function () {
				        $active.removeClass('active last-active');
				    });
				animation = "in";
		    }
		}
	};
})(jQuery);