/* Custom JavaScript */

(function($) {

    /* Partners carousel */
    const logoCarousel = $('.partners-carousel');
    
    logoCarousel.owlCarousel({
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 500,
        dots: false,
        dotsEach: 1,
        items: 5,
        loop: true,
        lazyLoad: true,
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
                items: 5
            }
        },        
    });      

})(jQuery);