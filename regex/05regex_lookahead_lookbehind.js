// positive lookahead assertions -> 
// const regex = /free(?=code)/i; // -> match the word free if it's followe by code
// console.log(regex.test("freeCodeCamp")); // true
// console.log(regex.test("free code camp")); // false -> free is followed by whitespace

// const regex2 = /free(?!code)/i; // match the word free that is not followe by code
// console.log(regex2.test("freeCodeCamp")); // false
// console.log(regex2.test("free code camp")); // true

// positive lookbehind -> preceeding pattern, denoted by ?<= && ?<! instead of ?=
const regex = /(?<=free)code/i; 
console.log(regex.test("freeCodeCamp")); // -> true because code is immediately preceeded by free
console.log(regex.test("free code camp")); // false because preeced by whitespace

