class Persona{
  // TODO: Inicializando propiedades de clases
  nombre ='';
  codigo ='';
  frase ='';

  constructor(nombre='Sin nombre', codigo='Sin codigo', frase='Sin frase'){
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }
}

const spiderman = new Persona('Peter Parker','Spiderman','Soy tu amable vecino Spiderman');
const iroman = new Persona('Tony Startk','Iroman','Yo soy Iroman');
console.log(spiderman);
console.log(iroman);