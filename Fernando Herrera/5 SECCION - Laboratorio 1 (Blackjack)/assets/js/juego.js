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
let puntosJugador = 0;
let puntosComputadora = 0;

// TODO: Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const divCartasJugador = document.querySelector('#jugador-cartas');
const smalls = document.querySelectorAll('small');

// TODO: Esta funcion crea una nueva baraja
const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
     deck.push(i+tipo); 
    }
  }

  for (const esp of especiales) {
    for (let tipo of tipos) {
     deck.push(esp+tipo); 
    } 
  }
  deck = _.shuffle(deck);
  console.log(deck);

  return deck;
}
crearDeck();

// TODO: Esta funcion me permite tomar una carta
const pedirCarta = () => {
  if (deck.length === 0) {
    throw 'No hay cartas en el deck';
  }
  const carta = deck.pop(); // TODO: pop() -> Remueve el ultimo elemento y lo regresa
  
  return carta;
}

// TODO: Esta funcion me permite pedir una carta
const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length-1);
  
  puntos = (isNaN(valor)) ? (valor==='A') ? 11 : 10 : Number(valor);
  
  return puntos;
}

const valor = valorCarta(pedirCarta());
console.log({valor});

// TODO: Eventos de boton
btnPedir.addEventListener('click', () => {
  const carta = pedirCarta();
  puntosJugador = puntosJugador+valorCarta(carta);
  smalls[0].innerHTML = puntosJugador;

  const imgCarta = document.createElement('img');
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList.add('carta');
  divCartasJugador.append(imgCarta);

  if (puntosJugador > 21) {
    console.log('Lo siento mucho, ya perdiste');
    btnPedir.disabled = true;
  }else if (puntosJugador === 21){
    console.log('Genial, lo has logrado');
    btnPedir.disabled = true;
  }
});