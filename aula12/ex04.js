function trimestre(t){
    switch (t){
        case 1:
            return "jan, fev, março";
        break;
        case 2:
            return "abr, maio, jun";
        break;
        case 3:
            return"jul, agos, set";
        break;
        case 4:
            return"out, nov, dez";
        break;
        default:
            return"Número inválido. Insira um número de 1 a 4.";
        break;
    }
}
console.log(trimestre(2));