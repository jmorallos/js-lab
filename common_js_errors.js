// SyntaxError, ReferenceError, TypeError, RangeError
// SyntaxError -> when you write something incorrectly in your code e.g missing parenthesis or bracket
// example
// const arr = ["Beau", "Quincy" "Tom"] // ',' expected

// ReferenceError example
// console.log(price); // ReferenceError: price is not defined
// console.log(b);
// const b = 50; // ReferenceError: Cannot acces 'b' before initialization

// TypeError -> operation on the wrong type attempt
const developerObj = {
  name: "Jessica",
  country: "USA",
  isEmployed: true
};

// developerObj.map() // TypeError: developer.map is not a function
// because map method is used for arrays not objects

// RangeError -> value is outside of the range
const arr = [];
// arr.length = -1; // RangeError: Invalid array length