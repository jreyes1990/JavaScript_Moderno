for(let i=0; i<=20; i++){
  if (i%2 === 0) {
    console.log(`El numero: ${i} es PAR`)
  }else{
    console.log(`El numero: ${i} es IMPAR`)
  }
}

const carrito =[
  {nombre: 'Monitor 27 Pulgadas', precio: 500},
  {nombre: 'Television', precio: 100},
  {nombre: 'Tablet', precio: 200},
  {nombre: 'Audifonos', precio: 300},
  {nombre: 'Teclado', precio: 400}
];

for(let j=0; j<carrito.length; j++){
  console.log(carrito[j])
}