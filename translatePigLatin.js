function translatePigLatin(str) {
    //console.log(str.split(""))
    let index = 0;
    for(let i=0; i<str.length; i++){
        if('aeiou'.includes(str[i])){
            index=i;
            break;
        }
    }
    if(index==0 && 'aeiou'.includes(str[0])){
      return str.concat("way")
    }else if(index>0){
        return str.replace(str.substring(0, index),"").concat(str.substring(0, index),"ay")
    }else{
        return str.concat("ay")
    }
   // 
  //return str;
}

console.log(translatePigLatin("rhythm"));
