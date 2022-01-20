const root = require('./存储');

/**
 * 先序遍历顺序：
 * 根节点
 * 左节点
 * 右节点
 * @param {*} tree 
 * @returns 
 */
function preOrder (tree) {
  if (tree === null) return;
  console.log(tree.data);
  preOrder(tree.leftChild);
  preOrder(tree.rightChild);
}

preOrder(root);

/**
 * 中序遍历顺序：
 * 左节点
 * 根节点
 * 右节点
 * @param {*} tree 
 */
function midOrder (tree) {
  if (tree === null) return;
  midOrder(tree.leftChild);
  console.log(tree.data);
  midOrder(tree.rightChild);
}

midOrder(root);

/**
 * 后序遍历顺序：
 * 左节点
 * 右节点
 * 根节点
 * @param {*} tree 
 */
 function backOrder (tree) {
  if (tree === null) return;
  backOrder(tree.leftChild);
  backOrder(tree.rightChild);
  console.log(tree.data);
}

backOrder(root);