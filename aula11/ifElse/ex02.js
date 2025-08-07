let maiorIdade = 18;
let cartaCondução = false;

if (maiorIdade >= 18 && cartaCondução == true){
	console.log("Pode conduzir.")
}
else if (maiorIdade >= 18 && !cartaCondução){
	console.log("Não pode conduzir. Maior de idade mas nao tem carta.")
}
else{
	console.log("Não pode conduzir.")
}
