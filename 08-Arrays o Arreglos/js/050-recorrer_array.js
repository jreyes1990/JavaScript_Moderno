const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio'];

meses[0] = 'Nuevo Mes';
console.table(meses)

for(let i=0; i<meses.length; i++){
    console.log(`${i} ${meses[i]}`)
}


/*#########################################################################################################################*/

const carrito = [];

// Definir un producto
const producto = {
    nombre: 'Monitor 32 pulgadas',
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

carrito.push(producto);
carrito.push(producto2);


const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

carrito.unshift(producto3);

console.table(carrito)

let resultado;

resultado = [...carrito, producto];

resultado = [...resultado, producto2];

resultado = [producto3, ...resultado];

console.table(resultado)