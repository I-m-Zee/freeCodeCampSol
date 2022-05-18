function steamrollArray(arr) {
    let newArr = [];
    //let len  = arr.length;
    // for(let i=0; i<arr.length; i++){
    //     if(typeof arr[i] ==='object'){
    //       newArr.push(returnElement(arr[i]));
    //     }else{
    //         newArr.push(arr[i])
    //     }
        
    // }
    // function returnElement(aRR) {
    //     for(let j=0; j<arr.length; j++){
    //         return aRR[j]
    //     }
    // }
    function retElem(test){
        for(let k=0; k<test.length; k++){
            if(typeof test[k]==='object'){
                retElem(test[k])
            }else{
                newArr.push(test[k])
            }
        }
    }
    retElem(arr);
 return newArr;
}

console.log(steamrollArray([1, {}, [3, [[4]]]]));
