function myReplace(str, before, after) {
    const newArr = str.split(" ")
    //console.log(newArr)
    let index = 0;
     for(let a in newArr){
         if(newArr[a]===before){
            index = a;
            break;
         }
     }
     if(before.charAt(0)===before.charAt(0).toUpperCase()){
         let newWord = after.charAt(0).toUpperCase()+after.substring(1);
         newArr.splice(index,1,newWord);
     }else if(before.charAt(0)!==before.charAt(0).toUpperCase()){
          let newWord = after.charAt(0).toLowerCase()+after.substring(1);
     newArr.splice(index,1,newWord);
     }
     //console.log(newArr)
    
   return newArr.join(" ");
 }

 console.log(myReplace("I think we should look up there", "up", "Down"));
