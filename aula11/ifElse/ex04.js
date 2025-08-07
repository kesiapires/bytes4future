let notaEstudante = 88;
if (notaEstudante >= 90 && notaEstudante <= 100){
	console.log("A")
}
else if (notaEstudante >= 70 && notaEstudante <= 89){
	console.log("B")
}
else if (notaEstudante >= 60 && notaEstudante <= 69){
	console.log("C")
}
else if (notaEstudante >= 50 && notaEstudante <= 59){
	console.log("D")
}
else if (notaEstudante >= 0 && notaEstudante <= 49){
	console.log("F")
}
else{
	console.log("Nota inválida.")
}