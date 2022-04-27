// function solution(citations) {
//   const array = citations.sort((a, b) => a - b);
//   let hIdx = 0;
//   for (let i = 0; i < array.length; i++) {
//     const value = array[i];
//     if (array.slice(i).length >= value && array.slice(0, i).length <= value) {
//       hIdx = value;
//     }
//   }

//   while(array.slice(i).length >= value && array.slice(0, i).length <= value){

//   }

//   return hIdx;
// }

console.log(solution([10, 10, 10, 10, 10]));
// [3, 4, 5, 11, 15, 16, 17, 18, 19, 20]의 경우 H-Index는 7
// 0 1 3 5 6
// 1 -> 0(1) , 3 5 6(3)

// [10, 10, 10, 10, 10]
// 정답은 5가 나와야 합니다.

// 테스트 16번
// [0, 0, 0, 0, 0]
// 정답은 0이 나와야 합니다.

function solution(citations) {
  const array = citations.sort((a, b) => a - b);
  let hIdx = 0;
  let idx = 0;
  let max = 0;

  if (array[array.length - 1] === 0) {
    return max;
  }

  while (true) {
    if (hIdx >= array[idx]) {
      idx++;
    }

    hIdx++;

    if (array.slice(idx).length >= hIdx && array.slice(0, idx).length <= hIdx) {
      max = hIdx;
    } else {
      break;
    }



  }



  return max;
}