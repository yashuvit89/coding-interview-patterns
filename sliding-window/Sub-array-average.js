// Given an array, find the average of all subarrays of size ‘K’ in it.

var arr = [1, 3, 2, 6, -1, 4, 1, 8, 2],
  k = 5;

function subArrayAverage(arr, k) {
  var windowStart = 0;
  var sum = 0;
  var result = [];
  for (var windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    sum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      result.push(sum / k);
      sum -= arr[windowStart];
      windowStart++;
    }
  }

  return result;
}

var result = subArrayAverage(arr, k);
console.log("result:", result);
