const usuario=true;
const puedePagar=true;

if (usuario && puedePagar) {
  console.log('Si puedes comprar.....')
}else if (!usuario && !puedePagar) {
  console.log('No puedes comprar.....')
}else if (!usuario) {
  console.log('Inicia sesion o Saca una cuenta.....')
}else if (!puedePagar) {
  console.log('Fondos Insuficientes.....')
}