class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Line {
  constructor () {
    this.line = new Node(); // 头节点
    this.size = 0;
  }
  /**
   * 根据list集合创建单链表
   * 如果直接遍历list来创建，则需每次增加链表节点时都需要定位到链表尾部，效率低下
   * 因此，可以直接在头结点后增加节点，但是会导致生成的链表为倒叙的，
   * 可以提前将list进行reverse，就可以得到正确顺序的链表
   * @param {*} list 节点值集合
   */
  create (list) {
    list = list.reverse();
    for (let item of list) {
      const node = new Node(item);
      node.next = this.line.next;
      this.line.next = node;
      this.size++;
    }
  } 
  /**
   * 按位置查找
   * 1. 判断下标i是否在合法的范围内
   * 2. 设置初始值，p当前下标，n当前节点
   * 3. 循环遍历line，p<i且n不为null时继续遍历
   * 4. 跳出循环后，判断n===i且n存在
   * 5. 满足条件则返回n，否则返回undefined
   * @param {*} i 下标位置
   * @returns 成功返回Node节点；失败返回undefined；
   */
  retrival (i) {
    if (i < 0 || i >= this.size) {
      throw new Error('range_error');
    }

    let p = 0,
        node = this.line.next;

    while(node && p < i) {
      node = node.next;
      p++;
    }

    if (node && p === i) {
      return node;
    }
  }
  /**
   * 在指定下标位置插入值val
   * 1. 校验插入下标i是否合法
   * 2. 初始化一个新Node节点p
   * 3. 定位到 i - 1 位置的节点s
   * 4. p.next = s.next
   * 5. s.next = p
   * 6. 返回true
   * @param {*} i 插入下标
   * @param {*} val 插入值
   * @returns true插入成功；false插入失败；
   */
  insert (i, val) {
    if (i < 0 || i >= this.size) {
      throw new Error('range_error');
    }
    const p = new Node(val);
    const s = i === 0 ? this.line : this.retrival(i - 1);
    p.next = s.next;
    s.next = p;
    this.size++;
    return true;
  }
  /**
   * 删除指定下标的节点
   * 1. 校验插入下标i是否合法
   * 2. 定位到 i - 1 位置的节点s
   * 3. s.next = s.next.next
   * 4. 返回结果true
   * @param {*} i 
   */
  delete (i) {
    if (i < 0 || i >= this.size) {
      throw new Error('range_error');
    }
    const s = i === 0 ? this.line : this.retrival(i - 1);
    s.next = s.next.next;
    this.size--;
  }
  print () {
    console.log(JSON.stringify(this.line));
  }
}

// const line = new Line();
// line.create(['a', 'b', 'c', 'd'])
// line.print()
// line.insert(0, 'begin');
// line.print()
// line.delete(0)
// line.print()
// console.log(line.retrival(0))


module.exports  = Line;