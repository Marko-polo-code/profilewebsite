const textElement = document.getElementById('changingText');
const newTexts = [
  "I am a Fullstack engineer",
  "I make websites and apps"
];
let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 1000; // Pause duration in milliseconds

function typeText() {
  const currentText = newTexts[currentIndex];

  if (!isDeleting && charIndex < currentText.length) {
    textElement.textContent = currentText.slice(0, charIndex + 1);
    charIndex++;
  } else if (isDeleting && charIndex > 0) {
    textElement.textContent = currentText.slice(0, charIndex - 1);
    charIndex--;
  } else if (!isDeleting) {
    isDeleting = true;
    delay = 2000; // Pause before deleting
  } else {
    isDeleting = false;
    delay = 1000; // Pause before next typing
    currentIndex = (currentIndex + 1) % newTexts.length;
  }

  setTimeout(typeText, isDeleting ? delay : 100);
}

setTimeout(typeText, 100); // Start the typing animation
