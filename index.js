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