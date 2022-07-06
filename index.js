const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const introText = intro.querySelector("h1");
const testText = intro.querySelector(".test");
const rectangle = intro.querySelector(".rectangle");

const controller = new ScrollMagic.Controller();

let battle_scene = new ScrollMagic.Scene({
  duration: 15000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setPin(intro)
  .addTo(controller);

//learn more about this
const textAnimation = gsap.fromTo(
  [introText, testText],
  { opacity: 1 },
  { opacity: 0, x: 300 }
);

const rectangleAnimation = gsap.fromTo(
  rectangle,
  { x: -50, y: -300 },
  { x: 400, y: 500, rotation: 360 }
);

let text_scene = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setTween(textAnimation)
  .addTo(controller);

// let rectangle_scene = new ScrollMagic.Scene({
//   duration: 1000,
//   triggerElement: intro,
//   triggerHook: 0,
// })
//   .setTween(rectangleAnimation)
//   .addTo(controller);

//video animation

let accelamount = 0.4;
let scrollpos = 0;
let delay = 0;

battle_scene.on("update", (e) => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount; // delay

  video.currentTime = delay;
}, 100);
