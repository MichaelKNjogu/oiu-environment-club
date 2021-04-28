/* Custom JavaScript */

(function($) {

    /* Sticky header */
    let prev = 0;
    let $window = $(window);
    let nav = $('.header');

    $window.on( 'scroll', function() {
        let scrollTop = $window.scrollTop();
        nav.toggleClass( 'hidden', scrollTop > prev );
        prev = scrollTop;
    });      

    /* Mobile menu */
    const menuToggle = $('.menu-toggle');
    const mobileMenu = $('.mobile-menu-container');
    const mobileUnderlay = $('.mobile-underlay');

    menuToggle.on( "click", function() {
        $(this).toggleClass("active").next().toggleClass("open");
    });

    /* Hide Mobile Menu on Resize */
    $window.on( "resize", function() {
        console.log(this.innerWidth);
        if( this.innerWidth >= 1024 ) {
            menuToggle.removeClass("is-active");
            mobileMenu.removeClass("open");  
        }
    });

    /* Hero carousel */
    const heroCarousel = $('.hero-carousel');

    heroCarousel.owlCarousel({
        dots: false,
        items: 4,
        responsive: {
            // breakpoint from 480 upwards
            0: {
                dots: true,
                items: 1 
            },
            600: {
                dots: true,
                items: 3
            },
            700: {
                dots: true,
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
    })

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
            600: {
                items: 2
            },
            700: {
                items: 2
            },
            900: {
                items: 2
            },
            1000: {
                items: 4
            },
            1200: {
                items: 5
            }
        },        
    });      

})(jQuery);