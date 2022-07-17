gsap.registerPlugin(ScrollTrigger);

const IntroVideoInfo = {
  totalVideoFrame: 562,
  totalVideoDuration: 4,
  currentFrame: 0,
  image: [],
  currentImage: (index) =>
    `./TestVideoFrames/2022-06-12 22-39-07converted${index
      .toString()
      .padStart(3, "0")}.jpg`,
};

const IntroVideoInfo2 = {
  totalVideoFrame: 440,
  totalVideoDuration: 7,
  currentFrame: 0,
  image: [],
  currentImage: (index) =>
    `./Dognut/Dognut${index.toString().padStart(3, "0")}.jpg`,
};

function animateVideoOnScroll(canvasID, triggerID, videoInfo) {
  const canvas = document.getElementById(canvasID);
  const trigger = document.getElementById(triggerID);
  const canvasContext = canvas.getContext("2d");

  canvas.width = screen.width;
  canvas.height = screen.height;
  for (let i = 0; i <= videoInfo.totalVideoFrame; i++) {
    const img = new Image();
    img.src = videoInfo.currentImage(i);
    videoInfo.image.push(img);
  }

  gsap.to(videoInfo, {
    currentFrame: videoInfo.totalVideoFrame,
    snap: "currentFrame",
    ease: "none",
    scrollTrigger: {
      trigger: trigger,
      start: "top bottom",
      end: "top+=" + videoInfo.totalVideoFrame * videoInfo.totalVideoDuration,
      pin: canvas,
      pinSpacing: true,
      scrub: 2,
    },
    onUpdate: render,
  });

  videoInfo.image[0].onload = render;

  function render() {
    canvasContext.drawImage(
      videoInfo.image[videoInfo.currentFrame],
      0,
      0,
      canvas.width,
      canvas.height
    );
  }
}

// Real working version of the code

// var targets = document.querySelectorAll("#tiffen_text");

// targets.forEach((target) => {
//   gsap
//     .timeline({
//       defaults: { duration: 5 },
//       scrollTrigger: {
//         trigger: target,
//         markers: true,
//         scrub: true,
//         start: "center 50%",
//         end: "bottom top",
//         pin: true,
//       },
//     })
//     .fromTo(target, { y: 300 }, { y: -300 })
//     .from(target, { opacity: 0, duration: 0.2 }, 0)
//     .to(target, { opacity: 0, duration: 0.2 }, 0.8);
// });

var targets = document.querySelectorAll("#tiffen_text");

targets.forEach((target) => {
  gsap
    .timeline({
      defaults: { duration: 5 },
      scrollTrigger: {
        trigger: target,
        markers: true,
        scrub: true,
        start: "center 50%",
        end: `bottom+=${5 * 100} top`,
        pin: true,
      },
    })
    .fromTo(target, { y: 25 }, { y: -25 })
    .from(target, { opacity: 0, duration: 2 }, 0)
    .to(target, { opacity: 0, duration: 2 }, 1);
});

animateVideoOnScroll("IntroVideo", "IntroVideo2", IntroVideoInfo);
animateVideoOnScroll("IntroVideo2", "after", IntroVideoInfo2);
