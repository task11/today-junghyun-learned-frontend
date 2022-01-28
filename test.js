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

// var res = [1, 2, 3].map(function (item) {
//   return item * 2;
// });

// console.log(res);

// var res = [1, 2, 3].filter(function (item) {
//   return item % 2;
// });

// console.log(res);

// res = [1, 2, 3].reduce(function (acc, cur) {
//   return acc + cur;
// }, 0);

// console.log(res);

// const o = {
//   name: 'Kim'
// };

// o.age = 19;


// //console.log(Object.getOwnPropertyDescriptor(o, 'name')); // 프로퍼티 디스크럽터
// console.log(Object.getOwnPropertyDescriptors(o));

// const person = {
//   name: 'Kim Jeong Hyeon',
//   age: '28',

//   // personInfo는 접근자 함수로 구성된 접근자 프로퍼티
//   // getter 함수
//   get personInfo() {
//     return `이름은 ${this.name} 이고 나이는${this.age}세 입니다.`;
//   },

//   // setter 함수
//   set personInfo(info) {
//     // 배열 디스트럭처링 할당
//     [this.name, this.age] = info.split(' ')
//   }
// };

// // 데이터 프로퍼티를 이용한 프로퍼티 값 참조 
// console.log(person.name + ' ' + person.age);

// // 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// person.personInfo = 'byj 28';
// console.log(person);

// // 접근자 프로퍼티를 통한 프로퍼티 값 참조
// console.log(person.personInfo);

// console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));

// console.log(Object.getOwnPropertyDescriptor(function () { }, 'prototype'));

// const person = {};

// // 데이터 프로퍼티 정의
// Object.defineProperty(person, 'name', {
//   value: 'kjh',
//   writable: true,
//   enumerable: true,
//   configurable: true
// });

// Object.defineProperty(person, 'age', {
//   value: '28'
// });

// let descriptor = Object.getOwnPropertyDescriptor(person, 'name');
// console.log('name', descriptor);

// descriptor = Object.getOwnPropertyDescriptor(person, 'age');
// console.log('age', descriptor);

// // [[Enumerable]]의 값이 false인 경우
// // 해당 프로퍼티는 for...in 문이나 Object.keys 등으로 열거할 수 없다.
// console.log(Object.keys(person));

// // [[Writable]]의 값이 false인 경우 해당 프로퍼티의 [[Value]] 값을 변경할 수 없다.
// // * 에러는 발생하지 않고 무시된다.
// person.name = 'byj'; // 수행
// person.age = '15';  // 무시

// // [[Configuration]]의 값이 false인 경우 해당 프로퍼티를 삭제할 수 없다.
// // * 에러는 발생하지 않고 무시된다.
// delete person.age;

// // [[Configuration]]의 값이 false인 경우 해당 프로퍼티를 재정의할 수 없다.
// // Object.defineProperty(person, 'age', { enumerable: true }); //TypeError: Cannot redefine property: age
// console.log("=============");
// descriptor = Object.getOwnPropertyDescriptor(person, 'name');
// console.log('name', descriptor);

// descriptor = Object.getOwnPropertyDescriptor(person, 'age');
// console.log('age', descriptor);

// // 접근자 프로퍼티 정의
// Object.defineProperty(person, 'personInfo', {

//   // getter
//   get() {
//     return `${this.name} 은 ${this.age} 세`;
//   },
//   // setter
//   set(info) {
//     [this.name, this.age] = info.split(' ');
//   },
//   enumerable: true,
//   configurable: true
// });

// descriptor = Object.getOwnPropertyDescriptor(person, 'personInfo');
// console.log('info', descriptor);

// person.personInfo = 'abcde 10';
// console.log(person);



// Object.defineProperties : 여러 개의 프로퍼티를 한 번에 정의
// const person = {};

// Object.defineProperties(person, {
//   // 데이터 프로퍼티 정의
//   name: {
//     value: 'kjh',
//     writable: true,
//     enumerable: true,
//     configurable: true,
//   },
//   age: {
//     value: '28',
//     writable: true,
//     enumerable: true,
//     configurable: true,
//   },

//   // 접근자 프로퍼티 정의
//   personInfo: {
//     // getter
//     get() {
//       return `${this.name} 은 ${this.age} 세`;
//     },
//     // setter
//     set(info) {
//       [this.name, this.age] = info.split(' ');
//     },
//     enumerable: true,
//     configurable: true
//   }
// });
// console.log(person);
// person.personInfo = 'bjy 28'
// console.log(person);

