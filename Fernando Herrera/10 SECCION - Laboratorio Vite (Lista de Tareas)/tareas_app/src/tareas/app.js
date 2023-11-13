import html from './app.html?raw';
import tareaStore from '../store/tarea.store';
import { renderTareas } from './use_cases';

const elementIds = {
  tareaList: '.todo-list',
}

/**
 * 
 * @param {String} elementoId 
 */
export const App = (elementoId) => {
  const displayTareas = () => {
    const tareas = tareaStore.getTareas(tareaStore.getCurrentFilter());
    renderTareas(elementIds.tareaList, tareas);
    // console.log(tareas);
  }

  // TODO: Cuando la funcion App() se llama
  (() => {
    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elementoId).append(app);
    displayTareas();
  })();
}