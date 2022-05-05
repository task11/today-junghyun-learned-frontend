
function solution(arr) {

  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) !== 1) {
      return false;
    }
  }

  return true;
}

const input = [3, 1, 2];

console.log(solution(input));
