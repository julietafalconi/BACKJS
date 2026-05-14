const cancion = {
  titulo: "New Rmantics",
  artista: "Taylor Swift",
  año: "2014",
  duracion: 262,
  favorita: "true",

  describir: function () {
    return this.titulo + " de " + this.artista + " , " + this.año;
  },
  duracionEnMinutos: function () {
    return Math.floor(this.duracion / 60);
  },
};
console.log(cancion.describir());
