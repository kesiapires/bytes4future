function validaSubArray(a=[], b=[]){
    let i = 0;
    while(i < a.length){
        let j = i;
        while(j < b.length){
            if(a[i] == b[j]){
                return true;
            }
            j++;
            return false
        }
        i++;
    }
}
console.log(validaSubArray([1,2,3,4],[4,2]));