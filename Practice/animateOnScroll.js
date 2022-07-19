function animateOnScroll(canvasID, videoInfo) {
  const canvas = document.getElementById(canvasID);
  const context = canvas.getContext("2d");

  canvas.width = screen.width;
  canvas.height = screen.height;

  for (let i = 0; i <= videoInfo.totalVideoFrame; i++) {
    const img = new Image();
    img.src = videoInfo.currentImage(i);
    videoInfo.images.push(img);
  }

  gsap.to(videoInfo, {
    currentFrame: videoInfo.totalVideoFrame, //because we want to go from currentFrame of 0 to 440
    snap: "currentFrame", //because we only want a whole number
    ease: "none",
    scrollTrigger: {
      trigger: canvas,
      start: "top",
      end: `bottom+=${videoInfo.totalVideoFrame * videoInfo.videoDuration}`,
      scrub: 2,
      pin: true,
      markers: true,
    },
    onUpdate: render,
  });

  videoInfo.images[0].onload = () =>
    context.drawImage(videoInfo.images[0], 0, 0);

  function render() {
    context.drawImage(videoInfo.images[videoInfo.currentFrame], 0, 0);
  }
}
