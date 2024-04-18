import Swiper from 'swiper';
import { gsap, ScrollTrigger } from 'gsap/all';

import { rem } from '../utils/constants';

window.addEventListener('DOMContentLoaded', () => {
  Swipers();

  gsap.registerPlugin(ScrollTrigger);

  document.querySelector('.item-banner__weights') && weightTabs();

  // document.querySelector('.catalog-block') && catalogBannerAnimation();

  // document.querySelector('.love') && loveAnimation();
});

const scrollToBlock = (block, blockId, duration) => {
  let onVisibleFirst = true;

  if (onVisibleFirst) {
    ScrollTrigger.create({
      trigger: block,
      start: window.screen.width > 768 ? 'top 70%' : 'top 50%',
      onEnter: () => {
        gsap.to(window, { scrollTo: blockId, duration: 2 });
        onVisibleFirst = false;
      }
    });
  }
};

const weightTabs = () => {
  const tabsContainer = document.querySelector('.item-banner__weights'),
    tabs = tabsContainer.querySelectorAll('.item-banner__weight');

  tabsContainer.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('item-banner__weight')) {
      tabs.forEach((tab) => {
        tab.classList.remove('active');
      });

      target.classList.add('active');
    }
  });
};

// const catalogBannerAnimation = () => {
//   const block = document.querySelector('.catalog-block'),
//     title = block.querySelector('.catalog-block__title'),
//     tagsContainer = block.querySelector('.catalog-block__tags'),
//     tags = tagsContainer.querySelectorAll('.catalog-block__tag'),
//     slides = block.querySelectorAll('.catalog-block__slide'),
//     duration = 3,
//     ease = 'power2.in';

//   const timeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: block,
//       start: 'top center'
//     }
//   });

//   scrollToBlock(block, '#catalog-block', duration);

//   timeline
//     .from(title, {
//       duration,
//       ease,
//       x: -500,
//       keyframes: {
//         '0%': { x: -500, opacity: 0 },
//         '40%': { x: 25, opacity: 1 },
//         '100%': { x: 0 }
//       }
//     })
//     .from(
//       slides[0],
//       {
//         duration,
//         ease,
//         y: 500,
//         keyframes: {
//           '0%': { y: 500, opacity: 0 },
//           '40%': { y: -25, opacity: 1 },
//           '100%': { y: 0 }
//         }
//       },
//       0
//     )
//     .from(
//       slides[1],
//       {
//         duration,
//         ease,
//         y: 500,
//         keyframes: {
//           '0%': { y: 500, opacity: 0 },
//           '40%': { y: -30, opacity: 1 },
//           '100%': { y: 0 }
//         }
//       },
//       '<'
//     )
//     .from(
//       slides[2],
//       {
//         duration,
//         ease,
//         y: 500,
//         keyframes: {
//           '0%': { y: 500, opacity: 0 },
//           '40%': { y: -35, opacity: 1 },
//           '100%': { y: 0 }
//         }
//       },
//       '<'
//     )
//     .from(
//       slides[3],
//       {
//         duration,
//         ease,
//         y: 500,
//         keyframes: {
//           '0%': { y: 500, opacity: 0 },
//           '40%': { y: -40, opacity: 1 },
//           '100%': { y: 0 }
//         }
//       },
//       '<'
//     )
//     .from(
//       tags[0],
//       {
//         duration,
//         ease,
//         x: -200,
//         y: -500,
//         opacity: 0,
//         rotateZ: 0,
//         keyframes: {
//           '0%': { x: -200, y: -500, opacity: 0, rotateZ: 0 },
//           '40%': { x: 10, y: 15, rotateZ: window.screen.width > 768 ? -9 : -10, opacity: 1 },
//           '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? -9 : -10, opacity: 1 }
//         }
//       },
//       0
//     )
//     .from(
//       tags[1],
//       {
//         duration,
//         ease,
//         x: -200,
//         y: -500,
//         opacity: 0,
//         rotateZ: 0,
//         keyframes: {
//           '0%': { x: -100, y: -500, opacity: 0, rotateZ: 0 },
//           '40%': { x: 5, y: 15, rotateZ: window.screen.width > 768 ? 6 : 9, opacity: 1 },
//           '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? 6 : 9, opacity: 1 }
//         }
//       },
//       '<'
//     )
//     .from(
//       tags[2],
//       {
//         duration,
//         ease,
//         y: -500,
//         opacity: 0,
//         rotateZ: 0,
//         keyframes: {
//           '0%': { y: -500, opacity: 0, rotateZ: 0 },
//           '40%': { y: 10, rotateZ: window.screen.width > 768 ? 7 : 11, opacity: 1 },
//           '100%': { y: 0, rotateZ: window.screen.width > 768 ? 7 : 11, opacity: 1 }
//         }
//       },
//       '<'
//     )
//     .from(
//       tags[3],
//       {
//         duration,
//         ease,
//         y: -200,
//         x: -400,
//         opacity: 0,
//         rotateZ: 0,
//         keyframes: {
//           '0%': { x: -400, y: -200, opacity: 0, rotateZ: 0 },
//           '40%': { x: 15, y: 5, rotateZ: window.screen.width > 768 ? 9 : 13, opacity: 1 },
//           '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? 9 : 13, opacity: 1 }
//         }
//       },
//       '<'
//     )
//     .from(
//       tags[4],
//       {
//         duration,
//         ease,
//         y: -400,
//         x: -200,
//         opacity: 0,
//         rotateZ: 0,
//         keyframes: {
//           '0%': { x: -200, y: -400, opacity: 0, rotateZ: 0 },
//           '40%': { x: 10, y: 5, rotateZ: window.screen.width > 768 ? 8 : -8, opacity: 1 },
//           '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? 8 : -8, opacity: 1 }
//         }
//       },
//       '<'
//     )
//     .from(
//       tags[5],
//       {
//         duration,
//         ease,
//         y: -400,
//         x: -100,
//         opacity: 0,
//         rotateZ: 0,
//         keyframes: {
//           '0%': { x: -100, y: -400, opacity: 0, rotateZ: 0 },
//           '40%': { x: 0, y: 10, rotateZ: window.screen.width > 768 ? -7 : 4, opacity: 1 },
//           '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? -7 : 4, opacity: 1 }
//         }
//       },
//       '<'
//     );
// };

