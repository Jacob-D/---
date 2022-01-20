const { Node, insert } = require('./插入');

/**
 * 给出数字数组list,
 * 根据list创建一个二叉排序树
 * 思路：
 * 遍历list，对每个元素进行插入操作，返回最终的结果树
 */
function createBTS (list) {
  const root = new Node(list[0]);
  for (let item of list) {
    insert(root, item);
  }
  return root;
}

const list = [4, 8, 2, 10];
const BST = createBTS(list);
console.log(BST);