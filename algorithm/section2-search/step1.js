function solution(a, b, c, d, e, f) {
  const list = [a, b, c, d, e, f]
  console.log(list[0]);
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i] < list[i + 1]) {
      console.log(list[i + 1]);
    }
  }
}

console.log(solution(7, 3, 9, 5, 6, 12));