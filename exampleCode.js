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

// // 인스턴스 생성 과정
// function Circle(radius) {
//   // 1.암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
//   console.log(this);

//   this.radius = radius;
//   this.getDiameter = function () {
//     return 2 * this.radius;
//   }

//   return {};
// }

// const circle1 = new Circle(5);
// console.log(circle1);
// //console.log(circle1.getDiameter());


// function call() {
// };

// call.prop = 10;

// call.method = function () {
//   console.log(this.prop);
// };

// call.method();

// console.log(Object.getOwnPropertyDescriptors(call));


// // 일반 함수 정의: 함수 선언문, 표현식
// function ex() { }
// const exVal1 = function () { };
// // 프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수다. (메서드로 인정 X)
// const exVal2 = {
//   x: function () { }
// };

// // 일반 함수로 정의된 함수만이 constructor
// new ex();       // ex {}
// new exVal1();   // exVal1 {}
// new exVal2.x(); // x {}

// // 화살표 함수 정의
// const arrow = () => { };

// new arrow(); // TypeError: arrow is not a constructor

// // 메서드 정의 : ES6의 메서드 축약 표현만 메서드로 인정.
// const obj = {
//   x() { }
// };

// new obj.x(); // TypeError: obj.x is not a constructor


// // 생성자 함수로서 정의하지않은 일반 함수
// function add(x, y) {
//   return x + y;
// }

// // 생성자 함수로서 정의하지 않은 일반 함수를 new 연산자와 호출
// let inst = new add(5, 6);

// // 함수가 객체를 반환하지 않았으므로 반환문이 무시, 빈 객체를 반환한다. -> 원시값 반환 시에 무시된다.
// console.log(inst); // add {}

// // 객체를 반환하는 일반 함수
// function createUser(name, role) {
//   return { name, role };
// }

// // 일반 함수를 new 연산자와 호출
// inst = new createUser('kim', 'dba');
// // 함수가 생성한 객체를 반환
// console.log(inst); // { name: 'kim', role: 'dba' }

// // 생성자 함수
// function Circle(radius) {
//   this.radius = radius;
//   this.getDiameter = function () {
//     return 2 * this.radius;
//   };
// }

// // new 연산자 없이 생성자 함수를 호출
// const circle = Circle(5);
// console.log(circle); // undefined

// // 일반 함수 내부의 this는 전역 객체 window를 가리킨다. -> this가 전역 객체 window와 바인딩 된다.
// console.log(radius);
// console.log(getDiameter());

// circle.getDiameter(); // TypeError: Cannot read property 'getDiameter' of undefined

// // 생성자 함수
// function Circle(radius) {
//   // 이 함수가 new 연산자와 함께 호출되지 않았다면 new.target은 undefined이다.
//   if (!new.target) {
//     // new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다.
//     return new Circle(radius);
//   }
//   this.radius = radius;
//   this.getDiameter = function () {
//     return 2 * this.radius;
//   };
// }

// const circle = Circle(5);
// console.log(circle.getDiameter());

// // Scope-Safe Constructor Pattern
// function Circle(radius) {
//   // 생성자 함수가 new 연산자와 함께 호출되면 함수의 선두에서 빈 객체를 생성하고
//   // this에 바인딩한다. 이때 this와 Circle은 프로토타입에 의해 연결된다.

//   // 이 함수가 new 연산자와 함께 호출되지 않았다면 이 시점의 this는 전역 객체 window를 가리킨다.
//   // -> this와 Circle은 프로토타입에 의해 연결되지 않는다.
//   if (!(this instanceof Circle)) {
//     // new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다.
//     return new Circle(radius);
//   }
//   this.radius = radius;
//   this.getDiameter = function () {
//     return 2 * this.radius;
//   };
// }

// const circle = Circle(5);
// console.log(circle.getDiameter());

// function square(number) {
//   return number * number;
// }

// console.dir(square);

// console.log(Object.getOwnPropertyDescriptors(square));

// function multiple(x, y) {
//   console.log(arguments);
//   return x * y;
// }

// console.log(multiple());
// console.log(multiple(1));
// console.log(multiple(1, 2));
// console.log(multiple(1, 2, 3));

// /*
//   [Arguments] {}
//   NaN
//   [Arguments] { '0': 1 }
//   NaN
//   [Arguments] { '0': 1, '1': 2 }
//   2
//   [Arguments] { '0': 1, '1': 2, '2': 3 }
//   2
// */

// function multiple(x, y) {
//   // 이터레이터(iterator)  
//   const iterator = arguments[Symbol.iterator]();

//   // 이터레이터의 next메서드를 호출하여 이터러블 객체 arguments를 순회한다.
//   console.log(iterator.next());
//   console.log(iterator.next());
//   console.log(iterator.next());
//   console.log(iterator.next());

