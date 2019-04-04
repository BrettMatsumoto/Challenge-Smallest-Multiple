/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function (ceiling) {
  // do work here
  let x = 0;
  let numberArray = [];
  for (let i = 1; i <= ceiling; i++) {
    numberArray.push(i);
  }
  for (let j = 0; j < numberArray.length; j++) {
    if (x % j !== 0) {
      x += ceiling;
      j = 0;
    }
  }

  return x;
};