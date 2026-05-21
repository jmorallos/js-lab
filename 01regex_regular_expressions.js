// Regex -> case-sensitive
// test -> returns boolean test if string matches regex
const regex = /freeCodeCamp/;
console.log(regex.test("freeCodeCamp")); // true
console.log(regex.test("freecodecamp")); // false -> case-sensitive
console.log(regex.test("free")) // false

// match -> returns array for the string
const match = "freeCodeCamp".match(regex);
console.log("freeCodeCamp".match(regex)); // [ 'freeCodeCamp', index: 0, input: 'freeCodeCamp', groups: undefined ]
console.log("I love freeCodeCamp".match(regex)); // [ 'freeCodeCamp', index: 7, input: 'I love freeCodeCamp', groups: undefined ]
console.log("freecodecamp".match(regex)); // null

// what if we want to replace the content of a string? e.g freecodecamp
// and we want to automatically fix the casing for them
// we can use replace() -> accepts two args
const my_var = /freecodecamp/;
const str = "freecodecamp is rly kewl";
const replaced = str.replace(my_var, "freeCodeCamp");
console.log(replaced); // freeCodeCamp is rly kewl

// what if i want the index using match?
console.log(replaced.match("freeCodeCamp").index); // 0
console.log(replaced.match("freeCodeCamp")[0]) // freeCodeCamp

// safer version: use guard cluase
const my_second_var = "Hello World, I love programming! programming! programming!";
const result = my_second_var.match("programming"); // exluding the !
if(result) {
  console.log(result[0]);
  console.log(result.index);
  console.log(result);
}

