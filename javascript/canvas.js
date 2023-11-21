import { currentTheme } from './black-theme.js';
import { Ball } from './Ball.js'

// set up canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random RGB color value

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// Function to update the canvas background color based on the current theme

function updateCanvasBackgroundColor() {
  // Set the canvas background color based on the current theme
  ctx.fillStyle = currentTheme === "black-theme" ? 'rgb(28, 28, 28)' : '#fff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

const balls = [];

while (balls.length < 30) {
   const size = random(10,20);
   const ball = new Ball(
      // ball position always drawn at least one ball width
      // away from the edge of the canvas, to avoid drawing errors
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-7,7),
      random(-7,7),
      randomRGB(),
      size
   );

  balls.push(ball);
}

function loop() {
   updateCanvasBackgroundColor();

   for (const ball of balls) {
     ball.draw();
     ball.update();
     ball.collisionDetect();
   }

   requestAnimationFrame(loop);
}

loop();

export { updateCanvasBackgroundColor, ctx, width, height, balls, randomRGB };
