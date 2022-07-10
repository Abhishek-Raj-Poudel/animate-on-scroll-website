gsap.registerPlugin(ScrollTrigger);
// video.pause();
// video.currentTime = 0;

// let frame_count = 600;
// let offset_value = 100;

// let accelamount = 0.1;
// let delay = 0;
// let scrollpos = 0;

// ScrollTrigger.create({
//   trigger: video,
//   start: "top top",
//   end: "+=" + frame_count * offset_value,
//   onUpdate: (self) => (scrollpos = self.progress * 10),
//   pin: true,
//   scrub: 1,
//   markers: true,
// });

// setInterval(() => {
//   video.currentTime = scrollpos;
// }, 1);

const video = document.querySelector("video");

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "video",
    start: "top top",
    end: "bottom+=300% bottom",
    pin: true,
    scrub: 1,
    markers: true,
  },
});

// wait until video metadata is loaded,
//so we can grab the proper duration before adding the onscroll animation.
//Might need to add a loader for loonng videos
video.onloadedmetadata = function () {
  tl.to(video, { currentTime: video.duration });
};

// Dealing with devices
function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}
if (isTouchDevice()) {
  video.play();
  video.pause();
}
