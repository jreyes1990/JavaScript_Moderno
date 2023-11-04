console.log('%c ESTRUCTURA CICLICAS - WHILE Y DO WHILE', 'color: yellow; font-weight: bold'); // Aplicando CSS al console.log
const carros = ['Ford','Mazda','Honda','Toyota'];

console.log('%c WHILE', 'color: orange; font-weight: bold'); // Aplicando CSS al console.log
let i = 0;
while(i < carros.length){
  console.log(carros[i]);
  i += 1;
  // i = i+1;
  // i++;
}

console.log('%c DO WHILE', 'color: orange; font-weight: bold'); // Aplicando CSS al console.log
let j = 0;
do {
  console.log(carros[j]);
  // i += 1;
  j = j+1;
  // i++;
} while(j < carros.length);