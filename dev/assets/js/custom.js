

var headerHeight = document.getElementById('header-height').clientHeight;
const firstScreenBlock = document.querySelector('.first-screen_title-block');

firstScreenBlock.style.paddingTop = (headerHeight + 60)+'px';

// select elements
const redCoral = document.querySelector(".red-coral");
const yelowCoral = document.querySelector(".yelow-coral");
const starYelowCoral = document.querySelector(".star_yelow-coral");
const starRedCoral = document.querySelector(".star_red-coral");

// init cursor position
let cursorPos = { x: 0, y: 0 };

// get window size
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

function setWindowSize() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
};

function mousemove(e) {
  cursorPos = { x: e.clientX, y: e.clientY } 
  initFolow();
}

function touchmove(e) {
  cursorPos = { x: e.targetTouches[0].offsetX, y: e.targetTouches[0].offsetY}
  initFolow();
}

const followCursor = (el, xRatio, yRatio, direction) => {
  const elOffset = el.getBoundingClientRect();
  const centerX = elOffset.x + elOffset.width / 2;
  const centerY = elOffset.y + elOffset.height / 2;
  const distanceLeft = Math.round(((cursorPos.x - centerX) * 100) / window.innerWidth);
  const distanceTop = Math.round(((cursorPos.y - centerY) * 100) / window.innerHeight);  
  const distance = ((distanceLeft / xRatio + distanceTop / yRatio) / 2) * direction;
  el.style.transform = `rotate(${distance}deg)`;
}

const initFolow = () => {
  if (redCoral) followCursor(redCoral, -19, -15, 1)
  if (yelowCoral) followCursor(yelowCoral, -20, -16, -1)
  if (starYelowCoral) followCursor(starYelowCoral, -16, -20, -1)
  if (starRedCoral) followCursor(starRedCoral, -15, -19, 1)

}

window.addEventListener('resize', setWindowSize);
window.addEventListener("mousemove", mousemove);
window.addEventListener("touchmove", touchmove);

const swiper = new Swiper('.my-slider', {
 
  // And if we need scrollbar
  centeredSlides:false,
  loop:false,
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
		draggable: true,
  },
});

var rellax = new Rellax ('.red-coral_paralax', {
  center: true,
});

