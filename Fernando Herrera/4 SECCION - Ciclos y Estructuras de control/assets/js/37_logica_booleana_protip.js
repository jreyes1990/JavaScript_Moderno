console.log('%c ESTRUCTURA DE CONTROL - BOOLEAN PROTIP', 'color: yellow; font-weight: bold'); // Aplicando CSS al console.log
console.warn('Asignaciones');
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;
const a1= false && 'Hola mundo' && 150;
const a2 = 'Hola' && 'Mundo';
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso';

console.log({a1, a2, a3, a4});