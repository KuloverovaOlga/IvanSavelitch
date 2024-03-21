import { rem } from '../utils/constants';

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.item-banner__weights') && weightTabs();
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
