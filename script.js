// grab elements
const menuToggle = document.getElementById("menuToggle");
const navList = document.getElementById("navList");

// toggle mobile nav
menuToggle.addEventListener("click", () => {
  const isOpen = navList.classList.toggle("open");
  document.body.classList.toggle("nav-open", isOpen);
  menuToggle.setAttribute("aria-expanded", isOpen);
  navList.setAttribute("aria-hidden", !isOpen);
});

// dynamic footer year
document.getElementById("year").textContent = new Date().getFullYear();
