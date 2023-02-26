const autenticado=true;
const puedePagar=true;

console.log(autenticado && puedePagar ? 'Si puede pagar' : 'No esta autenticado')

console.log(autenticado ? puedePagar ? 'Si esta autenticado y puede pagar.....' : 'Si esta autenticado, no puede pagar.....' : 'No esta autenticado')