/**
 * 插入排序（稳定排序）
 * 最好情况，list为递增有序序列，时间复杂度 O(n) ，空间复杂度为O(1)
 * 最坏情况，list为递减有序序列，时间复杂度 O(n^2) ，空间复杂度为O(1)
 * @param {*} list 
 * @returns 
 */
function insertSort (list) {
  let temp, m, i;

  for (i = 1; i < list.length; i++) {
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