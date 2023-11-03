const textElement = document.getElementById('changingText');
const newTexts = [
  "I am a software engineer.",
  "I build websites and apps."
];
let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100; // Typing animation speed in milliseconds

function typeText() {
  const currentText = newTexts[currentIndex];

  if (!isDeleting && charIndex < currentText.length) {
    textElement.textContent = currentText.slice(0, charIndex + 1);
    charIndex++;
  } else if (isDeleting && charIndex >= 1) {
    textElement.textContent = currentText.slice(0, charIndex);
    charIndex--;
  } else if (!isDeleting) {
    isDeleting = true;
  } else {
    isDeleting = false;
    currentIndex = (currentIndex + 1) % newTexts.length;
  }

  const delay = isDeleting ? typingSpeed / 2 : typingSpeed; // Pause between typing and deleting
  setTimeout(typeText, delay);
}

setTimeout(typeText, typingSpeed); // Start the typing animation
