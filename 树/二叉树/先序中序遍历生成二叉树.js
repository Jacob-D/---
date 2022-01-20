class Node {
  constructor (data, leftChild = null, rightChild = null) {
    this.data = data;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}

/**
 * 根据先序和中序遍历二叉树的结果，还原二叉树
 * @param {*} preOrder 先序
 * @param {*} midOrder 中序
 * @param {*} i 先序起始下标
 * @param {*} j 先序结束下标
 * @param {*} k 中序起始下标
 * @param {*} h 中序结束下标
 */
function createTreeByPreMidOrder (preOrder, midOrder, i, j, k, h) {
  const root = new Node(preOrder[i]);
  let m = k;
  while(preOrder[i] !== midOrder[m]) {
    m++;
  }
  if (m === k) {
    root.leftChild = null;
  } else {
    root.leftChild = createTreeByPreMidOrder(preOrder, midOrder, i + 1, i + m - k, k, m - 1);
  }
  if (m === h) {
    root.rightChild = null;
  } else {
    root.rightChild = createTreeByPreMidOrder(preOrder, midOrder, i + m - k + 1, j, m + 1, h);
  }
  return root;
}

const preOrder = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
const midOrder = ['C', 'B', 'D', 'A', 'E', 'G', 'F']
const tree = createTreeByPreMidOrder(preOrder, midOrder, 0, 6, 0, 6);
console.log(JSON.stringify(tree));