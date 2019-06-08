class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const traverse = function(root) {
  var result = [];
  var avgResult = [];
  var queue = [];

  queue.push(root);
  var levelSize = 0;

  while (queue.length !== 0) {
    var levelSize = queue.length;
    var currentLevel = [];
    var currentSum = 0;
    for (var i = 0; i < levelSize; i++) {
      var currentNode = queue.shift();
      var left = currentNode.left;
      var right = currentNode.right;

      currentLevel.push(currentNode.value);
      currentSum += currentNode.value;
      if (left) {
        queue.push(left);
      }

      if (right) {
        queue.push(right);
      }
    }

    avgResult.push(currentSum / levelSize);
    result.push(currentLevel);
  }

  console.log("Average", avgResult);
  return JSON.stringify(result);
  // return JSON.stringify(avgResult);
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(`Level order traversal: ${traverse(root)}`);
