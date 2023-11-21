import { updateCanvasBackgroundColor } from './canvas/canvas.js'
import { greeting } from './greeting.js';
import { initializeNavbar } from './navbar.js';
import { scrollToTop } from './scroll.js';
import { typingSpeed, typeText } from './typing.js';

updateCanvasBackgroundColor();
greeting();
initializeNavbar();
scrollToTop();
setTimeout(typeText, typingSpeed);
