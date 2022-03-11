// 수열 최솟값 위치
// 수열이 주어질 때 이 수열 중 가장 작은 최솟값의 위치를 모두 출력하는 프로그램을 작성하시오.
// TC 1
// [5, 2, 10, 2]               #1[ 1, 3, -1 ]
// TC 2
// [4, 5, 7, 4, 8]             #2[ 0, 3 ]
// TC 3
// [12, 11, 11, 16, 11, 12]    #3[ 1, 2, 4 ]

// For-Loop 풀이

function answer(nums) {
  let result = [];

  let minNum = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (min > nums[i]) {
      min = nums[i];
    }
  }

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (min === nums[i]) {
      result[count++] = i;
    }
  }

  return result;
}



// 마음대로 풀어본 For-Loop 없는 풀이(성능 고려 X)

function answer(nums) {
  let result = [];
  let minNum = Math.min(...nums);

  function recursive(num, index) {
    if (nums.indexOf(num, index) === -1) {
      return;
    }
    result.push(nums.indexOf(num, index));
    return recursive(num, nums.indexOf(num, index) + 1);
  }

  recursive(minNum, 0);

  return result;
}

let input = [
  [5, 2, 10, 2],

  [4, 5, 7, 4, 8],

  [12, 11, 11, 16, 11, 12]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}