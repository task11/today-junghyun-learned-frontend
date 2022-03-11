// 등차수열의 항 찾기

// 입력된 값을 통해서 등차 수열의 몇 번째 항인지를 구하는 프로그램을 작성하시오.
// 입력은 초항 a, 찾는 항의 수 n, 
// 출력은 n 값에 해당하는 항 번호 반환 / 없을 시 -1 반환
// a = 1, d = 2, n = 7이 주어졌을 때
// f(1) = 1, f(2) = 3, f(3) = 5, f(4) = 7 가 되므로 n = 7에 해당하는 항인 4를 반환한다.

// let count = 0;
// function recursion(a, d, n){
//   if(){
//     return 
//   }else{
//     return -1;
//   }
// }

// let output;
// let result;

// function recursion(s, t, number) {
//   if (number === 1) {
//     return s;
//   }
//   output = recursion(s, t, number - 1) + t;
//   if (output === 7) {
//     result = number + 1;
//   } else {
//     result = -1;
//   }
//   return output;
// }


// console.log(recursion(1, 2, 10));
// console.log(result);



// f(a) = a + d + d ...
// 1 , 3, 5, 7

// let count;
// let input = [
//   [1, 2, 7, 1],

//   [2, 3, 10, 1],

//   [3, 5, 23, 1]
// ];

// function answer(a, d, n, count) {
//   if (a === n) {
//     return count;
//   } else if (a > n) {
//     return -1;
//   }

//   return answer(a + d, d, n, count + 1);
// }


// for (let i = 0; i < input.length; i++) {
//   console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2], input[i][3])}`);
//   count = 0;
// }

function answer(a, d, n) {
  let index = -1;

  // (1)1, (2)1 + 2, (3)1 + 2 + 2, (4)1 + 2 + 2 + 2...
  if (((n - a) % d) === 0) {
    index = ((n - a) / d) + 1;
  } else index = -1;

  return index;
}

// 초항, 간격, 항의 값
let input = [
  [1, 2, 7],

  [2, 3, 10],

  [3, 5, 23]
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
  count = 0;
}