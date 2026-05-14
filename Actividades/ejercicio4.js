let num1 = 10;
let num2 = 0;
let operacion = "dividir";

let resultado;

if (operacion === "sumar") {
  resultado = num1 + num2;
} else if (operacion === "restar") {
  resultado = num1 - num2;
} else if (operacion === "multiplicar") {
  resultado = num1 * num2;
} else if (operacion === "dividir") {
  if (num2 === 0) {
    console.log("Error: no se puede dividir entre cero");
  } else {
    resultado = num1 / num2;
  }
} else {
  console.log("Operación no válida");
}
if (resultado !== undefined) {
  console.log("Resultado:", resultado);
}
