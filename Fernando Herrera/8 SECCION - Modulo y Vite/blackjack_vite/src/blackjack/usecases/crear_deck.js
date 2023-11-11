import _ from 'underscore';

// TODO: Esta funcion crea una nueva baraja
export const crearDeck = (tipoDeCartas, tipoEspeciales) => {
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