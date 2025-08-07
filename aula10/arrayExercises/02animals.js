i = 0;
let animais = ["cão","gato", "coelho","pássaro", "peixe"];
console.log(animais);
animais.pop();
animais.push("hamster");
animais[0] = "cavalo";
animais[2] = "tartaruga";
for (i in animais){
 	console.log(animais[i]);
}