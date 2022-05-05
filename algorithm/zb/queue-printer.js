function solution(array, num) {
  let count = 0;

  const data = array.map((item, index) => {
    return {
      element: index,
      priority: item
    }
  });

  while (data.length !== 0) {
    let max = 0;
    let max_index = 0;
    for (let i = 0; i < data.length; i++) {
      if (max < data[i].priority) {
        max = data[i].priority;
        max_index = i;
      }
    }

    for (let i = 0; i < max_index; i++) {
      data.push(data.shift());
    }
    count++;
    if (data.shift().element === num) break;
  }

  return count;
}

const input0 = [3];
const num0 = 0;

const input1 = [2, 3, 4, 6, 5, 1];
const num1 = 2;

const input2 = [3, 4, 5, 6];
const num2 = 2;

const input3 = [1, 1, 5, 1, 1, 1];
const num3 = 0;

console.log(solution(input3, num3));


