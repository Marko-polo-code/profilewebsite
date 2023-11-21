import { updateCanvasBackgroundColor } from './canvas/canvas.js';

const html = document.querySelector("html");
let currentTheme = "white-theme";

function toggleTheme() {
  if (html.classList.contains("black-theme")) {
    // If the black theme is active, switch to white theme
    html.classList.remove("black-theme");
    currentTheme = "white-theme";
  } else {
    // If the white theme is active (or no theme), switch to black theme
    html.classList.add("black-theme");
    currentTheme = "black-theme";
  }
  updateCanvasBackgroundColor();
}

// Add a click event listener to the "Toggle Theme" link
const themeToggle = document.querySelector("#themeToggle");
themeToggle.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the link from navigating to a new page
  toggleTheme();
});

export { toggleTheme, currentTheme };
