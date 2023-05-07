const carrito = [
  {nombre: 'Monitor de 27 pulgadas', precio: 500},
  {nombre: 'Television', precio: 100},
  {nombre: 'Tablet', precio: 200, descuento: true},
  {nombre: 'Auriculares', precio: 300},
  {nombre: 'Teclado', precio: 400, descuento: true},
  {nombre: 'Celular', precio: 700},
];

// Con un forEach
let resultado = '';
carrito.forEach( (producto, index) => {
  if (producto.nombre === 'Tablet') {
    resultado = carrito[index];
  }
});
console.log("Resultado con forEach")
console.log(resultado);

// Con un .find
const resultado2 = carrito.find( producto => producto.nombre === 'Tablet' );
console.log("Resultado con .find")
console.log(resultado2);