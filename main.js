
// Grab element
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Something went wrong, make sure that the ${selector} exists or is typed correctly.`
  );
};

// Nav style on scroll
const scrollHeader = () => {
  const headerElement = selectElement('header'); // Selector must be a string
  if (window.scrollY >= 15) { // Use window to access scrollY
    headerElement.classList.add('activated'); // Class name must be a string
  } else {
    headerElement.classList.remove('activated');
  }
};
window.onscroll = scrollHeader;

// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');
const toggleMenu = () => {
  const mobileMenu = selectElement('#menu');
  mobileMenu.classList.toggle('activated');
  menuToggleIcon.classList.toggle('activated');
};
menuToggleIcon.addEventListener('click', toggleMenu);

// Open/close search form popup
const formOpenBtn = selectElement('#search-icon');
const formCloseBtn = selectElement('#form-close-btn .fa-times');
const searchFormContainer = selectElement('#search-form-container');
formOpenBtn.addEventListener('click', () =>
  searchFormContainer.classList.add('activated')
);
formCloseBtn.addEventListener('click', () =>
  searchFormContainer.classList.remove('activated')
);

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    searchFormContainer.classList.remove('activated');
  }
});

// Switch theme & add to local storage
const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme'); // Key should be a string
if (currentTheme) {
  bodyElement.classList.add('light-theme'); // Class name must be a string
}
themeToggleBtn.addEventListener('click', () => {
  bodyElement.classList.toggle('light-theme');
  if (bodyElement.classList.contains('light-theme')) {
    localStorage.setItem('currentTheme', 'themeActive'); // Key and value should be strings
  } else {
    localStorage.removeItem('currentTheme');
  }
});

// Initialize Swiper
const swiper = new Swiper('.swiper', { // Selector must be a string
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next', // Selector must be a string
    prevEl: '.swiper-button-prev', // Selector must be a string
  },
  pagination: {
    el: '.swiper-pagination', // Selector must be a string
    type: 'bullets',
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});