学习笔记
# **hash table**

**哈希表**

也叫散列表，是根据关键码值而直接进行访问的数据结构。这个映射函数叫散列函数，存放记录的数组叫做哈希表或散列表。

**哈希碰撞**

不同要存储的数据经过哈希函数存在同一个地址

**碰撞解决**：拉链法

map / set

有效的字母异位词

### **题目实践**

1、sort排序转为str，最后比较，复杂度NLogN

```jsx
var isAnagram = function(s, t) {
    const S = s.split('').sort().join('')
    const T = t.split('').sort().join('')
    return S == T
};
```

2、hash存放出现的次数

```jsx
var isAnagram = function(s, t) {
   const hash = {}
   const S = s.split('').sort()
   const T = t.split('').sort()
   if(S.length != T.length) return false
   for(let i = 0; i < S.length; i++){
       hash[S[i]] = hash[S[i]] ? ++hash[S[i]] : 1
       if(S[i] == T[i]){
           hash[S[i]]--
       }else{
           hash[S[i]] = hash[S[i]] ? ++hash[S[i]] : 1
       }
   }
   
   return Object.values(hash).every(o=>!o)
};

var isAnagram = function(s, t) {
		if(s.length !== t.length) {
        return false
    }

    var hash = Array(26).fill(0)
    var codeA = "a".charCodeAt()
    let length = s.length
		for(let i = 0; i < length; i++){
				hash[s.charCodeAt(i) - codeA]++
				hash[t.charCodeAt(i) - codeA]--
		}
		for(let value of hash) {
        if(value !== 0) {
            return false
        }
    }
    return true
}
```

3、使用Python内置集合

```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return collections.Counter(s) == collections.Counter(t)

def isAnagram1(self, s, t):
    dic1, dic2 = {}, {}
    for item in s:
        dic1[item] = dic1.get(item, 0) + 1
    for item in t:
        dic2[item] = dic2.get(item, 0) + 1
    return dic1 == dic2
```

字母异位词分组

1、利用Map，遍历排序分别针对已存在和未存在分别不同push

```jsx
var groupAnagrams = function(strs) {
	let hash = new Map()
	for (let i = 0; i < strs.length; i++){
			let cur = strs[i].split('').sort().join('')
			if(hash.has(cru)){
					let temp = hash.get(cur)
					temp.push(str[i])
					hash.set(str, temp)
			}else{
					hash.set(str, [str[i]])
			}
	}
	return [...hash.values()]
}
```

两数之和

```jsx
const twoSum = (nums) => {
		let hash = []
    const len = nums.length
    for (i = 0; i < len; i++){
				const index = hash.indexOf(target - nums[i])
        if(index > -1){
            return [index, i]
        }else{
            hash.push(nums[i])
        }
    }
	}
}

const twoSum = (nums, target) => {
  // 1. 构造哈希表
  const map = new Map(); // 存储方式 {need, index}

  // 2. 遍历数组
  for (let i = 0; i < nums.length; i++) {
    // 2.1 如果找到 target - nums[i] 的值
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    } else {
      // 2.2 如果没找到则进行设置
      map.set(target - nums[i], i);
    }
  }
}
```

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashset={}
        for i in range(len(nums)):
            if hashset.get(target-nums[i]) is not None :
                return [hashset.get(target-nums[i]),i]
            hashset[nums[i]]=i
