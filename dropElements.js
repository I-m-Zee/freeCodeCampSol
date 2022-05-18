function dropElements(arr, func) {
    let bool = false;
    for(let i=0; i<arr.length; i++){
        bool = func(arr[i]);
        if(bool){
            arr.splice(0,i)
            break;
        }
    }
    if(bool){
    return arr;}else{
        return []
    }
    
    // return arr
    // .filter((x, index)=>{
    //     if(func(x)){
    //         return arr.splice(0,index)
    //     }
    // })
}

console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
