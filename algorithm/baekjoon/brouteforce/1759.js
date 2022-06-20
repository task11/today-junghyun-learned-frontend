// const fs = require('fs');
// const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(v => v.split(' '));
// const [L, C] = input[0].map(Number);
// const sortedInput = input[1].sort();

const output = [];
const min = L - L * 2;

function combinationRecursion(arr, data, s, idx, r) {
  if (s === r) {
    if (isVowel(data)) {
      console.log(data.join(''));
    }
    return;
  }

  for (let i = idx; arr.length - i >= r - s; i++) {
    data[s] = arr[i];
    combinationRecursion(arr, data, s + 1, i + 1, r); // Recursion
  }
}

function isVowel(array) {
  const value = ['a', 'e', 'i', 'o', 'u'];
  let vCount = 0;
  let cCount = 0;
  array.forEach((item) => {
    if (value.includes(item)) vCount++;
    else cCount++;
  });
  return vCount >= 1 && cCount >= 2 ? true : false;
}

combinationRecursion(sortedInput, output, 0, 0, L); // Main Call