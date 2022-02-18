// Two Sum


// 투포인터 알고리즘
function answer(arr) {
  let result = [];
  let nums = arr[0];
  let p = nums.length;
  let sum = arr[1];
  let [start, end] = [0, 1];

  while (start <= end) {
    if (sum === nums[start] + nums[end]) {
      result[0] = start;
      result[1] = end;
      break;
    } else {
      end++
    }

    if (end === p) {
      start++;
      end = start + 1;
    }
  }

  return result;
}


// Map
function answer2(arr) {
  let map = {};
  let nums = arr[0];
  let target = arr[1];

  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] != undefined) {
      return [map[target - nums[i]], i];
    }

    map[nums[i]] = i;

  }
  return []
}


let input = [
  [[2, 7, 11, 15], 9],
  [[3, 2, 4], 6],
  [[3, 3], 6]
]

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer2(input[i]));
}