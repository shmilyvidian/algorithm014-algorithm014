
var moveZeroes = function(nums) {
    let i = 0, j = 0
    for (; i < nums.length; i++) {
        if (nums[i] !== 0) {
        let temp = nums[j]
        nums[j] = nums[i]
        nums[i] = temp
        j++
        }
    }
}