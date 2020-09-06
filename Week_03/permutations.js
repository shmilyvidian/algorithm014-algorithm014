let permute = (nums) => {
    let res = []
    dfs([])
    function dfs(path){
        if(path.length === nums.length){
            return res.push([...path])
        }
        for(let i = 0; i < nums.length; i++){
            if(path.includes(nums[i])){
                continue
            }
            path.push(nums[i])
            dfs(path)
            path.pop()
        }
    }
    return res
}

let permute2 = (nums) => {
    let res = []
    function swap(p,q){
        if(p===q)return
        [nums[p], nums[q]] = [nums[q], nums[p]]
    }
    function dfs(p,q){
        if(p === q){
            res.push([...nums])
            return
        }
        for(let i = p; i <= p; i++){
            swap(p, i)
            dfs(p+1,q)
            swap(p,i)
        }

    }
    dfs(0, nums.length - 1)
    return res
}


let permute3 = (nums) => {
  const result = []

  function dfs(path){
      if(path.length === nums.length){
          result.push([...path])
          return
      }

      for(let i = 0; i < nums.length; i++){
          if(path.includes(nums[i])) continue
          path. push(nums[i])
          dfs(path.slice())
          path.pop()
      }
  }

  dfs([])
  return result

}

permute3([1,2,3])