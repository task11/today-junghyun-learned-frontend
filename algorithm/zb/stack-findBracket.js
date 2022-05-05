function solution(str) {
  let arr = str.split('');
  let stack = [];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
      stack.push(i);
    } else if (arr[i] === ')') {
      if (stack.length === 0) {
        return [];
      }
      result.push([stack.pop(), i])
    }
  }

  if (stack.length > 0) {
    return [];
  }

  return result;
}


const input1 = "(a*(b+c)+d)";;
const input2 = "(a*(b+c)+d+(e)";
const input3 = "(a*(b+c)+d)+e)";
const input4 = "(a*(b+c)+d)+(e*(f+g))"

console.log(solution(input1));