const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let arr = firstAndLast.split(" ")
  this.setFirstName = function(first){
    arr[0] = first;
    };
    this.setLastName = function(last){
    arr[1] = last;
    };
    this.setFullName = function(firstAndLast){
    arr = firstAndLast.split(" ")
    };
    this.getFullName = function() {
    return arr.join(" ");
    };
    this.getFirstName = function(){
    return arr[0];
    };
    this.getLastName = function(){
    return arr[1];
    };
};

const bob = new Person('Bob Ross');
bob.getFullName();
