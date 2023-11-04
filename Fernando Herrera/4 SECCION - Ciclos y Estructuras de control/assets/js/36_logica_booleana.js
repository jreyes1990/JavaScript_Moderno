console.log('%c ESTRUCTURA DE CONTROL - BOOLEAN', 'color: yellow; font-weight: bold'); // Aplicando CSS al console.log
const regresaTrue = () => {
  console.log('Regresa true');
  return true;
}

const regresaFalse = () => {
  console.log('Regresa false');
  return false;
}

console.warn('Not o la negacion');
console.log(true);
console.log(!true);
console.log(!regresaFalse());

console.warn('And');
console.log(true && true);
console.log(true && !false);
console.log(regresaFalse() && regresaTrue());
console.log(regresaTrue() && regresaFalse());

console.warn('Or');
console.log(true || false);
console.log(regresaTrue() || regresaFalse());