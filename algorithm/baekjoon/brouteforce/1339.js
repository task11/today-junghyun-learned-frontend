// const input = ['GCF',
//   'ACDEB'];

// const input = [
//   'AB',
//   'BA'
// ];

// const input = [
//   'AAA',
//   'AAA'
// ];

// const input = [
//   'A',
//   'B',
//   'C',
//   'D',
//   'E',
//   'F',
//   'G',
//   'H',
//   'I',
//   'J',
// ];

// 98754 683

const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);

function solution(input) {
  const state = {};

  input.forEach(str => {
    [...str].forEach((item, idx) => {
      if (!state[item]) state[item] = 0;
      state[item] += Math.pow(10, str.length - idx - 1);
    });
  });

  console.log(Object.values(state).sort((a, b) => b - a).reduce((acc, val, idx) => {
    return acc + val * (9 - idx);
  }, 0));
};

