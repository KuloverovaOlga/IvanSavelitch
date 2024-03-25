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
  try {
    latestNews();
  } catch {}
  try {
    aboutOurFarm();
  } catch {}
});

let durationScroll = 3;

function animateHeader() {
  let header = document.querySelector('.header');
  const nav = header.querySelector('.header__nav');
  const btnBox = header.querySelector('.header__btn-box');
  const logo = header.querySelector('.header__logo');

  const tl = gsap.timeline();

  let duration = 3;

  if (!header.classList.contains('header--stub') && !header.classList.contains('header--main')) {
    nav.style.opacity = 0;
    btnBox.style.opacity = 0;
    logo.style.opacity = 0;
    tl.from(nav, {
      duration: duration,
      ease: 'power2.inOut',
      keyframes: {
        '0%': { y: '-100', opacity: 0 },
        '90%': { y: '5', opacity: 1 },
        '100%': { y: '0' }
      }
    })
      .from(
        btnBox,
        {
          duration: duration,
          ease: 'power2.inOut',
          keyframes: {
            '0%': { y: '-100', opacity: 0 },
            '90%': { y: '5', opacity: 1 },
            '100%': { y: '0' }
          }
        },
        `-=${duration}`
      )
      .from(
        logo,
        {
          duration: duration,
          ease: 'power2.inOut',
          keyframes: {
            '0%': { y: '-100', opacity: 0 },
            '90%': { y: '5', opacity: 1 },
            '100%': { y: '0' }
          }
        },
        `-=${duration}`
      );
  } else if (header.classList.contains('header--main')) {
    nav.style.opacity = 0;
    btnBox.style.opacity = 0;
    tl.from(nav, {
      duration: duration,
      ease: 'power2.inOut',
      keyframes: {
        '0%': { y: '-100', opacity: 0 },
        '90%': { y: '5', opacity: 1 },
        '100%': { y: '0' }
      }
    }).from(
      btnBox,
      {
        duration: duration,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { y: '-100', opacity: 0 },
          '90%': { y: '5', opacity: 1 },
          '100%': { y: '0' }
        }
      },
      `-=${duration}`
    );
  }
}

