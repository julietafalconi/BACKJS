const peliculas = [
  { titulo: "Toy Story", anio: 1995, puntaje: 8.3 },
  { titulo: "El Rey Leon", anio: 1994, puntaje: 8.5 },
  { titulo: "Eterno Resplandor", anio: 2004, puntaje: 8.3 },
  { titulo: "Parasite", anio: 2019, puntaje: 8.6 },
];

//a) Imprimí el título de la primera película.
console.log(peliculas[0].titulo);

//b) Imprimí el puntaje de la última película usando length.
console.log(peliculas[peliculas.length - 1]);

//c) Cambiá el puntaje de "Toy Story" a 9.0.
peliculas[0].puntaje = 9.0;
console.log(peliculas[0].puntaje);

//d) Agregá una nueva película al final del array con push.
peliculas.push({ titulo: "Avengers", anio: 2004, puntaje: 10 });
console.log(peliculas);
