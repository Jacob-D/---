class Node {
  constructor (val, next) {
    this.val = val;
    this.next = next;
  }
}

class Queue {
  constructor () {
    this.queue = new Node();
    this.head = this.rear = this.queue;
  }
  /**
   * 将节点推入链表的尾部
   * 1. 初始化一个新的节点N
   * 2. 将this.rear.next指向新节点N
   * 3. this.rear指向新节点N
   * @param {*} val 
   */
  push (val) {
    const node = new Node(val);
    this.rear.next = node;
    this.rear = node;
  }
  /**
   * 删除头部链表节点
   * 1. 判断队列是否为空队，即this.heade.next是否为空
   *    this.head.next为空，表示已经为空队了，需要将尾结点指向头节点
   *    this.head.next有值，则进行下一步
   * 2. 将头指针指向下下个节点：this.head.next = this.head.next.next
   */
  shift () {
    if (this.head.next) {
      const node = this.head.next;
      this.head.next = node.next;
      return node;
    } else {
      this.rear = this.head;
    }
  }
}


const queue = new Queue(4);
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
console.log(JSON.stringify(queue.queue));
queue.push(5);
queue.push(6);
console.log(JSON.stringify(queue.queue));
console.log(queue.shift());
console.log(queue.shift());
console.log(JSON.stringify(queue.queue));
queue.push(7);
queue.push(8);
console.log(JSON.stringify(queue.queue));
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());
console.log(JSON.stringify(queue.queue));
