function solution(n, lost, reserve) {
  let count = 0;

  const sortedLost = lost.filter(x => !reserve.includes(x)).sort((a, b) => a - b);
  const sortedReserve = reserve.filter(x => !lost.includes(x)).sort((a, b) => a - b);

  for (let i = 0; i < sortedReserve.length; i++) {
    for (let j = 0; j < sortedLost.length; j++) {
      if (sortedReserve[i] !== sortedLost[j] && Math.abs(sortedReserve[i] - sortedLost[j]) <= 1) {
        count++;
        break;
      }
    }
    if (count === sortedLost.length) {
      break;
    }
  }


  return n - sortedLost.length + count;
}
console.log(solution(3, [1, 2], [2, 3]));
// 2