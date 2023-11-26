const producto = "     Monitor 20 pulgadas     ";
console.log(producto);
console.log(`Caracteres: ${producto.length}`);

// TODO: Eliminar del inicio.....
console.log('******** Uso de trimStart() ********');
let trimInicio = producto.trimStart();
console.log(trimInicio);
console.log(`Caracteres: ${trimInicio.length}`);

// TODO: Eliminar del final.....
console.log('******** Uso de trimEnd() ********');
let trimFin = producto.trimEnd();
console.log(trimFin);
console.log(`Caracteres: ${trimFin.length}`);

// TODO: Eliminar en ambas direcciones.....
console.log('******** Uso de trimStart() y trimEnd() ********');
let trimAmbas = producto.trimStart().trimEnd();
console.log(trimAmbas);
console.log(`Caracteres: ${trimAmbas.length}`);

// TODO: Eliminar espacios en ambas direcciones.....
console.log('******** Uso de trim() ********');
let trimTotal = producto.trim();
console.log(trimTotal);
console.log(`Caracteres: ${trimTotal.length}`);