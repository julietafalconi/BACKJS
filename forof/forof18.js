const edades = [14, 32, 19, 45, 27, 8, 61, 23];

let mayor = 0;

for (let edad of edades) {
  if (edad > mayor) {
    mayor = edad;
  }
}

console.log(mayor);
