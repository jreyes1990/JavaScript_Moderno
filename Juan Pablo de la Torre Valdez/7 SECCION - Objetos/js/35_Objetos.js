const nombre = "Monitor 20 pugadas";
const precio = 300;
const disponible = true;

// TODO: Un objeto agrupa todo en una sola variable
const producto = {
  nombre: "Monitor 20 pugadas",
  precio: 300,
  disponible: true
};

console.log(producto);

console.log('******** Acceder valores de un objeto ********');
console.log(producto.nombre, producto.precio, producto.disponible);

console.log(producto['precio']);