// 객체 변경 방지 

// const person = { name: 'Kim' };

// console.log(Object.isExtensible(person)); // true : 확장 가능

// // person 객체의 확장을 금지(프로퍼티 추가 금지)
// Object.preventExtensions(person);

// console.log(Object.isExtensible(person)); // false : 확장 금지

// // 프로퍼티 추가가 금지됨
// person.age = 10; // 무시 (strict mode에서는 에러)
// console.log(person); // {name: 'Kim'}

// // 프로퍼티 추가 금지 외에 삭제는 가능
// delete person.name;
// console.log(person);

// // 프로퍼티 정의에 의한 추가도 금지
// Object.defineProperty(person, 'age', { value: 20 }); //TypeError: Cannot define property age, object is not extensible

// // 객체 밀봉

// const person = { name: 'Kim' };

// console.log(Object.isSealed(person)); // false : 밀봉된 객체가 아님

// // person 객체를 밀봉(seal)하여 프로퍼티 추가 삭제, 재정의 금지
// Object.seal(person);

// console.log(Object.isSealed(person)); // true : 밀봉된 객체

// // 밀봉된 객체는 configurable이 false가 된다.
// console.log(Object.getOwnPropertyDescriptors(person));

// // 프로퍼티 추가가 금지됨
// person.age = 10; // 무시 (strict mode에서는 에러)
// console.log(person); // {name: 'Kim'}

// // 프로퍼티 삭제 금지됨
// delete person.name; // 무시 (strict mode에서는 에러)
// console.log(person); // {name: 'Kim'}

// // 프로퍼티 값 갱신은 가능
// person.name = 'bjy';
// console.log(person); // { name: 'bjy' }

// // 프로퍼티 어트리뷰트 재정의가 금지된다.
// Object.defineProperty(person, 'name', { configurable: true });
// // TypeError: Cannot redefine property: name

// // 객체 동결

// const person = { name: 'Kim' };

// console.log(Object.isFrozen(person)); // false : 동결(freeze)된 객체가 아님.

// // 객체 동결
// Object.freeze(person);

// console.log(Object.isFrozen(person)); // true : 동결

// // 동결된 객체는 writable과 configurable이 false
// console.log(Object.getOwnPropertyDescriptors(person));

// // 프로퍼티 추가가 금지됨
// person.age = 10; // 무시 (strict mode에서는 에러)
// console.log(person); // {name: 'Kim'}

// // 프로퍼티 삭제 금지됨
// delete person.name; // 무시 (strict mode에서는 에러)
// console.log(person); // {name: 'Kim'}

// // 프로퍼티 값 갱신 금지됨
// person.name = 'bjy'; // 무시 (strict mode에서는 에러)
// console.log(person); // { name: 'kim' }

// // 프로퍼티 어트리뷰트 재정의가 금지된다.
// Object.defineProperty(person, 'name', { configurable: true });
// // TypeError: Cannot redefine property: name

// 불변 객체 : 중첩 객체까지 동결

// const person = {
//   name: 'Kim',
//   address: { city: 'Seoul' }
// };

// // 얕은 객체 동결
// Object.freeze(person);

// // 직속 프로퍼티만 동결한다.
// console.log(Object.isFrozen(person)); // true

// // 중첩 객체까지 동결 불가.
// console.log(Object.isFrozen(person.address)); // false

// person.address.city = 'Yeosu';
// console.log(person);


// 불변 객체 구현

// function deepFreeze(target) {
//   // 객체가 아니거나 이미 동결된 객체는 무시
//   if (target && typeof target === 'object' && !Object.isFrozen(target)) {
//     Object.freeze(target);
//     Object.keys(target).forEach(key => deepFreeze(target[key]));
//     /*
//       모든 프로퍼티를 순회하며 재귀적으로 동결시킴
//     */
//   }
//   return target;
// }

// const person = {
//   name: 'Kim',
//   address: { city: 'Seoul' }
// };

// // 호출
// deepFreeze(person);

// // 직속 프로퍼티 동결
// console.log(Object.isFrozen(person)); // true

// // 중첩 객체까지 동결
// console.log(Object.isFrozen(person.address)); // true

// person.address.city = 'Yeosu'; // 동결로 변경 불가능
// console.log(person);