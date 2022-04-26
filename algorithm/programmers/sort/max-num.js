function solution(numbers) {
  const answer = numbers.map(num => num + "").sort((a, b) => (b + a) - (a + b)).join("");
  return answer[0] === "0" ? "0" : answer;
}

console.log(solution([3, 30, 34, 5, 9]));