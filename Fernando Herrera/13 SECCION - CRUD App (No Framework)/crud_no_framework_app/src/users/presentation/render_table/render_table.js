import './render_table.css';
import users_store from '../../store/users_store';
import { showModal } from '../render_modal/render_modal';
import { deleteUserById } from '../../use_cases/delete_user_by_id';

let table;

const createTable = () => {
  const table = document.createElement('table');
  const tableHeaders = document.createElement('thead');
  tableHeaders.innerHTML = `
    <tr>
      <th>ID</th>
      <th>Balance</th>
      <th>FirstName</th>
      <th>LastName</th>
      <th>Active</th>
      <th>Actions</th>
    </tr>
  `;

  const tableBody = document.createElement('tbody');
  table.append(tableHeaders, tableBody);

  return table;
}

/**
 * 
 * @param {MouseEvent} event 
 */
const userSelectListener = (event) => {
  const element = event.target.closest('.select_user');
  
  if(!element) return;

  const id = element.getAttribute('data-id');
  showModal(id);

}

/**
 * @param {MouseEvent} event 
 */
const userDeleteListener = async(event) => {
  const element = event.target.closest('.delete_user');
  if ( !element ) return;

  const id = element.getAttribute('data-id');
  try {
    await deleteUserById(id);
    await users_store.reloadPage();
    document.querySelector('#current-page').innerText = users_store.getCurrentPage();
    renderTable();
      
  } catch (error) {
    console.log(error);
    alert('No se pudo eliminar');
  }
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTable = (element) => {
  const users = users_store.getUser();

  if(!table){
    table = createTable();
    element.append(table);

    // TODO: Listeners a la table
    table.addEventListener('click', event => userSelectListener(event));
    table.addEventListener('click', event => userDeleteListener(event) );
  }

  let tableHTML = '';
  
  users.forEach(user => {
    tableHTML += `
      <tr>
        <td>${user.id}</td>
        <td>${user.balance}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.isActive}</td>
        <td>
          <a href="#/" class="select_user" data-id="${user.id}">Select</a>
          |
          <a href="#/" class="delete_user" data-id="${user.id}">Delete</a>
        </td>
      </tr>
    `;
  });

  table.querySelector('tbody').innerHTML = tableHTML;
}