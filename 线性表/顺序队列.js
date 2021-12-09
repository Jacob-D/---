class Queue {
  constructor (len = 10) {
    this.queue = [];
    this.head = this.rear = -1; // 空队列
    this.len = len; // 队列空间长度
    this.size = 0; // 队列实际元素长度
  }
  /**
   * 将元素推入队列尾部
   * 1. 判断队列是否满了，没满的话进行下一步
   *    判断队列是队满还是队空有三种方法：
   *    - 出入队列时记录一个变量size，当size = queue.len表示队满，size = 0表示队空
   *    - 维持一个变量S，入队列是设置为true，出队列设置为false，当rear = head且S=true时表示队满，rear=head且S=false时表示队空
   *    - 牺牲一个空间来区分队满和队空；入队列时判断head + 1 = rear表示队满，rear = head表示对空
   * 2. 因为会有假溢出的问题，所以rear不能是单纯的+1操作，
   *    而是用 rear = (rear + 1) % queue.len 计算rear的下一步位置
   * 3. 在新rear的位置插入元素，size++
   */
  push (val) {
    let res = false;
    if (this.size < this.len) {
      this.rear = (this.rear + 1) % this.len;
      this.queue[this.rear] = val;
      this.size++;
      res = true;
    }
    return res;
  }
  /**
   * 删除队列头部元素
   * 1. 判断队列是否为队空，不为空则进行下一步
   *    判断队列是队满还是队空有三种方法：
   *    - 出入队列时记录一个变量size，当size = queue.len表示队满，size = 0表示队空
   *    - 维持一个变量S，入队列是设置为true，出队列设置为false，当rear = head且S=true时表示队满，rear=head且S=false时表示队空
   *    - 牺牲一个空间来区分队满和队空；入队列时判断head + 1 = rear表示队满，rear = head表示对空
   * 2. 因为会有假溢出的问题，所以head不能是单纯的+1操作，
   *    而是用 head = (head + 1) % queue.len 计算head的下一步位置
   * 3. size--
   */
  shift () {
    if (this.size !== 0) {
      this.head = (this.head + 1) % this.len; // 这个head指向的是第一个元素的前一个位置
      this.size--;
      return this.queue[this.head];
    }
  }
}

const queue = new Queue(4);
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
console.log(queue);
queue.push(5);
queue.push(6);
console.log(queue);
console.log(queue.shift());
console.log(queue.shift());
queue.push(7);
queue.push(8);
console.log(queue);
