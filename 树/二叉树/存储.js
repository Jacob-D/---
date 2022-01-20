// 链式存储

function Node (data, leftChild = null, rightChild = null) {
  this.leftChild = leftChild;
  this.rightChild = rightChild;
  this.data = data;
}

const root = new Node(
  'a',
  new Node(
    'b', 
    new Node('d')
  ),
  new Node('c')
);

module.exports = root;