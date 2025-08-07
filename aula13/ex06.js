function fizzBuzzKesia(n){
    let i = 1;
    let list = [];
    while(i <= n){
        if(i %15 == 0){
            list.push("FizzBuzz");
        }
        else if(i %5 == 0){
            list.push("Buzz");
        }
        else if(i %3 == 0){
            list.push("Fizz");
        }
        else{
            list.push(" ");
        }
        i++;
    }
    return list
}
console.log(fizzBuzzKesia(15));