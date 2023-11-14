import { Tarea } from "../models/tarea.model";

/**
 * 
 * @param {Tarea} tarea 
 */
export const createTareaHTML = (tarea) => {
  if(!tarea) throw new Error('a TAREA object is required');

  const {done, descripcion, id} = tarea;

  const html = `
    <div class="view">
      <input class="toggle" type="checkbox" ${done ? 'checked' : ''}>
      <label>${descripcion}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
  `;
  const liElement = document.createElement('li');
  liElement.innerHTML = html;
  liElement.setAttribute('data-id',id);

  if(tarea.done){
    liElement.classList.add('completed');
  }
  
  return liElement;
}