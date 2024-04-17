import $ from 'jquery';
import 'jquery-ui/ui/widgets/slider';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let slider = $('#range-price').slider({
  range: true,
  min: 0,
  max: 2000,
  values: [300, 1000],
  slide: function (event, ui) {
    $('#price-from').val(ui.values[0]);
    $('#price-to').val(ui.values[1]);
  }
});
$('#price-from').val(slider.slider('values', 0));
$('#price-to').val(slider.slider('values', 1));

$('#price-from').on('input', function () {
  if (Number($(this).val()) < Number($('#price-to').val())) {
    slider.slider('values', 0, $(this).val());
  }
});
$('#price-to').on('input', function () {
  if (Number($(this).val()) > Number($('#price-from').val())) {
    slider.slider('values', 1, $(this).val());
  }
});

$('.catalog_container-top--sort').find('select').selectmenu();

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  try {
    catalogHeroSwiper();
  } catch {}
});

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
