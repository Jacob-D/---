/**
  * 在有序列表中搜索关键字val，返回对应下标
  * 1. 初始化三个指针：low = 0, high = list.length -1, mid = Math.floor((low + high) / 2)
  * 2. 进行while循环，判断条件为 low <= hight，如果在循环中找到了相等值，则返回mid
  * 3. 跳出循环后，则返回-1（未找到）
  * @param {*} list 递增序列
  * @param {*} val 
  */
 function halfSearchNew (list, val) {
  let mid,
      low = 0,
      high = list.length - 1;

  while (low <= high) {
      mid = Math.floor((low + high) / 2);
      if (list[mid] > val) {
          high = mid - 1;
      } else if (list[mid] < val) {
          low = mid + 1;
      } else {
          return mid;
      }
  }

  return -1;
}

const data = [2, 4, 6, 8, 10, 12, 24]
console.log(halfSearchNew(data, 12))