let array = [5,2,9,12];
let i = 0;
let max = array[i];
while(i < array.length){
    if(array[i]> max){
        max = array[i];
    }
    i++;
}
console.log(max);