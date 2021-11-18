function solution(a) {
  let answer = 0, i;

  for (i = 1; i <= a; i++) {
    answer = answer + i;
  }

  return answer;
}

console.log(solution(10));