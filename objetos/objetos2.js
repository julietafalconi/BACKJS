const libro = {
  titulo: "Cien años de soledad",
  autor: "Gabriel Garcia Marquez",
  paginas: 471,
  leido: false,
};

// a
console.log(libro.titulo);

//b
const propiedad = "paginas";
console.log(libro[propiedad]);
console.log(libro["paginas"]);

//C
console.log(libro.reseña);

//d
libro.leido = true;
console.log(libro);