//   return x * y;
// }

// console.log(multiple(1, 2, 3));

// /*
//   { value: 1, done: false }
//   { value: 2, done: false }
//   { value: 3, done: false }
//   { value: undefined, done: true }
//   2
// */

// function sum() {
//   let res = 0;

//   // arguments 객체는 length 프로퍼티가 있는 유사 배열 객체이므로 for 문으로 순회할 수 있다.
//   for (let i = 0; i < arguments.length; i++) {
//     res += arguments[i];
//   }

//   return res;
// }

// console.log(sum());
// console.log(sum(1, 2));
// console.log(sum(1, 2, 3));

// 생성자 함수
// function Circle(radius) {
//   this.radius = radius;
// }

// // Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를 공유해서 사용할 수 있도록 프로토타입에 추가한다.
// // 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다.
// Circle.prototype.getArea = function () {
//   return Math.PI * this.radius ** 2;
// };

// // 인스턴스 생성
// const circle1 = new Circle(1);
// const circle2 = new Circle(2);

// // Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체 역할을 하는 프로토타입(Circle.prototype)으로부터 getArea 메서드를 상속받는다.
// // getAread 메서드는 하나만 생성되어 모든 인스턴스가 공유한다(중복 코드)
// console.log(circle1.getArea === circle2.getArea) // true

// console.log(circle1.__proto__);

// const Person = (function () {
//   // 생성자 함수
//   function Person(name) {
//     this.name = name;
//   }

//   // 프로토타입 메서드
//   Person.prototype.sayHello = function () {
//     console.log(`Hi~ My name is ${this.name}`);
//   };

//   // 생성자 함수 반환
//   return Person;
// }());

// const me = new Person('Kim');

// // 인스턴스 메서드
// me.sayHello = function () {
//   console.log(`Hello World i'm ${this.name}`);
// };

// // 인스턴스 메서드가 호출된다. 프로토타입 메서드는 인스턴스 메서드에 의해 가려진다.
// me.sayHello(); // Hello World i'm Kim

// function Person(name) {
//   this.name = name;
// }

// const me = new Person('kim');

// const parent = {};

// Object.setPrototypeOf(me, parent);

// console.log(Person.prototype === parent); // false
// console.log(parent.constructor); // Object

// console.log(me instanceof Person); // false

// console.log(me instanceof Object); // true

// console.log(parent instanceof Person); // false

// Person.prototype = parent; // parent 객체를 Person 생성자 함수의 prototype 프로퍼티에 바인딩한다.

// console.log(me instanceof Person); // true
// console.log(Person.prototype === parent); // true


// function Person(name) {
//   this.name = name;
// }

// const me = new Person();

// function isInstanceof(instance, constructor) {
//   // 프로토타입 획득
//   const prototype = Object.getPrototypeOf(instance);

//   // 재귀 탈출 조건
//   // prototype이 null -> 프로토타입 체인의 종점
//   if (prototype === null) return false;

//   // 프로토타입이 생성자 함수의 prototype 프로퍼티에 바인딩된 객체라면 true를 반환.
//   // 그렇지 않으면 재귀 호출로 프로토타입 체인상 상위 프로토타입으로 이동하여 확인.
//   return prototype === constructor.prototype || isInstanceof(prototype, constructor);
//   // 단축 평가
// }

// console.log(isInstanceof(me, Person));
// console.log(isInstanceof(me, Object));

// // Object.create 직접 상속
// // 프로토타입이 null인 객체를 생성한다. 생성된 객체는 프로토타입 체인의 종점에 위치한다.
// // obj -> null
// let obj = Object.create(null);
// console.log(Object.getPrototypeOf(obj) === null); // true
// // Object.prototype을 상속받지 못한다.
// //console.log(obj.toString()); // TypeError: obj.toString is not a function

// // obj -> Object.prototype -> null
// // obj = {}; 와 동일하다.
// obj = Object.create(Object.prototype);
// // Objet.prototype를 상속받는다.
// console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

// // obj -> Object.prototype -> null
// // obj = {x: 1}; 와 동일하다.
// obj = Object.create(Object.prototype, {
//   x: { value: 1, writable: true, enumerable: true, configurable: true }
// });
// // 위 코드는 아래와 동일
// // obj = Object.create(Object.prototype);
// // obj.x = 1;
// console.log(obj.x);
// console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

// const myProto = { x: 10 };
// // obj -> myProto -> Object.prototype -> null
// obj = Object.create(myProto);
// console.log(obj.x);
// console.log(Object.getPrototypeOf(obj) === myProto); // true

// // 생성자 함수
// function Person(name) {
//   this.name = name;
// }