function animateFooter() {
  const footer = document.querySelector('.footer');
  const footerSvgWrapper = footer.querySelector('.footer__svg-wrapper');
  const footerSvgBox = footer.querySelector('.footer__svg-box');

  if (!footer.classList.contains('.footer--stub') && footer) {



  let first = true;
  function handleFirstScroll() {
    if (first) {
      footer.style.opacity = '1';
      gsap.to(window, { duration: durationScroll, scrollTo: '#footer' });
      gsap
        .timeline()
        .from(footerSvgWrapper, { x: '-100', duration: 1.5, ease: 'linear' })
        .from(footerSvgBox, { width: 0, duration: 1.5, ease: 'linear' }, `-=1.5`);
    }
    first = false;
  }

  ScrollTrigger.matchMedia({
    '(prefers-reduced-motion: no-preference)': function () {
      ScrollTrigger.create({
        trigger: footer,
        start: window.screen.width > 768 ? 'top 60%' : 'top 90%',
        toggleActions: 'play pause resume reverse',
        onEnter: () => handleFirstScroll()
      });
    }
  });
}
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
    allowTouchMove: false,
    speed: speed,
    loop: true,
    spaceBetween: rem(2),
    slidesPerView: 1,
    centeredSlides: false,
    breakpoints: {
      768: {
        spaceBetween: rem(48),
        slidesPerView: 2.75,
        centeredSlides: true
      }
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

  // section.style.opacity = 0;

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

  let duration = 3;
  const tl = gsap.timeline();
  // setTimeout(() => {
  // section.style.opacity = 1;
  // tl.from(title, { scale: '0', duration: duration, ease: 'Ease-in-out' })
  //   .from(bg, { x: '-=300', y: '+=500', duration: duration, ease: 'Ease-in-out' }, `-=${duration}`)
  //   .from(link, { scale: '0', y: '+=150', duration: duration, ease: 'Ease-in-out' }, `-=${duration}`)
  //   .from(favorite, { x: '+=100%', duration: duration, ease: 'Ease-in-out' }, `-=${duration}`)
  //   .from(titleBox, { x: '-=100%', duration: duration, ease: 'Ease-in-out' }, `-=${duration}`)
  //   .from(swiperBtnBox, { x: '-=100%', duration: duration, ease: 'Ease-in-out' }, `-=${duration}`)
  //   .from(
  //     center,
  //     { scale: '0', y: '+=150', x: '+=80', duration: duration, ease: 'Ease-in-out' },
  //     `-=${duration}`
  //   )
  //   .from(thumbActive, { y: '+=250', x: '+=100', duration: 0.3, ease: 'Ease-in-out' }, `-=${duration}`)
  //   .from(thumbNext, { y: '+=250', x: '+=100', duration: 0.5, ease: 'Ease-in-out' }, `-=${duration}`)
  //   .from(
  //     thumbNextNext,
  //     { y: '+=250', x: '+=100', duration: duration, ease: 'Ease-in-out' },
  //     `-=${duration}`
  //   );
  // }, 200);

  tl.from(title, {
    duration: duration,
    ease: 'power2.inOut',
    keyframes: {
      '0%': { scale: '0', opacity: 0 },
      '90%': { scale: '1.05', opacity: 1 },
      '100%': { scale: '1' }
    }
  })
    .from(
      bg,
      {
        duration: duration,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { x: '-200', y: '400', opacity: 0 },
          '90%': { x: '40', y: '40', opacity: 1 },
          '100%': { x: '0', y: '0' }
        }
      },
      `-=${duration}`
    )
    .from(
      link,
      {
        duration: duration,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { scale: '0', y: '150', opacity: 0 },
          '90%': { scale: '1.05', y: '-5', opacity: 1 },
          '100%': { scale: '1', y: 0 }
        }
      },
      `-=${duration}`
    )
    .from(
      favorite,
      {
        duration: duration,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { x: '+=400', opacity: 0 },
          '90%': { x: '-5', opacity: 1 },
          '100%': { x: '0' }
        }
      },
      `-=${duration}`
    )
    .from(
      titleBox,
      {
        duration: duration,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { x: '-=400', opacity: 0 },
          '90%': { x: '+5', opacity: 1 },
          '100%': { x: '0' }
        }
      },
      `-=${duration}`
    )
    .from(
      swiperBtnBox,
      {
        duration: duration,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { x: '-=400', opacity: 0 },
          '90%': { x: '+5', opacity: 1 },
          '100%': { x: 0 }
        }
      },
      `-=${duration}`
    )
    .from(
      center,
      {
        duration: duration,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { scale: '0', y: '+=150', x: '+=80', opacity: 0 },
          '90%': { scale: '1.015 ', y: 0, x: 0, opacity: 1 },
          '100%': { scale: '1', y: 0, x: 0 }
        }
      },
      `-=${duration}`
    )
    .from(
      thumbActive,
      {
        duration: 2.8,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { y: '+=150', x: '+=50', opacity: 0 },
          '50%': { y: '-15', x: '0', opacity: 1 },
          '100%': { y: '0', x: '0' }
        }
      },
      `-=${duration}`
    )
    .from(
      thumbNext,
      {
        duration: 2.9,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { y: '+=150', x: '+=50', opacity: 0 },
          '50%': { y: '-15', x: '0', opacity: 1 },
          '100%': { y: '0', x: '0' }
        }
      },
      `-=${duration}`
    )
    .from(
      thumbNextNext,
      {
        duration: duration,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { y: '+=150', x: '+=50', opacity: 0 },
          '50%': { y: '-15', x: '0', opacity: 1 },
          '100%': { y: '0', x: '0' }
        }
      },
      `-=${duration}`
    );
}

