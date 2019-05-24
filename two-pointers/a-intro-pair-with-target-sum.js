/* 
Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

Example 1:

Input: [1, 2, 3, 4, 6], target=6
Output: [1, 3]
Explanation: The number at index 1 and 3 add up to 6: 2+4=6
Example 2:

Input: [2, 5, 9, 11], target=11
Output: [0, 2]
Explanation: The number at index 0 and 1 add up to 11: 2+9=11
Input: [2, 5, 9, 11], target=11
Output: [0, 2]
Explanation: The number at index 0 and 1 add up to 11: 2+9=11 
*/

var arr = [1, 2, 3, 4, 6],
  target = 6;

function pairWithTargetSum(arr, target) {
  var start = 0;
  var end = arr.length - 1;

  while (start < end) {
    var sum = arr[start] + arr[end];
    if (sum === target) {
      return [start, end];
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }
  return -1;
}

var result = pairWithTargetSum(arr, target);
console.log("result:", result);
