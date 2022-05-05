// 일곱 난장이

function answer(arr) {
  let result = [];
  let sum = arr.reduce(function (acc, value) {
    return acc += value;
  }, 0) - 100;
  let p = arr.length;
  let [start, end] = [0, 1];
  let faker = [];

  while (start <= end) {
    if (arr[start] + arr[end] === sum) {
      faker = [start, end];
      break;
    } else {
      end++;
    }

    if (end === p) {
      start++;
      end = start + 1;
    }
  }

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (faker[0] != i && faker[1] != i) {
      result[count++] = arr[i];
    }
  }

  return result
}

let input = [
  [1, 5, 6, 7, 10, 12, 19, 29, 33],
  [25, 23, 11, 2, 18, 3, 28, 6, 37],
  [3, 37, 5, 36, 6, 22, 19, 2, 28]
]

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}

