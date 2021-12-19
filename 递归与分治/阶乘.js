/**
 * 求n的阶乘
 * 阶乘计算规则：
 * n = 0, return 1
 * n > 0, return n * (n - 1)!
 * @param {*} n 
 */
function factorial (n) {
  return n === 0 ? 1 : (n * factorial(n - 1));
}

const res = factorial(4);
console.log(res);