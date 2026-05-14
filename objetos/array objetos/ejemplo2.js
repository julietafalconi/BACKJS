const estudiantes = [
  { nombre: "Valentina", edad: 22, aprobado: true },
  { nombre: "Martina", edad: 19, aprobado: false },
  { nombre: "Camila", edad: 24, aprobado: true },
];
for (const estudiante of estudiantes) {
  console.log(estudiante.nombre);
}
for (const estudiante of estudiantes) {
  if (estudiante.aprobado) {
    console.log(estudiante.nombre + " aprobó el curso");
  } else {
    console.log(estudiante.nombre + " no aprobó");
  }
}
