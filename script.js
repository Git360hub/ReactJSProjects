function once(fn) {
  let called = false;
  return function(...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
    // After the first call, do nothing and return undefined
  };
}

// Example usage:
function greet(name) {
  console.log("Hello, " + name + "!");
}

const greetOnce = once(greet);

greetOnce("Ygor"); // Output: Hello, Ygor!
greetOnce("John"); // No output
greetOnce("Jane"); // No output



