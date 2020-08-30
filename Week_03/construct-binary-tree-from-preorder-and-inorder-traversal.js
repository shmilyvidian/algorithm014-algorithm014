// 105. 从前序与中序遍历序列构造二叉树

var buildTree = function(preorder, inorder) {
    if(!inorder.length) return null
    let tmp = preorder[0],mid = inorder.indexOf(tmp)
    let root = new TreeNode(tmp)
    root.left = buildTree(preorder.slice(1,mid+1),inorder.slice(0,mid))
    root.right = buildTree(preorder.slice(mid+1),inorder.slice(mid + 1))
    return root
};