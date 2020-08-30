学习笔记
# 泛型递归、树的递归

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8fc3e038-4a5f-41ad-be5e-736e4cf77c80/2020-08-23_23.26.45.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8fc3e038-4a5f-41ad-be5e-736e4cf77c80/2020-08-23_23.26.45.png)

思维要点

- 不要人肉递归，直接写函数
- 找到最近最简方法，将其拆解成可重复解决的问题（重复子问题）
- 数学归纳法思维

### 题目实战

70. 爬楼梯

```jsx
var climbStairs = function(n) {
    if(n === 1 || n === 2){
        return  n
    }
    let first  = 1
    let second = 2

    for(let i = 3; i <= n; i++){
        let third = first + second
        first = second
        second = third
    }
    return second
};
```

22. 括号生成

```jsx
var generateParenthesis = function(n) {
    let result = []
    function generate(left, right, n, s){
        if(s.length === 2*n){
            result.push(s)
            return result
        }
        if(left < n){
            generate(left+1,right,n,s+'(')
        }
        if(right < left){
            generate(left,right+1,n,s+')')
        }
    }
    generate(0,0,n,'')
    return result
};
```

实战题目

- [爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)（阿里巴巴、腾讯、字节跳动在半年内面试常考）
- [括号生成](https://leetcode-cn.com/problems/generate-parentheses/) (字节跳动在半年内面试中考过)
- [翻转二叉树](https://leetcode-cn.com/problems/invert-binary-tree/description/) (谷歌、字节跳动、Facebook 在半年内面试中考过)
- [验证二叉搜索树](https://leetcode-cn.com/problems/validate-binary-search-tree)（亚马逊、微软、Facebook 在半年内面试中考过）
- [二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree)（亚马逊、微软、字节跳动在半年内面试中考过）
- [二叉树的最小深度](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree)（Facebook、字节跳动、谷歌在半年内面试中考过）
- [二叉树的序列化与反序列化](https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/)（Facebook、亚马逊在半年内面试常考）

### week03每日一题

15. 三数之和

先将数组进行排序
从左侧开始，选定一个值为 定值 ，右侧进行求解，获取与其相加为 00 的两个值
类似于快排，定义首和尾
首尾与 定值 相加
等于 00，记录这三个值
小于 00，首部右移
大于 00，尾部左移
定值右移，重复该步骤

```jsx
var threeSum = function(nums) {
  // 最左侧值为定值，右侧所有值进行两边推进计算
  let res = [];
  nums.sort((a, b) => a - b);
  let size = nums.length;
  if (nums[0] <= 0 && nums[size - 1] >= 0) {
    // 保证有正数负数
    let i = 0;
    while (i < size - 2) {
      if (nums[i] > 0) break; // 最左侧大于0，无解
      let first = i + 1;
      let last = size - 1;
      while (first < last) {
        if (nums[i] * nums[last] > 0) break; // 三数同符号，无解
        let sum = nums[i] + nums[first] + nums[last];
        if (sum === 0) {
          res.push([nums[i], nums[first], nums[last]]);
        }
        if (sum <= 0) {
          // 负数过小，first右移
          while (nums[first] === nums[++first]) {} // 重复值跳过
        } else {
          while (nums[last] === nums[--last]) {} // 重复值跳过
        }
      }
      while (nums[i] === nums[++i]) {}
    }
  }

  return res;
};
```

面试题 17.09. 第 k 个数

```python
class Solution(object):
    def getKthMagicNumber(self, k):
        """
        :type k: int
        :rtype: int
        """
        p3=p5=p7=0

        dp=[1]*k

        for i in range(1,k):
            dp[i] = min(dp[p3]*3,dp[p5]*5,dp[p7]*7)

            if(dp[i]==dp[p3]*3): p3+=1
            if(dp[i]==dp[p5]*5): p5+=1
            if(dp[i]==dp[p7]*7): p7+=1
        
        return dp[k-1]
```

18. 四数之和

```jsx
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (!Array.isArray(nums) || nums.length < 4) return [];
  const result =[];
  nums.sort((a,b) => (a -b));
  for (let i = 0; i < nums.length - 3; i++) {
    // 排除重复数据项
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    // j的下标开始一定在i后位
    for (let j = i + 1; j < nums.length - 2; j++) {
      // 排除重复数据项
      if (j > (i + 1) && nums[j] === nums[j - 1] ) continue;
      let left = j + 1;
      let right = nums.length -1;
      while (left < right) {
        const total = nums[i] + nums[j] + nums[left] + nums[right];
        if (total < target) {
          ++left;
        } else if (total > target) {
          --right;
        } else {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          ++left;
          --right;
          // 排除重复数据项
          while (left < right && nums[left] === nums[left - 1]) ++left;
          while (left < right && nums[right] === nums[right + 1]) --right;
        }
      }
    }
  }
  return result;
};
```

剑指 Offer 68 - II. 二叉树的最近公共祖先

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def lowestCommonAncestor(self, root, p, q):
        """
        :type root: TreeNode
        :type p: TreeNode
        :type q: TreeNode
        :rtype: TreeNode
        """
        if not root or root == p or root == q:
            return root
        left = self.lowestCommonAncestor(root.left, p, q)
        right = self.lowestCommonAncestor(root.right, p, q)

        if not left:
            return right
        if not right:
            return left
        return root
```

剑指 Offer 05. 替换空格

```jsx
var replaceSpace = function(s) {
    return s.replace(/\s/gm,'%20')
};
```

剑指 Offer 06. 从尾到头打印链表

```java
class Solution {
    public int[] reversePrint(ListNode head) {
        //先获取链表长度，创建对应长度数组
        ListNode currNode = head;
        int len = 0;
        while(currNode != null){
            len ++;
            currNode = currNode.next;
        }
        int[] result = new int[len];
        
        //再次遍历链表，将值倒序填充至结果数组
        currNode = head;
        while(currNode != null){
            result[len - 1] = currNode.val;
            len --;
            currNode = currNode.next;
        }
        return result;
    }
}
```

94、二叉树的中序遍历

```jsx
var inorderTraversal = function(root) {
    // 左根右
    if(!root) return []
    
    var nums = []
    function traversal(node){
        if(node.left) traversal(node.left)
        nums.push(node.val)
        if(node.right) traversal(node.right)
    }
    traversal(root)
    return nums
    
}
```