```

# 树、二叉树、二叉搜索树

树的概念：树状图是一种数据结构，它是由n（n>=1）个有限结点组成一个具有层次关系的集合。把它叫做“树”是因为它看起来像一棵倒挂的树，也就是说它是根朝上，而叶朝下的。

它具有以下的特点：
每个结点有零个或多个子结点；没有父结点的结点称为根结点；每一个非根结点有且只有一个父结点；除了根结点外，每个子结点可以分为多个不相交的子树

二叉树：儿子节点只有两个

树和图最大的区别：是否有环，形成环为图，链表就是特殊化的树，树是特殊化的图

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9ab838a3-f92a-4860-895d-6565a0cb6906/2020-08-23_14.52.15.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9ab838a3-f92a-4860-895d-6565a0cb6906/2020-08-23_14.52.15.png)

遍历：前序、中序和后序

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c593164e-1616-41fc-b8c0-afe224d31ccf/2020-08-23_15.06.42.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c593164e-1616-41fc-b8c0-afe224d31ccf/2020-08-23_15.06.42.png)

二叉搜索树：一般二叉树遍历都是O(N)，二叉搜索树也称二叉排序树、有序二叉树、排序二叉树，是指一颗空树或者具有下列性质的二叉树：

- 左子树的所有节点小于它的根结点的值
- 右子树的所有节点大于它的根结点的值
- 依次类推，左右子树分别为二叉查找树

可得中序遍历是升序的，左根右

二叉搜索树的查询、插入和删除都是O(logN)

树的结构便于递归解决

### 题目实战

94. 二叉树的中序遍历

1、左根右递归遍历

```jsx
var inorderTraversal = function(root) {
    // 左根右
    if(!root) return []
    const nums = []
    function traversal(node){
        if(node.left) traversal(node.left)
        nums.push(node.val)
        if(node.right) traversal(node.right)
    }
    traversal(root)
    return nums 
}
```

2、使用颜色标记节点的状态，新节点为白色，已访问的节点为灰色。
如果遇到的节点为白色，则将其标记为灰色，然后将其右子节点、自身、左子节点依次入栈。
如果遇到的节点为灰色，则将节点的值输出。

```python
class Solution:
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        WHITE, GRAY = 0, 1
        res = []
        stack = [(WHITE, root)]
        while stack:
            color, node = stack.pop()
            if node is None: continue
            if color == WHITE:
                stack.append((WHITE, node.right))
                stack.append((GRAY, node))
                stack.append((WHITE, node.left))
            else:
                res.append(node.val)
        return res
```

# 堆和二叉堆

Heap:可以迅速找到一堆数中的最大值或最小值的结构。将根节点最大的堆叫做大顶堆或大根堆，根节点最小的堆叫做小顶堆或小根堆。常见的堆有二叉堆、斐波拉契堆等。

二叉堆：通过完全二叉树实现，根和每一级节点都是满的，除了叶子节点。

二叉堆（大顶）满足以下性质：

- 是一棵完全树
- 树中任意节点的值总是大于等于其子节点的值

左节点：2*i+1  右节点2*i+2  找父节点floor((i-1）/ 2)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9bb9cb0d-c5c2-46c6-814e-84df0f9aa92d/2020-08-23_15.46.09.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9bb9cb0d-c5c2-46c6-814e-84df0f9aa92d/2020-08-23_15.46.09.png)

插入操作O(logN)：先放入一位数组的尾部，依次比较浮动，如果当前大于父节点，不断上移直到碰到大于它或者到根节点。

### 题目实践

剑指 Offer 40. 最小的k个数

1、使用内置方法sort排序加切割（o(nLogn)）

```jsx
var getLeastNumbers = function(arr, k) {
    if(arr.length === 0 || !arr || !k) return []
    return arr.sort((a,b)=>a-b).slice(0,k)
};
```

```python
class Solution:
    def getLeastNumbers(self, arr: List[int], k: int) -> List[int]:
        arr.sort()
        return arr[:k]
```

2、堆解法

```java
class Solution{
	public int[] getLeastNumbers(int[] arr, int k){
			Priority<Integer> heap = new PriorityQueue<>()
			for (int i = 0; i < arr.length; i++){
					heap.add(arr[i])
			}
			int[] ans = new int[k]
			for (int i = 0; i < k; i++){
					// poll 取出最小值且删除
					ans[i] = heap.poll()
			} 
			return ans
	}
}
```