// Event Loop: Call Stack → Microtask Queue → Task Queue

console.log("Script starts"); // 1. Call Stack → prints immediately

setTimeout(() => {
  console.log("Task Queue"); // 5. Runs LAST — Task Queue has lowest priority
}, 2000); // 2. Goes to Web API → after 2s moves to Task Queue

Promise.resolve().then(() => {
  console.log("Micro Task Queue"); // 4. Runs BEFORE setTimeout — Microtask always has higher priority than Task Queue
}); // 3. Goes to Microtask Queue immediately (no timer needed)

console.log("Script Ends Here"); // 2. Call Stack → prints immediately
