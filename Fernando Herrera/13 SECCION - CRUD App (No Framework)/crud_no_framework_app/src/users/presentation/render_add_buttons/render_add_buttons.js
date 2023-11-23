import './render_add_buttons.css';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderAddButton = (element) => {
  const fabButton = document.createElement('button');
  fabButton.innerHTML = '+';
  fabButton.classList.add('fab-button');

  element.append(fabButton);

  fabButton.addEventListener('click', () => {
    throw new Error('not implement');
  });
}