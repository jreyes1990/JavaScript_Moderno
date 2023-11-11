import _ from 'underscore';

/**
 * Esta funcion crea una nueva baraja
 * @param {Array<String>} tipoDeCartas Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tipoEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tipoDeCartas, tipoEspeciales) => {
  if (!tipoDeCartas || tipoDeCartas.length === 0) throw new Error('TipoDeCartas es obligatorio como un arreglo de string');
  
  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipoDeCartas) {
    deck.push(i+tipo); 
    }
  }

  for (const esp of tipoEspeciales) {
    for (let tipo of tipoDeCartas) {
    deck.push(esp+tipo); 
    } 
  }

  return _.shuffle(deck);
}