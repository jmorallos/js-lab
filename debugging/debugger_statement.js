// debugger statement -> tool, lets u pause your code at specific line
// use cases: inspect variables, check functions, and flow in general
// uses browser's developer tools, otherwise debugger statement is ignored
// let firstNumber = 5;
// let secondNumber = 10;
// debugger; // Code execution pauses here
// let sum = firstNumber + secondNumber;
// console.log(sum);

// more complex example
function calculateTotalPrice(price, discountPercentage) {
  debugger
  let discountAmount = (price * discountPercentage) / 100
  let totalPrice = price - discountAmount

  console.log(`Original Price: ${price}`)
  console.log(`Discount Amount: ${discountAmount}`)
  console.log(`Total Price after Discount: ${totalPrice}`)

  return totalPrice
}

let price = 100
let discount = 15

let finalPrice = calculateTotalPrice(price, discount)
console.log(`Final Price: ${finalPrice}`);