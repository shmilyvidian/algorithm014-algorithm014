// 55. 跳跃游戏
var canJump = function(nums) {
    if(!nums || nums.length === 0) return true
    let index = nums.length-1;
    for(let i = nums.length-1; i >= 0; i--){
        if(nums[i] + i >= index){
            index = i
        }
    }

    return index === 0
};