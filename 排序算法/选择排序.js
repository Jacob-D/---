/**
 * 选择排序
 * 默认整个list为无须序列，
 * 从无序子序列中选取最大或最小的值
 * 并将它加入有序子序列中，依此方法增加记录的有序子序列长度
 * 直至有序子序列长度 = list长度
 * 时间复杂度O(n^2)
 */
function selectSort (list) {
  for (let i = 0; i < list.length; i++) {
    let temp, min = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[min]) {
        min = j;
      }
    }
    if (min !== i) {
      temp = list[i];
      list[i] = list[min];
      list[min] = temp;
    }
  }
  return list;
}  
1, 2, 3


const res1 = selectSort([3, 70, 2, 0, -1, 40, 100, 8, 2])
console.log(res1)