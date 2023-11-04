console.log('%c ESTRUCTURA DE CONTROL - OPERADOR TERNARIO', 'color: yellow; font-weight: bold'); // Aplicando CSS al console.log
/** Dias de la semana abrimos a las 11,
  * pero los fines de semana abrimos a las 9
  */
// Entra a un sitio web, para consultar si esta abierto hoy
const dia = 5;
const horaActual = 10;
let horaApertura;
let mensaje; // Esta abierto, Esta cerrado, hoy abrimos a las XX

// if (dia === 0 || dia === 6){
//   console.log('Fin de semana');
//   horaApertura =9;
// }else{
//   console.log('Dia de semana');
//   horaApertura =11;
// }

// if (horaActual >= horaApertura){
//   mensaje = 'Esta abierto';
// }else{
//   mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
// }

horaApertura = ([0,6].includes(dia)) ? 9 : 11;
mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log({horaApertura, mensaje});