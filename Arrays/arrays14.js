const paises = ["Argentina", "Uruguay", "Brasil", "Chile", "Paraguay"];

//a
paises[2] = "bolivia";
console.log(paises);

//b
paises.push("Peru");
console.log(paises);

//c
paises.unshift("Venezuela");
console.log(paises);

//d
paises.pop("peru");
console.log(paises);

//e
console.log(paises.length);
