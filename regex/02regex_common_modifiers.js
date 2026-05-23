// i flag -> makes a regex ignore case
// const regex = /freecodecamp/i;
// console.log(regex.test("freeCodeCamp")); // true
// console.log(regex.test("freecodecamp")); // true
// console.log(regex.test("freecodecamp is great")); // true
// console.log(regex.test("fReECoDeCaMP")); // true

// g flag -> global modifier, allows your regex to match pattern more than once
// const regex = /freeCodeCamp/gi;
// console.log(regex.test("freeCodeCamp")); // true
// console.log(regex.test("freeCodeCamp is great")); // become false because regex[0] is already in memory
// console.log(regex.test("Hello World from freecodecamp")); // true
// console.log(regex.test("freecodecamp")); //false
// console.log(regex.test("FREECODECAMP")); // true


// const regex = /freeCodeCamp/gi;
// console.log(regex.test("freeCodeCamp")); // true
// console.log(regex.test("I loooooove freeCodeCamp")); // true
// console.log(regex.test("freeCodeCamp")); // false -> goes back to index 0 since the last match is not on index 0 and returns false
// console.log(regex.test("freeCodeCamp")); // true - index 0 



// gi gets a new property called lastIndex -> grabbing previous code
// const regex = /freeCodeCamp/gi;
// console.log(regex.lastIndex); // 0
// console.log(regex.test("freeCodeCamp")); // true
// console.log(regex.lastIndex); // 12
// console.log(regex.test("freeCodeCamp is great")); // 12th index != 0 false
// console.log(regex.lastIndex); // 0

// The caret ^ anchor -> match the start of the string
// The $ anchor -> match the end of the string
// const start = /^freeCodeCamp/i;
// const end = /freeCodeCamp$/i;
// console.log(start.test("freeCodeCamp"));
// console.log(end.test("freeCodeCamp"));
// console.log(start.test("I love freeCodeCamp")); // false
// console.log(end.test("freeCodeCamp is great")); // false

// The m flag -> multiline modifier
// const start = /^freecodecamp/im;
// const end = /freecodecamp$/im;
// const string = `I really love
// freecodecamp
// it's my favorite`;
// console.log(start.test(string)); // true
// console.log(end.test(string)); // true

// The d flag -> expands the information you get in a match object
// const regex = /freeCodeCamp/di;
// const string = "we love freecodecamp isn't freecodecamp great?";
// console.log(string.match(regex));
// [
//   'freecodecamp',
//   index: 8,
//   input: "we love freecodecamp isn't freecodecamp great?",
//   groups: undefined,
//   indices: [ [ 8, 20 ], groups: undefined ]
// ]

// u flag -> expands the functionality of regex allow it to match unicode characters
// const regex = /🍎/u;

// const str = "I have an apple 🍎";
// console.log(regex.test(str)); // true

// The v flag -> for unicodes also, the y flag _> similar to global gi -> but will return to index 0 immediately if no match found in previous
// The s flag -> for entire string 
// The . mdfier -> wildcard character