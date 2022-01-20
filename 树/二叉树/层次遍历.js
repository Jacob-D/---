const root = require('./存储');

function layerOrder (tree) {
  if (tree === null) return;
  const queue = [tree];

  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node.data);
    node.leftChild && queue.push(node.leftChild);
    node.rightChild && queue.push(node.rightChild);
  }
}

layerOrder(root);