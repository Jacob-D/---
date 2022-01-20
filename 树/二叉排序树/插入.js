
class Node {
  constructor (data, leftChild = null, rightChild = null) {
    this.data = data;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}

function search (binaryTree, value, previous) {
  if (binaryTree === null) {
    return false;
  }
  previous.node = binaryTree;
  if (binaryTree.data === value) {
    return true;
  } else if (binaryTree.data > value) {
    return search(binaryTree.leftChild, value, previous);
  } else {
    return search(binaryTree.rightChild, value, previous);
  }
}

function insert (binaryTree, value) {
  const previous = {
    node: null
  };
  if (search(binaryTree, value, previous)) {
    return false;
  } else {
    const node = {
      leftChild: null,
      rightChild: null,
      data: value
    };
    const preNode = previous.node;
    if (preNode === null) {
      binaryTree = node;
    } else if (preNode.data > value) {
      preNode.leftChild = node;
    } else {
      preNode.rightChild = node;
    }
    return true;
  }
}

const node1 = new Node(4);
const node2 = new Node(2);
const node3 = new Node(8);
node1.leftChild = node2;
node1.rightChild = node3;

insert(node1, 0);
console.log(node1);

module.exports = {
  Node,
  insert
}
