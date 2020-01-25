$(document).ready(function () {

  var tl = gsap.timeline({ repeat: 2, repeatDelay: 1 });
  tl.to("#p1", { x: 100, duration: 1 });
  tl.to("#p2", { y: 50, duration: 1 });
  tl.to("#p3", { opacity: 0, duration: 1 });

});