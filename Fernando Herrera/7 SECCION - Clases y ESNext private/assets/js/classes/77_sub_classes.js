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

class Heroe extends Persona{
  clan = 'Sin Clan';

  constructor(nombre, codigo, frase){
    super(nombre, codigo, frase); // TODO: Hace referencia a la clase que extiendo (Persona)
    this.clan = 'Los Avengers';
  }

  quienSoy(){
    console.log(`Soy ${this.nombre}, ${this.clan}`);
    super.quienSoy();
  }
}



const spiderman = new Heroe('Peter Parker','Spiderman','Soy tu amable vecino Spiderman');
console.log(spiderman);
spiderman.quienSoy();