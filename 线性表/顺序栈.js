class Stack {
  constructor () {
    this.stack = [];
    this.top = -1;
  }
  push (val) {
    this.top++;
    this.stack[this.top] = val;
  }
  pop () {
    if (this.top >= 0) {
      return this.stack[this.top--];
    } else {
      throw new Error('underflow')
    }
  }
  getTop () {
    if (this.top >= 0) {
      return this.stack[this.top];
    } else {
      throw new Error('underflow')
    }
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
console.log(stack.getTop());
stack.pop();
stack.pop();
stack.pop();
console.log(stack);
