// 체스 세트

let input = [
  [0, 1, 2, 2, 2, 7],
  [2, 1, 2, 1, 2, 1],
  [0, 1, 1, 5, 3, 6]
];

let chessPiece = [1, 1, 2, 2, 2, 8];


function answer(arr) {
  let result = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    result[count++] = chessPiece[i] - arr[i];
  }

  return result;
}

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} [${answer(input[i])}]`);
}