// // obj -> Person.prototype -> Object.prototype -> null
// // obj = new Person('Kim')과 동일
// obj = Object.create(Person.prototype);
// obj.name = 'Kim';
// console.log(obj.name); // Kim
// console.log(Object.getPrototypeOf(obj) === Person.prototype); // true

// const myProto = { x: 10 };

// // 객체 리터럴에 의해 객체를 생성하면서 프로토타입을 지정하여 직접 상속받기
// const obj = {
//   y: 20,
//   // 객체 직접 상속
//   // obj -> myProto -> Object.prototype -> null
//   __proto__: myProto
// };

// /* 위 코드는 아래오 ㅏ동일
// const obj = Object.create(myProtom {
//   y: {value: 20, ......}
// })
// */

// console.log(obj.x, obj.y); // 10, 20
// console.log(Object.getPrototypeOf(obj) === myProto); // true

// // 생성자 함수
// function Person(name) {
//   this.name = name;
// }

// // 프로토타입 메서드
// Person.prototype.sayHello = function () {
//   console.log(`Hi My name is ${this.name}`);
// };

// // 정적 프로퍼티
// Person.staticProp = 'static prop';

// // 정적 메서드
// Person.staticMethod = function () {
//   console.log('static method');
// }

// const me = new Person('Kim');

// Person.staticMethod();

// let a = Person.staticProp;

// console.log(a);

// // 정적 메서드, 프로퍼티는 생성자 함수가 생성한 인스턴스로 호출이 불가하다.
// // me.staticMethod(); // TypeError: me.staticMethod is not a function

// const person = {
//   name: 'Kim',
//   region: 'Seoul'
// }

// console.log('name' in person); // true

// console.log('toString' in person); // true

// const person = {
//   name: 'Kim',
//   region: 'Seoul'
// }

// console.log(Reflect.has(person, 'name')); // true

// console.log(Reflect.has(person, 'toString')); // true

// const person = {
//   name: 'kim',
//   region: 'Seoul'
// };

// for (const key in person) {
//   console.log(key + ': ' + person[key]);
// }

// const foo = function () {
//   console.dir(this);
// }

// foo();

// const obj = { foo };
// obj.foo();

// new foo(); // foo {}

// const bar = { name: 'bar' };

// foo.call(bar);
// foo.apply(bar);
// foo.bind(bar)();

// function foo() {
//   console.log("foo ", this); // window or global
//   function bar() {
//     console.log("bar ", this); // window or global
//   }
//   bar();
// }

// foo();

// var value = 1;

// const obj = {
//   value: 100,
//   foo() {
//     // this 바인딩(obj)을 번수 that에 임시 할당
//     const that = this;

//     // 콜백 함수 내부에서 this 대신 that 참조
//     setTimeout(function () {
//       console.log(that.value);
//     }, 100);
//   }
// };

// obj.foo();

// var value = 1;

// const obj = {
//   value: 100,
//   foo() {
//     // 콜백 함수에 this 바인딩
//     setTimeout(function () {
//       console.log(this.value);
//     }.bind(this), 100);
//   }
// };

// obj.foo();


// var value = 1;

// const obj = {
//   value: 100,
//   foo() {
//     setTimeout(() => console.log(this.value), 100);
//   }
// };

// obj.foo();

// const person = {
//   name: 'Kim',
//   getName() {
//     // 호출한 객체에 바인딩
//     return this.name;
//   }
// };

// // getName을 호출한 객체는 person이다.
// console.log(person.getName()); // Kim

// const anotherPerson = {
//   name: 'Bae'
// };

// // getName 메서드를 anotherPerson 객체 메서드로 할당
// anotherPerson.getName = person.getName;

// console.log(anotherPerson.getName()); // Bae

// // getName 메서드를 변수에 할당.
// const getName = person.getName;

