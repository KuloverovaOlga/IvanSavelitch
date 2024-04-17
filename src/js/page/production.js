function animateProductionNum() {
    let first = true;
    const productionNum = document.querySelector('#production-num');
    function handleFirstScroll() {
      if (first) {
        // gsap.to(window, { duration: durationScroll, scrollTo: productionNum });
        first = false;
      }
    }
    if (productionNum) {
      ScrollTrigger.matchMedia({
        '(prefers-reduced-motion: no-preference)': function () {
          ScrollTrigger.create({
            trigger: productionNum,
            start: window.screen.width > 768 ? 'top 50%' : 'top 100%',
            toggleActions: 'play pause resume reverse',
            onEnter: () => handleFirstScroll()
          });
        }
      });
    }
  }