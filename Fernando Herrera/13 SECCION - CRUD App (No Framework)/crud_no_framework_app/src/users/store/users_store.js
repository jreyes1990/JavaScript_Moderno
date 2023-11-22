import { User } from "../models/user";
import { loadUsersByPage } from "../use_cases/load_users_by_page";

const state = {
  currentPage: 0,
  users: [],
}

const loadNextPage = async () => {
  const users = await loadUsersByPage(state.currentPage+1);

  if(users.length === 0) return;

  state.currentPage += 1;
  state.users = users;
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

  /**
   * @returns {User[]}
   */
  getUser: () => [...state.users],

  /**
   * @returns {Number}
   */
  getCurrentPage: () => state.currentPage,
}