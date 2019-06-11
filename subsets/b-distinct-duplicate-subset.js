/* Given a set of numbers that might contain duplicates, find all of its distinct subsets.

Example 1:

Input: [1, 3, 3]
Output: [], [1], [3], [1,3], [3,3], [1,3,3]
Example 2:

Input: [1, 5, 3, 3]
Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3], [3,3], [1,3,3], [3,3,5], [1,5,3,3]
Input: [1, 5, 3, 3]
Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3], [3,3], [1,3,3], [3,3,5], [1,5,3,3]  */

var arr = [1, 3, 3];

function generateSubset(arr) {
  var result = [[]]; // start with empty subset
  var start = 0;
  var end = 0;
  var lastCopiedIndex = 0;

  for (var i = 0; i < arr.length; i++) {
    var size = result.length;
    end = result.length;
    if (i > 0 && arr[i] !== arr[i - 1]) {
      // current duplicate number
      lastCopiedIndex = 0;
    }
    console.log("START:Lastindex", lastCopiedIndex);
    for (var j = lastCopiedIndex; j < end; j++) {
      var currSubResult = result[j];
      var newSubResult = currSubResult.concat([arr[i]]);
      result.push(newSubResult);
      lastCopiedIndex = j + 1;
      console.log(
        "lastCopiedIndex, result",
        lastCopiedIndex,
        JSON.stringify(result)
      );
    }
  }
  return result;
}

var result = generateSubset(arr);
console.log("result:", result);
