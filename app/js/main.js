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



    var mixer = mixitup('.products__inner-box');

});