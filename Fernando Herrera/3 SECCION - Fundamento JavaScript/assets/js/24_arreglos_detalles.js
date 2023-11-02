console.log('%c ARREGLOS-DETALLES', 'color: orange; font-weight: bold'); // Aplicando CSS al console.log
let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log(juegos);

console.log('Cantidad de juegos: '+juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length-1];
console.log({primero, ultimo});

console.log('%c Recorrido de elementos con forEach', 'color: green; font-weight: bold'); // Aplicando CSS al console.log
juegos.forEach((elemento, indice, arr) => {
  console.log({elemento, indice, arr});
});

console.log('%c Insertar un nuevo elemento', 'color: yellow; font-weight: bold'); // Aplicando CSS al console.log
let nuevoJuego = juegos.push('F-Zero');
console.log({nuevoJuego, juegos});

console.log('%c Insertar un nuevo elemento al principio', 'color: yellow; font-weight: bold'); // Aplicando CSS al console.log
nuevoJuego = juegos.unshift('Fire emblem');
console.log({nuevoJuego, juegos});

console.log('%c Eliminar el ultimo elemento', 'color: red; font-weight: bold'); // Aplicando CSS al console.log
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

console.log('%c Eliminar un elemento, en una posicion especifica', 'color: red; font-weight: bold'); // Aplicando CSS al console.log
let pos = 1;
let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});

console.log('%c Buscar un indice de un elemento', 'color: purple; font-weight: bold'); // Aplicando CSS al console.log
let metroIdIndex = juegos.indexOf('Chrono');
console.log({metroIdIndex, juegos});