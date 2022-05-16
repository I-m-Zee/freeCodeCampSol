function pairElement(str) {
    
    let newArr = str.split("")
  //return newArr;
  let emptyArr = [];
  newArr.forEach(function(x){
     if(x=='G'){
         emptyArr.push([x,'C']);
     }else if(x=='C'){
         emptyArr.push([x,'G'])
     }else if(x=='A'){
         emptyArr.push([x,'T'])
     }else if(x=='T'){
         emptyArr.push([x,'A'])
     }
  });
  return emptyArr
}

console.log(pairElement("GCG"));
