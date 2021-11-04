const nav = document.querySelector("#header");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
    console.log("scrolling down");
  }
  lastScrollY = window.scrollY;
});

hamburger.addEventListener("click", moblieMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
