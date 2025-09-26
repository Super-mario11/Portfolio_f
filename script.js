// 1. Smooth Cursor Shadow Movement
const cursor = document.querySelector(".cursor-shadow");

document.addEventListener("mousemove", (e) => {
  // Use a smooth transition/setTimeout for more fluid movement if desired, 
  // but for simplicity, the CSS transition on the element handles the fluidity.
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

// 2. Scroll Reveal Animation Logic
const revealElements = document.querySelectorAll('.reveal-from-bottom, .reveal-from-left, .reveal-from-right');

const observerOptions = {
  root: null, // relative to the viewport
  rootMargin: '0px',
  threshold: 0.15 // Start animation when 15% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // Stop observing once it's visible to save performance
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

revealElements.forEach(el => {
  observer.observe(el);
});

// Optionally, run the fadeIn animation for the hero section immediately
document.querySelector('#hero').classList.add('is-visible');
