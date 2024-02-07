const btn = document.getElementById("hamburger-btn");
const nav = document.getElementById("menu-nav");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("show");
});
