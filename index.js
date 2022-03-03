const nav = document.querySelector("#header");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
    nav.classList.remove("active");
  }
  lastScrollY = window.scrollY;
});

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  console.log(navLink[1]);
});

for (var i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", () => {
    setTimeout(() => {
      navMenu.classList.remove("active");
    }, 1);
  });
}

var cursor = document.querySelector("#cursor");
document.body.addEventListener("mousemove", function (e) {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// typed Text

// var typed = new Typed(".typed", {
//   strings: ["First sentence.", "Second sentence."],
//   typeSpeed: 30,
// });
