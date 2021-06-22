$(function () {
  $(".menu__item").on("click", function () {
    $(".menu__item").removeClass("menu__item--active");
    $(this).toggleClass("menu__item--active");
  });
  $(".submenu__link").on("click", function () {
    $(".submenu__link").removeClass("submenu__link--active");
    $(this).toggleClass("submenu__link--active");
  });
  $('.home__select').styler();

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
});
});
