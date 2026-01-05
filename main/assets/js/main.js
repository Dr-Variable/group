document.addEventListener("DOMContentLoaded", () => {

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".navlinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  const themeToggle = document.getElementById("themeToggle");
  const root = document.documentElement;

  themeToggle?.addEventListener("click", () => {

    currentTheme = root.getAttribute("data-theme");
    nexttheme = ( currentTheme === "light" ? "dark" : "light" ); 

    root.setAttribute("data-theme", nexttheme);
    localStorage.setItem("theme", nexttheme);
  });

});
