// 144. 二叉树的前序遍历
var preorderTraversal = function(root) {
    let nums = [];
    let fun = (root) => {
        nums.push(root.val);
        root.left && fun(root.left);
        root.right && fun(root.right);
    }
    root && fun(root);
    return nums;
};