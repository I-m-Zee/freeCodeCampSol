function uniteUnique(arr) {
    let args = [].slice.call(arguments);
    let emptyArr = []
    for(let arr in args){
        emptyArr.push(...args[arr])
    }
    newArr = [...new Set(emptyArr)]
  return newArr;
}

console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
