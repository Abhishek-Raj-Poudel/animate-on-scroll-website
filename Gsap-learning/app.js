// this well help the gsap core library and scrollTrigger
//work seemlessly
gsap.registerPlugin(ScrollTrigger);

//a gsap animation to go from where you are to 700px to right and that
//gets triggered when you scroll
// gsap.to(".square", {
//   x: 1000,
//   duration: 15,
//   scrollTrigger: {
//     trigger: ".othersquare",
//     start: "top center",
//     end: "top 30%",
//     //You can give it true of some number which will be
//     //the amount of time it takes to smooth our animation
//     scrub: 5,
//     // toggleActions: onStart,onLeave,onEnterAgain,onLeaveAgain
//     // toggleActions: "restart pause resume reset",
//     pin: ".square",
//     pinSpacing: true,
//     // markers: true,
//   },
// });

const timeline = gsap.timeline();

timeline
  .to(".timeline", { x: 500, duration: 3 })
  .to(".timeline", { y: 500, duration: 1 })
  .to(".timeline", { x: 0, y: 0, rotation: 360, duration: 1 });
