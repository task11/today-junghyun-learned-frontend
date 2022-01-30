# 함수와 일급 객체 (First-Class Object) #

## 일급 객체 (First-Class Object) ##

일급 객체의 조건 :
  + 무명의 리터럴로 생성할 수 있다. : 런타임에 생성이 가능하다.
  + 변수나 자료구조로(객체, 배열) 저장할 수 있다.
  + 함수의 매개변수에 전달할 수 있다.
  + 함수의 반환값으로 사용할 수 있다.

```javascript
// 1.함수는 무명의 리터럴로 생성할 수 있다.
// 2.함수는 변수에 저장할 수 있다.
// 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.
const increase = function(num){
  return ++num;
};

const decrease = function(num){
  return --num;
};

// 2. 함수는 객체에 저장할 수 있다.
const auxs = {increase, decrease};

// 3. 함수의 매개변수에 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.
function makeCounter(aux){
  let num = 0;
  
  return function(){
    num = aux(num);
    return num;
  };
}

// 3. 함수는 매개변수에게 함수를 전달할 수 있다.
const increaser = makeCounter(auxs.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

// 3. 함수는 매개변수에게 함수를 전달할 수 있다.
const decreaser = makeCounter(auxs.decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2
```

#

## 함수 객체의 프로퍼티 ##

```javascript
function square(number){
  return number * number;
}

console.dir(square);

console.log(Object.getOwnPropertyDescriptors(square));
```
함수 객체의 프로퍼티
  + arguments
  + caller
  + length
  + name
  + prototype

_**__proto__는 Object.prototype 객체의 프로퍼티를 상속 받은 것. -> 모든 객체가 상속받아 사용할 수 있다.**_


### 1) arguments 프로퍼티 ###

**arguments -> arguments 객체 :**
  + 함수 호출 시 전달된 인수(argument)들의 정보를 담고 있는 순회 가능한(iterable) 유사 배열 객체.
  + 함수 내부에서 지역 변수처럼 사용.
  + 함수 외부에서는 참조할 수 없음.

_**arguments 프로퍼티는 ES3부터 표준에서 제외됐다. Function.arguments같은 사용법은 권장하지 않는다. -> 함수 내부에서 지역 변수로 사용 가능한 "arguments" 객체를 참조하자.**_

자바스크립트는 함수의 매개변수와 호촐 인수의 개수가 일치하는지 체크하지 않는다.(No Error)

함수를 정의할 떄 선언한 매개변수는 함수 몸체 내부에서 변수와 동일하게 취급한다.
  + 함수 내부에서 암묵적으로 매개변수가 선언되고 undefined로 초기화한다.

함수의 매개변수보다 호출된 인수가 적을 경우 인수를 할당받지 못한 매개변수는 함수 몸채에서 undefined 값으로 유지된다.

매개변수의 개수보다 인수를 더 많이 전달한 경우 초과된 인수는 무시된다.

_**arguments 프로퍼티를 확인해보면, 초과 전달된 인수들도 모두 arguments 객체의 프로퍼티로 보관된다. **_

**Example Code (arguments) :**
```javascript
function multiple(x, y) {
  console.log(arguments);
  return x * y;
}

console.log(multiple());
console.log(multiple(1));
console.log(multiple(1, 2));
console.log(multiple(1, 2, 3));

/*
  [Arguments] {}
  NaN
  [Arguments] { '0': 1 }
  NaN
  [Arguments] { '0': 1, '1': 2 }
  2
  [Arguments] { '0': 1, '1': 2, '2': 3 }
  2
*/
```

> ### _arguments 객체의 Symbol(Symbol.iterator) 프로퍼티_ ###
arguments 객채의 Symbol(Symbol.iterator) 프로퍼티는 arguments 객체를 순회 가능한 자료구조인 이터러블(iterable)로 만들기 위한 프로퍼티이다.

**Example Code (Symbol.iterator) :**
```javascript
function multiple(x, y) {
  // 이터레이터(iterator)  
  const iterator = arguments[Symbol.iterator]();

  // 이터레이터의 next메서드를 호출하여 이터러블 객체 arguments를 순회한다.
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());

  return x * y;
}

console.log(multiple(1, 2, 3));

/*
  { value: 1, done: false }
  { value: 2, done: false }
  { value: 3, done: false }
  { value: undefined, done: true }
  2
*/
```

위 처럼 함수 호출 시 인수 개수를 확인하고, 이에 따라 함수의 동작을 다르게 정의해야 하는데 이 때 유용하게 사용하는 것이 arguments 객체이다.

