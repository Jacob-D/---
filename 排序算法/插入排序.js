/**
 * 插入排序（稳定排序）
 * 选取无序子序列的第一个记录a，
 * 从后往前的与有序子序列的记录b进行比对，
 * b > a，将b向后移动一位，继续与有序序列记录进行比对，
 * 直至 b <= a 或 有序序列记录对比完了，这时的假设定位下标为i，
 * 将list[i + 1] = a，完成一次交换
 * 当有序列表的表长等list.length时，整个list完成了排序
 * 
 * 最好情况，list为递增有序序列，时间复杂度 O(n) ，空间复杂度为O(1)
 * 最坏情况，list为递减有序序列，时间复杂度 O(n^2) ，空间复杂度为O(1)
 * @param {*} list 
 * @returns 
 */
function insertSort (list) {
  let temp, m, i;

  for (i = 1; i < list.length; i++) { // i从1开始计算，就是把第0个元素当做了有序子序列，剩余的则是无序子序列
    temp = list[i];
    m = i - 1;
    while (list[m] > temp && m >= 0) {
      list[m + 1] = list[m];
      m--;
    }
    list[m + 1] = temp;
  }

  return list;
}

const list = insertSort([3, 70, 2, 0, -1, 40, 100, 8, 2])
console.log(list)