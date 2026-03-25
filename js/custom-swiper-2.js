const de_swiper = new Swiper('.swiper', {

  autoplay: {
     delay: 3000,
     disableOnInteraction: false
   },

  // Optional parameters
  effect: "slide", // cards, coverflow, cube, fade, flip, slide 
  slidesPerView: 1,
  loop: true,
  speed: 1200,
  mousewheel: false,
  watchSlidesProgress: true,
  parallax: true,
  spaceBetween: -1,

  // If we need pagination
   pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  watchSlidesProgress: true

});

function updateSlideBackgrounds() {
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;
  document.querySelectorAll('.swiper-inner').forEach(el => {
    const bg = isPortrait
      ? el.dataset.bgimagePortrait
      : el.dataset.bgimageLandscape;
    el.style.backgroundImage = bg;
    el.style.backgroundSize = 'cover';
    el.style.backgroundPosition = 'center';
  });
}

window.addEventListener('load', updateSlideBackgrounds);
window.addEventListener('resize', updateSlideBackgrounds);

