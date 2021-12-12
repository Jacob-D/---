/**
 * 实现顺序存储表的反转
 * list = [1, 2, 3, 4, 5]
 * 反转后
 * list = [5, 4, 3, 2, 1]
 * 
 * 1. 有几种反转算法？
 * 2. 效率最高的是哪种？
 * 
 * 第一种解法：
 * 声明一个长度大小与list一致的数组L，将list倒叙遍历，并将遍历元素逐一从L尾部插入
 * 时间复杂度O(n)，空间复杂度O(n)
 * 
 * 第二种解法：
 * 利用栈的先进后出，实现反转
 * 声明一个栈L，在将list元素依次入栈，然后再依次出栈，并将出栈元素逐一插入list的尾部
 * 时间复杂度O(n)，空间复杂度O(n)
 * 
 * 第三种解法：
 * 声明两个指针L，R，和临时变量P
 * L初始化为0，R初始化为list.length - 1
 * while(L < R) { P = list[L]; list[L] = list[R]; list[R] = p; L++; R--; }
 * 时间复杂度O(n/2)，空间复杂度O(1)
 * 
 * 第三种算法最优
 */

 function reverseSeqLine (list) {
  let p,
      len = list.length,
      left = 0,
      right = len - 1;

  while (left < right) {
    p = list[left];
    list[left] = list[right];
    list[right] = p;
    left++;
    right--;
  }

  return list;
}

const list = reverseSeqLine([11, 2, 30, 4, 5]);
console.log(list);

/**
 * 翻转链式存储表(单向链表)
 * 链式表元素之间的关系是通过指针域表示的，
 * 如果要翻转链表的话，所有元素的指针都要发生变动，所以时间复杂度最少都要O(n)
 * 
 * 第一种解法：
 * 声明一个链表L
 * 遍历循环链表line，每次遍历时将节点插入到L的头部,直至line.next为空
 * 时间复杂度O(n)，空间复杂度O(n)
 * 
 * 第二种解法：
 * 在链表上直接进行位置置换
 * 反转其实就是将原A -> B中B的指针指向A，变成B -> A
 * 声明两个指针prev（当前节点），after（需要被置换的节点）
 * 初始将prev指向第一个节点，after指向prev的下一个节点
 * after存在则进行置换：
 * 1. prev = after.next
 * 2. after.next = line.next
 * 2. line.next = after
 * 4. 重置after = prev.next
 * 直至after不存在了，表示反转完成了
 * 时间复杂度O(n - 1)，空间复杂度O(1)
 * 
 * @param {*} line 
 */
function reverseLinkLine (line) {
  let prev = line?.next,
      after = prev?.next;

  while (prev && after) {
    // 将after插入到line.next位置
    prev.next = after.next; // 将prev指向after.next，同时将after孤立出来 
    after.next = line.next; // 将after.next指向line.next
    line.next = after; // 将line.next指向after，完成after到头节点的插入
    after = prev?.next; // 重置after位置为下一个需要置换的位置
  }

  return line;
}

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
node1.next = node2;
// node2.next = node3;
// node3.next = node4;
const link = new Node();
link.next = node1;
console.log(JSON.stringify(link))
console.log(JSON.stringify(reverseLinkLine(link)))
