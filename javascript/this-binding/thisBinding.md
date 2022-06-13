# This #

객체의 동작을 나타내는 `메서드`는 자신이 속한 객체의 상태, 즉 프로퍼티를 참조하고 변경할 수 있어야 한다. 이때 메서드가 자신이 속한 객체의 프로퍼티를 참조하려면 먼저 자신이 속한 객체를 가리키는 식별자를 참조할 수 있어야 한다.

```javascript
const circle = {
  // 프로퍼티 : 데이터
  radius: 5,
  getDiameter(){
    // 자신이 속한 객체인 circle을 참조할 수 있어야함.
    return 2*circle.radius; 
  }
};

console.log(circle.getDiameter());
```

```javascript
function Circle(radius){
  // 이 시점에서는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다.
  ???.radius = radius;
} 
```

자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 특수한 식별자가 필요한데 이것이 `this`이다.

>this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 `자기 참조 변수`다. this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.

# This binding (this 바인딩) #

this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다.

>렉시컬 스코프와 this 바인딩 결정시기는 다르다.
+ 렉시컬 스코프 : 함수 정의가 평가되어 함수 객체가 생성되는 시점
+ this 바인딩 : 함수 호출 시점

아래 함수 호출 방식에 따라 this 바인딩이 어떻게 결정되는지 알아보자.
  + 일반 함수 호출
  + 메서드 호출
  + 생성자 함수 호출
  + Function.prototype.apply/call/bind 메서드에 의한 간접 호출

**Example Code (네 가지 함수 호출 방법) :**
```javascript
const foo = function () {
  console.dir(this);
}

// 여러 방식의 함수 호출

// 1. 일반 함수 호출
// foo 함수 내부의 this는 전역 객체 window 또는 global을 가리킨다.
foo(); // window (브라우저), global(node)

// 2. 메서드 호출
// foo 함수 내부 this는 obj를 가리킨다.
const obj = { foo };
obj.foo(); // { foo : [Function: foo]}

// 3. 생성자 함수 호출
// foo 함수 내부 this는 생성자 함수가 생성한 인스턴스를 가리킨다.
new foo(); // foo {}

// 4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출
// foo 함수 내부 this는 메서드 인수에 의해 결정된다.
const bar = {name: 'bar'};

foo.call(bar);   // {name: 'bar'}
foo.apply(bar);  // {name: 'bar'}
foo.bind(bar)(); // {name: 'bar'}
```

#

## 일반 함수 호출 ##

기본적으로 **this에는 전역 객체가 바인딩** 된다. (콜백, 중첩 함수 포함)

**Example Code (일반 함수 호출) :**
```javascript
function foo() {
  console.log("foo ", this); // window or global
  function bar() {
    console.log("bar ", this); // window or global
  }
  bar();
}

foo();
```

_**Strict Mode가 적용되면 this에 undefined가 바인딩..**_

중첩/콜백 함수에 this 바인딩을 메서드의 this 바인딩과 일치시키는 방법
**Example Code (일반 함수 this 바인딩) :**
```javascript
var value = 1;

const obj = {
  value: 100,
  foo() {
    // this 바인딩(obj)을 번수 that에 임시 할당
    const that = this;

    // 콜백 함수 내부에서 this 대신 that 참조
    setTimeout(function () {
      console.log(that.value);
    }, 100);
  }
};

obj.foo();

// 또는 아래 (Function.prototype.bind 사용)

var value = 1;

const obj = {
  value: 100,
  foo() {
    // 콜백 함수에 this 바인딩
    setTimeout(function () {
      console.log(this.value);
    }.bind(this), 100);
  }
};

obj.foo();

// 또는 아래 (Arrow Function 사용하면 자동 바인딩)
var value = 1;

const obj = {
  value: 100,
  foo(){
    setTimeout(() => console.log(this.value), 100);
  }
};

obj.foo();

```

#

## 메서드 호출 ##

메서드 내부의 this에는 메서드를 호출한 객체, 즉 메서드를 호출할 때 메서드 이름 앞의 마침표(.) 연산자 앞에 기술한 객체가 바인딩 된다 
> person.getName(); 에서 person객체가 바인딩 된다는 말 -> 다른 객체가 호출하면 그 객체에 바인딩 된다.

**Example Code :**
```javascript
const person = {
  name: 'Kim',
  getName() {
    // 호출한 객체에 바인딩
    return this.name;
  }
};

// getName을 호출한 객체는 person이다.
console.log(person.getName()); // Kim
```

<img width="514" alt="스크린샷 2022-02-02 오후 5 35 13" src="https://user-images.githubusercontent.com/89209626/152119790-0dc02a76-79e5-4b9f-b66f-4b11a67b9e9c.png">

getName 프로퍼티가 가리키는 함수 객체(getName 메서드)는 다른 객체 프로퍼티에 할당할 수 있다.

