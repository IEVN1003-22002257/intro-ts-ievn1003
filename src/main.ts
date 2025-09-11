import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import './temasTS/01-tipos-bas.ts'
import './temasTS/02-obj-interfaz-arre.ts'
import './temasTS/03-funciones.ts'
import './temasTS/04-desestructuracion-ob-arre.ts'
import './temasTS/05-desestructuracion-funciones.ts'
import './temasTS/06-importar-exportar.ts'
import './temasTS/07-clases.ts'
import './temasTS/08-herecia.ts'




document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
