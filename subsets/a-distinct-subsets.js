/* Given a set with distinct elements, find all of its distinct subsets.

Example 1:

Input: [1, 3]
Output: [], [1], [3], [1,3]
Example 2:

Input: [1, 5, 3]
Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3]
Input: [1, 5, 3]
Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3] */

var arr = [1, 5, 3];

function generateSubset(arr) {
  var result = [[]]; // start with empty subset

  for (var i = 0; i < arr.length; i++) {
    var size = result.length;
    for (var j = 0; j < size; j++) {
      var currSubResult = result[j];
      var newSubResult = currSubResult.concat([arr[i]]);
      result.push(newSubResult);
      console.log("result", JSON.stringify(result));
    }
  }
  return result;
}

var result = generateSubset(arr);
console.log("result:", result);
