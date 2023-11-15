import html from './app.html?raw';
import tareaStore from '../store/tarea.store';
import { renderTareas } from './use_cases';

const elementIds = {
  tareaList: '.todo-list',
  newTodoInput: '#new-todo-input',
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

  // TODO: Referencias HTML
  const newDescriptionInput = document.querySelector(elementIds.newTodoInput);
  const tareaListUl = document.querySelector(elementIds.tareaList);

  // TODO: Listeners
  newDescriptionInput.addEventListener('keyup', (event) => {
    if(event.keyCode !== 13) return;
    if(event.target.value.trim().length === 0) return;

    tareaStore.addTarea(event.target.value);
    displayTareas();
    event.target.value = '';
  });

  tareaListUl.addEventListener('click', (event) => {
    const element = event.target.closest('[data-id]');
    tareaStore.toggleTarea(element.getAttribute('data-id'));
    displayTareas();
  });

  tareaListUl.addEventListener('click', (event) => {
    const isDestroyElement = event.target.className === 'destroy';
    const element = event.target.closest('[data-id]');

    if(!element || !isDestroyElement) return;

    tareaStore.deleteTarea(element.getAttribute('data-id'));
    displayTareas();
  });
}