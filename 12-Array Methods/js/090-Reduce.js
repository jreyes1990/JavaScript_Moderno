const carrito = [
  {nombre: 'Monitor de 27 pulgadas', precio: 500},
  {nombre: 'Television', precio: 100},
  {nombre: 'Tablet', precio: 200, descuento: true},
  {nombre: 'Auriculares', precio: 300},
  {nombre: 'Teclado', precio: 400, descuento: true},
  {nombre: 'Celular', precio: 700},
];

// Con un forEach
let total = 0;
carrito.forEach( producto => total += producto.precio );
console.log(`Total: ${total}`);

// Con un reduce
let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0 );
console.log(`Total: ${resultado}`);