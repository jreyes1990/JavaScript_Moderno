import { renderAddButton } from "./presentation/render_add_buttons/render_add_buttons";
import { renderButtons } from "./presentation/render_buttons/render_buttons";
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
  renderButtons(element);
  renderAddButton(element);
}