const carrito = [
  {nombre: 'Monitor de 27 pulgadas', precio: 500},
  {nombre: 'Television', precio: 100},
  {nombre: 'Tablet', precio: 200, descuento: true},
  {nombre: 'Auriculares', precio: 300},
  {nombre: 'Teclado', precio: 400, descuento: true},
  {nombre: 'Celular', precio: 700},
];

let resultado;
resultado = carrito.filter( producto => producto.precio > 400 );
console.log(resultado);

let resultado2;
resultado2 = carrito.filter( producto => producto.precio < 600 );
console.log(resultado2);

let resultado3;
resultado3 = carrito.filter( producto => producto.nombre !== 'Auriculares' );
console.log(resultado3);