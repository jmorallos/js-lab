// throw -> used to throw user defined exception
function validateNumber(input) {
  if(typeof input !== "number") {
    throw new TypeError("Expected a number, but received " + typeof input)
  }

  return input * 2;
}

// console.log(validateNumber("hello")) // TypeError: Expected a number, but received string

// Error -> 
function divide(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Cannot divide by zero");
  }

  return numberator / denominator;
}

// console.log(divide(2, 0)) // Error: Cannot divide by zero
