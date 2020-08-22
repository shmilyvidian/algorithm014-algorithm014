// 1. 两数之和
var twoSum = function(nums, target) {
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
};