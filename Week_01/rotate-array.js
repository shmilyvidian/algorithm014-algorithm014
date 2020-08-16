var rotate = function(nums, k) {
    for (var i = 0; i < k; i++) {
        nums.unshift(nums.pop())
    }
};