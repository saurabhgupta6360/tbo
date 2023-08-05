(function($) {
	
	"use strict";
	
	
jQuery(window).scroll(function() {
if (jQuery(this).scrollTop() > 1){  
jQuery('header').addClass("sticky");
}
else{
jQuery('header').removeClass("sticky");
}
});

	// testimonial-carousel
	if ($('.brand-slider').length) {
		$('.brand-slider').owlCarousel({
			loop:true,
			margin:6,
			nav:false,
			smartSpeed: 3000,
			autoplay: true,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},			
				1200:{
					items:5
				}

			}
		});    		
	}


	//Main Slider Carousel
	if ($('.brands_work').length) {
		$('.brands_work').owlCarousel({
			animateOut: 'fadeOut',
    		animateIn: 'fadeIn',
    		active: true,
			smartSpeed: 1000,
			autoplay: 6000,
			loop:true,
		    margin:10,
		    nav:true,
		        responsive:{
		            0:{
		                items:1
		            },
		            600:{
		                items:3
		            },
		            1000:{
		                items:4
		            }
		        }
		});    		
	}

	//Main Slider Carousel
	if ($('.awards-slider').length) {
		$('.awards-slider').owlCarousel({
			animateOut: 'fadeOut',
    		animateIn: 'fadeIn',
    		active: true,
			smartSpeed: 1000,
			autoplay: 6000,
			loop:true,
		    margin:10,
		    nav:true,
		        responsive:{
		            0:{
		                items:1
		            },
		            600:{
		                items:3
		            },
		            1000:{
		                items:4
		            },
		            1300:{
		                items:6
		            },
		        }
		});    		
	}


	
	
	

})(window.jQuery);


