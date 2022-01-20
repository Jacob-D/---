function search (binaryTree, value) {
  if (binaryTree === null) {
    return false;
  }
  if (binaryTree.data === value) {
    return true;
  } else if (binaryTree.data > value) {
    return search(binaryTree.leftChild, value);
  } else {
    return search(binaryTree.rightChild, value);
  }
}

modules.exports = search;