const openMenuButton = document.querySelector(".main-nav__menu-icon--open");
const closeMenuButton = document.querySelector(".main-nav__menu-icon--close");
const toggle = document.querySelector(".main-nav__toggle");
const showMenu = document.querySelector(".main-nav__list");

// Работа кнопки меню в mobile и tablet режимах

toggle.addEventListener("click", function () {
  showMenu.classList.toggle("main-nav__display-off");
  openMenuButton.classList.toggle("main-nav__display-on");
  closeMenuButton.classList.toggle("main-nav__display-on");
});