// const loveAnimation = () => {
//   const block = document.querySelector('.love'),
//     titleLeft = block.querySelector('.love__title-left'),
//     titleRight = block.querySelector('.love__title-right'),
//     heart = block.querySelector('.love__heart'),
//     mainSlide = block.querySelector('.love__swiper-slide:first-child'),
//     slideBackground = block.querySelector('.love__swiper-background'),
//     sliderNavigation = block.querySelector('.love__swiper-navigation'),
//     tags = block.querySelectorAll('.love__tag'),
//     bottomLeft = block.querySelector('.love__bottom-text:first-child'),
//     bottomMiddle = block.querySelector('.love__bottom-swiper'),
//     bottomRight = block.querySelector('.love__bottom-text:last-child'),
//     duration = 3;

//   const timeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: block,
//       start: 'top center'
//     }
//   });

//   scrollToBlock(block, '#love-block', duration);

//   timeline
//     .from(titleLeft, {
//       x: -1700,
//       duration,
//       keyframes: {
//         '0%': { x: -700 },
//         '40%': { x: 25 },
//         '100%': { x: 0 }
//       }
//     })
//     .from(
//       titleRight,
//       {
//         x: 1000,
//         duration,
//         keyframes: {
//           '0%': { x: 1000 },
//           '40%': { x: -25 },
//           '100%': { x: 0 }
//         }
//       },
//       0
//     )
//     .from(
//       heart,
//       {
//         y: -300,
//         opacity: 0,
//         scale: 2,
//         duration,
//         keyframes: {
//           '0%': { y: -300, opacity: 0, scale: 2.5 },
//           '40%': { y: 25, opacity: 1, scale: 1 },
//           '100%': { y: 0, opacity: 1, scale: 1 }
//         }
//       },
//       0
//     )
//     .from(
//       mainSlide,
//       {
//         y: 100,
//         duration,
//         keyframes: {
//           0: { y: 100 },
//           '40%': { y: -15, scale: 1.1 },
//           '100%': { y: 0, scale: 1 }
//         }
//       },
//       0
//     )
//     .from(
//       slideBackground,
//       {
//         y: 100,
//         scale: 0.5,
//         duration,
//         keyframes: {
//           '0%': { y: 100, scale: 0.5 },
//           '40%': { y: -15, scale: 1 },
//           '100%': { y: 0, scale: 1 }
//         }
//       },
//       0
//     )
//     .from(
//       sliderNavigation,
//       {
//         x: -500,
//         duration,
//         keyframes: {
//           '0%': { x: 500 },
//           '40%': { x: -25 },
//           '100%': { x: 0 }
//         }
//       },
//       0
//     )
//     .from(
//       tags[0],
//       {
//         y: -500,
//         opacity: 0,
//         rotateZ: -31,
//         duration,
//         keyframes: {
//           '0%': { y: -500, opacity: 0, rotateZ: -31 },
//           '40%': { y: 10, opacity: 1, rotateZ: 1 },
//           '100%': { y: 0, opacity: 1, rotateZ: -1 }
//         }
//       },
//       0
//     )
//     .from(
//       tags[1],
//       {
//         y: -470,
//         opacity: 0,
//         rotateZ: -31,
//         duration,
//         keyframes: {
//           '0%': { y: -470, opacity: 0, rotateZ: -31 },
//           '40%': { y: 10, opacity: 1, rotateZ: 12 },
//           '100%': { y: 0, opacity: 1, rotateZ: 9 }
//         }
//       },
//       0
//     )
//     .from(
//       tags[2],
//       {
//         y: -440,
//         opacity: 0,
//         rotateZ: -31,
//         duration,
//         keyframes: {
//           '0%': { y: -440, opacity: 0, rotateZ: -31 },
//           '40%': { y: 10, opacity: 1, rotateZ: -8 },
//           '100%': { y: 0, opacity: 1, rotateZ: -8 }
//         }
//       },
//       0
//     )
//     .from(
//       bottomLeft,
//       {
//         y: 100,
//         x: -50,
//         opacity: 0,
//         duration,
//         keyframes: {
//           '0%': { y: 100, x: -50, opacity: 0 },
//           '40%': { y: -10, x: 15, opacity: 1 },
//           '100%': { y: 0, x: 0, opacity: 1 }
//         }
//       },
//       0
//     )
//     .from(
//       bottomMiddle,
//       {
//         y: 100,
//         opacity: 0,
//         duration,
//         keyframes: {
//           '0%': { y: 100, opacity: 0 },
//           '40%': { y: -10, opacity: 1 },
//           '100%': { y: 0, opacity: 1 }
//         }
//       },
//       0
//     )
//     .from(
//       bottomRight,
//       {
//         y: 100,
//         x: 50,
//         opacity: 0,
//         duration,
//         keyframes: {
//           '0%': { y: 100, x: 50, opacity: 0 },
//           '40%': { y: -10, x: -15, opacity: 1 },
//           '100%': { y: 0, x: 0, opacity: 1 }
//         }
//       },
//       0
//     );
// };

