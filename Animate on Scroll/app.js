gsap.registerPlugin(ScrollTrigger);
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

canvas.width = 1920;
canvas.height = 1080;

const images = [];

const video = {
  currentFrame: 0,
};

const totalVideoFrame = 562;
const videoDuration = 9;

const currentLocation = window.location.pathname;
console.log(currentLocation);
const currentDirectory = currentLocation.substring(
  0,
  currentLocation.lastIndexOf("/")
);

const currentFrame = (index) =>
  `${currentDirectory}/TestVideoFrames/2022-06-12 22-39-07converted${(index + 1)
    .toString()
    .padStart(3, "0")}.jpg`;

for (let i = 0; i < totalVideoFrame; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

gsap.to(video, {
  currentFrame: totalVideoFrame - 1,
  snap: "currentFrame",
  ease: "none",
  scrollTrigger: {
    scrub: 1,
    pin: "hero-lightpass",
    end: "+=" + totalVideoFrame * videoDuration,
    pinSpacing: true,
    markers: true,
  },
  onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
});

images[0].onload = render;

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[video.currentFrame], 0, 0);
}
