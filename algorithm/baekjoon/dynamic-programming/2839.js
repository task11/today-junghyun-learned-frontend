let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

let N = Number(input);
let f = 0;
let t = 0;

while (true) {
  if (N % 5 === 0) {
    f = N / 5;
    console.log(f + t);
    break;
  }
  if (N < 0) {
    console.log(-1);
    break;
  }
  N = N - 3;
  t++;
}