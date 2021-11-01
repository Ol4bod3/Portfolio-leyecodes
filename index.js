const nav = document.querySelector("#nav");
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
