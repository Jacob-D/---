const { Node } = require('./插入');

/**
 * @param {*} BST 
 * @param {*} val 
 */
function deleteNode (BST, val) {
  let curNode = preNode = BST,
      childField = '';
  while (curNode && curNode.data !== val) {
    preNode = curNode;
    if (curNode.data > val) {
      curNode = curNode.leftChild;
    } else {
      curNode = curNode.rightChild;
    }
  }
  if (curNode === null) {
    return false;
  }
  childField = preNode.leftChild === curNode ? 'leftChild' : 'rightChild';
  if (curNode.leftChild === null && curNode.rightChild === null) {
    preNode[childField] = null;
  } else if (curNode.leftChild && curNode.rightChild) {
    // 寻找到curNode的中序遍历前驱节点
    let preMidOrderNode = curNode; // curNode中序遍历前驱节点的父亲节点
    let midOrderNode = curNode.leftChild; // curNode中序遍历前驱节点
    while(midOrderNode.rightChild) {
      preMidOrderNode = midOrderNode;
      midOrderNode = midOrderNode.rightChild;
    }
    // 用前驱节点覆盖被删除节点
    curNode.data = midOrderNode.data;
    if (preMidOrderNode === curNode) {
      curNode.leftChild = midOrderNode.leftChild;
    } else {
      preMidOrderNode.rightChild = midOrderNode.leftChild;
    }
  } else {
    preNode[childField] = curNode.leftChild || curNode.rightChild;
  }
  return true;
}

const node1 = new Node(4);
const node2 = new Node(2);
const node3 = new Node(8);
const node4 = new Node(1);
const node5 = new Node(3);
node2.leftChild = node4;
node2.rightChild = node5;
node1.leftChild = node2;
node1.rightChild = node3;

deleteNode(node1, 2);
console.log(node1)