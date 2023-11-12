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

const addTarea = (description) => {
  throw new Error('Not implemented');
}

const toggleTarea = (tareaId) => {
  throw new Error('Not implemented');
}

const deleteTarea = (tareaId) => {
  throw new Error('Not implemented');
}

const deleteCompleted = () => {
  throw new Error('Not implemented');
}

const setSelectedFilter = (newFilter = Filters.All) => {
  throw new Error('Not implemented');
}

const getCurrentFilter = () => {
  throw new Error('Not implemented');
}

export default {
  initStore,
  loadStore,
  toggleTarea,
  deleteTarea,
  deleteCompleted,
  setSelectedFilter,
  getCurrentFilter,
}