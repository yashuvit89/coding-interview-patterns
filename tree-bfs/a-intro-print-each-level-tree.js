class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const traverse = function(root) {
  var result = [];
  var queue = [];

  queue.push(root);
  var levelSize = 0;

  while (queue.length !== 0) {
    var levelSize = queue.length;
    var currentLevel = [];
    for (var i = 0; i < levelSize; i++) {
      var currentNode = queue.shift();
      var left = currentNode.left;
      var right = currentNode.right;

      currentLevel.push(currentNode.value);
      if (left) {
        queue.push(left);
      }

      if (right) {
        queue.push(right);
      }
    }

    result.push(currentLevel);
  }

  return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(`Level order traversal: ${traverse(root)}`);