function aboutOurFarm() {
  let title = document.querySelector('.about-our-farm__title');
  let leavesLeft = document.querySelector('.about-our-farm__title-img-box--left');
  let leavesRight = document.querySelector('.about-our-farm__title-img-box--right');
  let list = document.querySelector('.about-our-farm__standard-list');
  let info = document.querySelector('.about-our-farm__content-info-box');
  let num = document.querySelector('.about-our-farm__content-num-box');
  let fav = document.querySelector('.about-our-farm__content-favorite-box');
  let img = document.querySelector('.about-our-farm__img-box');
  let link = document.querySelector('.about-our-farm__link');

  title.style.opacity = '0';
  leavesLeft.style.opacity = '0';
  leavesRight.style.opacity = '0';
  list.style.opacity = '0';
  info.style.opacity = '0';
  num.style.opacity = '0';
  fav.style.opacity = '0';
  img.style.opacity = '0';
  link.style.opacity = '0';

  let section = document.querySelector('#about-our-farm');
  let first = true;
  let duration = 3;

  function handleFirstScroll() {
    if (first) {
      gsap.to(window, {
        duration: durationScroll,
        scrollTo: '#about-our-farm'
      });

      // gsap
      //   .timeline(    {

      //   })
      //   .from(title, { x: '-=15%', y: '+=100%', duration: duration, ease: 'Ease-in-out' })
      //   .from(
      //     img,
      //     { x: '+=15%', y: '+=10%', scale: 0.5, duration: duration, ease: 'Ease-in-out' },
      //     `-=${duration}`
      //   )
      //   .from(link, { x: '+=15%', scale: 0.8, duration: duration, ease: 'Ease-in-out' }, `-=${duration}`)
      //   .from(list, { x: '-=30%', y: '+=60%', duration: duration, ease: 'Ease-in-out' }, `-=${duration}`)
      //   .from(leavesLeft, { x: '-=100%', duration: duration, ease: 'Ease-in-out' }, `-=${duration}`)
      //   .from(leavesRight, { x: '+=100%', duration: duration, ease: 'Ease-in-out' }, `-=${duration}`)
      //   .from(info, { x: '-=30%', scale: 0.8, duration: duration, ease: 'Ease-in-out' }, `-=${duration}`)
      //   .from(
      //     num,
      //     { x: '+=30%', y: '+=10%', scale: 0.8, duration: duration, ease: 'Ease-in-out' },
      //     `-=${duration}`
      //   )
      //   .from(fav, { x: '+=30%', scale: 0.8, duration: duration, ease: 'Ease-in-out' }, `-=${duration}`);
      // first = false;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top center'
          }
        })
        .from(title, {
          duration: duration,
          ease: 'power2.inOut',
          keyframes: {
            '0%': { x: '-100', y: '200', opacity: 0 },
            '90%': { x: '0', y: '-15', opacity: 1 },
            '100%': { y: '0', x: '0' }
          }
        })
        .from(
          img,
          {
            duration: duration,
            ease: 'power2.inOut',
            keyframes: {
              '0%': { x: '150', y: '100', scale: 0.5, opacity: 0 },
              '90%': { y: '0', x: '0', scale: 1.05, opacity: 1 },
              '100%': { y: '0', x: '0', scale: 1 }
            }
          },
          `-=${duration}`
        )
        .from(
          link,
          {
            duration: duration,
            ease: 'power2.inOut',
            keyframes: {
              '0%': { x: '80', scale: 0.8, opacity: 0 },
              '90%': { x: '0', scale: 1.05, opacity: 1 },
              '100%': { x: '0', scale: 1 }
            }
          },
          `-=${duration}`
        )
        .from(
          list,
          {
            duration: duration,
            ease: 'power2.inOut',
            keyframes: {
              '0%': { x: '-20', y: '60', opacity: 0 },
              '90%': { x: '15', y: '-6', opacity: 1 },
              '100%': { y: '0', x: '0' }
            }
          },
          `-=${duration}`
        )
        .from(
          leavesLeft,
          {
            duration: duration,
            ease: 'power2.inOut',
            keyframes: {
              '0%': { x: '-400', opacity: 0 },
              '90%': { x: '15', opacity: 1 },
              '100%': { x: '0' }
            }
          },
          `-=${duration}`
        )
        .from(
          leavesRight,
          {
            duration: duration,
            ease: 'power2.inOut',
            keyframes: {
              '0%': { x: '400', opacity: 0 },
              '90%': { x: '15', opacity: 1 },
              '100%': { x: '0' }
            }
          },
          `-=${duration}`
        )
        .from(
          info,
          {
            duration: duration,
            ease: 'power2.inOut',
            keyframes: {
              '0%': { x: '-300', scale: 0.8, opacity: 0 },
              '90%': { x: '15', scale: 1.05, opacity: 1 },
              '100%': { x: '0', scale: 1 }
            }
          },
          `-=${duration}`
        )
        .from(
          num,
          {
            duration: duration,
            ease: 'power2.inOut',
            keyframes: {
              '0%': { x: '300', y: '100', scale: 0.8, opacity: 0 },
              '90%': { x: '0', y: '0', scale: 1.05, opacity: 1 },
              '100%': { x: '0', y: '0', scale: 1 }
            }
          },
          `-=${duration}`
        )
        .from(
          fav,
          {
            duration: duration,
            ease: 'power2.inOut',
            keyframes: {
              '0%': { x: '300', scale: 0.8, opacity: 0 },
              '90%': { x: '15', scale: 1.05, opacity: 1 },
              '100%': { scale: 1, x: '0' }
            }
          },
          `-=${duration}`
        );
      first = false;
    }
  }

  ScrollTrigger.matchMedia({
    '(prefers-reduced-motion: no-preference)': function () {
      ScrollTrigger.create({
        trigger: '.about-our-farm',
        start: window.screen.width > 768 ? 'top 80%' : 'top 60%',
        toggleActions: 'play pause resume reverse',
        onEnter: () => handleFirstScroll()
      });
    }
  });

  const favoriteBtns = document.querySelector('.about-our-farm__content-favorite-btn');
  favoriteBtns.addEventListener('click', () => {
    favoriteBtns.classList.toggle('active');
  });
}

