function numberList(n){
    if(n <= 0){
        return "Insira um valor superior a zero."
    }
    let list = [];
    for(i = 0; i <= n; i++){
        list.push(i);
    }
    return list;
}
console.log(numberList(5));