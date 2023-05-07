const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'];
const meses2 = ['Septiembre', 'Octubre'];
const meses3 = ['Noviembre', 'Diciembre'];

// .concat
const resultado = meses.concat(meses2, meses3);

console.log(resultado)

// spread operator
const resultado2 = [...meses, ...meses2, ...meses3];
console.log(resultado2)
