function recursion(node, res) {
    // 若节点为空，则退出
    if (!node) {
        return;
    }

    // 前序遍历，即为在开始遍历子节点之前，储存当前节点的值
    res.push(node.val);

    // 递归遍历所有子节点
    for (let i = 0; i < node.children.length; i++) {
        recursion(node.children[i], res);
    }
}
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
    let result = []; // 保存结果

    // 递归遍历二叉树
    recursion(root, result);

    return result;
};