function tirarDado() {
  return Math.round(Math.random() * 5) + 1;
}
console.log(tirarDado());
for (let index = 0; index < 100000; index++) {
  if (tirarDado() < 1 || tirarDado() > 6) {
    console.log("error");
  }
}
