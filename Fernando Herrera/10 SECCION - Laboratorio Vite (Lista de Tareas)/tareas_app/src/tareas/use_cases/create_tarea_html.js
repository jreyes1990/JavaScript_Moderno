import { Tarea } from "../models/tarea.model";

/**
 * 
 * @param {Tarea} tarea 
 */
export const createTareaHTML = (tarea) => {
  if(!tarea) throw new Error('a TAREA object is required');

  const html = `<h1>${tarea.descripcion}</h1>`;
  const liElement = document.createElement('li');
  liElement.innerHTML = html;
  
  return liElement;
}