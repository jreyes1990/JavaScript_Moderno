console.log('%c ESTRUCTURA DE CONTROL - OPERADOR TERNARIO PROTIP', 'color: yellow; font-weight: bold'); // Aplicando CSS al console.log
const elMayor = (a, b) => (a > b) ? a : b;
const tieneMembresia = (miembro) => (miembro) ? '$US.2.00' : '$US.10.00';

console.log(elMayor(75,50));
console.log(tieneMembresia(false));

const amigo = false;
const amigosArr = [
  'Peter',
  'Tony',
  'Dr. Strange',
  amigo ? 'Thor' : 'Loky',
  elMayor(15,36)
];
console.log(amigosArr);

const nota = 100;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C' : 'F';
console.log({grado});