console.log('%c FUNCIONES', 'color: orange; font-weight: bold'); // Aplicando CSS al console.log
console.log('%c Funciones tradicionales', 'color: blue; font-weight: bold'); // Aplicando CSS al console.log
function saludar(nombre){
  console.log(arguments);
  console.log('Hola '+nombre);
}
saludar('Jolberth Reyes',40,true,'Costa Rica');

const saludar2 = function(nombre){
  console.log('Hola '+nombre);
}
saludar2('Alberto Lopez');

console.log('%c Funciones de flecha', 'color: blue; font-weight: bold'); // Aplicando CSS al console.log
const saludarFlecha = () => {
  console.log('Hola flecha');
}
saludarFlecha();

const saludarFlecha2 = (nombre) => {
  console.log('Hola '+nombre);
}
saludarFlecha2('Carmen Gonzalez');

console.log('%c Funciones de retorno', 'color: blue; font-weight: bold'); // Aplicando CSS al console.log
function sumar(a,b){
  return a+b;
}
console.log(sumar(1,2));

const sumar2 = (a,b) =>{
  return a+b;
}
console.log(sumar2(3,2));

const sumar3 = (a,b) => a+b;
console.log(sumar3(10,5));

function getAleatorio(){
  return Math.random();
}
console.log(getAleatorio());

const getAleatorio2 = () => Math.random();
console.log(getAleatorio2());