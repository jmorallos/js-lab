// const regex = /free(code)camp/i;
// console.log(regex.test("freecodecamp")); // true
// console.log("freecodecamp".match(regex));


// const regex = /free(co+de)camp/i;

// console.log("freecoooooooooodecamp".replace(regex, "paidcodeworld"));
// console.log("freecooooodecamp".replace(regex, "paid$1world"));

const regex = /free(co+de)camp.*free\1camp/i;
console.log(regex.test("freecooooodecamp is great i love freecooooodecamp "));