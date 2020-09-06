var twoSum = function (nums, target) {
    let hash = []
    const len = nums.length
    for (i = 0; i < len; i++) {
        if (hash.indexOf(target - nums[i]) > -1) {
            return [hash.indexOf(target - nums[i]), i]
        } else {
            hash.push(nums[i])
        }
    }
};


var twoSum = function (numbers, target) {
    // 双指针法决定l,r，但是不能二分查找，也就是需要一个个遍历。(使用m会错过)
    var l = 0,
        r = numbers.length - 1;
    // 下标从1开始
    while (l < r) {
        if (l != r && numbers[l] + numbers[r] == target) return [++l, ++r]
        if (numbers[l] + numbers[r] > target) {
            while (numbers[r] == numbers[--r]) {}; // 去重
        } else {
            while (numbers[l] == numbers[++l]) {};
        }
    }
    return [r, l]
};