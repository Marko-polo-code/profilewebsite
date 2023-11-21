function initializeNavbar() {
  // Nav hamburgerburger selections

  const burger = document.querySelector("#burger-menu");
  const ul = document.querySelector("nav ul");
  const nav = document.querySelector("nav");

  burger.addEventListener("click", () => {
    ul.classList.toggle("show");
    nav.classList.toggle("nav-height");
    }
  );

  // Close hamburger menu when a link is clicked

  const navLink = document.querySelectorAll(".nav-link");

  navLink.forEach((link) =>
    link.addEventListener("click", () => {
      ul.classList.remove("show");
    })
  );
}

export { initializeNavbar };
