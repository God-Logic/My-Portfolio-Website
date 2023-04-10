window.onload= function () {
const menu = document.querySelector(".hamburger-menu");
const close = document.querySelector(".close-icon");
const workLink = document.querySelector(".work-link");
const  aboutLink= document.querySelector(".about-link");
const contactLink= document.querySelector(".contact");
menu.onclick = function () {
document.querySelector(".mobile-menu").classList.remove("hide-menu");
document.querySelector(".mobile-menu").classList.add("show-menu");
}
close.onclick = function () {
  document.querySelector(".mobile-menu").classList.add("hide-menu");
};
workLink.onclick = function () {
  document.querySelector(".mobile-menu").classList.add("hide-menu");
};
aboutLink.onclick = function () {
  document.querySelector(".mobile-menu").classList.add("hide-menu");
};
contactLink.onclick = function () {
  document.querySelector(".mobile-menu").classList.add("hide-menu");
};
}