// console.log(getName()); // undefined ES6, '' ES5(전역 객체 바인딩)

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.getName = function () {
//   return this.name;
// };

// const me = new Person('Kim');

// console.log(me.getName()); // Kim

// Person.prototype.name = 'Bae';

// console.log(Person.prototype.getName()); // Bae


// // 생성자 함수
// function Cricle(radius) {
//   this.radius = radius;
//   this.getDiameter = function () {
//     return 2 * this.radius;
//   };
// }

// // circle 생성
// const circle1 = new Cricle(5);
// const circle2 = new Cricle(10);

// console.log(circle1.getDiameter()); // 10
// console.log(circle2.getDiameter()); // 20

// const cricle3 = Cricle(150); // 150이 전역객체에 바인딩 된다. window.radius = 150; or global.radius = 150;
// console.log(radius); // 전역 객체에 바인딩된 radius 출력

// function getThisBinding() {
//   // console.log(this.a); -> apply / call 로 this 바인딩 시에 1이 출력 ({a : 1}) 객체가 this에 바인딩 돼서
//   return this;
// }

// // this로 사용할 객체 선언
// const thisArg = { a: 1 };
// console.log(getThisBinding()); // global or window

// // getThisBinding을 호출하면서 인수로 전달할 객체를 그 함수의 this에 바인딩한다.
// console.log(getThisBinding.apply(thisArg)); // this는 {a: 1}
// console.log(getThisBinding.call(thisArg)); // this는 {a: 1}

// function getUserName(id) {
//   if (this.id === id) {
//     return this.name;
//   }
// }

// const userInfo = {
//   id: 1,
//   name: 'kim'
// };

// console.log(getUserName.apply(userInfo, [1])); // Kim
// console.log(getUserName.call(userInfo, 1)) // Kim

// function convertArgsToArray() {
//   console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 }

//   // arguments를 배열로 전환
//   const arr = Array.prototype.slice.call(arguments);

//   console.log(arr);

//   return arr;
// }

// convertArgsToArray(1, 2, 3); // [1, 2, 3]

// function getThisBinding() {
//   return this;
// }

// // this로 사용할 객체 선언
// const thisArg = { a: 1 };

// console.log(getThisBinding.bind(thisArg));
// console.log(getThisBinding.bind(thisArg)()); // {a: 1} 호출 해줘야함

// const person = {
//   name: 'Kim',
//   foo(callback) {
//     setTimeout(callback.bind(this), 100);
//   }
// };

// person.foo(function () {
//   console.log(`My name is ${this.name}`);
// });


// // 전역 변수 선언
// const x = 1;
// const y = 2;

// // 함수 정의
// function foo(a) {
//   // 지역 변수 선언
//   const x = 10;
//   const y = 20;

//   // 메서드 호출
//   console.log(a + x + y); // 130
// }

// // 함수 호출
// foo(100);


// // 메서드 호출
// console.log(x + y); // 3

// const x = 1;

// function foo() {
//   const y = 2;

//   function bar() {
//     const z = 3;
//     console.log(x + y + z);
//   }
//   bar();
// }

// foo(); // 6

// const x = 1;

// function outer() {
//   const x = 10;
//   const inner = function () {
//     console.log(x);
//   };
//   return inner;
// }

// const innerFunc = outer();
// innerFunc();

// const counter = (function () {
//   let count = 0;

//   return function (aux) {
//     count = aux(count);
//     return count;
//   };
// }());

// function increase(n) {
//   return ++n;
// }

// function decrease(n) {
//   return --n;
// }

// console.log(counter(increase));
// console.log(counter(increase));
// console.log(counter(decrease));
// console.log(counter(decrease));

// let input = ["a", "b", "c"];
// let count = 0;

// function permutation(arr) {
//   // for i -> 첫 번째 index 위치시킬 요소 a or b or c [i, 0, 0]
//   for (let i = 0; i < arr.length; i++) {
//     // for j -> 두 번째 index 위치시킬 요소 [i, j, 0]
//     for (let j = 0; j < arr.length; j++) {
//       if (i === j) continue;
//       // for j -> 세 번째 index 위치시킬 요소 [i, j, k]
//       for (let k = 0; k < arr.length; k++) {
//         if (i === k) continue;
//         if (j === k) continue;
//         console.log(arr[i], arr[j], arr[k]);
//         count++;
//       }
//     }
//   }
// }

// permutation(input);
// console.log(count);

// let input = ["a", "b", "c"];
// let count = 0;

// // s = 시작 위치 , r = 뽑을 개수 (인덱스 기준)
// function permutation(arr, s, r) {
//   // 1. 재귀 함수를 멈춰야할 조건
//   if (s === r) {
//     count++;
//     console.log(arr.join(" ")); // 배열의 상태 출력
//     return; // 재귀 탈출
//   }

//   // 2. 재귀를 돌면서 수행되는 부분 (main logic)
//   for (let i = s; i < arr.length; i++) { // i가 0부터 돌면 중복하면서 뽑음
//     [arr[s], arr[i]] = [arr[i], arr[s]] // SWAP
//     permutation(arr, s + 1, r); // s 값을 증가시켜서 다음 인덱스를 선택하게
//     [arr[s], arr[i]] = [arr[i], arr[s]] // SWAP 원상 복귀
//   }
// }

// permutation(input, 0, 2);
// console.log(count);

function add(x, y) {
  return x + y;
}
function sub(x, y) {
  return x - y;
}
function mul(x, y) {
  return x * y;
}
function div(x, y) {
  return x / y;
}

function calculator(callback, a, b) {
  return callback(a, b);
}

console.log(calculator(add, 12, 5));
console.log(calculator(sub, 12, 5));
console.log(calculator(mul, 12, 5));
console.log(calculator(div, 12, 5));