function latestNews() {
  const swiper = new Swiper('.latest-news__swiper', {
    allowTouchMove: true,
    speed: 1000,
    loop: true,
    spaceBetween: rem(2),
    slidesPerView: 1,
    breakpoints: {
      768: {
        spaceBetween: rem(2),
        slidesPerView: 4,
        allowTouchMove: false
      }
    },
    navigation: {
      nextEl: '.latest-news__swiper-btn--next',
      prevEl: '.latest-news__swiper-btn--prev'
    }
  });

  let title = document.querySelector('.latest-news__title');
  let link = document.querySelector('.latest-news__link');
  let slides = document.querySelectorAll('.latest-news__swiper-slide-inner');
  let section = document.querySelector('#latest-news');

  title.style.opacity = '0';
  link.style.opacity = '0';
  slides.forEach((slide) => (slide.style.opacity = '0'));

  let first = true;
  let duration = 3;

  function handleFirstScroll() {
    if (first) {
      gsap.to(window, {
        duration: durationScroll,
        scrollTo: { y: '#latest-news', offsetY: -rem(28) } // Прокрутка к элементу с учетом отступа
      });
      // gsap
      //   .timeline()
      //   .from(title, { x: '-=100%', duration: duration, ease: 'Ease-out' })
      //   .from(link, { x: '+=100%', duration: duration, ease: 'Ease-out' }, `-=${duration}`)
      //   .from(slides[0], { y: '+=100%', duration: duration, ease: 'Ease-in-out' }, `-=${duration + 0.6}`)
      //   .from(slides[1], { y: '+=100%', duration: duration, ease: 'Ease-in-out' }, `-=${duration + 0.4}`)
      //   .from(slides[2], { y: '+=100%', duration: duration, ease: 'Ease-in-out' }, `-=${duration + 0.2}`)
      //   .from(slides[3], { y: '+=100%', duration: duration, ease: 'Ease-in-out' }, `-=${duration}`);
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top center'
          }
        })
        .from(title, {
          duration: duration,
          ease: 'power2.inOut',
          keyframes: {
            '0%': { x: '-400', opacity: 0 },
            '90%': { x: '25', opacity: 1 },
            '100%': { x: '0' }
          }
        })
        .from(
          link,
          {
            duration: duration,
            ease: 'power2.inOut',
            keyframes: {
              '0%': { x: '400', opacity: 0 },
              '90%': { x: '-25', opacity: 1 },
              '100%': { x: '0' }
            }
          },
          `-=${duration}`
        )
        .from(
          slides[0],
          {
            duration: duration,
            ease: 'power2.inOut',
            keyframes: {
              '0%': { y: '400', opacity: 0 },
              '90%': { y: '-25', opacity: 1 },
              '100%': { y: '0' }
            }
          },
          `-=${duration + 0.4}`
        )
        .from(
          slides[1],
          {
            duration: duration,
            ease: 'power2.inOut',
            keyframes: {
              '0%': { y: '400', opacity: 0 },
              '90%': { y: '-25', opacity: 1 },
              '100%': { y: '0' }
            }
          },
          `-=${duration + 0.3}`
        )
        .from(
          slides[2],
          {
            duration: duration,
            ease: 'power2.inOut',
            keyframes: {
              '0%': { y: '500', opacity: 0 },
              '90%': { y: '-25', opacity: 1 },
              '100%': { y: '0' }
            }
          },
          `-=${duration + 0.2}`
        )
        .from(
          slides[3],
          {
            duration: duration,
            ease: 'power2.inOut',
            keyframes: {
              '0%': { y: '500', opacity: 0 },
              '90%': { y: '-25', opacity: 1 },
              '100%': { y: '0' }
            }
          },
          `-=${duration}`
        );

      first = false;
    }
  }

  ScrollTrigger.matchMedia({
    '(prefers-reduced-motion: no-preference)': function () {
      ScrollTrigger.create({
        trigger: '.latest-news',
        start: window.screen.width > 768 ? 'top 70%' : 'top 50%',
        toggleActions: 'play pause resume reverse',
        onEnter: () => handleFirstScroll()
      });
    }
  });
}

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

function animateProductionNum() {
  let first = true;
  function handleFirstScroll() {
    if (first) {
      gsap.to(window, { duration: durationScroll, scrollTo: '#production-num' });
      first = false;
    }
  }

  ScrollTrigger.matchMedia({
    '(prefers-reduced-motion: no-preference)': function () {
      ScrollTrigger.create({
        trigger: '.production-num',
        start: window.screen.width > 768 ? 'top 80%' : 'top 100%',
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
