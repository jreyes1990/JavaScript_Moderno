"use strict"

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto)

Object.freeze(producto);

console.log(Object.isFrozen(producto))

producto.imagen = "imagen.jpg";

console.log(producto)