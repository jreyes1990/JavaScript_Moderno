import './render_buttons.css';
import users_store from '../../store/users_store';

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
}