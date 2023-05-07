const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'];

const carrito = [
  {nombre: 'Monitor de 27 pulgadas', precio: 500},
  {nombre: 'Television', precio: 100},
  {nombre: 'Tablet', precio: 200, descuento: true},
  {nombre: 'Auriculares', precio: 300},
  {nombre: 'Teclado', precio: 400, descuento: true},
  {nombre: 'Celular', precio: 700},
];

meses.forEach( (mes, i) => {
  console.log(`Posicion ${i}: ${mes}`);
});

// Encontrar el indice de Abril
const indice = meses.findIndex( mes => mes === 'Abril' );
console.log(`Posicion Abril: ${indice}`);

// Encontrar un indice de un arreglo de objetos...
const indice2 = carrito.findIndex( producto => producto.precio === 100 );
console.log(`Encontrando el precio 100 en la posicion ${indice2}`);