// console.log(Boolean('Dog')); // true
// console.log(Boolean(0)); // false


// var score = 80;
// var copy = score;

// console.log(score);
// console.log(copy);

// score = 100;

// console.log(score);
// console.log(copy);


// 얕은 복사 깊은 복사
// import _ from 'lodash';

// const o = { x: { y: 1 } };

// const c1 = { ...o };

// console.log(o);
// console.log(c1);

// console.log(c1 === o);
// console.log(c1.x === o.x);

// const c2 = _.cloneDeep(o);
// console.log(o);
// console.log(c2);

// console.log(c2 === o);
// console.log(c2.x === o.x);

// function repeat(n) {
//   // i를 출력한다.
//   for (var i = 0; i < n; i++) console.log(i);
// }

// repeat(5);

// function repeat1(n) {
//   // i 를 출력한다.
//   for (var i = 0; i < n; i++) console.log(i);
// }

// repeat1(5);

// function repeat2(n) {
//   // i 를 출력한다.
//   for (var i = 0; i < n; i++) {
//     // i 가 홀수일떄
//     if (i % 2) console.log(i);
//   }
// }

// repeat2(5);

// function repeat(n, f) {
//   for (var i = 0; i < n; i++) {
//     f(i);
//   }
// }

// var logAll = function (i) {
//   console.log(i);
// };

// repeat(5, logAll);

// var logOdds = function (i) {
//   if (i % 2) console.log(i);
// };

// repeat(5, logOdds);

// repeat(5, function (i) {
//   if (i % 2) console.log(i);
// });

// var logOdds = function (i) {
//   if (i % 2) console.log(i);
// };

// repeat(5, logOdds);

// document.getElementById('mybutton').addEventListener('click', function () {
//   console.log('button clicked');
// });

// setTimeout(function () {
//   console.log('1초 경과');
// }, 1000)

var res = [1, 2, 3].map(function (item) {
  return item * 2;
});

console.log(res);

var res = [1, 2, 3].filter(function (item) {
  return item % 2;
});

console.log(res);

res = [1, 2, 3].reduce(function (acc, cur) {
  return acc + cur;
}, 0);

console.log(res);

