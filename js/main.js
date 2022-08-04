var elModalOpenButton = document.querySelector(".btn-menu");
var elModalOpenlink = document.querySelector(".mabile-header");


elModalOpenButton.addEventListener("click", function () {
  elModalOpenlink.classList.toggle("nav--active");
});