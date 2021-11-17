function solution(a, b, c, d, e, f, g) {
  let list = [a, b, c, d, e, f, g];
  let answer, min = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i < list.length; i++) {
    if (list[i] < min) {
      min = list[i];
    }
  }
  answer = min;

  return answer;
}

console.log(solution(5, 3, 7, 11, 2, 15, 1));