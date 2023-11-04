/** 
 * Se debe alcanzar los 21 punto, si se pasa pierdes
 * 
 * 2C = Two of Clubs (Treboles)
 * 2D = Two of Diamonds (Diamante)
 * 2H = Two of Heards (Corazones)
 * 2S = Two of Spades (Espadas)
*/
let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

const crearDeck = () => {
  for (let i = 2; i < 10; i++) {
    for (let tipo of tipos) {
     deck.push(i+tipo); 
    }
  }

  for (const esp of especiales) {
    for (let tipo of tipos) {
     deck.push(esp+tipo); 
    } 
  }
  console.log(deck);
  deck = _.shuffle(deck);
  console.log(deck);
}
crearDeck();