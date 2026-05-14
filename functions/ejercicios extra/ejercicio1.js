function calcularPropina(totalCuenta, porcentaje) {
  return totalCuenta / porcentaje;
}
console.log(calcularPropina(1000, 10));

function totalConPopina(totalCuenta, porcentaje) {
  return totalCuenta + calcularPropina(totalCuenta, porcentaje);
}
console.log(totalConPopina(1000, 10));
