/** 
 * Se debe alcanzar los 21 punto, si se pasa pierdes
 * 
 * 2C = Two of Clubs (Treboles)
 * 2D = Two of Diamonds (Diamante)
 * 2H = Two of Heards (Corazones)
 * 2S = Two of Spades (Espadas)
*/
// TODO: Uso de patron de modulo
(() => {
  'use strict'

  let deck = [];
  const tipos = ['C','D','H','S'];
  const especiales = ['A','J','Q','K'];
  let puntos = 0;
  let puntosJugador = 0;
  let puntosComputadora = 0;

  // TODO: Referencias del HTML
  const btnPedir = document.querySelector('#btnPedir');
  const btnDetener = document.querySelector('#btnDetener');
  const btnNuevo = document.querySelector('#btnNuevo');
  const divCartasJugador = document.querySelector('#jugador-cartas');
  const divCartasComputadora = document.querySelector('#computadora-cartas');
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

  // TODO: Se realizara la funcion para el turno de la computadora
  const turnoComputadora = (puntosMinimos) => {
    do {
      const carta = pedirCarta();
      puntosComputadora = puntosComputadora+valorCarta(carta);
      smalls[1].innerHTML = puntosComputadora;

      const imgCarta = document.createElement('img');
      imgCarta.src = `assets/cartas/${carta}.png`;
      imgCarta.classList.add('carta');
      divCartasComputadora.append(imgCarta);

      if (puntosMinimos > 21) {
        break;
      }
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
      if (puntosComputadora === puntosJugador) {
        alert('Nadie gana :(');
      }else if(puntosMinimos > 21){
        alert('Computadora gana');
      }else if((puntosComputadora > 21) || (puntosComputadora > puntosJugador)){
        alert('Jugador gana');
      }
    }, 150);
  }

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
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    }else if (puntosJugador === 21){
      console.log('Genial, lo has logrado');
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    }
  });

  btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  });

  btnNuevo.addEventListener('click', () => {
    console.clear();
    deck = [];
    deck = crearDeck();

    btnPedir.disabled = false;
    btnDetener.disabled = false;

    puntosJugador = 0;
    puntosComputadora = 0;

    smalls[0].innerHTML = 0;
    smalls[1].innerHTML = 0;

    divCartasJugador.innerHTML = '';
    divCartasComputadora.innerHTML = '';
  });
})();