// The power function calculates the result of raising value1 to the power of value2.
// In this example, it computes and logs the result of 5^3 to the console.

function power(value1, value2) {
  return Math.pow(value1, value2);
}
console.log(power(5, 3));


// function to Return the Remainder from Two Numbers

function remainderOfTwo(value1, value2) {
  return value1 % value2;
}

console.log(remainderOfTwo(21, 4));


// Function to compare the sum of two values with a predefined threshold.
// Returns a string describing the relationship between the sum and the threshold.

function lesserThan(value1, value2) {
  let sum = 100;
  let total = value1 + value2;

  if (total < sum) {
    return "the sum of the two value is less than the value of " + sum;
  } 
  
  else if (total > sum) {
    return    "the sum of the two value is greater than the value of " + sum;
  }

  else if(total == sum) {
    return    "the sum of the two value is equal to the value of " + sum;

}
}
console.log(lesserThan(50, 50));

