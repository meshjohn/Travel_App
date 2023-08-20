const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", () => {
  preloader.classList.add("remove");
});

/* Add event on multiple element */

const addEventOnElement = function(elements, eventType, callback) {
  for(let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType,callback);
  }
}

// Nav bar toggle for mobile 

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const home = document.querySelector(".navbar-link.home");
const overlay = document.querySelector("[data-overlay]");


const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}
addEventOnElement(navTogglers,"click", toggleNav);

/* header */
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function() {
  header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});