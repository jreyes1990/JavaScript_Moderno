import html from './app.html?raw';
/**
 * 
 * @param {String} elementoId 
 */
export const App = (elementoId) => {
  // TODO: Cuando la funcion App() se llama
  (() => {
    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elementoId).append(app);
  })();
}