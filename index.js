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

//Play Video ON Scroll

// const video = document.querySelector("video");

// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: "video",
//     start: "top top",
//     end: "bottom+=300% bottom",
//     pin: true,
//     scrub: 1,
//     markers: true,
//   },
// });

// // wait until video metadata is loaded,
// //so we can grab the proper duration before adding the onscroll animation.
// //Might need to add a loader for loonng videos
// video.onloadedmetadata = function () {
//   tl.to(video, { currentTime: video.duration });
// };

// // Dealing with devices
// function isTouchDevice() {
//   return (
//     "ontouchstart" in window ||
//     navigator.maxTouchPoints > 0 ||
//     navigator.msMaxTouchPoints > 0
//   );
// }
// if (isTouchDevice()) {
//   video.play();
//   video.pause();
// }

const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

canvas.width = 1158;
canvas.height = 770;

const frameCount = 147;
const currentFrame = (index) =>
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(
    index + 1
  )
    .toString()
    .padStart(4, "0")}.jpg`;

const images = [];
const airpods = {
  frame: 0,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

gsap.to(airpods, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: 0.5,
  },
  onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
});

images[0].onload = render;

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[airpods.frame], 0, 0);
}
