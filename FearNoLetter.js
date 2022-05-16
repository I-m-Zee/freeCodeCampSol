function fearNotLetter(str) {
    //let min= str[0], max = str[str.length-1];
    //console.log(min, max);
    let array = [...str];
    //console.log(array);
    let newString = "";
    //let diff =  str.codePointAt(str.length-1)+1 - str.codePointAt(0)
    //console.log(diff)
    for(let i=str.codePointAt(0); i<=str.codePointAt(str.length-1); i++){
        if(!str.includes(String.fromCharCode(i)))
        newString+=String.fromCharCode(i);
    }
    let test  = newString.length>0?newString:undefined
    return test
    //for(let ch in str){
    //    if(str.charCodeAt(str[ch]))
     //   console.log(str[ch]);
    //}
    //return newString;
}

console.log(fearNotLetter("ab"));
