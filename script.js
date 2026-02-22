document.addEventListener("DOMContentLoaded", function () {

  /* ================= NAVBAR ================= */

  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-menu > li > a:not(.dropdown-toggle)")
      .forEach(link => {
        link.addEventListener("click", function () {
          navMenu.classList.remove("active");
        });
      });
  }

  const dropdownToggle = document.getElementById("dropdown-toggle");
  const dropdownContent = document.getElementById("dropdown-content");

  if (dropdownToggle && dropdownContent) {
    dropdownToggle.addEventListener("click", function (e) {
      e.preventDefault();
      dropdownContent.classList.toggle("active");
    });
  }

  /* ================= CAROUSEL ================= */

  const slides = document.getElementById("slides");
  const progressFill = document.getElementById("progressFill");
  const carouselContainer = document.querySelector(".carousel-container");

  if (slides && progressFill && carouselContainer) {

    let currentIndex = 0;
    const dots = document.querySelectorAll(".dot");
    const totalSlides = dots.length;
    let autoPlayInterval;
    let progressInterval;
    const autoPlayDuration = 6000;

    function updateSlides() {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
      resetProgress();
    }

    function moveSlide(direction) {
      currentIndex += direction;
      if (currentIndex < 0) currentIndex = totalSlides - 1;
      if (currentIndex >= totalSlides) currentIndex = 0;
      updateSlides();
      resetAutoPlay();
    }

    function resetProgress() {
      clearInterval(progressInterval);
      progressFill.style.width = "0%";
      let progress = 0;
      const increment = 100 / (autoPlayDuration / 50);

      progressInterval = setInterval(() => {
        progress += increment;
        if (progress >= 100) progress = 100;
        progressFill.style.width = progress + "%";
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

    autoPlay();
    resetProgress();

    carouselContainer.addEventListener("mouseenter", function () {
      clearInterval(autoPlayInterval);
      clearInterval(progressInterval);
    });

    carouselContainer.addEventListener("mouseleave", function () {
      autoPlay();
      resetProgress();
    });

  }

  /* ================= COUNTER ANIMATION ================= */

const counters = document.querySelectorAll(".counter");

if (counters.length > 0) {

  counters.forEach(counter => {

    const target = parseInt(counter.getAttribute("data-target")) || 
                   parseInt(counter.getAttribute("data-count"));

    if (!target) return;

    let current = 0;
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        counter.textContent = target;
        clearInterval(timer);
      } else {
        counter.textContent = Math.ceil(current);
      }

    }, stepTime);

  });

}

  /* ================= SWIPER ================= */

  if (typeof Swiper !== "undefined" && document.querySelector(".latestSwiper")) {
    new Swiper(".latestSwiper", {
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
  }

  /* ================= BACK TO TOP ================= */

  const backToTopBtn = document.getElementById("backToTop");

  if (backToTopBtn) {
    window.addEventListener("scroll", function () {
      backToTopBtn.style.display =
        window.scrollY > 300 ? "block" : "none";
    });

    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

});