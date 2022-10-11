"use strict"

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto)

// Congelar el objeto, no puede crear, modificar y eliminar
//Object.freeze(producto);

console.log(`Esta congelado?: ${Object.isFrozen(producto)}`)

//producto.imagen = "imagen.jpg";

console.log(producto)

// Sellar el objeto, solo puede modificar datos de un objeto

Object.seal(producto);

console.log(`Esta sellado?: ${Object.isSealed(producto)}`)

producto.disponible = false;

console.log(producto)
