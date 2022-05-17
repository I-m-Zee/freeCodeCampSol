function sumFibs(num) {
    let num1=0; let num2 =1;
    let temp ;
    let sum = 0;
    let emptyArr=[];
    emptyArr.push(num1, num2);
    for(let i=0; i<num; i++){
        temp = num1 + num2
        if(temp<=num){
           emptyArr.push(temp);
        }
        num1 = num2;
        num2 = temp;
    }
    //console.log(emptyArr)
    emptyArr.forEach(x=>{
        if(x % 2 == 1){
            sum+=x;
        }
    })
    return sum
  //return emptyArr;
}

console.log(sumFibs(4000000));
