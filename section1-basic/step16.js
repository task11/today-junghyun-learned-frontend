function solution(str) {
  let list = new Set();
  let answer = [];
  for (let x of str) {
    list.add(x);
  }
  for (let x of list) {
    answer.push(x)
  }

  return answer;
}

console.log(solution("ksetkest"));