$(function () {
  $('.reviews__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
  });

  $('.menu__btn').on('click', function() {
    $('.header-top__box-nav').toggleClass('header-top__box-nav--active');
  })

});