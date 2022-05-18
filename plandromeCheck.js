function palindrome(str) {
    const newStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    if(newStr === [...newStr].reverse().join ("")){
        return true;
    }else{
        return false;
    }
  //return newStr;
}

console.log(palindrome("1 eye for of 1 eye."));
