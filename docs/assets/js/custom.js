const setFirstScreenPadding = function() {
  const firstScreenBlock = document.querySelector('.first-screen_title-block');
  var headerHeight = document.getElementById('header-height').clientHeight;
  firstScreenBlock.style.paddingTop = (headerHeight + 60)+'px';
}
setFirstScreenPadding();
window.addEventListener("resize", setFirstScreenPadding);

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
  if (redCoral) followCursor(redCoral, -20, -16, 1)
  if (yelowCoral) followCursor(yelowCoral, -21, -17, -1)
  if (starYelowCoral) followCursor(starYelowCoral, -18, -22, -1)
  if (starRedCoral) followCursor(starRedCoral, -17, -21, 1)

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


// parallax

var rellax = new Rellax ('.paralax', {
  center: true,
});

// accordion

const instalAccordion = function() {
  const accordions = document.querySelectorAll('.accordion');
  accordions.forEach(accordion => {
    const accordionItems = accordion.querySelectorAll('.accordion-item');
    accordionItems.forEach(accordionTool => {
      const accordionTitle = accordionTool.querySelector('.accordion-title');
      accordionTitle.addEventListener("click", function() {
        if(accordionTool.classList.contains('active')) {
          accordionTool.classList.remove('active');
        }else{
          const accordionItemActive = accordion.querySelector('.accordion-item.active');
          if(accordionItemActive) {
            accordionItemActive.classList.remove('active');
          }
          accordionTool.classList.add('active');
        }
      });
    });
  });

}

instalAccordion();

const openMobileMenu = function() {
  const headerMobileClose = document.querySelector('.header');
  const openBtn = document.querySelector('.btn-open');
  openBtn.addEventListener("click", function() {
    
    if(headerMobileClose.classList.contains('open')) {
      headerMobileClose.classList.remove('open');
    }else{
      const headerMobileOpen = document.querySelector('.header.open');
      if(headerMobileOpen) {
        headerMobileOpen.classList.remove('open');
      }
      headerMobileClose.classList.add('open');
    }
  })
}
openMobileMenu();
