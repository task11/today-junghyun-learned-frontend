// 지렁이 게임

function answer(num) {
  let result = new Array(num);

  for (let i = 0; i < num; i++) {
    result[i] = new Array(num);
  }

  let direction = 1;
  let x, y, count;
  x = 0;
  y = 0;
  count = 0;
  x--;
  while (1) {
    for (let i = 0; i < num; i++) {
      x += direction;
      result[y][x] = ++count;
    }

    num--;

    if (num === 0) break;

    for (let j = 0; j < num; j++) {
      y += direction;
      result[y][x] = ++count;
    }

    direction *= -1;
  }


  return result;
}

let input = [
  3, 5, 6
]

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}