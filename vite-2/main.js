import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { setupRefresh } from './refresh.js'


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <button id="refreshButton">Refresh</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

// Selecciona los elementos HTML después de que se hayan agregado al DOM
const counterElement = document.querySelector('#counter');
const refreshButton = document.querySelector('#refreshButton');

// Llama a las funciones setupCounter y setupRefresh con los elementos correspondientes
setupCounter(counterElement);
setupRefresh(counterElement, refreshButton);

