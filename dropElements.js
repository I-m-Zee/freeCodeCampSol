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
