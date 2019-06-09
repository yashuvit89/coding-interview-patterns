// Not working - need to debug
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const hasPath = function(root, target) {
  if (root == null) {
    return false;
  }

  if (root.left == null && root.right == null && root.value == target) {
    return true;
  }

  return (
    hasPath(root.left, target - root.vale) ||
    hasPath(root.right, target - root.vale)
  );
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(`Has Path: ${hasPath(root, 23)}`);
// console.log(`Has Path: ${hasPath(root, 16)}`);
