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
        responsive: [
            {
              breakpoint: 600,
              settings: {
                  arrows: false,
              }
            },
          ]
    });

    $(".followerslist__inner").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/chevron-left.png" alt="Previous arrow"></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/chevron-right.png" alt="Next arrow"></button>',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 800,
                settings: {
                  slidesToShow: 1,
                  arrows: false,
                }
              },
          ]
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 300,
        prefix: "$"
    });

    $('.product-one__tabs .tab, .settings__tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.product-one__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('.popular-latest__item .tab, .settings__tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.popular-latest__item, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.popular-latest__item .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('.price-box__check1').on('click', function(){
        $('.price-box__check2').removeClass('price-box__check--active');
        $('.price-box__check1').addClass('price-box__check--active');
    });

    $('.price-box__check2').on('click', function(){
        $('.price-box__check1').removeClass('price-box__check--active');
        $('.price-box__check2').addClass('price-box__check--active');
    });

    $('input[type="checkbox"], select').styler();

    $('.list-btn').on('click', function () {
        $('.list-btn').addClass('active');
        $('.grid-btn').removeClass('active')
    });

    $('.grid-btn').on('click', function () {
        $('.grid-btn').addClass('active');
        $('.list-btn').removeClass('active');
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    });

    $('.header__btn-menu').on('click', function () {
        $('.header__top-box').toggleClass('active');
    });

    $('.drop-down ').on('click', function(){
        $(this).children('.menu__drop-down').toggleClass('active');
      }); 

    var mixer = mixitup('.products__inner-box');

});