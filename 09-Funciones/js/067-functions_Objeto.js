const reproductor = {
  cancion: '',

  reproducir: function (id) {
    console.log(`Reproduciendo cancion con el id ${id}`)
  },
  pausar: function(){
    console.log('Pausando .....')
  },
  borrar: function(id){
    console.log(`Borrando cancion..... ${id}`)
  },
  crearPlayList: function(nombre){
    console.log(`Creando la playlist de ${nombre}`)
  },
  reproducirPlayList: function(nombre){
    console.log(`Reproduciendo la playlist ${nombre}`)
  },

  set nuevaCancion(cancion){
    this.cancion = cancion;
    console.log(`Añadiendo ${cancion}`)
  },
  get obtenerCancion(){
    console.log(`${this.cancion}`)
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
