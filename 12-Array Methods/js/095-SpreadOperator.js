const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'];

const carrito = [
  {nombre: 'Monitor de 27 pulgadas', precio: 500},
  {nombre: 'Television', precio: 100},
  {nombre: 'Tablet', precio: 200, descuento: true},
  {nombre: 'Auriculares', precio: 300},
  {nombre: 'Teclado', precio: 400, descuento: true},
  {nombre: 'Celular', precio: 700},
];

// Spread Operator con arreglos de indices
const meses2 = [...meses, 'Septiembre'];
console.log(meses2);


const producto = {nombre: 'Disco Duro', precio: 300};
const carrito2 = [...carrito, producto];
console.log(carrito2);