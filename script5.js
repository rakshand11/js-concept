// ============================================================
// OBJECT LITERAL
// A quick way to create a single, one-off object.
// Best used when you only need ONE instance of an object.
// ============================================================

const person = {
  fname: "Rakshand",
  lname: "Chhikara",

  // Method defined directly inside the object
  getName: function () {
    console.log("Rakshand Chhikara");
  },
};

// Note: getName() logs the name but returns undefined,
// so console.log() will print: "Rakshand Chhikara" then "undefined"
console.log(person.getName());

// ============================================================
// CONSTRUCTOR FUNCTION
// Acts as a blueprint/template to create multiple objects
// with the same structure but different data.
// Convention: Name starts with a Capital Letter (Person)
// Usage: Always call with the "new" keyword
// ============================================================

function Person(name, age) {
  // "this" refers to the new object being created
  this.name = name; // Assigns name property to the new object
  this.age = age; // Assigns age property to the new object

  // Each instance gets its own copy of this method
  // Tip: Use Person.prototype.greet = function(){} to share
  //      one method across all instances (more memory efficient)
  this.greet = function () {
    console.log(`Hi I am ${this.name} and my age is ${this.age}`);
  };
}

// "new" keyword:
// 1. Creates a fresh empty object {}
// 2. Binds "this" to that new object
// 3. Runs the function body
// 4. Returns the new object automatically
const Alice = new Person("Alice", 20); // Alice → { name: "Alice", age: 20 }
const Bob = new Person("Bob", 25); // Bob   → { name: "Bob",   age: 25 }

Alice.greet(); // Output: Hi I am Alice and my age is 20
Bob.greet(); // Output: Hi I am Bob and my age is 25
