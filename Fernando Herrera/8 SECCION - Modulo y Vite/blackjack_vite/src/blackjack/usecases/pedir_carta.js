/**
 * Esta funcion me permite tomar una carta
 * @param {Array<String>} deck Es un arreglo de String
 * @returns {String} Remueve el ultimo elemento y lo regresa
 */
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw 'No hay cartas en el deck';
  }
  
  return deck.pop(); // TODO: pop() -> Remueve el ultimo elemento y lo regresa
}