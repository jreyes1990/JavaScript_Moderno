const metodoPago='Cheque';

switch (metodoPago) {
  case 'Efectivo':
    console.log(`Pagaste con ${metodoPago}`)
    break;
  case 'Cheque':
    console.log(`Pagaste con ${metodoPago}`)
    break;

  default:
    console.log('Aun no has seleccionado un metodo de pago o no esta soportado')
    break;
}