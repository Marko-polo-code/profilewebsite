
const html = document.querySelector("html");

function toggleTheme() {
  if (html.classList.contains("black-theme")) {
    // If the black theme is active, switch to white theme
    html.classList.remove("black-theme");
  } else {
    // If the white theme is active (or no theme), switch to black theme
    html.classList.add("black-theme");
  }
}

// Add a click event listener to the "Toggle Theme" link
const themeToggle = document.querySelector("#themeToggle");
themeToggle.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the link from navigating to a new page
  toggleTheme();
});
