document.addEventListener("DOMContentLoaded", () => {

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".navlinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  body.setAttribute("data-theme", "light");
  localStorage.setItem("theme", "light");

  themeToggle?.addEventListener("click", () => {

    const currentTheme = body.getAttribute("data-theme");
    const Theme = currentTheme === "light" ? "dark" : "light";

    body.setAttribute("data-theme", Theme);
    localStorage.setItem("theme", Theme);
  });

});
