console.log('%c ESTRUCTURA DE CONTROL - IF Y ELSE', 'color: yellow; font-weight: bold'); // Aplicando CSS al console.log
let a = 10;

if (a >= 10){
  console.log('A es mayor o igual a 10');
}else{
  console.log('A es menor a 10');
}

const hoy = new Date(); // TODO: new sirve para crear nuevas instancias o objetos
let dia = hoy.getDay(); // TODO: 0-Domingo, 1-Lunes, 2-Martes, ...
console.log(hoy);
console.log(dia);

if (dia === 0){
  console.log('Domingo');
}else if (dia === 1){
  console.log('Lunes');
}else{
  console.log('No es Lunes ni Domingo');
}

console.log('%c LABORATORIO - ALTERNATIVA IF Y ELSE', 'color: yellow; font-weight: bold'); // Aplicando CSS al console.log
const diaSemana = [
  {dia: 0, nombre: 'Domingo'},
  {dia: 1, nombre: 'Lunes'},
  {dia: 2, nombre: 'Martes'},
  {dia: 3, nombre: 'Miercoles'},
  {dia: 4, nombre: 'Jueves'},
  {dia: 5, nombre: 'Viernes'},
  {dia: 6, nombre: 'Sabado'},
];

dia = 5;
console.log(diaSemana[dia] || 'Dia no definido');