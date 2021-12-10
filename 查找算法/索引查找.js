/**
 * 在数组中查找给定的数值
 * 1. 分析数据，将数据分块(第R(k)块中所有关键字 < R(k+1)中所有关键字，(K=1,2,...,L-1))
 * 2. 将块关键字K(该块中最大值)和块的位置I建立键值对关系，所有的键值对组成索引表
 * 3. 获取需要查找的值val，逐一和索引表的关键字比对
 *    当val > K，继续搜索索引表，直到 val <= K 时定位到块的位置
 *    或者当遍历完索引表时，也没有 val <= K，这时搜索失败返回-1
 * 4. 定位到块的位置后，再在块中进行顺序查找，找到则返回对应位置，否则返回-1 
 */

// 给定一个无序的列表
const list = [23, 2, 8, 79, 15, 32, 144, 68, 91, 234, 55, 66];

// 将无序列表分块，建立索引表
const listWithBlock = [23, 2, 8, 15, 32, 55, 66, 68, 79, 91, 144, 234];
const indexTable = [
  {
    k: 23,
    i: 0,
  }, {
    k: 68,
    i: 4
  }, {
    k: 234,
    i: 8
  }, { // 增加一个索引，便于定位块后计算块的起始范围
    i: 12
  }
];

function indexSearch (val) {
  let p = 0,
      node = indexTable[p];
  const indexLen = indexTable.length - 1;

  while (p < indexLen && val > node.k) {
    p++;
    node = indexTable[p];
  }

  if (p === indexLen) {
    return -1;
  } else {
    let start = node.i,
        end = indexTable[p + 1].i;

    for (p = start; p < end; p++) {
      if (listWithBlock[p] === val) {
        return p;
      }
    }
    return -1;
  }
}

const res1 = indexSearch(234);
console.log(res1);
const res2 = indexSearch(-1);
console.log(res2);
const res3 = indexSearch(66);
console.log(res3);