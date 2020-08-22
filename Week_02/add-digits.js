// 258. 各位相加
var addDigits = function(num) {
    if(num < 10) return num
    return num % 9 || 9
};