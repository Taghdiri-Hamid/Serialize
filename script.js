function TreeNode(value) {
  this.value = value;
  this.left = this.right = null;
}

var serialize = function (root) {
  if (!root) return "null";
  let result = [];
  let queue = [root];

  while (queue.length) {
    const node = queue.shift();
    if (node) {
      result.push(node.value);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push("null");
    }

    // trim null value
    while (result[result.length - 1] === "null") {
      result.pop();
    }
  }
};

