// 77. 组合

var combine = function(n, k) {
    
    var res = [];
    var could = [];
    if(k==0){
        return [[]]
    }
    function dfs(start,n,k,res,could){
        if(could.length == k){
            res.push(could.slice(0));
            return;
        }
        for(var i = start; i<n+1; i++){
            could.push(i);
            dfs(i+1,n,k,res,could);
            could.pop()
        }
        return res;
    }
    return dfs(1,n,k,res,could)
}