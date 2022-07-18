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

animateVideoOnScroll("IntroVideo", "IntroVideo2", IntroVideoInfo);
animateVideoOnScroll("IntroVideo2", "after", IntroVideoInfo2);
