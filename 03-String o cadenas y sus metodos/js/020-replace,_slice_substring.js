const producto = 'Monitor 20 pulgadas';

console.log(producto)

// Replazar un texto
console.log(`Uso de replace(): ${producto.replace('pulgadas','"')}`)
console.log(`Uso de replace(): ${producto.replace('Monitor','Monitor Curvo')}`)

// Extraer/Cortar una parte de la cadena, si el primer numero es mayor al segundo, no hara nada
console.log(`Uso de slice(): ${producto.slice(0,10)}`)
console.log(`Uso de slice(): ${producto.slice(8)}`)

// Alternativa a substring, si el primer numero es mayor al segundo, cambiar de posicion
console.log(`Uso de substring(): ${producto.substring(0,10)}`)
console.log(`Uso de substring(): ${producto.substring(2,1)}`)


const usuario = "Jolberth";

console.log(`Uso de substring(): ${usuario.substring(0,1)}`)
console.log(`Uso de charAt(): ${usuario.charAt(0)}`)