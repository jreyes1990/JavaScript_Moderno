import {crearDeck} from './usecases/crear_deck';

/** 
 * Se debe alcanzar los 21 punto, si se pasa pierdes
 * 
 * 2C = Two of Clubs (Treboles)
 * 2D = Two of Diamonds (Diamante)
 * 2H = Two of Heards (Corazones)
 * 2S = Two of Spades (Espadas)
*/

  let deck = [];
  const tipos = ['C','D','H','S'],
        especiales = ['A','J','Q','K'];
  let puntosJugadores = [];

  // TODO: Referencias del HTML
  const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');
  const divCartasJugadores = document.querySelectorAll('.divCartas');
  const smalls = document.querySelectorAll('small');

  btnPedir.disabled = true;
  btnDetener.disabled = true;

  // TODO: Esta funcion inicializa el juego
  const inicializarJuego = (numeroJugadores = 2) => {
    deck = crearDeck(tipos, especiales);

    puntosJugadores = [];

    for (let i = 0; i < numeroJugadores; i++) {
      puntosJugadores.push(0);
    }

    smalls.forEach(elem => elem.innerHTML = 0);
    divCartasJugadores.forEach(elem => elem.innerHTML = '');

    btnPedir.disabled = false;
    btnDetener.disabled = false;
  }

  // TODO: Esta funcion me permite tomar una carta
  const pedirCarta = () => {
    if (deck.length === 0) {
      throw 'No hay cartas en el deck';
    }
    
    return deck.pop(); // TODO: pop() -> Remueve el ultimo elemento y lo regresa
  }

  // TODO: Esta funcion me permite obtener el valor de una carta
  const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length-1);
    
    return (isNaN(valor)) ? (valor==='A') ? 11 : 10 : Number(valor);
  }

  // TODO: Esta funcion me permite acumular los puntos de los jugadores, TURNO: [0]=Primer jugador y el ultimo de la computadora
  const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] = puntosJugadores[turno]+valorCarta(carta);
    smalls[turno].innerHTML = puntosJugadores[turno];
    return puntosJugadores[turno];
  }

  // TODO: Esta funcion me permite crear las cartas
  const crearCartas = (carta, turno) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);
  }

  // TODO: Esta funcion evaluara el jugador ganador o perdedor
  const determinarGanador = () => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
      if(puntosComputadora === puntosMinimos) {
        alert('Nadie gana :(');
      } else if (puntosMinimos > 21) {
        alert('Computadora gana')
      } else if(puntosComputadora > 21 ||  puntosComputadora > puntosMinimos) {
        alert('Jugador Gana');
      } else {
        alert('Computadora Gana')
      }
    }, 150);
  }

  // TODO: Se realizara la funcion para el turno de la computadora
  const turnoComputadora = (puntosMinimos) => {
    let puntosComputadora = 0;

    do {
      const carta = pedirCarta();
      puntosComputadora = acumularPuntos(carta, puntosJugadores.length-1);
      crearCartas(carta, puntosJugadores.length-1);

      if (puntosMinimos > 21) {
        break;
      }
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
    determinarGanador();
  }

  // TODO: Eventos de boton
  btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    const puntosJugador = acumularPuntos(carta, 0);
    crearCartas(carta, 0);

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
    turnoComputadora(puntosJugadores[0]);
  });

  btnNuevo.addEventListener('click', () => {
    console.clear();
    inicializarJuego();
  });

 