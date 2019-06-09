/* Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.

Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]
Example 2:

Input: [-3, -1, 0, 1, 2]
Output: [0 1 1 4 9]
Input: [-3, -1, 0, 1, 2]
Output: [0 1 1 4 9] */

var arr = [-2, -1, 0, 2, 3];

function squareNumbers(arr) {
  var result = [];
  var positiveIndex = 0;

  while (positiveIndex < arr.length) {
    if (arr[positiveIndex] >= 0) {
      break;
    }
    positiveIndex++;
  }

  var negativeIndex = positiveIndex - 1;

  while (negativeIndex >= 0 && positiveIndex < arr.length) {
    var postiveNum = arr[positiveIndex];
    var negativeNum = arr[negativeIndex];
    if (Math.abs(postiveNum) > Math.abs(negativeNum)) {
      result.push(negativeNum * negativeNum);
      negativeIndex--;
    } else {
      result.push(postiveNum * postiveNum);
      positiveIndex++;
    }
  }

  return result;
}

var result = squareNumbers(arr);
console.log("result:", result);

// TODO: last number is missing in output
