// 숫자 빈도수 구하기

function answer(arr) {
  let result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let start = arr[0];
  let end = arr[1];

  for (let i = start; i < end + 1; i++) {
    i = String(i);
    for (let j = 0; j < i.length; j++) {
      result[i[j]] += 1;
    }

  }

  return result;
}


let input = [
  [129, 137],
  [1412, 1918],
  [4159, 9182]
]

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}