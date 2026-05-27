//closure remembers variables from its outer scope even when the outer scope finished executing

function makeCount() {
  let count = 5;

  return function () {
    count++;
    return count;
  };
}

const counter = makeCount();

console.log(counter());
console.log(counter());
console.log(counter());