_**arguments 객체는 매개변수 개수를 확정할 수 없는 가변 인자 함수를 구현할 때 유용하다.**_

**Example Code (arguments 객체를 활용한 가변 인자 함수) :**
```javascript
function sum() {
  let res = 0;

  // arguments 객체는 length 프로퍼티가 있는 유사 배열 객체이므로 for 문으로 순회할 수 있다.
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }

  return res;
}

console.log(sum()); // 0
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6
```

_**arguments 객체는 유사 배열 객체이다.**_
+ 유사 배열 객체 : length 프로퍼티를 가진 객체로 for 문으로 순회할 수 있는 객체

> ES6에서 도입된 **이러테이션 프로토콜**을 준수하면 순회 가능한 자료구조인 이터러블이 된다. ES5에서 argumenets는 유사 배열 객체로 분류되었지만, ES6에서 이터러블 개념이 도입되며 arguments 객체는 유사 배열 객체이면서 이터러블이다.

유사 배열 객체는 배열이 아니므로 배열 메서드를 사용할 수 없다. 따라서 **Function.prototype.call** ,**Function.prototype.apply** 을 사용해 간접 호출해야한다.

**Example Code (prototype 간접호출, ES5)**
```javascript
function sum() {
  // arguments 객체를 배열로 변환
  const array = Array.prototype.call(arguments);
  return array.reduce(function(pre, cur){
    return pre + cur;
  }, 0);
}

console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6
```

ES6에서의 Rest 파라미터로 동일하게 구현 가능하다.

**Example Code (Rest 파라미터, ES6)**
```javascript
function sum( ... args) {
  return args.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6
```

### 2) Caller 프로퍼티 ###

ECMAScript 사양에 포함되지 않은 비표준 프로퍼티이다.

**추후 추가 예정..**

### 3) length 프로퍼티 ###

length 프로퍼티는 함수를 정의할 때 선언한 매개변수의 개수를 가리킨다.

```javascript
function foo(){
  console.log(foo.length) //0
}

function bar(x){
  return x;
}

console.log(bar.length) // 1
```

_**주의 : arguments 객체의 length는 인수의 개수, 함수 객체의 length는 매개변수의 개수**_

### 4) name 프로퍼티 ###

ES5에서 비표준이었다가 ES6에서 표준이 되었다. : ES5와 ES6에서 다르게 동작한다.
  + ES5 : name프로퍼티는 빈 문자열을 값으로 가진다.
  + ES6 : name프로퍼티는 함수 객체를 가리키는 식별자를 값으로 가진다.

```javascript
// 기명 함수 표현식
var namedFunc = function foo (){};
console.log(namedFunc.name) // foo

var anonymousFunc = function () {};

console.log(anonymousFunc.name); // anonymousFunc

function bar (){}
console.log(bar.name) // bar
```

### 5) __proto__ 접근자 프로퍼티 ###

모든 객체는 [[Prototype]] 이라는 내부 슬롯을 갖는다. 이 것에 접근하기 위한 접근자 프로퍼티가 __proto__이다.

```javascript
const obj = {a : 1};

// 객체 리터럴 방식으로 생성한 객체의 프로토타입 객체는 Object.prototype이다.
console.log(obj.__proto__ === Object.prototype) // true

// 객체 리터럴 방식으로 생성한 객체는 프로토타입 객체인 Object.prototype의 프로퍼티를 상속받는다.
console.log(obj.hasOwnProperty('a')); // true
console.log(obj.hasOwnProperty('__proto__')); // false
```

> hasOwnProperty 메서드 : 인수로 전달받은 프로퍼티 키가 객체 고유의 프로퍼티 키인 경우에만 true를 반환하고, 상속받은 프로토타입의 프로퍼티 키인 경우 false를 반환한다.

### 6) prototype 프로퍼티 ###

prototype 프로퍼티는 생성자 함수로 호출할 수 있는 함수 객체 (**constructor**) 가 소유하는 프로퍼티이다.
> non-constructor 에는 prototype 프로퍼티가 없다.

```javascript
// 함수 객체는 prototype 프로퍼티를 소유한다.
(function (){}).hasOwnProperty('prototype'); // true

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
({})..hasOwnProperty('prototype'); // false
```

_**prototype 프로퍼티는 함수가 객체를 생성하는 생성자 함수로 호출될 때 생성자 함수가 생성할 인스턴스의 프로토타입 객체를 가리킨다.**_