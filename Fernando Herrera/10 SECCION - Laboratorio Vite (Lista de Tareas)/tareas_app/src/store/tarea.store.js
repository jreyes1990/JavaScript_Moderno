import {Tarea} from '../tareas/models/tarea.model';

const Filters = {
  All: 'all',
  Completed: 'Completed',
  Pending: 'Pending'
}

const state = {
  tareas: [
    new Tarea('Piedra del alma'),
    new Tarea('Piedra del infinito'),
    new Tarea('Piedra del tiempo'),
    new Tarea('Piedra del poder'),
    new Tarea('Piedra de la realidad'),
  ],
  filter: Filters.All
}

const initStore = () => {
  console.log(state);
  console.log('InitStore');
}

const loadStore = () => {
  throw new Error('Not implemented');
}

const getTareas = (filter = Filters.All) => {
  switch(filter){
    case Filters.All:
      return [...state.tareas];
    case Filters.Completed:
      return state.tareas.filter(tarea => tarea.done);
    case Filters.Pending:
      return state.tareas.filter(tarea => !tarea.done);
    default:
      throw new Error(`Option ${filter} is not valid`);
  }
}

const addTarea = (description) => {
  if(!description) throw new Error('Description is required');
  state.tareas.push(new Tarea(description));
}

const toggleTarea = (tareaId) => {
  state.tareas = state.tareas.map(tarea => {
    if(tarea.id === tareaId){
      tarea.done = !tarea.done;
    }
    return tarea;
  });
}

const deleteTarea = (tareaId) => {
  state.tareas = state.tareas.filter(tarea => tarea.id !== tareaId);
}

const deleteCompleted = () => {
  state.tareas = state.tareas.filter(tarea => tarea.done);
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setSelectedFilter = (newFilter = Filters.All) => {
  state.filter = newFilter;
}

const getCurrentFilter = () => {
  return state.filter;
}

export default {
  initStore,
  loadStore,
  getTareas,
  addTarea,
  toggleTarea,
  deleteTarea,
  deleteCompleted,
  setSelectedFilter,
  getCurrentFilter,
}