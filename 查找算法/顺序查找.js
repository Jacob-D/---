/**
 * 在list线性表中查找关键字为keyword的记录，并返回下标
 * @param {*} list 这里默认为顺序存储结构线性表
 * @param {*} keyword 关键字
 * @returns -1没找到
 */
function findIndex(list, keyword) {
  const length = list.length;
  for (let i = 0; i < length; i++) {
    if (list[i] === keyword) {
      return i;
    }
  }
  return -1;
}