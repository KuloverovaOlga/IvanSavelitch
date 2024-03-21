import 'inputmask';
import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';

export const modules = {};
window.$ = window.jQuery = require('jquery');
import { rem } from '../utils/constants';

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  try {
    catalogHeroSwiper();
  } catch {}
  try {
    animateHeader();
  } catch {}
  try {
    animateFooter();
  } catch {}
});

function catalogHeroSwiper() {
  const swiper = new Swiper('.catalog-hero__swiper', {
    centeredSlides: true,
    slidesPerView: 'auto',
    allowTouchMove: false,
    speed: 1000,
    keyboard: {
      enabled: true
    },
    loop: true,
    breakpoints: {
      768: {}
    },
    navigation: {}
  });

  const prevButton = document.querySelector('.catalog-hero__swiper-btn--prev');
  const nextButton = document.querySelector('.catalog-hero__swiper-btn--next');

  let activeSlideIndex;
  let slides;
  let activeSlide;
  let prevSlide;
  let nextSlide;
  let imgBox;

  let isTransitioning = false;

  let durationStart = 0.5;
  let durationEnd = 0.3;

  nextButton.addEventListener('click', () => {
    if (!isTransitioning) {
      isTransitioning = true;
      activeSlideIndex = swiper.activeIndex;
      slides = swiper.slides;
      activeSlide = slides[activeSlideIndex];
      prevSlide = slides[activeSlideIndex - 1];
      nextSlide = slides[activeSlideIndex + 1];
      imgBox = activeSlide.querySelector('.catalog-hero__img-box img');
      gsap
        .timeline()
        .to(prevSlide, { x: '+=100', duration: durationStart, ease: 'easeInOut' })
        .to(activeSlide, { x: '+=100', duration: durationStart, ease: 'easeInOut' }, `-=${durationStart}`)
        .to(nextSlide, { x: '+=100', duration: durationStart, ease: 'easeInOut' }, `-=${durationStart}`)
        .to(imgBox, { scale: '1.1', duration: durationStart, ease: 'easeInOut' }, `-=${durationStart}`)
        .to(prevSlide, { x: '0', duration: durationEnd, ease: 'easeInOut' })
        .to(activeSlide, { x: '0', duration: durationEnd, ease: 'easeInOut' }, `-=${durationEnd}`)
        .to(nextSlide, { x: '0', duration: durationEnd, ease: 'easeInOut' }, `-=${durationEnd}`)
        .to(imgBox, { scale: '1', duration: durationEnd, ease: 'easeInOut' }, `-=${durationEnd}`);
      setTimeout(() => {
        swiper.slideNext();
        isTransitioning = false;
      }, 500);
      setTimeout(() => {
        activeSlideIndex = swiper.activeIndex;
        slides = swiper.slides;
        activeSlide = slides[activeSlideIndex];
        prevSlide = slides[activeSlideIndex - 1];
        nextSlide = slides[activeSlideIndex + 1];
        imgBox = activeSlide.querySelector('.catalog-hero__img-box img');
        gsap
          .timeline()
          .to(prevSlide, { x: '-=100', duration: durationStart, ease: 'easeInOut' })
          .to(activeSlide, { x: '-=100', duration: durationStart, ease: 'easeInOut' }, `-=${durationStart}`)
          .to(nextSlide, { x: '-=100', duration: durationStart, ease: 'easeInOut' }, `-=${durationStart}`)
          .to(imgBox, { scale: '1.1', duration: durationStart, ease: 'easeInOut' }, `-=${durationStart}`)
          .to(prevSlide, { x: '0', duration: durationEnd, ease: 'easeInOut' })
          .to(activeSlide, { x: '0', duration: durationEnd, ease: 'easeInOut' }, `-=${durationEnd}`)
          .to(nextSlide, { x: '0', duration: durationEnd, ease: 'easeInOut' }, `-=${durationEnd}`)
          .to(imgBox, { scale: '1', duration: durationEnd, ease: 'easeInOut' }, `-=${durationEnd}`);
      }, 950);
    }
  });

  prevButton.addEventListener('click', () => {
    if (!isTransitioning) {
      isTransitioning = true;
      activeSlideIndex = swiper.activeIndex;
      slides = swiper.slides;
      activeSlide = slides[activeSlideIndex];
      prevSlide = slides[activeSlideIndex - 1];
      nextSlide = slides[activeSlideIndex + 1];
      imgBox = activeSlide.querySelector('.catalog-hero__img-box img');
      gsap
        .timeline()
        .to(prevSlide, { x: '-=100', duration: durationStart, ease: 'easeInOut' })
        .to(activeSlide, { x: '-=100', duration: durationStart, ease: 'easeInOut' }, `-=${durationStart}`)
        .to(nextSlide, { x: '-=100', duration: durationStart, ease: 'easeInOut' }, `-=${durationStart}`)
        .to(imgBox, { scale: '1.1', duration: durationStart, ease: 'easeInOut' }, `-=${durationStart}`)
        .to(prevSlide, { x: '0', duration: durationEnd, ease: 'easeInOut' })
        .to(activeSlide, { x: '0', duration: durationEnd, ease: 'easeInOut' }, `-=${durationEnd}`)
        .to(nextSlide, { x: '0', duration: durationEnd, ease: 'easeInOut' }, `-=${durationEnd}`)
        .to(imgBox, { scale: '1', duration: durationEnd, ease: 'easeInOut' }, `-=${durationEnd}`);

      setTimeout(() => {
        swiper.slidePrev();
        isTransitioning = false;
      }, 500);
      setTimeout(() => {
        activeSlideIndex = swiper.activeIndex;
        slides = swiper.slides;
        activeSlide = slides[activeSlideIndex];
        prevSlide = slides[activeSlideIndex - 1];
        nextSlide = slides[activeSlideIndex + 1];
        imgBox = activeSlide.querySelector('.catalog-hero__img-box img');
        gsap
          .timeline()
          .to(prevSlide, { x: '+=100', duration: durationStart, ease: 'easeInOut' })
          .to(activeSlide, { x: '+=100', duration: durationStart, ease: 'easeInOut' }, `-=${durationStart}`)
          .to(nextSlide, { x: '+=100', duration: durationStart, ease: 'easeInOut' }, `-=${durationStart}`)
          .to(imgBox, { scale: '1.1', duration: durationStart, ease: 'easeInOut' }, `-=${durationStart}`)
          .to(prevSlide, { x: '0', duration: durationEnd, ease: 'easeInOut' })
          .to(activeSlide, { x: '0', duration: durationEnd, ease: 'easeInOut' }, `-=${durationEnd}`)
          .to(nextSlide, { x: '0', duration: durationEnd, ease: 'easeInOut' }, `-=${durationEnd}`)
          .to(imgBox, { scale: '1', duration: durationEnd, ease: 'easeInOut' }, `-=${durationEnd}`);
      }, 950);
    }
  });

  const imgBoxs = document.querySelectorAll('.catalog-hero__img-box');

  setTimeout(() => {
    imgBoxs.forEach((item) => {
      item.style.transition = 'scale 1s, opacity 1s 0.3s'; // Исправлена опечатка и изменено на 'transform'
    });
  }, 0);
}

