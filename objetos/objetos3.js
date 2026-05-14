//nombre, precio (number), stock (number), disponible (boolean).
//a) Imprimí el precio original.
//b) Aplicá un descuento del 20% al precio y actualizá la propiedad.
//c) Si el stock es 0, cambiá disponible a false.
//d) Agregá una propiedad nueva: categoria con el valor que quieras.
//e) Imprimí el objeto final completo.

const producto = {
  nombre: "nintendo",
  precio: 300,
  stock: 8,
  disponible: true,
};

// a
console.log("El precio original es: " + producto.precio + "USD");

// b
console.log("precio original: " + producto.precio + "USD");
producto.precio = producto.precio * 0.8;
console.log("Precio con descuento: " + producto.precio + "USD");

//c
if (producto.stock === 0) {
  producto.disponible = false;
}
console.log(producto.disponible);

//d
producto.categoria = "Electronica";

//e
console.log(producto);
