const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'];

const carrito = [
  {nombre: 'Monitor de 27 pulgadas', precio: 500},
  {nombre: 'Television', precio: 100},
  {nombre: 'Tablet', precio: 200, descuento: true},
  {nombre: 'Auriculares', precio: 300},
  {nombre: 'Teclado', precio: 400, descuento: true},
  {nombre: 'Celular', precio: 700},
];

// Comprobar si un valor existe en un arreglo
meses.forEach( (mes) => {
  if (mes === 'Enero') {
    console.log(`${mes} si existe`);
  }
});

const resultado = meses.includes('Diciembre');
console.log(resultado);

// En un arreglo de objetos se utiliza .some
const existe = carrito.some( producto => {
  return producto.nombre === 'Monitor Curvo';
});

console.log(existe);

// En un arreglo tradicional con .some
const existe2 = meses.some( mes => mes === 'Febrero');
console.log(existe2);