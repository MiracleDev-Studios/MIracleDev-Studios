// Get all clickable div elements
const clickableDivs = document.querySelectorAll('.reason_heading');
// Get all content div elements
const contentDivs = document.querySelectorAll('.reasons');

// Add click event to each clickable div
clickableDivs.forEach((div, index) => {
    div.addEventListener('click', function() {
        // Remove active class from all divs
        clickableDivs.forEach(div => div.classList.remove('active_heading'));
       
        // Remove active-content class from all content divs
        contentDivs.forEach(content => content.classList.remove('active-reason'));
       
        // Add active class to the clicked div
        this.classList.add('active_heading');
       
        // Show the corresponding content div
        document.getElementById(`content${index + 1}`).classList.add('active-reason');
    });
});


const slide = document.querySelector('.testimonial-slider');
const images = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
const totalSlides = images.length;

document.querySelector('.next').addEventListener('click', () => {
    moveToNextSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    moveToPrevSlide();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}

function moveToPrevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100;
    slide.style.transform = `translateX(${offset}%)`;
    updateDots();
}

function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// Auto-slide functionality
setInterval(moveToNextSlide, 8000); // Slides every 5 seconds

// Ensure the first dot is white when the page loads
document.addEventListener('DOMContentLoaded', () => {
    dots[0].classList.add('active');
});;;

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
  
    // Function to remove active class from all nav links
    const removeActiveClass = () => {
      navLinks.forEach(link => link.classList.remove('active'));
    };
  
    // Click event for nav links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        removeActiveClass();
        link.classList.add('active');
      });
    });
  
    // Scroll event to add active class based on section in view
    window.addEventListener('scroll', () => {
      let currentSection = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 50; // Adjust for nav height
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute('id');
        }
      });
  
      removeActiveClass();
      const activeLink = document.querySelector(`.nav-link[href="#${currentSection}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    });
  });