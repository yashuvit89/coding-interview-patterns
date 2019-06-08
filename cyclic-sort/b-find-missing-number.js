/* 
We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’. Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

Example 1:

Input: [4, 0, 3, 1]
Output: 2
Example 2:

Input: [8, 3, 5, 2, 4, 6, 0, 1]
Output: 7
Input: [8, 3, 5, 2, 4, 6, 0, 1]
Output: 7
*/

var arr = [8, 3, 5, 2, 4, 6, 0, 1];

function cyclicSortMissingNumber(arr) {
  var i = 0;

  while (i < arr.length) {
    if (arr[i] < arr.length && arr[i] != i) {
      swap(arr, arr[i], i);
    } else {
      i++;
    }
  }

  for (var j = 0; j < arr.length; j++) {
    if (arr[j] !== j) {
      return j;
    }
  }

  return -1;
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

var result = cyclicSortMissingNumber(arr);
console.log("result", result);
