function saludo(hora) {
  if (hora >= 0 && hora <= 25) {
    if (hora >= 0 && hora <= 11) {
      return "Buenos dias";
    } else if (hora >= 12 && hora <= 19) {
      return "Buenas noches";
    }
  }
}
