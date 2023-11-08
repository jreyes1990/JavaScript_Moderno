class Persona{
  /** 
    * TODO: Inicializando propiedades de clases
  */
  static _conteo = 0;

  static get conteo(){
    return Persona._conteo+' instancias';
  }
  
  static mensaje(){
    console.log(this.nombre);
    console.log('Hola a todos, soy un metodo statico');
  }

  nombre ='';
  codigo ='';
  frase ='';
  comida = '';

  constructor(nombre='Sin nombre', codigo='Sin codigo', frase='Sin frase'){
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    Persona._conteo++;
  }

  /** 
    * TODO: Uso de Sets (Establecer un valor) y Gets (Recuperar un valor)
  */
  set setComidaFavorita(comida){
    this.comida = comida.toUpperCase();
  }

  get getComidaFavorita(){
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  /** 
    * TODO: Creacion de metodo dentro de las clases
  */
  quienSoy(){
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

  miFrase(){
    this.quienSoy();
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}

const spiderman = new Persona('Peter Parker','Spiderman','Soy tu amable vecino Spiderman');
const iroman = new Persona('Tony Startk','Iroman','Yo soy Iroman');
console.log(spiderman);
console.log(iroman);

spiderman.quienSoy();
iroman.quienSoy();

spiderman.miFrase();
iroman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tia May';
console.log(spiderman);
console.log(spiderman.getComidaFavorita);

console.log('Conteo Statico: '+Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();