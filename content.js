const hideElements = () => {
  const selectorsToHide = [
    '[data-id="feed"]',
    '[data-test-global-nav-link="messaging"]',
    '[data-test-global-nav-link="notifications"]',
    '.msg-overlay-list-bubble',
    '.global-nav__nav',
    'aside' // Often used for sidebars
  ];

  selectorsToHide.forEach(selector => {
    const el = document.querySelector(selector);
    if (el) el.style.display = 'none';
  });
};

// Delay to make sure LinkedIn's content is loaded
setTimeout(hideElements, 1500);
