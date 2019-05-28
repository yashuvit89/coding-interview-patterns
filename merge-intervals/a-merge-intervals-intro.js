/* Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

Example 1:

Intervals: [[1,4], [2,5], [7,9]]
Output: [[1,5], [7,9]]
Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into one [1,5].
Intervals: [[1,4], [2,5], [7,9]]
Output: [[1,5], [7,9]]
Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into one [1,5]. */

function mergeIntervals(arr) {
  var result = [];

  if (arr.length < 2) {
    return arr;
  }

  arr = arr.sort((a, b) => a[0] - b[0]);
  console.log("sorted array", arr);

  var i = 0;
  var curr = arr[i];
  var start = curr[0];
  var end = curr[1];

  while (i < arr.length) {
    var next = arr[i + 1];

    if (!next) {
      result.push([start, end]);
      break;
    }

    if (next[0] <= end) {
      end = Math.max(end, next[1]);
    } else {
      console.log("push arr", start, end, i);
      result.push([start, end]);
      start = next[0];
      end = next[1];
    }

    i++;
  }

  return result;
}

var arr = [[1, 4], [2, 5], [7, 9]];
var result = mergeIntervals(arr);
console.log("result:", result);
