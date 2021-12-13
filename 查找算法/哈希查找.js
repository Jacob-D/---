/**
 * 这里使用 除留取余法 作为hash函数
 * 线性探测再散列作为 处理冲突的方法
 */
class Map {
  constructor (size = 12) {
    this.list = new Array(12);
    this.size = size;
  }
  hash (key) {
    return key % 11; // 除留取余法一般Mod表长的最大质数
  }
  conflict (curIndex) {
    const step = 1;
    return (curIndex + step) % this.size;
  }
  /**
   * 添加元素到哈希查找表中
   * 1. 如果查找表中已经有key对应的记录时，返回成功
   * 2. 否则，根据元素关键字计算出存储地址A
   * 3. 查找list表地址A上是否存在数据元素，不存在则将元素Key放入，返回成功
   * 4. 否则，通过conflict方法计算出下一个存放的地址B，重复步骤2，3
   * 5. 遍历完了整个表长的长度也没有找到时，返回失败
   * @param {*} key 
   */
  set (key, val) {
    if (this.get(key)) return;
    let index = this.hash(key);
    let times = 0;
    while (this.list[index] && times < this.size) {
      index = this.conflict(index);
      times++;
    }
    if (!this.list[index]) {
      this.list[index] = val;
      return true;
    } else {
      return false;
    }
  }
  /**
   * 根据关键字在哈希表中查找该元素
   * 1. 根据元素关键字计算出存储地址A
   * 2. 查找list表地址A上是否存在数据元素，不存在返回查找失败
   * 3. 否则，对比元素是否相等，相等返回查找成功，不相等则通过conflict计算下一个地址，重复步骤2，3
   * 4. 遍历完了整个表长的长度也没有找到时，返回查找失败
   * @param {*} key 
   */
  get (key) {
    let index = this.hash(key);
    let times = 0;
    while (this.list[index] && times < this.size) {
      if (this.list[index].id !== key) {
        index = this.conflict(index);
        times++;
      } else {
        return this.list[index];
      }
    }
    return false;
  }
}

const map = new Map();
map.set(3, {id: 3})
map.set(3, {id: 4})
map.set(12, {id: 12})
map.set(1, {id: 1})
console.log(map)
console.log(map.get(12))