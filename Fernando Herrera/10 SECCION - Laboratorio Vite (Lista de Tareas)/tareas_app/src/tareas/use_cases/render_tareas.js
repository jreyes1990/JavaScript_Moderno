import { Tarea } from "../models/tarea.model";
import { createTareaHTML } from "./create_tarea_html";

/**
 * 
 * @param {String} elementoId 
 * @param {Tarea} tareas 
 */
export const renderTareas = (elementoId, tareas= []) => {
  // TODO: Referencia
  const element = document.querySelector(elementoId);

  tareas.forEach(tarea => {
    element.append(createTareaHTML(tarea));
  });
}