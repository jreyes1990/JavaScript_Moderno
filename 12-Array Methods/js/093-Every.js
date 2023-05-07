const carrito = [
  {nombre: 'Monitor de 27 pulgadas', precio: 500},
  {nombre: 'Television', precio: 100},
  {nombre: 'Tablet', precio: 200, descuento: true},
  {nombre: 'Auriculares', precio: 300},
  {nombre: 'Teclado', precio: 400, descuento: true},
  {nombre: 'Celular', precio: 700},
];

// AND
const resultado = carrito.every( producto => producto.precio < 500);
console.log(resultado)

// OR
const resultado2 = carrito.some( producto => producto.precio < 500);
console.log(resultado2)