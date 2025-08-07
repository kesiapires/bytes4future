let array = [5,2,9,12];
let i = 0;
let min = array[i];
while(i < array.length){
    if(array[i] < min){
        min = array[i];
    }
    i++;
}
console.log(min);