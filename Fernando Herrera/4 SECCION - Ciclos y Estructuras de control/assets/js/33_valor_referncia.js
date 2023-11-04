console.log('%c PASO DE VARIABLES POR VALOR Y POR REFERENCIA', 'color: yellow; font-weight: bold'); // Aplicando CSS al console.log
console.log('%c Variable con valores primitivos', 'color: orange; font-weight: bold'); // Aplicando CSS al console.log
let a = 10;
let b = a;
console.log({a, b});

console.log('%c Variable con valores por referencia', 'color: orange; font-weight: bold'); // Aplicando CSS al console.log
let juan = {nombre: 'Juan'};
let ana = {...juan}; // Todo: {...} Operador spred
ana.nombre = 'Ana';
console.log({juan, ana});

const cambiaNombre = ({...persona}) => { // Todo: {...} Operador spred
  persona.nombre = 'Tony';
  return persona;
}
let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);
console.log({peter, tony});

console.log('%c Arreglos con valores por referencia', 'color: orange; font-weight: bold'); // Aplicando CSS al console.log
const frutas = ['Manzana','Pera','Pinia'];

console.time('Operador Spread');
const otrasFrutas = [...frutas]; // Todo: [...frutas] Operador spred o Ejemplo: frutas.slice()
console.timeEnd('Operador Spread');

console.time('Slice');
const otrasFrutas2 = frutas.slice(); // Todo: [...frutas] Operador spred o Ejemplo: frutas.slice()
console.timeEnd('Slice');

otrasFrutas.push('Mango');
console.table({frutas, otrasFrutas});