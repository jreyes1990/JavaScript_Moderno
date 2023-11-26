const producto = "Monitor 20 pulgadas";
console.log(producto);

// TODO: Reemplazar el texto de una cadena
console.log('******** Uso de replace(campo, reemplazo) ********');
console.log(producto.replace("pulgadas",'"'));
console.log(producto.replace("Monitor",'Monitor Curvo'));

// TODO: Cortar una parte de la cadena de texto
console.log('******** Uso de slice(posicionInicio, posicionFinal) ********');
// El primer numero debe ser menor al segundo
console.log(producto.slice(0,10));
console.log(producto.slice(8));
console.log(producto.slice(2,1));

// TODO: Alternativa a slice
console.log('******** Uso de substring(posicionInicio, posicionFinal) ********');
console.log(producto.substring(0,10));
console.log(producto.substring(2,1));

console.log('******** Uso de charAt(posicion) ********');
console.log(producto.charAt(5));