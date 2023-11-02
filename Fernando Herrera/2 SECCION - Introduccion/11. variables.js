// Comentarios
/* Comentarios */

let   a = 10; // Forma actual de crear variables
var   b = 10; // Forma antigua de crear variables
const c = 10;
let   d = 'Spiderman';

// c = 20; // No se puede hacer

a = 20;
b = 30;

console.log(`a = ${a} y b = ${b}`);

console.log('%c *** Mis variables ***', 'color: blue; font-weight: bold'); // Aplicando CSS al console.log
console.warn({b}); // Mensaje de alerta
console.error({a}); // Mensaje de error
console.info({c});
console.table({d}); // Mensaje dentro de una tabla