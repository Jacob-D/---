/**
 * 1. 对list[s...t]中的记录进行一趟快速排序，附设两个指针i和j，
 *    设划分元记录rp=r[s], x=xp.key
 * 2. 初始时令i = s, j = t
 * 3. 首先从j所指的位置向前搜索第一个关键字小于x的记录，并和rp交换
 * 4. 再从i所指位置起向后搜索，找到第一个关键字大于x的记录，和rp交换
 * 5. 重复上述两步，直至i==j为止
 * 6. 再分别对两个子序列进行快排，直到每个子序列只包含一个记录位置
 * 缺点：
 * 枢纽选的是第一个元素，在逆序或正序的情况下，性能很差； -- 可以使用三者取中法
 * 枢纽参与了太多的交换 -- 可以把枢纽放在最后一位，不参与交换
 * @param {*} list 
 */
function quickSort(list, low, high) {
  if (low >= high) return;

  let i = low, 
      j = high,
      x = list[i];

  while(i < j) { 
    // 单次快排
    while (i < j && list[j] >= x) {
      j--;
    }
    if (i < j) {
      list[i] = list[j];
      list[j] = x;
      i++;
    }
    while (i < j && list[i] <= x) {
      i++;
    }
    if (i < j) {
      list[j] = list[i];
      list[i] = x;
      j--;
    }
  }

  list[i] = x;
  quickSort(list, low, j - 1);
  quickSort(list, j + 1, high);
  return list;
}

const res5 = qucikSortWithRefine([3, 70, 2, 0, -1, 40, 100, 8, 2], 0, 8);
console.log(res5);

/**
 * 优化后的快排
 * 1. 采用三者取中法，获取枢纽
 * 2. 不让枢纽进行交换
 * @param {*} list 
 * @param {*} low 
 * @param {*} high 
 */
function qucikSortWithRefine (list, low, high) {
  // 获取到三者取中法的定位的下标，将其位置与high进行置换
  let i = getMiddleValue(list, low, high);
  let temp = list[i];
  list[i] = list[high];
  list[high] = temp;
  
  // 开始将0 - high-1范围内的记录和枢纽list[high]进行比对
  i = 0;
  let j = high - 1;

  while(i < j) {
    while(i < j && list[j] >= list[high]) {
      j--;
    }
    while(i < j && list[i] <= list[high]) {
      i++;
    }
    if (i < j) {
      temp = list[j];
      list[j] = list[i];
      list[i] = temp;
    }
  }

  temp = list[j];
  list[j] = list[high];
  list[high] = temp;

  quickSort(list, low, j - 1);
  quickSort(list, j + 1, high);

  return list;
}

/**
 * 比较下标为low, high, (low + high) / 2对应的值
 * 返回中间值对应的下标
 * @param {*} list 
 */
function getMiddleValue (list, low, high) {
  const middle = Math.floor((low + high) / 2);
  const _list = [list[low], list[middle], list[high]]; 
  const map = new Map();
  let temp, i, j;
  map.set(list[low], low);
  map.set(list[middle], middle);
  map.set(list[high], high);
  // 插入排序
  for (i = 1; i < _list.length - 1; i++) { // 无序
    temp = _list[i];
    j = i - 1; // 有序 
    while (j >= 0 && _list[j] > temp) { 
      _list[j + 1] = _list[j];
      j--;
    }
    _list[j + 1] = temp;
  }
  return map.get(_list[1]);
}