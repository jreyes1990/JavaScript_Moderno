import { Tarea } from "../models/tarea.model";
import { createTareaHTML } from "./create_tarea_html";

let element;

/**
 * 
 * @param {String} elementoId 
 * @param {Tarea} tareas 
 */
export const renderTareas = (elementoId, tareas= []) => {
  if(!element){
    element = document.querySelector(elementoId);
  }

  if(!element) throw new Error(`Element ${elementoId} not found`);

  element.innerHTML = '';
  
  tareas.forEach(tarea => {
    element.append(createTareaHTML(tarea));
  });
}