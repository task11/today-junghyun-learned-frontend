# About Function #

#

## 함수 정의 ##

**Example Code (함수 선언문) :**
```javascript
// 힘수 선언문
function add(x,y){
  return x + y;
}

// 함수 표현식
const add = function(x, y){
  return x + y
}

// Function 생성자 함수
const add = new Function('x', 'y', 'return x + y');

// 화살표 함수 (ES6)
const add = (x, y) => x + y;
```

#

### 일반 함수 ###

**Example Code (일반 함수) :**

```javascript
function myFn(x) {

	return x + 100;

}

const result = myFn(10);
```

#


### 익명 함수 ###
함수 명을 지정하지 않고 변수에 대입하여 사용하는 함수 

**Example Code (익명 함수) :**

```javascript
const myFnV2 = function () {

	return 100;

};

myFnV2();
```

#

### 즉시 실행 함수 (IIFE) ###
코드에 단 한번 실행되는 함수(단 한번만 호출)

**Example Code (즉시실행함수) :**

```javascript
(function(){

	console.log('즉시 실행 함수 실행');

})();
```
#

### Arrow Function (화살표 함수) ###
이름을 줄 수 없는 익명 함수가 기본 값 → 반드시 변수에 넣어줘야한다.

_Context or Prototype_ 세션에서 애로우 함수의 존재 이유를 알 수 있다.

**Example Code (Arrow Function) :**

```javascript
const sumV2 = (a, b, ...args) ⇒ {

	let s = 0;
	
	for (let i = 0; i< arguments.length; i++){
	
		s = s + arguments[i];
	
	}

	return s;

}
//**화살표 함수의 변형 (한 줄 함수) : 인자가 하나일 때 괄호 생략 가능 코드 블록이 한줄일 때
//그것이 리턴하는 값이면 {} 생략 가능**

const ten = x ⇒ 100+x;
```
#

### 생성기 함수 ###

 최초에 함수가 호출되면 함수를 실행하지 않고 실행 준비를 한다, 실행 준비라는 함수를 제어할 수 있는 객체를 보낸다(next method)

**Example Code (생성기 함수):**

```javascript
function* gen(){

	yield 10;

	yield 20;

	return 30;

}

const g = gen();

g.next();

g.next();

g.next();
```
#

### Recursive Function (재귀 함수) ###

함수가 자기 자신을 호출하는 것을 재귀 호출이라고 한다.

**Example Code (Recursive Function):**

```javascript
  // 팩토리얼 구현 : n! = 1 * 2 * 3 ... (n - 1) * n
  function factorial(n){
    // 재귀 탈출 조건: n이 1 이하일 때
    if(n <= 1) return 1;
    // 재귀 호출
    return n * factorial(n-1);
  }
```
#

### Callback Function (콜백 함수) ###

반복하는 일은 변하지 않고, 공통적으로 수행하지만 반복하면서 하는 일의 내용은 다를 경우에 사용한다.
함수의 변하지 않는 공통 로직은 미리 정의해두고, 변경되는 로직은 함수 외부에서 함수 내부로 전달한다.

**Example Code (Callback Function):**

```javascript
  function repeat(n) {
  // i를 출력한다.
  for (var i = 0; i < n; i++) console.log(i);
}

repeat(5);

function repeat1(n) {
  // i 를 출력한다.
  for (var i = 0; i < n; i++) console.log(i);
}

repeat1(5);

function repeat2(n) {
  // i 를 출력한다.
  for (var i = 0; i < n; i++) {
    // i 가 홀수일떄
    if (i % 2) console.log(i);
  }
}

repeat2(5);

function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

var logAll = function (i) {
  console.log(i);
};

repeat(5, logAll);

var logOdds = function (i) {
  if (i % 2) console.log(i);
};

repeat(5, logOdds);

repeat(5, function (i) {
  if (i % 2) console.log(i);
});

var logOdds = function (i) {
  if (i % 2) console.log(i);
};

repeat(5, logOdds);
```

  + _**함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백 함수(callback fn)라고 한다.**_
  + _**매개변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수를 고차 함수(higher-order fn, HOF)라고 한다.**_

**Example Code (고차 배열 함수, HOF):**

```javascript
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
```
#


### 비동기 함수 ###
 Promise .. Callback Function.. 의 이해가 필요하다.

**Example Code (비동기 함수) :**

```javascript
async function myTask(){

}

await..
```

## 함수 호출 방법 ##

**Example Code (함수 호출 방법) :**

```javascript
// 함수 이름이 맞으면 인자를 잘못보내도 호출이 성공함, 인자가 안들어오거나,
// 인자가 1개인데 2~3개를 보낼 수 있음
myFnV2(); 

// 특수한 용도일 때, 첫 번째 인자는 context, 두 번째 ~ 인자는 함수 파라미터
myFnV2.call(null, 10, 20, 30); 

// 특수한 용도일 때,  첫 번째 인자는 context, 두 번째 인자는 함수 파라미터의 배열
myFnV2.apply(null, [10, 20, 30]); 
```
#

## 가변 인자를 처리하는 방식 ##

**Example Code (가변인자를 처리하는 방식) :**

```javascript
function sum(a, b, ...args){

	let s = 0;
	
	for (let i = 0; i< arguments.length; i++){
	
		s = s + arguments[i];
	
	}
	
	return s;

}

const abcSum = sum(10, 20, 30);

const abcSum = sum(10, 20, 30, 40);
```
#


## 참조에 의한 전달과 외부 상태의 변경 ##

원시 값은 값에 의한 전달, 객체는 참조에 의한 전달 방식으로 동작한다. _매개변수도 함수 내부에서 변수로 취급되므로 매개변수 또한 이와 같은 방식을 그대로 따른다._

**Example Code (가변인자를 처리하는 방식) :**
```javascript
// 매개변수1 primitive는 원시 값을 전달받고, 매개변수2 obj는 객체를 전달받는다. 
function changeValue(primitive, obj){
  primitive += 100;
  obj.name = 'kim';
}

// 외부 변수
var num = 100;
var person = {name: 'Lee'};

console.log(num); // 100
console.log(person); // {name: 'Lee'}

// 원시 값은 값 자체가 복사되어 전달되고, 객체는 참조 값이 복사되어 전달된다.
changeValue(num, person);

// 원시 값은 값이 훼손되지 않는다.
console.log(num); // 100

// 객체는 원본이 훼손된다.
console.log(person); // {name: 'kim'}

```

  + _**이러한 객체의 변경을 추적하려면 옵저버 패턴(Observer Pattern) 등을 통해 객체의 참조를 공유하는 모든 이들에게 변경 사실을 통지하고 대응해야한다.**_
  + _**객체를 불변 객체(immutable object)로 만들어 사용하는 방법도 있다. -> 객체의 깊은 복사를 통해 새로운 객체를 생성(ex. lodash)**_