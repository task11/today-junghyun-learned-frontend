function solution(s) {
  let word = s[0];
  let str = s[1];
  let answer = 0;

  for (let x of word) {
    if (x === str) answer += 1;
  }

  return answer;
}

console.log(solution(["COMPUTERPROGRAMMING", "R"]));