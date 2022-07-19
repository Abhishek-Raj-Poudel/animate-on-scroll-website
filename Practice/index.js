gsap.registerPlugin(ScrollTrigger);

const demoVideo1Info = {
  videoDuration: 7,
  totalVideoFrame: 440,
  images: [],
  currentFrame: 0,
  currentImage: (index) =>
    `./Dognut/Dognut${index.toString().padStart(3, 0)}.jpg`,
};

const demoVideo2Info = {
  videoDuration: 9,
  totalVideoFrame: 562,
  images: [],
  currentFrame: 0,
  currentImage: (index) =>
    `./TestVideoFrames/2022-06-12 22-39-07converted${index
      .toString()
      .padStart(3, 0)}.jpg`,
};

animateOnScroll("demo_video1", demoVideo1Info);
animateOnScroll("demo_video2", demoVideo2Info);
