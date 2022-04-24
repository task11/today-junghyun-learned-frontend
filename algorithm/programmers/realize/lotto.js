
function solution(lottos, win_nums) {
  const score = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };

  let min = lottos.filter((item) => item !== 0).reduce((acc, item) => {
    if (win_nums.indexOf(item) !== -1) {
      return acc += 1;
    } else {
      return acc;
    }
  }, 0);

  let max = min + (lottos.length - lottos.filter((item) => item !== 0).length);


  return [score[max], score[min]];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));