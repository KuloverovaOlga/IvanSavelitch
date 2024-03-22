import 'inputmask';
import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';

export const modules = {};
window.$ = window.jQuery = require('jquery');
import { rem } from '../utils/constants';

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  try {
    catalogHeroSwiper();
  } catch {}
  try {
    animateHeader();
  } catch {}
  try {
    animateFooter();
  } catch {}
  try {
    mainHero();
  } catch {}
  try {
    animateProductionNum();
  } catch {}
});

let durationScroll = 1.5;

function catalogHeroSwiper() {
  const swiper = new Swiper('.catalog-hero__swiper', {
    centeredSlides: true,
    slidesPerView: 'auto',
    allowTouchMove: false,
    speed: 1000,
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
  let header = document.querySelector('.header:not(.header--stub):not(.header--main)');
  let duration = 1;

  const tl = gsap.timeline();
  tl.from(header, { y: '-85', duration: duration, ease: 'Ease-out' });

  const headerMain = document.querySelector('.header--main');
  if (headerMain) {
    const nav = headerMain.querySelector('.header__nav');
    const btnBox = headerMain.querySelector('.header__btn-box');
    nav.style.opacity = 0;
    btnBox.style.opacity = 0;
    setTimeout(() => {
      nav.style.opacity = 1;
      btnBox.style.opacity = 1;
      tl.from(nav, { y: '-100', duration: duration, ease: 'Ease-out' }, `-=${duration}`).from(
        btnBox,
        { y: '-100', duration: duration, ease: 'Ease-out' },
        `-=${duration}`
      );
    }, 200);
  }
}

function animateFooter() {
  const footerSvgWrapper = document.querySelector('.footer__svg-wrapper');
  const footerSvgBox = document.querySelector('.footer__svg-box');
  const footer = document.querySelector('footer:not(.footer--stub');

  // ScrollTrigger.create({
  //   trigger: footer,
  //   start: 'top bottom',
  //   toggleActions: 'play pause resume reverse',
  //   onEnter: (self) => {
  //     gsap.to(window, { duration: durationScroll, scrollTo: '#footer' });
  //     gsap
  //       .timeline()
  //       .from(footerSvgWrapper, { x: '-100', duration: 1.5, ease: 'linear' })
  //       .from(footerSvgBox, { width: 0, duration: 1.5, ease: 'linear' }, `-=1.5`);
  //   }
  // });


  let first = true;
  function handleFirstScroll() {
    if (first) {
      gsap.to(window, { duration: durationScroll, scrollTo: '#footer' });
          gsap
            .timeline()
            .from(footerSvgWrapper, { x: '-100', duration: 1.5, ease: 'linear' })
            .from(footerSvgBox, { width: 0, duration: 1.5, ease: 'linear' }, `-=1.5`);
        }
      first = false;
    }

  ScrollTrigger.matchMedia({
    "(prefers-reduced-motion: no-preference)": function() {
      ScrollTrigger.create({
        trigger: footer,
          start: 'top bottom',
          toggleActions: 'play pause resume reverse',
        onEnter: () => handleFirstScroll()
      });
    }
  });

}

function mainHero() {
  const favoriteBtns = document.querySelectorAll('.main-hero__favorites-swiper-slide-btn');
  favoriteBtns.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });

  let speed = 1000;

  const swiperThumb = new Swiper('.main-hero__thumb-swiper ', {
    slidesPerView: 3,
    allowTouchMove: false,
    speed: speed,
    spaceBetween: rem(1.6),
    loop: true,
    breakpoints: {
      768: {}
    },
    navigation: {
      nextEl: '.main-hero__swiper-btn--next',
      prevEl: '.main-hero__swiper-btn--prev'
    }
  });

  const swiperFavorite = new Swiper('.main-hero__favorites-swiper', {
    slidesPerView: 1,
    allowTouchMove: false,
    speed: speed,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    breakpoints: {
      768: {}
    },
    navigation: {
      nextEl: '.main-hero__swiper-btn--next',
      prevEl: '.main-hero__swiper-btn--prev'
    }
  });

  const swiperStat = new Swiper('.main-hero__stat-swiper', {
    slidesPerView: 1,
    allowTouchMove: false,
    speed: speed,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    breakpoints: {
      768: {}
    },
    navigation: {
      nextEl: '.main-hero__swiper-btn--next',
      prevEl: '.main-hero__swiper-btn--prev'
    }
  });

  const swiperLink = new Swiper('.main-hero__link-swiper ', {
    slidesPerView: 1,
    allowTouchMove: false,
    speed: speed,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    breakpoints: {
      768: {}
    },
    navigation: {
      nextEl: '.main-hero__swiper-btn--next',
      prevEl: '.main-hero__swiper-btn--prev'
    }
  });

  const swiperWeight = new Swiper('.main-hero__weight-swiper ', {
    slidesPerView: 1,
    allowTouchMove: false,
    speed: speed,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    breakpoints: {
      768: {}
    },
    navigation: {
      nextEl: '.main-hero__swiper-btn--next',
      prevEl: '.main-hero__swiper-btn--prev'
    }
  });

  const swiperTitle = new Swiper('.main-hero__title-swiper ', {
    slidesPerView: 1,
    allowTouchMove: false,
    spaceBetween: rem(1),
    speed: speed,
    loop: true,
    direction: 'vertical',

    breakpoints: {
      768: {}
    },
    navigation: {
      nextEl: '.main-hero__swiper-btn--next',
      prevEl: '.main-hero__swiper-btn--prev'
    }
  });

  const imgBoxs = document.querySelectorAll('.main-hero__center-swiper-slide-img-box');

  setTimeout(() => {
    imgBoxs.forEach((item) => {
      item.style.transition = 'opacity 0.7s, scale 1s'; // Исправлена опечатка и изменено на 'transform'
    });
  }, 0);

  const swiperCenter = new Swiper('.main-hero__center-swiper ', {
    slidesPerView: 2.75,
    allowTouchMove: false,
    speed: speed,
    spaceBetween: rem(48),
    centeredSlides: true,
    loop: true,
    breakpoints: {
      768: {}
    },
    navigation: {
      nextEl: '.main-hero__swiper-btn--next',
      prevEl: '.main-hero__swiper-btn--prev'
    }
  });

  const prevButton = document.querySelector('.main-hero__swiper-btn--prev');
  const nextButton = document.querySelector('.main-hero__swiper-btn--next');
  let isTransitioning = false;
  let activeSlide;
  let prevSlide;
  let nextSlide;

  nextButton.addEventListener('click', () => {
    if (!isTransitioning) {
      isTransitioning = true;
      activeSlide = document.querySelector(
        '.main-hero__center-swiper-slide.swiper-slide-active .main-hero__center-swiper-slide-img-box'
      );
      prevSlide = document.querySelector(
        '.main-hero__center-swiper-slide.swiper-slide-prev .main-hero__center-swiper-slide-img-box'
      );
      activeSlide.style.transformOrigin = 'left bottom';
      prevSlide.style.transformOrigin = 'center center';

      setTimeout(() => {
        isTransitioning = false;
      }, 1000); // Задержка в 1000 миллисекунд (1 секунда)
    }
  });
  prevButton.addEventListener('click', () => {
    if (!isTransitioning) {
      isTransitioning = true;
      activeSlide = document.querySelector(
        '.main-hero__center-swiper-slide.swiper-slide-active .main-hero__center-swiper-slide-img-box'
      );
      nextSlide = document.querySelector(
        '.main-hero__center-swiper-slide.swiper-slide-next .main-hero__center-swiper-slide-img-box'
      );

      activeSlide.style.transformOrigin = 'center center';
      nextSlide.style.transformOrigin = 'left bottom';
      setTimeout(() => {
        isTransitioning = false;
      }, 1000); // Задержка в 1000 миллисекунд (1 секунда)
    }
  });

  let section = document.querySelector('.main-hero');

  section.style.opacity = 0;

  let title = document.querySelector('.main-hero__title');
  let link = document.querySelector('.main-hero__link-swiper-box');
  let favorite = document.querySelector('.main-hero__favorites-swiper-box');
  let center = document.querySelector(
    '.main-hero__center-swiper-slide.swiper-slide-active .main-hero__center-swiper-slide-img-box img'
  );
  let thumbActive = document.querySelector(
    '.main-hero__thumb-swiper-slide .main-hero__thumb-swiper-slide-inner'
  );
  let thumbNext = document.querySelector(
    '.main-hero__thumb-swiper-slide.swiper-slide-next .main-hero__thumb-swiper-slide-inner'
  );
  let thumbNextNext = document.querySelector(
    '.main-hero__thumb-swiper-slide.swiper-slide-next + .swiper-slide .main-hero__thumb-swiper-slide-inner'
  );
  let titleBox = document.querySelector('.main-hero__title-swiper-wrapper-box');
  let swiperBtnBox = document.querySelector('.main-hero__swiper-btn-box');
  let bg = document.querySelector('.main-hero__bg');

  let duration = 1;
  const tl = gsap.timeline();
  setTimeout(() => {
    section.style.opacity = 1;
    tl.from(title, { scale: '0', duration: duration, ease: 'Ease-in-out' })
      .from(bg, { x: '-=300', y: '+=500', duration: duration, ease: 'Ease-in-out' }, `-=${duration}`)
      .from(link, { scale: '0', y: '+=150', duration: duration, ease: 'Ease-in-out' }, `-=${duration}`)
      .from(favorite, { x: '+=100%', duration: duration, ease: 'Ease-in-out' }, `-=${duration}`)
      .from(titleBox, { x: '-=100%', duration: duration, ease: 'Ease-in-out' }, `-=${duration}`)
      .from(swiperBtnBox, { x: '-=100%', duration: duration, ease: 'Ease-in-out' }, `-=${duration}`)
      .from(
        center,
        { scale: '0', y: '+=150', x: '+=80', duration: duration, ease: 'Ease-in-out' },
        `-=${duration}`
      )
      .from(thumbActive, { y: '+=250', x: '+=100', duration: 0.3, ease: 'Ease-in-out' }, `-=${duration}`)
      .from(thumbNext, { y: '+=250', x: '+=100', duration: 0.5, ease: 'Ease-in-out' }, `-=${duration}`)
      .from(
        thumbNextNext,
        { y: '+=250', x: '+=100', duration: duration, ease: 'Ease-in-out' },
        `-=${duration}`
      );
  }, 200);
}

