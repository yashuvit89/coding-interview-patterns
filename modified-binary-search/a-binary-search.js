/* Given a sorted array of numbers, find if a given number ‘key’ is present in the array. Though we know that the array is sorted, we don’t know if it’s sorted in ascending or descending order. You should assume that the array can have duplicates.

Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.

Example 1:

10
Input: [4, 6, 10], key = 10
Output: 2
Example 2:

Input: [1, 2, 3, 4, 5, 6, 7], key = 5
Output: 4
Example 3:

10, 6, 4
Input: [10, 6, 4], key = 10
Output: 0
Example 4:

Input: [10, 6, 4], key = 4
Output: 2 */

var arr = [1, 2, 3, 4, 5, 6, 7];
var arr1 = [10, 6, 4];
var key = 5;
var key1 = 4;

function binarySearch(arr, key) {
  var counter = 100;
  var start = 0;
  var end = arr.length - 1;
  var isAscending = arr[start] < arr[end];
  // ascending
  while (start <= end) {
    var mid = parseInt((start + end) / 2, 10);

    if (arr[mid] === key) {
      return mid;
    } else if (key < arr[mid] && isAscending) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

var result = binarySearch(arr, key);
var result1 = binarySearch(arr1, key1);
console.log("result:", result);
console.log("result1:", result1);
