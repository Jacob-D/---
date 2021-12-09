const Line = require('./链式存储实现.js');

/**
 * 有两个有序的线性表La,Lb
 * 请将他们合并成一个有序的线性表
 */

// 融合顺序存储链表
// 时间复杂度O(m + n)，空间复杂度为O(m + n)
function mergeSeqlist (La, Lb) {
  const Lc = [];
  let a = 0, b = 0, c = 0;

  while (a < La.length && b < Lb.length) {
    const valA = La[a];
    const valB = Lb[b];
    if (valA < valB) {
      Lc[c] = valA;
      a++;
    } else if (valA > valB) {
      Lc[c] = valB;
      b++;
    }
    c++;
  }

  while(a < La.length) {
    Lc[c] = La[a];
    a++;
    c++;
  }
  while(b < Lb.length) {
    Lc[c] = Lb[b];
    b++;
    c++;
  }

  return Lc;
}

const list = mergeSeqlist([1, 3, 5, 30], [0, 7, 90, 100, 120])

// 融合链式存储链表
// 时间复杂度O(min(m,n))，空间复杂度为O(1)
function mergeLinkList (La, Lb) {
  let a = La.line.next,
      b = Lb.line.next,
      c = La.line;

  while(a && b) {
    if (a.val < b.val) {
      c.next = a;
      c = a;
      a = a.next;
    } else if (a.val > b.val) {
      c.next = b;
      c = b;
      b = b.next;
    } else {
      c.next = a;
      c = a;
      a = a.next;
      b = b.next;
    }
  }

  if (a) {
    c.next = a;
  }
  if (b) {
    c.next = b;
  }

  return La.line;
}

const line1 = new Line();
line1.create([3, 12, 15, 25]);
const line2 = new Line();
line2.create([5, 12, 13, 14]);
const lineMerge = mergeLinkList(line1, line2);
console.log(JSON.stringify(lineMerge));                                                                                                 