const Swipers = () => {
  const catalogBlockSwiper = new Swiper('.catalog-block__swiper', {
    slidesPerView: 1.2,
    spaceBetween: 20,
    allowTouchMove: true,

    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
        allowTouchMove: false
      }
    },

    navigation: {
      prevEl: '.catalog-block__swiper-btn--prev',
      nextEl: '.catalog-block__swiper-btn--next'
    }
  });

  const mainSwiper = new Swiper('.love__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 1000,
    effect: 'creative',

    creativeEffect: {
      prev: {
        translate: [-1000, 0, 0],
        scale: 0.1,
        opacity: 0
      },

      next: {
        translate: [1000, 0, 0],
        scale: 0.1,
        opacity: 0
      }
    },

    navigation: {
      nextEl: '.love__swiper-btn--next',
      prevEl: '.love__swiper-btn--prev'
    }
  });

  const tagsSwiper = new Swiper('.love__tags-swiper', {
    direction: 'vertical',
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 1000,
    effect: 'creative',

    creativeEffect: {
      prev: {
        translate: [-500, 0, 0],
        opacity: 0
      },

      next: {
        translate: window.screen.width > 768 ? [0, '-150%', 0] : [500, 0, 0],
        opacity: 0
      }
    },

    navigation: {
      nextEl: '.love__swiper-btn--next',
      prevEl: '.love__swiper-btn--prev'
    }
  });

  const textSwiper = new Swiper('.love__bottom-swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 1000,
    autoHeight: true,
    effect: 'creative',

    breakpoints: {
      768: {
        direction: 'vertical',
        autoHeight: false
      }
    },

    creativeEffect: {
      prev: {
        translate: window.screen.width > 768 ? [0, '-150%', 0] : [-500, 0, 0]
      },

      next: {
        translate: window.screen.width > 768 ? [0, '100%', 0] : [500, 0, 0],
        opacity: window.screen.width > 768 ? 0 : 1
      }
    },

    navigation: {
      nextEl: '.love__swiper-btn--next',
      prevEl: '.love__swiper-btn--prev'
    }
  });
};
