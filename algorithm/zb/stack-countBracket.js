// Coutn Bracket
if (!Array.prototype.peek) {
  Array.prototype.peek = function () {
    return this[this.length - 1];
  };
}

if (!Array.prototype.isEmpty) {
  Array.prototype.isEmpty = function () {
    return this.length == 0;
  };
}



function solution(str) {
  let result = 0;
  let stack = [];

  let tmp = 1;

  for (let i = 0; i < str.length; i++) {
    let mark = str[i];
    switch (mark) {
      case "(":
        tmp *= 2;
        stack.push(mark);
        break;
      case "[":
        tmp *= 3;
        stack.push(mark);
        break;
      case ")":
        if (stack.isEmpty() || stack.peek() != "(") {
          return 0;
        }
        if (str[i - 1] == "(") {
          result += tmp;
        }
        stack.pop();
        tmp /= 2;
        break;
      case "]":
        if (stack.isEmpty() || stack.peek() != "[") {
          return 0;
        }
        if (str[i - 1] == "[") {
          result += tmp;
        }
        stack.pop();
        tmp /= 3;
        break;
    }
  }

  if (!stack.isEmpty()) {
    return 0;
  }

  return result;
}

const input = "(()[[]])";

console.log(solution(input));
