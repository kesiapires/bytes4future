let carro = {marca: "opel", modelo: "corsa", ano: 1998, cor: "azul"}
console.log(carro);
carro.cor = "preto";
console.log(carro);
carro.quilometragem = "35000km";
console.log(carro);
delete carro.quilometragem;
console.log("carro: ", carro);

