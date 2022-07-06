// this well help the gsap core library and scrollTrigger
//work seemlessly
gsap.registerPlugin(ScrollTrigger);

//a gsap animation to go from where you are to 700px to right and that
//gets triggered when you scroll
gsap.to(".square", {
  x: 700,
  duration: 3,
  scrollTrigger: {
    trigger: ".square",
    start: "top center",
  },
});
