import { sayHello } from './greetings.js';

const greetingEl = document.getElementById("greeting");
greetingEl.textContent = sayHello("Користувач");
