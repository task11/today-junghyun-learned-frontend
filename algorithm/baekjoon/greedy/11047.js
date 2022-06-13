// 백준 제출 시 주석 제거
// const fs = require('fs');

// const readFileSyncAddress = '/dev/stdin';

// let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

// [n, ...arr] = input;
// [n, price] = n.split(' ');
// price = Number(price);
// arr = arr.map(i => Number(i));


function solution(n, price, arr) {
  let count = 0;
  for (let i = n - 1; i >= 0; i--) {
    const value = Math.floor(price / arr[i]);
    const mod = price % arr[i];
    if (value === 0) continue;
    count += value;
    price = mod;
    if (mod === 0) break;
  }

  console.log(count);
}

solution(n, price, arr);