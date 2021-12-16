/**
 * 算法思想：
 * 1. 将第一个记录的关键字与第二个记录的关键字进行比较，若list[1].key > r[2].key，则交换；
 * 然后比较第二个与第三个记录；依次类推，直至第n-1和第n个记录比较为止 --- 第一趟冒泡排序结束，
 * 结果关键字最大的记录被安置在最后一个记录上；
 * 2. 对前n-1个记录进行第二趟冒泡排序，结果使得关键字次大的记录被安排在第n-1的位置上；
 * 3. 重复上述步骤，直到“在一趟排序中没有进行过交换记录”为止；
 * 最好情况，list是有序递增列表，时间复杂度O(1)，空间复杂度O(1)
 * 最坏情况，list为逆序列表，时间复杂度O(n^2)，空间复杂度O(1)
 * @param {*} list 
 */
function bubleSort (list) {
  let i = list.length - 1;
  let temp; // 用于交换时临时保存数据使用
  let hasSortOperate = true; // 记录某一趟冒泡操作中是否发生过交换
  while (i > 0 && hasSortOperate) {
    hasSortOperate = false;
    for (let j = 0; j <= i; j++) {
      if (list[j] > list[j + 1]) {
        hasSortOperate = true;
        temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
    i--;
  }
  return list;
}

// const res3 = bubleSort([3, 70, 2, 0, -1, 40, 100, 8, 2])
// console.log(res3)

/**
 * 优化冒泡排序
 * 假如list中有一大段是有序的，按照原来的冒泡排序算法，依然要遍历n-i(n:list长度; i:已排序的子序列长度)次
 * 如果能够在冒泡中定位到最后一次发生交换的位置j，那么从j到n的地方都是有序的，下一次冒泡到j的位置即可
 * @param {*} list 
 * @returns 
 */
function bubleSortWithRefine (list) {
  let i = list.length - 1;
  let temp; // 用于交换时临时保存数据使用
  while (i > 0) {
    let lastExchangePos = 0; // 记录最后一次发生交换的位置，默认为0，如果没有发生交换的话直接就排序完成了
    for (let j = 0; j <= i; j++) {
      if (list[j] > list[j + 1]) {
        temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
        lastExchangePos = j - 1; // 记录交换的位置
      }
    }
    i = lastExchangePos;
  }
  return list;
}

const res4 = bubleSortWithRefine([3, 70, 2, 0, -1, 40, 100, 8, 2])
console.log(res4)