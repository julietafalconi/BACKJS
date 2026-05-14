function validarContraseña(contraseña) {
  if (contraseña.length < 8) {
    return false;
  } else if (contraseña === "") {
    return false;
  } else {
    return true;
  }
}
console.log(validarContraseña(12345678));
console.log(validarContraseña(""));
