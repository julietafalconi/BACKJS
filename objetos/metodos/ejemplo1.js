const persona = {
  nombre: "Valentina",
  apellido: "Garcia",
  edad: 28,
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
  esMayorDeEdad: function () {
    return this.edad >= 18;
  },
};
console.log(persona.nombreCompleto());
console.log(persona.esMayorDeEdad());
