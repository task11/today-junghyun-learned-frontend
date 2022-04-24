function solution(numbers) {
  return 45 - numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(solution([5, 8, 4, 0, 6, 7, 9]));