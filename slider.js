const log = console.log;
const slider = document.querySelector(".slider");
const before = document.querySelector(".img-before");
const after = document.querySelector(".img-after");
const imgContainer = document.querySelector(".img-container");

imgContainer.addEventListener("pointermove", e => {
  let xPos = e.layerX;
  let containerSize = imgContainer.offsetWidth;
  after.style.width = xPos + "px";
  slider.style.left = xPos + "px";
  before.style.width = "100%";
  if (xPos > containerSize - 5) {
    after.style.width = 0;
    slider.style.left = 0;
  }
});