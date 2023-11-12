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

export default {
  initStore
}