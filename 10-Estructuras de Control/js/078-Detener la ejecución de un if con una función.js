const autenticado=true;
const puntaje=350;

if (autenticado) {
  console.log('El usuario esta autenticado')
  revisarPuntaje();
}

function revisarPuntaje(){
  if (puntaje>400) {
    console.log('Excelente.....')
    return;
  }

  if (puntaje>300) {
    console.log('Buen puntaje, felicidades.....')
    return;
  }
}