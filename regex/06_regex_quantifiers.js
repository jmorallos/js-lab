// quantifiers -> 
// const regex = /^\d\d\d\d$/; // digit start , digit end
// const regex = /^\d{4}$/; // simplified -> match previous character exactly four times
// console.log(regex.test("1234")); // true
// console.log(regex.test("123")); // false 
// console.log(regex.test("12345")); // false

// const regex = /^\d{4,}$/; // -> minimum of four digits
// console.log(regex.test("123")); // false
// console.log(regex.test("1234")); // true
// console.log(regex.test("12345")); // true

// const regex = /^\d{4,6}$/; // -> minimum of 4, and maximum of 6
// console.log(regex.test("123")); // false
// console.log(regex.test("1234")); // true
// console.log(regex.test("123456")); // true
// console.log(regex.test("1234567")); // false

// const regex = /^[a-zA-Z]\d{4,6}$/; //-> starts with letter
// const regex = /^[a-zA-Z]{0,1}\d{4,6}$/; // -> start with letter maximum of 1 

// // shorthand quantifier ? for single optional character
// const regex = /^[a-zA-Z]?\d{4,6}$/; // -> uses ? for single optional character
// console.log(regex.test("1234a")); // false
// console.log(regex.test("a1234")); // true
// console.log(regex.test("a123")); // false
// console.log(regex.test("x123456")); // true

// const regex = /^[a-zA-Z]{0,}\d{4,6}$/; // -> minimum of 0 before numbers
// const regex = /^[a-zA-Z]*\d{4,6}$/; // * -> match teh prevous character zero or more times
// console.log(regex.test("asdfsg1234")); // true
// console.log(regex.test("asdfvs123")); // false

// const regex = /^[a-zA-Z]+\d{4,6}$/ // + -> minimum of one and no difined maximum
// console.log(regex.test("absfd1234")); // true

// const regex = /^[a-zA-Z0-9]+$/; // letters and numbers in any order

/**
 * Common regex patterns
 * const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ -> email
 * const regex = /^[a-zA-Z0-9_]{3,20}$/ -> username
 * const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/ -> password (1 upcase, 1 num, min of 8 chars)
 * const regex = /^\d{3}-\d{3}-\d{4}$/ -> phone number 555-123-4567
 * const regex = /^[a-zA-Z]+$/ -> letters only
 * const regex = /^[a-zA-Z0-9]+$/ -> letters + numbers
 * const regex = /\s/ -> whitespace check
 * 
 */


// CORE USE CASES:
/**
 * FORM VALIDATION
 * PARSING LOGS
 * FILTERING INPUT
 * SEARCHING TEXT
 * TRANSFORMING STRINGS
 * SCRAPING DATA
 * SYSNTAX/TOKEN PARSING
 * ROUTING PATTERN
 * IDE
 * BACKEND SANITATION
 */