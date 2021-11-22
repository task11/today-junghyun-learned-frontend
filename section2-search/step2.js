function solution(a, b, c, d, e, f, g) {
  const list = [a, b, c, d, e, f, g];
  var max = 0;
  var answer = 0;
  for (let x of list) {
    if (x > max) {
      max = x;
      answer++;
    }
  }
  return answer;
}

console.log(solution(130, 135, 148, 140, 145, 150, 153));