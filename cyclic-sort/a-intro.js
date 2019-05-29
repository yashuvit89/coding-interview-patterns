/* 
Cyclic in place sorting 
Input: [3, 1, 5, 4, 2]
Output: [1, 2, 3, 4, 5] */

var arr = [3, 1, 5, 4, 2];

function cyclicSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var j = arr[i] - 1;
    if (arr[i] !== j) {
      swap(arr, i, j);
    }
  }

  return arr;
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

var result = cyclicSort(arr);
console.log("result", result);
