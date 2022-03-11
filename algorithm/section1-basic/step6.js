function solution(a, b, c, d, e, f, g) {
  let arr = [a, b, c, d, e, f, g];
  let min = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  let answer, answer2;

  for (let x of arr) {
    if ((x % 2) !== 0) {
      sum = sum + x;
      if (x < min) {
        min = x;
      }
    }
  }
  answer = sum;
  answer2 = min
  return [answer, answer2];
}

const answer = solution(12, 77, 38, 41, 53, 92, 85);

console.log(answer[0]);
console.log(answer[1]);