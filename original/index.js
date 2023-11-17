'use strict'

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Scrolling functions
var prevScrollTop = document.scrollingElement.scrollTop;
document.querySelector("body").onscroll = function() {

  // Navbar disappearing
  var scrollTop = document.scrollingElement.scrollTop;
  if (scrollTop < prevScrollTop) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-15%";
  }
  prevScrollTop = scrollTop;

  // background moving slower on scroll
  var target = document.querySelector("body");
  var xvalue = "center";
  var factor = 0.5;
  var yvalue = scrollTop * factor;
  target.style.backgroundPosition = xvalue + " " + yvalue + "px";
}

let website = document.getElementById("website");
website.addEventListener("click", () => {
  window.open("https://github.com/atcupps/atcupps.github.io");
});

let icu4x = document.getElementById("icu4x");
icu4x.addEventListener("click", () => {
  window.open("https://github.com/unicode-org/icu4x");
});

let colossus = document.getElementById("colossus");
colossus.addEventListener("click", () => {
  window.open("https://github.com/atcupps/colossus_web");
});