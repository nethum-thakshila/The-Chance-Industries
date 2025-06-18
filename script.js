// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navList = document.querySelector(".nav-list");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("open");
});

// Dynamic year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
