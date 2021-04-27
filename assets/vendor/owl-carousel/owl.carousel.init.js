// Init owl carousel

(function($) {
    
    const prodCarousel = $('.product-carousel');
    
    // Product carousel
    prodCarousel.owlCarousel({
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 500,
        center: true,
        dots: false,
        dotsEach: 1,
        items: 4,
        lazyLoad: true,
        loop: true,
        responsive: {
            // breakpoint from 480 upwards
            0: {
                center: false,
                items: 1 
            },
            700: {
                items: 2
            },
            900: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        },        
    });
    
})(jQuery);