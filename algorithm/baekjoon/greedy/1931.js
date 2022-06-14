//백준 제출 시 주석 제거
const fs = require('fs');

const readFileSyncAddress = '/dev/stdin';

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

[n, ...arr] = input;

const times = arr.map((num) => num.split(' ').map((num) => +num));

solution(times);

function solution(times) {
  times.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let current = 0;
  const answer = times.reduce((acc, item) => {
    if (item[0] >= current) {
      current = item[1];
      return acc + 1;
    }
    return acc;
  }, 0);

  console.log(answer);
}