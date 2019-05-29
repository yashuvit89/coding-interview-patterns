/* 
Cyclic in place sorting 
Input: [3, 1, 5, 4, 2]
Output: [1, 2, 3, 4, 5] */

var arr = [3, 1, 5, 4, 2];

function cyclicSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var curr = arr[i];
    var target = arr[curr - 1];
    arr[curr - 1] = curr;
    arr[i] = target;
  }

  return arr;
}

var result = cyclicSort(arr);
console.log("result", result);
