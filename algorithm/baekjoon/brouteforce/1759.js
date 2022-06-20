const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(v => v.split(' '));
const [L, C] = input[0].map(Number);
const sortedInput = input[1].sort();
const output = [];
const min = L - L * 2;

function combinationRecursion(arr, data, s, idx, r) {
  if (s === r) {
    if (isVaild(data)) {
      console.log(data.join(''));
    }
    return;
  }

  for (let i = idx; arr.length - i >= r - s; i++) {
    data[s] = arr[i];
    combinationRecursion(arr, data, s + 1, i + 1, r); // Recursion
  }
}

function isVaild(array) {
  const value = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  array.forEach((item) => {
    if (value.includes(item)) count++;
    else count--;
  });

  return count >= 1 || count === min ? false : true;
}

combinationRecursion(sortedInput, output, 0, 0, L); // Main Call