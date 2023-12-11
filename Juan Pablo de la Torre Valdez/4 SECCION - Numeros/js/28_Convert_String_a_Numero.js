const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log('******** Convertir String a Numero ********');

console.log(`Convertir el numero1 (tipo de dato ${typeof numero1} a numero)`);
console.log(Number.parseInt(numero1));

console.log(`Convertir el numero2 (tipo de dato ${typeof numero2} a decimal)`);
console.log(Number.parseFloat(numero2));

console.log('******** Validar si el numero es entero o no ********');
console.log(Number.isInteger(numero1));
console.log(Number.isInteger(numero2));
console.log(Number.isInteger(numero3));
console.log(Number.isInteger(numero4));