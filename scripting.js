document.addEventListener("DOMContentLoaded", () => {
  // 1. Smooth Scrolling for Internal Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth"
        });
      }
    });
  });

  // 2. Back to Top Button
  const backToTopBtn = document.getElementById("back-to-top");

  // Show/hide button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show-btn");
    } else {
      backToTopBtn.classList.remove("show-btn");
    }
  });

  // Scroll smoothly back to top when button is clicked
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // 3. Minimal Hover Effects (Example: Skill Cards)
  const skillCards = document.querySelectorAll(".skill-card");
  skillCards.forEach(card => {
    card.addEventListener("mouseover", () => {
      // Add a class or inline style
      card.classList.add("hover-effect");
    });
    card.addEventListener("mouseout", () => {
      card.classList.remove("hover-effect");
    });
  });
});
