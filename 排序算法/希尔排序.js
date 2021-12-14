/**
 * 希尔排序是建立在插入排序的基础之上
 * 通过缩小增量（先把部分元素排序，再到整体排序）的方法使得元素整体有序，提高最终插入排序的效率
 * 算法步骤：
 * 1. 循环遍历增量序列，将序列值存入变量d中
 * 2. 按照步长为d进行分组，这里假设d = 3
 *    [0, 3, 6, ..., n],[1, 4, 7, ..., n+1],[2, 5, 8, ..., n+2],[3, 6, 9, ..., n+3]
 * 3. 对这些分组进行插入排序
 * 4. 重复1,2,3直至增量序列遍历完成
 * 
 * @param {*} list 需排序的列表
 * @param {number[]} cut 计算增量序列函数
 */
function shellSort (list) {
  const steps = cut(list);
  let s, i, j, k = 0, temp;
  while (k < steps.length) {
    s = steps[k];
    for (i = s; i < list.length; i++) {
      temp = list[i];
      j = i - s;
      while (j >=0 && temp < list[j]) {
        list[j + s] = list[j];
        j = j - s;
      }
      list[j + s] = temp;
    }
    k++;
  }

  return list;
}

/**
 * 计算增量序列
 * [..., 1] 最后一定为1，保证进行一次全量的插入排序
 * @param {*} list 
 * @returns 
 */
function cut (list) {
  let res = [], d = Math.floor(list.length/2)
  for (let i = 0; d >= 1; i++) {
      res[i] = d
      d = Math.floor(d/2)
  }
  return res
}

const res = shellSort([3, 70, 2, 0, -1, 40, 100, 8, 2])
console.log(res)