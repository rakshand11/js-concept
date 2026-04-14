// Temporal Dead Zone — const/let are hoisted but NOT initialized until declaration

var x = 40;

console.log(`value of x is ${x}`); // prints: value of x is 40

const x = 66; //SyntaxError: 'x' already declared (var x exists above)
// const IS hoisted but sits in TDZ — can't redeclare with var in same scope

console.log(`value of x is ${x}`); //never reaches here
