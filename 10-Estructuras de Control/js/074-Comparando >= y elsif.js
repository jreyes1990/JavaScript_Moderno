const dinero=100;
const totalAPagar=300;
const tarjeta=true;
const cheque=false;

if(dinero >= totalAPagar){
  console.log('Si podemos pagar')
}else if(cheque){
  console.log('Si tengo un cheque');
}else if(tarjeta){
  console.log('Si puedo pagar, porque tengo la tarjeta');
}else{
  console.log('Fondos Insuficientes')
}
