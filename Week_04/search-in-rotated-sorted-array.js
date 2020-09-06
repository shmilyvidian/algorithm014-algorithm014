// 33. 搜索旋转排序数组
var search = function (nums, target) {
    if (!nums || nums.length === 0) return -1;
    let start = 0;
    let end = nums.length - 1;
    let mid;
    while (start <= end) {
      mid = Math.ceil((start + end) / 2);
      // 首尾中全部验证
      if (nums[mid] === target) return mid;
      if (nums[start] === target) return start;
      if (nums[end] === target) return end;
      // 说明前半部分有序
      if (nums[start] < nums[mid]) {
        // 说明目标值存在于有序部分，将末尾设置为mid
        // 继续执行二分查找
        if (nums[start] < target && target < nums[mid]) {
          end = mid - 1;
        } else {
          // 说明目标值存在于后半段
          start = mid + 1;
        }
      } else {
        // 说明后半部分有序
        // 判断目标值是否在后半部分
        if (nums[mid] < target && target < nums[end]) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      }
    }
    return -1;
  };