**Example Code :**
```javascript
const person = {
  name: 'Kim',
  getName() {
    // 호출한 객체에 바인딩
    return this.name;
  }
};

// getName을 호출한 객체는 person이다.
console.log(person.getName()); // Kim

const anotherPerson = {
  name: 'Bae'
};

// getName 메서드를 anotherPerson 객체 메서드로 할당
anotherPerson.getName = person.getName;

console.log(anotherPerson.getName()); // Bae

// getName 메서드를 변수에 할당.
const getName = person.getName;

console.log(getName()); // undefined ES6, '' ES5(전역 객체 바인딩)
```

프로토타입 메서드 내부에서 사용된 this도 일반 메서드와 마찬가지로 호출한 객체에 바인딩된다.

**Example Code :**
```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

const me = new Person('Kim');

console.log(me.getName()); // Kim

Person.prototype.name = 'Bae';

console.log(Person.prototype.getName()); // Bae
```

> 메서드를 호출한 객체의 식별자에 this가 바인딩 됐다.

#

## 생성자 함수 호출 ##
생성자 함수 내부 this에는 생성자 함수가 생성할 인스턴스가 바인딩된다.

**Example Code (생성자 함수 this 바인딩) :**
```javascript
// 생성자 함수
function Cricle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// circle 생성
const circle1 = new Cricle(5);
const circle2 = new Cricle(10);

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20

const cricle3 = Cricle(150); // 150이 전역객체에 바인딩 된다. window.radius = 150; or global.radius = 150;
console.log(radius); // 전역 객체에 바인딩된 radius 출력
```

#

## Function.prototype.apply / call / bind 메서드에 의한 간접 호출 ##

Function.prototype 메서드는 모든 함수가 상속받아 사용이 가능하다.

### apply / call 메서드 ###

this로 사용할 객체와 인수 리스트를 인수로 전달받아 호출한다.

**Example Code (apply / call 메서드 사용법) :**
```javascript
function getThisBinding() {
  // console.log(this.a); -> apply / call 로 this 바인딩 시에 1이 출력 ({a : 1}) 객체가 this에 바인딩 돼서
  return this;
}

// this로 사용할 객체 선언
const thisArg = { a: 1 };
console.log(getThisBinding()); // global or window

// getThisBinding을 호출하면서 인수로 전달할 객체를 그 함수의 this에 바인딩한다.
console.log(getThisBinding.apply(thisArg)); // this는 {a: 1}
console.log(getThisBinding.call(thisArg)); // this는 {a: 1}
```

> apply와 call의 본질적인 기능은 함수를 호출하는 것이다. (this 바인딩을 하면서)

> function.apply(this에 바인딩할 객체, 함수에 전달할 인수) 로 사용하면 됌.

+ apply : 인수를 배열로 전달 하여 배열로 받음
+ call : 인수를 쉼표 구분으로 전달하여 리스트로 받음

**Example Code (apply / call 함수 인수 전달) :**
```javascript
function getUserName(id) {
  if (this.id === id) {
    return this.name;
  }
}

const userInfo = {
  id: 1,
  name: 'kim'
};

console.log(getUserName.apply(userInfo, [1])); // Kim 
console.log(getUserName.call(userInfo, 1)) // Kim
```

> 대표적인 용도는 arguments 객체와 같은 유사 배열 객체에 배열 메서드를 사용하는 경우이다.

_**arguments 객체는 배열이 아니기 때문에 Array.prototype.slice 같은 배열 메서드를 사용할 수 없지만.. apply나 call 메서드를 이용하면 사용 가능하다.**_

**Example Code (arguments 배열로 변환) :**
```javascript
function convertArgsToArray() {
  console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 }

  // arguments를 배열로 전환
  const arr = Array.prototype.slice.call(arguments);

  console.log(arr);

  return arr;
}

convertArgsToArray(1, 2, 3); // [1, 2, 3]
```

### bind 메서드 ###

apply와 call과는 다르게 함수를 호출하지 않음. **첫 번째 인수로 전달한 값으로 this 바인딩이 교체된 함수를 반환.**

**Example Code (bind 메서드) :**
```javascript
function getThisBinding() {
  return this;
}

// this로 사용할 객체 선언
const thisArg = { a: 1 };

console.log(getThisBinding.bind(thisArg));
console.log(getThisBinding.bind(thisArg)()); // {a: 1} 호출 해줘야함
```

_**bind 메서드는 콜백 함수의 this 바인딩에 유용하게 사용된다.**_

**Example Code (콜백함수 bind 메서드) :**
```javascript
const person = {
  name: 'Kim',
  foo(callback) {
    setTimeout(callback.bind(this), 100);
  }
};

person.foo(function () {
  console.log(`My name is ${this.name}`);
});
```

<img width="641" alt="스크린샷 2022-02-02 오후 6 34 45" src="https://user-images.githubusercontent.com/89209626/152128471-a6278680-ec76-4cd4-98b2-f1b69b3605ef.png">
