import Swiper from 'swiper';
import { gsap, ScrollTrigger } from 'gsap/all';

import { rem } from '../utils/constants';

window.addEventListener('DOMContentLoaded', () => {
  Swipers();

  gsap.registerPlugin(ScrollTrigger);

  document.querySelector('.item-banner__weights') && weightTabs();

  document.querySelector('.catalog-block') && catalogBannerAnimation();
});

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

const catalogBannerAnimation = () => {
  const block = document.querySelector('.catalog-block'),
    title = block.querySelector('.catalog-block__title'),
    tagsContainer = block.querySelector('.catalog-block__tags'),
    tags = tagsContainer.querySelectorAll('.catalog-block__tag'),
    slides = block.querySelectorAll('.catalog-block__slide'),
    duration = 3,
    ease = 'power2.in';

  let onVisibleFirst = true;

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: block,
      start: 'top center'
    }
  });

  if (onVisibleFirst) {
    gsap.to(window, {
      scrollTrigger: {
        trigger: block,
        start: window.screen.width > 768 ? 'top 80%' : 'top 50%'
      },
      duration,
      scrollTo: '#catalog-block'
    });

    onVisibleFirst = false;
  }

  timeline
    .from(title, {
      duration,
      ease,
      x: -500,
      keyframes: {
        '0%': { x: -500, opacity: 0 },
        '40%': { x: 25, opacity: 1 },
        '100%': { x: 0 }
      }
    })
    .from(
      slides[0],
      {
        duration,
        ease,
        y: 500,
        keyframes: {
          '0%': { y: 500, opacity: 0 },
          '40%': { y: -25, opacity: 1 },
          '100%': { y: 0 }
        }
      },
      0
    )
    .from(
      slides[1],
      {
        duration,
        ease,
        y: 500,
        keyframes: {
          '0%': { y: 500, opacity: 0 },
          '40%': { y: -30, opacity: 1 },
          '100%': { y: 0 }
        }
      },
      '<'
    )
    .from(
      slides[2],
      {
        duration,
        ease,
        y: 500,
        keyframes: {
          '0%': { y: 500, opacity: 0 },
          '40%': { y: -35, opacity: 1 },
          '100%': { y: 0 }
        }
      },
      '<'
    )
    .from(
      slides[3],
      {
        duration,
        ease,
        y: 500,
        keyframes: {
          '0%': { y: 500, opacity: 0 },
          '40%': { y: -40, opacity: 1 },
          '100%': { y: 0 }
        }
      },
      '<'
    )
    .from(
      tags[0],
      {
        duration,
        ease,
        x: -200,
        y: -500,
        opacity: 0,
        rotateZ: 0,
        keyframes: {
          '0%': { x: -200, y: -500, opacity: 0, rotateZ: 0 },
          '40%': { x: 10, y: 15, rotateZ: window.screen.width > 768 ? -9 : -10, opacity: 1 },
          '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? -9 : -10, opacity: 1 }
        }
      },
      0
    )
    .from(
      tags[1],
      {
        duration,
        ease,
        x: -200,
        y: -500,
        opacity: 0,
        rotateZ: 0,
        keyframes: {
          '0%': { x: -100, y: -500, opacity: 0, rotateZ: 0 },
          '40%': { x: 5, y: 15, rotateZ: window.screen.width > 768 ? 6 : 9, opacity: 1 },
          '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? 6 : 9, opacity: 1 }
        }
      },
      '<'
    )
    .from(
      tags[2],
      {
        duration,
        ease,
        y: -500,
        opacity: 0,
        rotateZ: 0,
        keyframes: {
          '0%': { y: -500, opacity: 0, rotateZ: 0 },
          '40%': { y: 10, rotateZ: window.screen.width > 768 ? 7 : 11, opacity: 1 },
          '100%': { y: 0, rotateZ: window.screen.width > 768 ? 7 : 11, opacity: 1 }
        }
      },
      '<'
    )
    .from(
      tags[3],
      {
        duration,
        ease,
        y: -200,
        x: -400,
        opacity: 0,
        rotateZ: 0,
        keyframes: {
          '0%': { x: -400, y: -200, opacity: 0, rotateZ: 0 },
          '40%': { x: 15, y: 5, rotateZ: window.screen.width > 768 ? 9 : 13, opacity: 1 },
          '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? 9 : 13, opacity: 1 }
        }
      },
      '<'
    )
    .from(
      tags[4],
      {
        duration,
        ease,
        y: -400,
        x: -200,
        opacity: 0,
        rotateZ: 0,
        keyframes: {
          '0%': { x: -200, y: -400, opacity: 0, rotateZ: 0 },
          '40%': { x: 10, y: 5, rotateZ: window.screen.width > 768 ? 8 : -8, opacity: 1 },
          '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? 8 : -8, opacity: 1 }
        }
      },
      '<'
    )
    .from(
      tags[5],
      {
        duration,
        ease,
        y: -400,
        x: -100,
        opacity: 0,
        rotateZ: 0,
        keyframes: {
          '0%': { x: -100, y: -400, opacity: 0, rotateZ: 0 },
          '40%': { x: 0, y: 10, rotateZ: window.screen.width > 768 ? -7 : 4, opacity: 1 },
          '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? -7 : 4, opacity: 1 }
        }
      },
      '<'
    );
};

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
};
