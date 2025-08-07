let array = [4,6,4,5,3,6];
let i = 0;
let max = array[i];
let maxIndex = 0;
while(i < array.length){
    if(array[i] > max){
        max = array[i];
        maxIndex = i;
    }
    i++;
}
console.log(maxIndex);