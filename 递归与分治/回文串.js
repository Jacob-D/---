/**
 * 判断str是否为回文串
 * 回文串是指正反读都是一样的字符串
 * 利用正反一致的特性，可以想出以下解决方案
 * 1. 可以将str字符依次入栈，再出栈，判断是否和str一致，一致则返回true，否则false
 * 2. 设置left=0，right=str.length-1指针，判断left和right的位置字符是否相等，不相等则返回false，直至left >= right
 *    返回true  
 * 这里用第2种方法
 * @param {*} str 
 */
function isPalindrome (str, left, right) {
  if (left >= right) return true;
  if (str[left] !== str[right]) {
    return false;
  } else {
    return isPalindrome(str, left + 1, right - 1);
  }
}

const res3 = isPalindrome('noon1', 0, 4);
console.log(res3);