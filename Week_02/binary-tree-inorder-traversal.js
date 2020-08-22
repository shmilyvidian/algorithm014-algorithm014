// 94. 二叉树的中序遍历
var inorderTraversal = function(root) {
    let nums = [];
    let fun = (root) => {
        root.left && fun(root.left);
        nums.push(root.val);
        root.right && fun(root.right);
    }
    root && fun(root);
    return nums;
}