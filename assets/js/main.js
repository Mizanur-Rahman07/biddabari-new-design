
// ----------------- Single slick slide start ------------//
$(document).ready(function(){
    $('.free-course-banner').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-arrow-right"></i></button>'
    });
});
// ----------------- Single slick slide end ------------//