// 나무 그리기

function answer(num) {
  let str = "\n";

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num - i - 1; j++) {
      str += " ";
    }

    for (let j = 0; j < i * 2 + 1; j++) {
      str += "*";
    }

    str += "\n";
  }

  return str;
}

input = [3, 5, 7]

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}