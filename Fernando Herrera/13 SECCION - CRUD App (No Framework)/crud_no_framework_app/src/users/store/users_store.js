import { loadUsersByPage } from "../use_cases/load_users_by_page";

const state = {
  currentPage: 0,
  users: [],
}

const loadNextPage = async () => {
  await loadUsersByPage(state.currentPage+1);
}

const loadPreviousPage = async () => { 
  throw new Error('No implementado');
}

const onUserChanged = () => {
  throw new Error('No implementado');
}

const reloadPage = async () => {
  throw new Error('No implementado');
}

export default{
  loadNextPage,
  loadPreviousPage,
  onUserChanged,
  reloadPage,

  getUser: () => [...state.users],
  getCurrentPage: () => state.currentPage,
}