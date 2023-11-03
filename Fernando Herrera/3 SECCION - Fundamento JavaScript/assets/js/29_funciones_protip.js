console.log('%c Funciones tradicionales', 'color: yellow; font-weight: bold'); // Aplicando CSS al console.log
function crearPersona(nombre, apellido){
  return {
    nombre: nombre,
    apellido: apellido
  }
}
const personas = crearPersona('Jolberth','Reyes');
console.log(personas);

function imprimeArgumentos(){
  console.log(arguments);
}
imprimeArgumentos(10,true,false,'Carmen','Hola bebe');

console.log('%c Funciones de flecha', 'color: orange; font-weight: bold'); // Aplicando CSS al console.log
const crearPersona2 = (nombre, apellido) => ({nombre: nombre, apellido: apellido});
const personas2 = crearPersona2('Carmen','Gonzalez');
console.log(personas2);

const imprimeArgumentos2 = (...args) => {
  // console.log(args);
  return args;
}
const argumentos = imprimeArgumentos2(10,true,false,'Jolberth Reyes','Hola bebe');
console.log({argumentos});

const [id, casado, vivo, nombre, saludo] = imprimeArgumentos2(10,true,false,'Jolberth Reyes','Hola bebe');
console.log({id, casado, vivo, nombre, saludo});

const {nombre: nombrePersona} = crearPersona('Jolberth','Reyes');
console.log({nombrePersona});

const tony = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  vivo: false,
  edad: 40,
  trajes: ['Mark I','Mark V','Hulkbuster']
}

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes}) => {
  console.log({nombre});
  console.log({codeName});
  console.log({vivo});
  console.log({edad});
  console.log({trajes});
}
imprimePropiedades(tony);