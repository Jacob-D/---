function calcBinaryTreeDepth (binaryTree) {
  if (binaryTree === null) return 0;
  if (binaryTree.leftChild === null && binaryTree.rightChild === null) return 1;
  return 1 + Math.max(
    calcBinaryTreeDepth(binaryTree.leftChild), 
    calcBinaryTreeDepth(binaryTree.rightChild)
  );
}