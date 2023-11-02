console.log('%c OBJETO LITERAL', 'color: orange; font-weight: bold'); // Aplicando CSS al console.log
let personaje = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.70
  },
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
  direccion: {
    zip: '10880, 90265',
    ubicacion: 'Malibu, California'
  }
};

console.log(personaje);
console.log('Nombre ', personaje.nombre);
console.log('Edad ', personaje['edad']);
console.log('Coordenadas ', personaje['coords']);
console.log('Latitud ', personaje['coords']['lat']);
console.log('No. Trajes ', personaje.trajes.length);
console.log('Ultimo Traje ', (personaje.trajes[personaje.trajes.length-1]));

const x = 'vivo';
console.log('Vivo ', personaje[x]);

console.log('%c OBJETO LITERAL - DETALLES', 'color: orange; font-weight: bold'); // Aplicando CSS al console.log
console.log('%c Eliminar una propiedad', 'color: red; font-weight: bold'); // Aplicando CSS al console.log
delete personaje.edad;
console.log(personaje);

personaje.casado = true;
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

Object.freeze(personaje);

console.log('%c Obteniendo las propiedades de un objeto', 'color: blue; font-weight: bold'); // Aplicando CSS al console.log
const propiedades = Object.getOwnPropertyNames(personaje);
console.log(propiedades);

console.log('%c Obteniendo los valores de un objeto', 'color: blue; font-weight: bold'); // Aplicando CSS al console.log
const valores = Object.values(personaje);
console.log(valores);