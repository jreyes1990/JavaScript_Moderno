const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

pendientes.forEach((pendiente, indice) => {
  console.log(`${indice} : ${pendiente}`)
});

const nuevoArreglo = pendientes.forEach( pendiente => pendiente);

const nuevoArreglo2 = pendientes.map((pendiente) => pendiente);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);