class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const traverse = function(root) {
  var queue = [];
  var result = [];

  queue.push(root);

  while (queue.length !== 0) {
    var levelElements = [];
    var queueLength = queue.length;
    for (var i = 0; i < queueLength; i++) {
      var currNode = queue.shift();
      levelElements.push(currNode.value);
      if (currNode.left) {
        queue.push(currNode.left);
      }

      if (currNode.right) {
        queue.push(currNode.right);
      }
    }

    result.unshift(levelElements);
  }

  return JSON.stringify(result);
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(`Reverse Level order traversal: ${traverse(root)}`);
