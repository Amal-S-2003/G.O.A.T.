var tl = gsap.timeline();
var cursor = document.getElementById("cursor");
var body = document.querySelector("body");

body.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
    ease: "back.out",
  });
});

tl.from("h1", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

tl.from("li", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.3,
});

gsap.from("#home h2", {
  scale: 0,
  transform: "translateX(-150%)",
  delay: 2.5,
  duration: 1,
});

tl.to("#banner", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    // markers: true,
    start: "bottom 80%",
    end: "top 50",
    top: "top -15%",
    scrub: 2,
  },
});

tl.from("#home p", {
  opacity: 0,
  stagger: 0.5,
  duration: 1,
});

gsap.from("#goat", {
  scale: 0,
  duration: 4,
  transform: "translateX(500%)",
});
gsap.from("#page2 #row #image", {
  x: "10",
  y: "1000",
  opacity: 0,
  scale: 0,
  stagger: 0.5,
  scrollTrigger: {
    scroller: body,
    // markers: true,
    start: "bottom 50%",
    top: "top -100%",
  },
});
gsap.from("#page2  #gallery", {
  x: "10",
  opacity: 0,
  scale: 0,
  stagger: 1.5,
  scrollTrigger: {
    scroller: body,
    // markers: true,
    start: "bottom 50%",
    top: "top -100%",
  },
});
// gsap.from("#image",{
//    x:"1000px",
//   y:"1000px",
//   scrollTrigger: {
//     trigger: "#page2",
//     scroller: "body",
//     // markers: true,
//     start: "bottom 80%",
//     end:"top 50",
//     top:"top -15%",
//     scrub:2,
//   },

// })
