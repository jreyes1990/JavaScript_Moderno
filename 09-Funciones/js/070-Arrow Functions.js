const reproductor = {
  cancion: '',
  reproducir: id => console.log(`Reproduciendo cancion con el id ${id}`),
  pausar: () => console.log('Pausando .....'),
  borrar: id => console.log(`Borrando cancion..... ${id}`),
  crearPlayList: nombre => console.log(`Creando la playlist de ${nombre}`),
  reproducirPlayList: nombre => console.log(`Reproduciendo la playlist ${nombre}`),

  // set: Agregando los valores
  set nuevaCancion(cancion){
    this.cancion = cancion;
    console.log(`Añadiendo ${cancion}`);
  },
  // get: Obteniendo los valores
  get obtenerCancion(){
    console.log(`${this.cancion}`);
  }
}

reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlayList('Heavy Metal');
reproductor.crearPlayList('Rock 90s');
reproductor.reproducirPlayList('Heavy Metal');
