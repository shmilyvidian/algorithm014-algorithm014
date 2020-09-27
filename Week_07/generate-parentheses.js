var generateParenthesis = function(n) {
    if (n === 0) return 0
    let result = []
    function dfs(left, right, s, n){
        if(left === n && right === n){
            result.push(s)
            return result
        }
        if(left < n){
            dfs(left+1, right, s+'(', n)
        }
        if(right < left){
           dfs(left, right+1, s+')', n) 
        }
    }
    dfs(0, 0, '', n)
    return result
};