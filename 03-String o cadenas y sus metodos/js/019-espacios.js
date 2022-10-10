const producto = '          Monitor 20 pulgadas          ';

console.log(producto)
console.log(producto.length)

// Eliminar espacios del inicio
console.log(`Uso de trimStart(): ${producto.trimStart()}`)

// Eliminar espacios al final
console.log(`Uso de trimEnd(): ${producto.trimEnd()}`)

// Eliminar espacio del inicio y final
console.log(`Uso de trimStart() y trimEnd(): ${producto.trimStart().trimEnd()}`)

console.log(`Uso de trim(): ${producto.trim()}`)