/**
 * 计算斐波那契数列第n位的值
 * 计算规则：
 * F(0)=0，F(1)=1, 
 * F(n)=F(n - 1)+F(n - 2)（n ≥ 2，n ∈ N*）
 * @param {*} n 
 */
function fibonacci (n) {
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

const res1 = fibonacci(9);
console.log(res1);