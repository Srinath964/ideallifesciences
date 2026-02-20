// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close menu ONLY for normal links
document.querySelectorAll('.nav-menu > li > a:not(.dropdown-toggle)')
  .forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

// Dropdown toggle
// const dropdownToggle = document.getElementById('dropdown-toggle');
// const dropdownContent = document.getElementById('dropdown-content');

// dropdownToggle.addEventListener('click', function (e) {
//   e.preventDefault(); // STOP menu close
//   dropdownContent.classList.toggle('active');
// });
const dropdownToggle = document.getElementById('dropdown-toggle');
const dropdownContent = document.getElementById('dropdown-content');

if (dropdownToggle && dropdownContent) {
  dropdownToggle.addEventListener('click', function (e) {
    e.preventDefault();
    dropdownContent.classList.toggle('active');
  });
}

// Counter Animation
// const counters = document.querySelectorAll('.counter');
// const speed = 200;

// const animateCounter = (counter) => {
//     const target = +counter.getAttribute('data-target');
//     const count = +counter.innerText;
//     const increment = target / speed;

//     if (count < target) {
//         counter.innerText = Math.ceil(count + increment);
//         setTimeout(() => animateCounter(counter), 1);
//     } else {
//         counter.innerText = target + '+';
//     }
// };
// Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 200;

const animateCounter = (counter) => {
  const target = +counter.getAttribute('data-target');
  let count = +counter.innerText;
  const increment = target / speed;

  if (count < target) {
    counter.innerText = Math.ceil(count + increment);
    setTimeout(() => animateCounter(counter), 20);
  } else {
    counter.innerText = target + '+';
  }
};

// Trigger animation
counters.forEach(counter => {
  animateCounter(counter);
});

// Scroll Reveal our latest product section
