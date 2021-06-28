$(function () {
  $(".menu__item").on("click", function () {
    $(".menu__item").removeClass("menu__item--active");
    $(this).toggleClass("menu__item--active");
  });
  $('.home__select').styler();

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
  });

});



function addedCheckPr() {
  var element = document.getElementById("pr-span");
  element.classList.toggle("active");
}

function addedCheckCto() {
  var element = document.getElementById("cto-span");
  element.classList.toggle("active");
}




// modal open
function openModalAuthMyOrder() {
  var modalAuthMyOrder = document.getElementById("modalAuthMyOrder");
  modalAuthMyOrder.classList.toggle("active")
}
function openModalAuthMyInfo() {
  var modalAuthMyInfo = document.getElementById("modalAuthMyInfo");
  modalAuthMyInfo.classList.toggle("active")
}
function openModalAuthMyCto() {
  var modalAuthMyCto = document.getElementById("modalAuthMyCto");
  modalAuthMyCto.classList.toggle("active")
}
function openModalAuthMyPark() {
  var modalAuthMyPark = document.getElementById("modalAuthMyPark");
  modalAuthMyPark.classList.toggle("active")
}
function openModalChoiceYou() {
  var modalChoiceYou = document.getElementById("choiceWhoAreYou");
  modalChoiceYou.classList.toggle("active")
}