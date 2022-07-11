console.clear();

const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

canvas.width = 1920;
canvas.height = 1080;

const images = [];
const airpods = {
  frame: 0,
};

const currentLocation = window.location.pathname;
var dir = currentLocation.substring(0, currentLocation.lastIndexOf("/"));
console.log(dir);

const frameCount = 562;
//https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/
const currentFrame = (index) =>
  `${dir}/TestVideoFrames/2022-06-12 22-39-07converted${(index + 1)
    .toString()
    .padStart(3, "0")}.jpg`;

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
    markers: true,
  },
  onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
});

images[0].onload = render;

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[airpods.frame], 0, 0);
  console.log(airpods);
}
