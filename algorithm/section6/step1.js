function solution(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ")") stack.pop();
    else stack.push(str[i]);
  }

  if (stack.length > 0) {
    return "NO"
  } else {
    return "YES"
  }
}

const input = "(()(()))(()"
console.log(solution(input));