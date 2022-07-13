gsap.registerPlugin(ScrollTrigger);
const video = document.querySelector("video");
video.pause();
// video.currentTime = 0;

let totalFrame = 9 * 25;
let offsetValue = 100;

// ScrollTrigger.create({
//   trigger: video,
//   start: "top top",
//   end: "+=" + frame_count * offset_value,
//   onUpdate: video.play(),
//   pin: true,
//   scrub: true,
//   markers: true,
// });

const currentFrame = {
  frame: 0,
};

gsap.to(currentFrame, {
  frame: totalFrame - 1,
  ease: "none",
  scrollTrigger: {
    start: "top top",
    end: "+=" + totalFrame * offsetValue,
    scrub: 0.5,
    pin: video,
    markers: true,
  },
  onUpdate: render,
});

function render() {
  video.currentTime = currentFrame.frame / 25;
}

// setInterval(() => {}, 1);
