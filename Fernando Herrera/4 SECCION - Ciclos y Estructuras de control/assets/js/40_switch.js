console.log('%c ESTRUCTURA DE CONTROL - SWITCH', 'color: yellow; font-weight: bold'); // Aplicando CSS al console.log
const dia = 2;

switch(dia){
  case 0:
    console.log('Domingo');
    break;
  case 1:
    console.log('Lunes');
    break;
  case 2:
    console.log('Martes');
    break;
  default:
    console.log('El dia no existe, Verifique!!');
}