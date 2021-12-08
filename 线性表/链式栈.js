class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Stack {
  constructor () {
    this.stack = new Node();
  }
  push (val) {
    const node = new Node(val);
    node.next = this.stack.next;
    this.stack.next = node;
  }
  pop () {
    if (this.stack.next) {
      this.stack.next = this.stack.next.next;
    } else {
      throw new Error('underflow');
    }
  }
  getTop () {
    if (this.stack.next) {
      return this.stack.next;
    } else {
      throw new Error('underflow');
    }
  }
}

const stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
console.log(JSON.stringify(stack))
console.log(stack.getTop())
stack.pop();
stack.pop();
stack.pop();
console.log(stack);
