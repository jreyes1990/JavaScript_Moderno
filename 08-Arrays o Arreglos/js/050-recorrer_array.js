const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

meses[0] = "Nuevo Mes";
console.table(meses);

for (let i = 0; i < meses.length; i++) {
  console.log(`${i} ${meses[i]}`);
}

/*#########################################################################################################################*/

const carrito = [];

// Definir un producto
const producto = {
  nombre: "Monitor 32 pulgadas",
  precio: 400,
};

const producto2 = {
  nombre: "Celular",
  precio: 800,
};

carrito.push(producto);
carrito.push(producto2);

const producto3 = {
  nombre: "Teclado",
  precio: 50,
};

carrito.unshift(producto3);

console.table(carrito);

let resultado;

resultado = [...carrito, producto];

resultado = [...resultado, producto2];

resultado = [producto3, ...resultado];

console.table(resultado);

/*#########################################################################################################################*/
const producto4 = {
  nombre: "Celular 2",
  precio: 100,
};

carrito.push(producto4);

console.table(carrito);

// Eliminar ultimo elemento de un arreglo
carrito.pop();
console.table(carrito);

// Eliminar del inicio del arreglo
carrito.shift();
console.table(carrito);

carrito.splice(1, 1);
console.table(carrito);

/*#########################################################################################################################*/
// Destructuring con arreglos
const numeros = [10, 20, 30, 40, 50];

const [primero, ...tercero] = numeros;

console.table(tercero);

/*#########################################################################################################################*/
// Iterar un Array
carrito.forEach(function (producto) {
  console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});

/*#########################################################################################################################*/
// Uso de map
carrito.map(function (producto) {
  console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});
