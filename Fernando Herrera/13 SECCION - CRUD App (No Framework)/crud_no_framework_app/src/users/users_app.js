import { renderAddButton } from "./presentation/render_add_buttons/render_add_buttons";
import { renderButtons } from "./presentation/render_buttons/render_buttons";
import { renderModal } from "./presentation/render_modal/render_modal";
import { renderTable } from "./presentation/render_table/render_table";
import users_store from "./store/users_store";
import { saveUser } from "./use_cases/save_users";

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
  renderModal(element, async(userLike) => {
    const user = await saveUser(userLike);
    users_store.onUserChanged(user);
    renderTable();
  });
}