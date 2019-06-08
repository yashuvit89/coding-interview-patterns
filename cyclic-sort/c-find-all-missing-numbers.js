/* 
We are given an unsorted array containing numbers taken from the range 1 to ‘n’. The array can have duplicates, which means some numbers will be missing. Find all those missing numbers.

Example 1:

Input: [2, 3, 1, 8, 2, 3, 5, 1]
Output: 4, 6, 7
Explanation: The array should have all numbers from 1 to 8, due to duplicates 4, 6, and 7 are missing.
Example 2:

Input: [2, 4, 1, 2]
Output: 3
Example 3:

Input: [2, 3, 2, 1]
Output: 4
Input: [2, 3, 2, 1]
Output: 4
*/

var arr = [2, 3, 1, 8, 2, 3, 5, 1];

function cyclicSortMissingNumbers(arr) {
  var i = 0;
  var result = [];

  while (i < arr.length) {
    var curr = arr[i] - 1;
    if (curr !== i && arr[curr] !== curr) {
      swap(arr, i, curr);
    }
    i++;
  }

  for (var j = 0; j < arr.length; j++) {
    if (arr[j] - 1 !== j) {
      result.push(j + 1);
    }
  }

  return result;
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

var result = cyclicSortMissingNumbers(arr);
console.log("result", result);
