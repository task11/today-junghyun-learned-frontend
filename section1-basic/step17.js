function solution(arr) {
  let answer = [];
  let set = new Set();

  for (let x of arr) {
    set.add(x)
  }

  for (let x of set) {
    answer.push(x);
  }

  return answer;
}

console.log(solution(["good", "time", "good", "time", "student"]));