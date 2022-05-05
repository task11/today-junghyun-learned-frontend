function solution(str) {
  let result = [];

  let stack = [];
  let dish = str.split("").sort().join("");
  let dishIndex = 0;

  for (let i = 0; i < str.length; i++) {
    while (stack.length == 0 || stack[stack.length - 1] < str[i]) {
      stack.push(dish[dishIndex++]);
      result.push(0);
    }

    if (stack.length == 0 || stack[stack.length - 1] > str[i]) {
      return [];
    } else {
      stack.pop();
      result.push(1);
    }
  }

  return result;
}

let input = "bacd";

console.log(solution(input));