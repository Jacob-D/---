/**
 * 算法思想：
 * 归并排序是基于有序表的合并，有序表的合并时间复杂度为O(m + n)，效率很高
 * 在归并排序中，将每个元素看做独立的有序列表，然后俩俩合并，
 * 第一次，形成了list.length/2个有序列表
 * 第二次，合并形成list.length/2/2个有序表，
 * 第n次后，只有两个有序表时，再进行一个有序表合并操作
 * 就完成了总的排序，这里利用了分治的思想，将大的问题分解成了小的问题，再通过小问题的解形成最终问题的解
 * 时间复杂度为O(nlogn)，空间复杂度为O(n)
 */
function mergeSort(list, tempList, left, right) {
  if (left < right) {
    const center = Math.floor((left + right) / 2);
    mergeSort(list, tempList, left, center);
    mergeSort(list, tempList,  center + 1, right);
    merge(list, tempList, left, center + 1, right);
  }
  return list;
}

/**
 * 合并两个有序列表
 * @param {*} list 
 * @param {*} tempList 存储合并的表
 * @param {*} leftStart 有序列表A的起始位置 
 * @param {*} rightStart 有序列表的起始位置 
 * @param {*} rightEnd 有序列表的结束位置 
 */
function merge (list,tempList, leftStart, rightStart, rightEnd) {
  const leftEnd = rightStart - 1;
  let leftPos = leftStart;
  let rightPos = rightStart;
  let tempPos = leftStart;

  while (leftPos <= leftEnd && rightPos <= rightEnd) {
    if (list[leftPos] < list[rightPos]) {
      tempList[tempPos] = list[leftPos++];
    } else if (list[leftPos] > list[rightPos]) {
      tempList[tempPos] = list[rightPos++];
    } else {
      tempList[tempPos] = list[leftPos];
      leftPos++;
      rightPos++;
    }
    tempPos++;
  }

  while (leftPos <= leftEnd) {
    tempList[tempPos++] = list[leftPos++];
  }
  
  while (rightPos <= rightEnd) {
    tempList[tempPos++] = list[rightPos++];
  }

  // 将tempList有序数据回写到list当中
  for (let i = leftStart; i <= rightEnd; i++) {
    list[i] = tempList[i];
  }
}

const res2 = mergeSort([3, 70, 2, 0, -1, 40, 100, 8, 2], [], 0, 8)
console.log(res2)