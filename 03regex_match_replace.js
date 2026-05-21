// match all occurrences and replace
// const regex = /freecodecamp/g;
// const str = "freecodecamp is the best we love freecodecamp";
// const matched = str.match(regex); //  [ 'freeCodeCamp', 'freeCodeCamp' ]
// const replaced = str.replace(regex, "freeCodeCamp");
// console.log(replaced)

// replaceAll and matchAll will do the same but will throw error without global modifier
// const pattern = "freecodecamp";
// const str = "freecodecamp is the best we love freecodecamp";
// const matched = str.matchAll(pattern);
// const replaced = str.replaceAll(matched, "freeCodeCamp");
// console.log(matched); // -> returns a special type of object, Iterator
// console.log(replaced);
// console.log(matched.next()); // done false because elements still available
// console.log(matched.next()); // done false 
// console.log(matched.next()); // done true

const regex = /freecodecamp/g;
const str = "freecodecamp is the best we love freecodecamp";
const matched = str.matchAll(regex);
console.log(Array.from(matched).map(el => el[0]));