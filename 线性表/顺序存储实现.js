class Line {
  constructor () {
    this.line = [];
    this.size = 0; // 长度
  }
  /**
   * 按位置查找
   * 1. 判断下标i是否在合法的范围内
   * 2. 返回正确下标位置的值
   * 时间复杂度： O(1)
   * @param {*} i 下标
   * @returns val对应下标的值；undefined线性表不存在；
   */
  retrival (i) {
    if (i >= 0 && i < this.size) {
      return this.line[i];
    } else {
      throw new Error('range_error')
    }
  }
  /**
   * 按值查找
   * 1. 遍历线性表元素，直至找到与val相等的元素
   * @param {*} val 
   * @returns undefined没有找到对应值；i返回元素的所在下标；
   */
  locate (val) {
    for (let i = 0; i < this.size; i++) {
      if (this.line[i] === val) {
        return i;
      }
    }
  }
  /**
   * 在指定位置插入数据
   * 1. 判断插入位置是否在合法范围内（0 <= 0 < size）
   * 2. 定位到 i - 1 的元素位置
   * 3. 从 i 到 size - 1 下标的元素依次往后挪动一位，从最后一个开始（避免数据覆盖）
   * 4. 将元素放入 i 的位置
   * 5. size 加一
   * size  = 3
   * i = 2
   * 
   * @param {*} i 插入数据的位置下标
   * @param {*} val 插入的元素值
   * @returns true插入成功；false插入失败；
   */
  insert (i, val) {
    let res = false;
    if (i >= 0 && i < this.size) {
      for (let t = this.size - 1; t > i; t--) {
        this.line[t + 1] = this.line[t];
      }
      this.line[i] = val;
      this.size++;
      res = true;
    }
    return res;
  }
  /**
   * 删除指定位置i的元素
   * 1. 判断删除位置是否在合法范围内（0 <= 0 < size）
   * 2. 若检查通过，则将元素依次向前移动一个位置
   * 3. size 减一
   * @param {*} i 
   */
  delete (i) {
    let res = false;
    if (i >= 0 && i < this.size) {
      for (let t = i; t < this.size; t++) {
        this.line[t] = this.line[t + 1];
      }
      this.size--;
      res = true;
    }
    return res;
  }
  /**
   * 在线性表尾部增加元素val
   * 1. 定位到最后一位元素的下标i
   * 2. 在i + 1的位置增加val
   * 3. size 加一
   * @param {*} val 
   */
  push (val) {
    this.line[this.size] = val;
    this.size++;
    return this.size;
  }
  print () {
    console.log(this.line);
  }
}

const line = new Line();
line.push('b');
line.insert(0, 'a');
line.insert(1, 'c');
line.insert(0, 'd');
line.print();
line.delete(1);
line.print();
line.insert(1, 'a');
line.print();
console.log(line.retrival(1));
console.log(line.locate('b'));
