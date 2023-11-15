import {Tarea} from '../tareas/models/tarea.model';

export const Filters = {
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
  loadStore();
  console.log('InitStore');
}

const loadStore = () => {
  if(!localStorage.getItem('state')) return;

  const {tareas=[], filter=Filters.All} = JSON.parse(localStorage.getItem('state'));
  state.tareas = tareas;
  state.filter = filter;
}

const saveStateStorage = () => {
  localStorage.setItem('state', JSON.stringify(state));
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
  saveStateStorage();
}

const toggleTarea = (tareaId) => {
  state.tareas = state.tareas.map(tarea => {
    if(tarea.id === tareaId){
      tarea.done = !tarea.done;
    }
    return tarea;
  });
  saveStateStorage();
}

const deleteTarea = (tareaId) => {
  state.tareas = state.tareas.filter(tarea => tarea.id !== tareaId);
  saveStateStorage();
}

const deleteCompleted = () => {
  state.tareas = state.tareas.filter(tarea => !tarea.done);
  saveStateStorage();
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setSelectedFilter = (newFilter = Filters.All) => {
  state.filter = newFilter;
  saveStateStorage();
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