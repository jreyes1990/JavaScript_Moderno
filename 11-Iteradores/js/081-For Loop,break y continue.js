/*
for (let i=0; i<= 10; i++) {
  if (i==5) {
    console.log('CINCO')
    continue;
  }
  console.log(`Numero: ${i}`)
}
*/

const carrito = [
  {nombre: 'Monitor de 27 pulgadas', precio: 500},
  {nombre: 'Television', precio: 100},
  {nombre: 'Tablet', precio: 200, descuento: true},
  {nombre: 'Auriculares', precio: 300},
  {nombre: 'Teclado', precio: 400, descuento: true},
  {nombre: 'Celular', precio: 700},
];

for (let i=0; i<carrito.length; i++){
  if (carrito[i].descuento) {
    console.log(`El articulo ${carrito[i].nombre}, tiene descuento`)
    continue;
  }
  console.log(carrito[i].nombre)
}