// try -> used to wrap code that might throw an error
// catch -> captures and handles errors that occur in the try block
// u can use Error object inside catch
// finally -> runs after the try and catch blocks, regardless of whether an error occurred
function processInput(input) {
  if(typeof input !== "string") {
    throw new TypeError("Input must be a string");
  }

  return input.toUpperCase();
}

try {
  console.log("Starting to process input...");
  const result = processInput(9);                    // Error occurred: Input must be a string
  console.log("Processed input result:", result);
} catch(error) {
  console.error("Error occurred:", error.message);
} finally {
  // code that runs regardless of whether an error occurred or not
  console.log("This will run anyway");
}

