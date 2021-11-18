function solution(list) {
  let answer;
  let max = 0;

  for (let x of list) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}

console.log(solution(["teacher", "time", "student", "beautiful", "good"]));