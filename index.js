const intro = document.querySelector(".intro");
const video = intro.querySelector("video");

const controller = new ScrollMagic.Controller();

let battle_scene = new ScrollMagic.Scene({
  duration: 10000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setPin(intro)
  .addTo(controller);

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
  console.log("video time: " + video.currentTime);
  console.log("scroll Position: " + scrollpos);
}, 100);
