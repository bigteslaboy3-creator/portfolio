// ===== MENU TOGGLE =====
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('open'); // ✅ match CSS
};


// Close navbar on scroll
window.onscroll = () => {
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// ===== SCROLL REVEAL =====
ScrollReveal({
  distance: '60px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// ===== TYPED JS (Multiple text animation) =====
const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Backend Developer', 'Computer Engineer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// ===== DARK / LIGHT MODE TOGGLE =====
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.documentElement.classList.add("light");
  themeIcon.classList.replace("bx-moon", "bx-sun");
}

themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("light");

  if (document.documentElement.classList.contains("light")) {
    themeIcon.classList.replace("bx-moon", "bx-sun");
    localStorage.setItem("theme", "light");
  } else {
    themeIcon.classList.replace("bx-sun", "bx-moon");
    localStorage.setItem("theme", "dark");
  }
});
