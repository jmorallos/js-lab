const now = new Date();
console.log(now);
console.log(now.getDate());
console.log(now.getMonth()); // 0 start -> Jan, 1 -> Feb // 5 -> june
console.log(now.getFullYear());

// const specificDate = new Date("July 4, 1776 12:00:00");
// console.log(specificDate);

console.log(Date.now()); // MMs unix epoch time Jan 1970