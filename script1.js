console.log("1"); //prints 1

var number = "2"; //number assigned 2

console.log(number); //prints2

function global() {
  console.log("3"); //skipped not call yest
}

console.log("4"); //prints 4
global(); //prints 3 after being called
