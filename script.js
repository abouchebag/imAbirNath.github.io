// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Typewriter effect for subtitle
document.addEventListener("DOMContentLoaded", function () {
  const text = "15-year-old developer from NYC.";
  const subtitle = document.querySelector(".subtitle");
  subtitle.textContent = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      subtitle.textContent += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }
  type();
});

// Animate skill bars when in view
function animateBars() {
  document.querySelectorAll('.progress').forEach(bar => {
    const rect = bar.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    if (isVisible && bar.style.width === "0%") {
      if (bar.classList.contains('python')) bar.style.width = '50%';
      if (bar.classList.contains('javascript')) bar.style.width = '50%';
      if (bar.classList.contains('htmlcss')) bar.style.width = '75%';
    }
  });
}
window.addEventListener('scroll', animateBars);
animateBars();

// Scroll reveal effect
function revealOnScroll() {
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Dark mode toggle
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️"; // Sun icon in dark mode
  } else {
    themeToggle.textContent = "🌙"; // Moon icon in light mode
  }
});

// Add shadow to navbar on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
// Navbar active link switching on click
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", function () {
    // Remove 'active' class from all links
    document.querySelectorAll(".nav-links a").forEach(a => a.classList.remove("active"));
    // Add 'active' class to the clicked link
    this.classList.add("active");
  });
});
