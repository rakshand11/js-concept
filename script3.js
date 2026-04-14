console.log("Script starts");

setTimeout(() => {
  // 1.goes to WEB API
  console.log("This is from task queue"); //3.From TASK QUEUE goes to CALL STACK through event loop and prints the console only if it is empty
}, 0); //2. when time expires goes to TASK QUEUE

setTimeout(() => {
  console.log("This is B");
}, 4000);
setTimeout(() => {
  console.log("This is c");
}, 2000);

console.log("Script Ends here");
console.log("Bye Bye");
