function operate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}
console.log(operate(10, 5, add));     
console.log(operate(10, 5, subtract)); 
console.log(operate(10, 5, multiply)); 
