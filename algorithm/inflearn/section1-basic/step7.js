function solution(a, b, c, d, e, f, g, h) {
  let answer;
  let list = [b, c, d, e, f, g, h];

  answer = list.reduce((acc, cur, i) => {
    if ((cur % 10) === a) acc += 1
    return acc;
  }, 0);

  return answer;
}

console.log(solution(3, 25, 23, 13, 43, 53, 17, 33));