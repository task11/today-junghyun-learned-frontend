function solutionAnswer(array) {
  let result = 0;
  let stack = [];

  array.push(Number.MAX_SAFE_INTEGER);
  for (let i = 0; i < array.length; i++) {
    while (!(stack.length == 0) && (stack[stack.length - 1]['h'] < array[i])) {
      result += i - stack.pop()['i'] - 1;
    }

    stack.push({ h: array[i], i: i });
  }

  return result;
}

function solution(array) {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] >= array[j]) {
        result++;
      } else if (array[i] < array[j]) {
        break;
      }
    }
  }

  return result;
}

let input = [10, 3, 7, 4, 12, 2];
let input2 = [7, 4, 12, 1, 13, 11, 12, 6];
let input3 = [20, 1, 19, 18, 15, 4, 6, 8, 3, 3];

console.log(solutionAnswer(input3));