const puntaje =1000;
const puntaje2 ="1001";

console.log('***** COMPARACION NO ESTRICTO *****')
console.log(`Tipo Dato: ${typeof puntaje}`)
if(puntaje==1000){
  console.log('SI es Igual.....')
}else{
  console.log('NO es Igual.....')
}

console.log('***** COMPARACION ESTRICTO *****')
console.log(`Tipo Dato: ${typeof puntaje2}`)
if(puntaje2===1000){
  console.log('SI es Igual.....')
}else{
  console.log('NO es Igual.....')
}