/*
  Intermediate Algorithm Scripting: Sum All Numbers in a RangePassed
  We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

  For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

/* SOLUTION -> 01 */
function sumAll(arr) {
  const maxNumber = arr[0] > arr[1] ? arr[0] : arr[1];
  const minNumber = arr[0] < arr[1] ? arr[0] : arr[1];

  let result = 0;
  for (let i = minNumber; i <= maxNumber; i++) {
    result += i;
  }

  return result;
}

/* SOLUTION -> 02 */
function sumAll(arr) {
  let result = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    result += i;
  }

  return result;
}

console.log(sumAll([1, 4]));