function animateHeader() {
  const header = document.querySelector('.header:not(.header--stub)');
  const tl = gsap.timeline();
  tl.from(header, { y: '-100', duration: 1, ease: 'linear' });
}

function animateFooter() {
  const footerSvgWrapper = document.querySelector('.footer__svg-wrapper');
  const footerSvgBox = document.querySelector('.footer__svg-box');
  const footer = document.querySelector('footer:not(.footer--stub');

  ScrollTrigger.create({
    trigger: footer,
    start: 'top bottom',
    toggleActions: 'play pause resume reverse',
    onEnter: (self) => {
      gsap
        .timeline()
        .from(footerSvgWrapper, { x: '-100', duration: 1.5, ease: 'linear' })
        .from(footerSvgBox, { width: 0, duration: 1.5, ease: 'linear' }, `-=1.5`);
    }
  });
}

// gsap.registerPlugin(ScrollTrigger);
// gsap.utils.toArray('.item').forEach(function (elem) {
//   ScrollTrigger.create({
//     trigger: elem,
//     onEnter: function () {
//       elem.classList.add('active');
//       slideIn(elem);
//     },
//     onEnterBack: function () {
//       elem.classList.add('active');
//     },
//     onLeave: function () {
//       elem.classList.remove('active');
//     },
//     onLeaveBack: function () {
//       elem.classList.remove('active');
//     }
//   });
//   function slideIn(elem) {
//     gsap.from(elem, {
//       y: '150%',
//       scale: 1,
//       duration: 1.5,
//       stagger: 1.5,
//       overwrite: 'none',
//       delay: 0
//     });
//   }
// });
