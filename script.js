const mobileNav = document.querySelector(".mobile-nav-list");
const showMenu = document.querySelector(".open");
const hideMenu = document.querySelector(".close");
function show() {
  mobileNav.style.right = "0";
  showMenu.style.display = "none";
  hideMenu.style.display = "block";
}
function hide() {
  mobileNav.style.right = "-100%";
  hideMenu.style.display = "none";
  showMenu.style.display = "block";
}
