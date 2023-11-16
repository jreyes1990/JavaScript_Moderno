import tareaStore, { Filters } from "../../store/tarea.store";

let element;

/**
 * 
 * @param {String} elementoId 
 */
export const renderPending = (elementoId) => {
  if(!element){
    element = document.querySelector(elementoId);
  }

  if(!element) throw new Error(`Element ${elementoId} not found`);

  element.innerHTML = tareaStore.getTareas(Filters.Pending).length;
}