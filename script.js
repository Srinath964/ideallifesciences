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

    // <!-- Carousel JavaScript -->

let currentIndex = 0;
        const slides = document.getElementById('slides');
        const dots = document.querySelectorAll('.dot');
        const progressFill = document.getElementById('progressFill');
        const totalSlides = 4;
        let autoPlayInterval;
        let progressInterval;
        const autoPlayDuration = 6000; // 6 seconds per slide

        function updateSlides() {
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            // Update dots
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });

            // Reset and restart progress bar
            resetProgress();
        }

        function moveSlide(direction) {
            currentIndex += direction;
            
            // Loop continuously
            if (currentIndex < 0) {
                currentIndex = totalSlides - 1;
            } else if (currentIndex >= totalSlides) {
                currentIndex = 0;
            }
            
            updateSlides();
            resetAutoPlay();
        }

        function currentSlide(index) {
            currentIndex = index;
            updateSlides();
            resetAutoPlay();
        }

        function resetProgress() {
            clearInterval(progressInterval);
            progressFill.style.width = '0%';
            
            let progress = 0;
            const increment = 100 / (autoPlayDuration / 50); // Update every 50ms
            
            progressInterval = setInterval(() => {
                progress += increment;
                if (progress >= 100) {
                    progress = 100;
                }
                progressFill.style.width = progress + '%';
            }, 50);
        }

        function autoPlay() {
            autoPlayInterval = setInterval(() => {
                moveSlide(1);
            }, autoPlayDuration);
        }

        function resetAutoPlay() {
            clearInterval(autoPlayInterval);
            autoPlay();
        }

        // Start autoplay and progress when page loads
        autoPlay();
        resetProgress();

        // Pause autoplay on hover
        const carouselContainer = document.querySelector('.carousel-container');
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(autoPlayInterval);
            clearInterval(progressInterval);
        });

        carouselContainer.addEventListener('mouseleave', () => {
            autoPlay();
            resetProgress();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                moveSlide(-1);
            } else if (e.key === 'ArrowRight') {
                moveSlide(1);
            }
        });

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

(function() {
  let animated = false;
  
  function animateCounter(counter) {
    const target = parseInt(counter.getAttribute("data-count"));
    const suffix = counter.getAttribute("data-suffix") || "";
    const duration = 1500; // Total animation duration in ms
    const steps = 60; // Number of animation steps
    const increment = target / steps;
    const stepDuration = duration / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.ceil(increment * step), target);
      counter.textContent = current + suffix;
      
      if (step >= steps) {
        clearInterval(timer);
        counter.textContent = target + suffix;
      }
    }, stepDuration);
  }

  function checkStatsVisible() {
    if (animated) return;
    
    const statsSection = document.querySelector(".stats-section");
    if (!statsSection) return;
    
    const rect = statsSection.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
      animated = true;
      const counters = document.querySelectorAll(".counter");
      counters.forEach((counter, index) => {
        setTimeout(() => animateCounter(counter), index * 200);
      });
      
      // Remove event listeners after animation
      window.removeEventListener('scroll', checkStatsVisible);
      window.removeEventListener('load', checkStatsVisible);
    }
  }

  // Check on page load and scroll
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkStatsVisible);
  } else {
    checkStatsVisible();
  }
  
  window.addEventListener('scroll', checkStatsVisible, { passive: true });
})();



    // readmore about.html
     function redirectToAbout() {
            window.location.href = 'about.html'; // Change this to your actual About Us page URL
        }

           // Initialize AOS when script loads
    window.addEventListener('load', function() {
      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 800,
          once: true,
          offset: 100
        });
      }
    });

// Scroll Reveal our latest product section
  document.addEventListener("DOMContentLoaded", function () {
    const latestSwiper = new Swiper(".latestSwiper", {
      loop: true,
      speed: 800,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      slidesPerView: 4,
      spaceBetween: 20,
      breakpoints: {
        1200: { slidesPerView: 4 },
        768: { slidesPerView: 2 },
        0: { slidesPerView: 1 }
      }
    });
  });

    // <!-- fetch html doc -->
   
    function loadHTML(id, file) { 
    fetch(file)
    .then(res => res.text())
    .then(data => document.getElementById(id).innerHTML = data)
    .catch(err => console.error('Error loading footer:', err));
  }
  
  // Load footer after page loads
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      loadHTML("footer", "footer.html");
    });
  } else {
    loadHTML("footer", "footer.html");
  }

// <!-- 1. WhatsApp Chat Button (Sticky Floating) -->

  const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});