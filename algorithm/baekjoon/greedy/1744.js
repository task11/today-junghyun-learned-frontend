//백준 제출 시 주석 제거
const [_, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(v => +v);
const sequence = arr;

solution(sequence);

function solution(arr) {
  let answer = 0;
  const posSeq = arr.filter(item => item > 0).sort((a, b) => b - a);
  const negSeq = arr.filter(item => item <= 0).sort((a, b) => a - b);

  for (i = 0; i < posSeq.length; i += 2) {
    if (i === posSeq.length - 1) answer += posSeq[i];
    else if (posSeq[i] * posSeq[i + 1] > posSeq[i] + posSeq[i + 1]) {
      answer += posSeq[i] * posSeq[i + 1];
    } else {
      answer += posSeq[i] + posSeq[i + 1];
    }
  }

  for (i = 0; i < negSeq.length; i += 2) {
    if (i === negSeq.length - 1) answer += negSeq[i];
    else answer += negSeq[i] * negSeq[i + 1];
  }

  console.log(answer);
};