import _ from 'underscore';

let deck = [];

// TODO: Esta funcion crea una nueva baraja
export const crearDeck = (tipoDeCartas, tipoEspeciales) => {
  deck = [];

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