function animateProductionNum() {
  // const productionNum = document.querySelector('.production-num');

  // ScrollTrigger.create({
  //   trigger: productionNum,
  //   start: 'top bottom',
  //   toggleActions: 'play pause resume reverse',
  //   onEnter: (self) => {
  //     gsap.to(window, { duration: durationScroll, scrollTo: '#production-num' });
  //   }
  // });

let first = true;
function handleFirstScroll() {
  if (first) {
    gsap.to(window, {
      duration: durationScroll,
      scrollTo: { y: "#production-num" } // Прокрутка к элементу с учетом отступа
    });
    first = false;
  }
}

ScrollTrigger.matchMedia({
  "(prefers-reduced-motion: no-preference)": function() {
    ScrollTrigger.create({
      trigger: ".production-num",
      start: "top bottom",
      toggleActions: 'play pause resume reverse',
      onEnter: () => handleFirstScroll()
    });
  }
});
}

// gsap.utils.toArray('.item').forEach(function (elem) {
//   ScrollTrigger.create({
//     trigger: elem,
//     onEnter: function () {
//       elem.classList.add('active');
//       // slideIn(elem);
//       gsap.to(window, { duration: 2, scrollTo: `#${elem.id}`});
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

//   // function slideIn(elem) {
//   //   gsap.to(elem, {
//   //     // y: '150%',
//   //     // scrollTo: {offsetY: 50},
//   //     // scale: 1,
//   //     // duration: 1.5,
//   //     // stagger: 1.5,
//   //     // overwrite: 'none',
//   //     // delay: 0
//   //   });
//   // }
// });
