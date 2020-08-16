var twoSum = function(nums, target) {
    let hash = []
    const len = nums.length
    for (i = 0; i < len; i++){
        if(hash.indexOf(target - nums[i]) > -1){
            return [hash.indexOf(target - nums[i]), i]
        }else{
            hash.push(nums[i])
        }
    }
};