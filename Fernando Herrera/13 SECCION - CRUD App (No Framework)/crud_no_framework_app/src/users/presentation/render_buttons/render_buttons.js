import './render_buttons.css';
import users_store from '../../store/users_store';
import {renderTable} from '../render_table/render_table';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButtons = (element) => {
  const nextButton = document.createElement('button');
  nextButton.innerHTML = ' Next >';

  const prevButton = document.createElement('button');
  prevButton.innerHTML = ' < Prev';

  const currentPageLabel = document.createElement('span');
  currentPageLabel.id = 'current-page';
  currentPageLabel.innerHTML = users_store.getCurrentPage();

  element.append(prevButton, currentPageLabel, nextButton);

  // TODO: Listeners
  nextButton.addEventListener('click', async() => {
    await users_store.loadNextPage();
    currentPageLabel.innerHTML = users_store.getCurrentPage();
    renderTable(element);
  });

  prevButton.addEventListener('click', async() => {
    await users_store.loadPreviousPage();
    currentPageLabel.innerHTML = users_store.getCurrentPage();
    renderTable(element);
  });
}