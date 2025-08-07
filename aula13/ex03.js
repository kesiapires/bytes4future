function contaParesEntreDoisValores(value1, value2){
    let i = value1;
    let sum = 0;
    if(value1 == value2){
        return "Introduza dois valores diferentes";

    }
    while (i <= value2){
        if(i%2 == 0){
            sum +=1;
        }
        i++;
    }
    return sum;
}
console.log(contaParesEntreDoisValores(3,3));