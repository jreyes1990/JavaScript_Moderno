import { renderTable } from "./presentation/render_table/render_table";
import users_store from "./store/users_store";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const usersApp = async(element) => {
  element.innerHTML = 'Loading.....';
  await users_store.loadNextPage();

  renderTable(element);
}