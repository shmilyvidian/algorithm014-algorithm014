// 70. 爬楼梯
var climbStairs = function(n) {
    const dp = [1, 1]
    for(let i = 2; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
};


var climbStairs = function(n) {
    let first  = 0
    let second = 1
    for(let i = 0; i <= n; i++){
        [first, second] = [second, first+second]
    }
    return first
};