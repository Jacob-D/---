/**
 * 问题描述：https://leetcode-cn.com/problems/valid-parentheses/
 */

function isValidBrackets(brackets) {
  const BRACKETS = {
    '(': ')',
    '{': '}', 
    '[': ']'
  };
  const stack = [];
  let i = 0;

  while(i < brackets.length) {
    const char = brackets[i++];
    if (BRACKETS[char]) {
      stack.push(char);
    } else {
      if (BRACKETS[stack.pop()] !== char) {
        return false;
      }
    }
  }

  if (stack.length > 0) {
    return false;
  }

  return true;
}