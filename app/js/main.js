$(function () {

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "15px",
        ratedFill: "#ffc000",
        readOnly: true,
    });

    $(".product-slider__inner").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/chevron-left.png" alt="Previous arrow"></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/chevron-right.png" alt="Next arrow"></button>',
    });

    $(".followerslist__inner").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/chevron-left.png" alt="Previous arrow"></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/chevron-right.png" alt="Next arrow"></button>',
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 300,
        prefix: "$"
    });

    $('input[type="checkbox"], select').styler();

    $('.list-btn').on('click', function () {
        // $('.product__item').addClass('list');
        $('.list-btn').addClass('active');
        $('.grid-btn').removeClass('active')
    });

    $('.grid-btn').on('click', function () {
        // $('.product__item').removeClass('list');
        $('.grid-btn').addClass('active');
        $('.list-btn').removeClass('active');
    });



    var mixer = mixitup('.products__inner-box');

});