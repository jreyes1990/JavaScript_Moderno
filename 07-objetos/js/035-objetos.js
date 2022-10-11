const nombre = "Monitor 20 pulgadas";
const precio = 300;
const disponible = true;

// Un objeto agrupa todo en una sola variable

// Object literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto)

console.log(producto.nombre)

console.log(producto['nombre'])

// Agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";

console.log(producto)

// Eliminar una propiedad del objeto
 delete producto.disponible

 console.log(producto)