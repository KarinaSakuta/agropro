$(document).ready(function () {

    // burger

    $('.burger-opener').on('click', function () {
        $('.burger-menu').toggleClass('show');
        $('.town-wrap-burger').show();
        $('.nav-burger').show();
        $('.contacts-burger').show();
    });

    $('.main-menu__link').on('click', function () {
        $(this).addClass('active');
    });

    $('.load-more__btn').on('click', function () {
        $('.match-hidden').show();
    });
    
});

jQuery(function () {
    initSlickCarousel();
});

// slick init
function initSlickCarousel() {
    jQuery('.feedback-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: false,
        arrows: true,
        infinite: true,
        // autoplay: true,
        focusOnSelect: true
    });

    jQuery('.product-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: true,
        arrows: true,
        infinite: true,
        // autoplay: true,
        focusOnSelect: true
    });

    // jQuery('.restaurant-slider').slick({
    //     dots: false,
    //     arrows: true,
    //     infinite: true,
    //     // autoplay: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     focusOnSelect: true,
    //     responsive: [
    //     {
    //         breakpoint: 1600,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 1
    //         }
    //     }, 
    //     {
    //         breakpoint: 1024,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1
    //         }
    //     }, 
    //     ]
    // });
}