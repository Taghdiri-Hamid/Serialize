function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var serialize = function(root) {
    if (!root) return 'null';
    let result = [];
    let queue = [root];
    
    while (queue.length) {
        const node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push('null');
        }
    }
    
    // Trim trailing null values
    while (result[result.length - 1] === 'null') {
        result.pop();
    }
    
    return result.join(',');
};

var deserialize = function(data) {
    if (!data || data === 'null') return null;
    const values = data.split(',');
    const root = new TreeNode(parseInt(values[0]));
    const queue = [root];
    let i = 1;
    
    while (queue.length && i < values.length) {
        const node = queue.shift();
        const leftVal = values[i++];
        const rightVal = values[i++];
        
        if (leftVal !== 'null') {
            node.left = new TreeNode(parseInt(leftVal));
            queue.push(node.left);
        }
        
        if (rightVal !== 'null') {
            node.right = new TreeNode(parseInt(rightVal));
            queue.push(node.right);
        }
    }
    
    return root;
};
