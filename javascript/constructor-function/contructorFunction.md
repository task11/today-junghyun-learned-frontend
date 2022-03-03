# 생성자 함수에 의한 객체 생성 #

## Object 생성자 함수 ##

new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다.

**Example Code (Constructor) :**
```javascript
// 빈 객체 생성
const person = new Object(); // {}

// 프로퍼티 추가
person.name = 'Kim';
person.sayHello = function() {
  console.log('Hi~ My name is ' + this.name);
};

console.log(person); // {name: 'Kim', sayHello: f}
person.sayHello(); // Hi~ My name is Kim
```

생성자 함수(Constructor)란 new 연산자와 함께 호출하여 객체(인스턴스)를 생성한다.

빌트인 생성자 함수 :
  + String
  + Number
  + Boolean
  + Function
  + Array
  + Date
  + RegExp
  + Promise

#

## 생성자 함수 ##

동일한 프로퍼티를 갖는 객체를 여러 개 생성하는 경우 같은 프로퍼티를 중복 선언해야한다.

**Example Code (객체 리터럴에 의한 객체 생성 방식의 문제점) :**
```javascript
const circle1 = {
  radius: 5,
  getDiameter(){
    return 2 * this.radius;
  }
};

console.log(circle1.getDiameter()); // 10

const circle2 = {
  radius: 10,
  getDiameter(){
    return 2 * this.radius;
  }
};

console.log(circle2.getDiameter()); // 20
```

위 코드는 생성자 함수로 아래와 같이 선언 가능하다.

**Example Code (생성자 함수) :**
```javascript
// 생성자 함수
function Circle(radius) {
  // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 인스턴스 생성
const circle1 = new Circle(5);
const circle2 = new Circle(5);

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20
```
_**new 연산자 생략 시에 일반 함수로 호출된다.**_

#

## 생성자 함수의 인스턴스 생성 과정 ##

생성자 함수의 역할은 프로퍼티 구조가 동일한 인스턴스를 생성하기 위한 템플릿(클래스)로 동작
  + 인스턴스를 생성 : 필수
  + 생성된 인스턴스를 초기화 : 옵션

**Example Code (생성자 함수) :**
```javascript
// 생성자 함수
function Circle(radius){
  // 인스턴스 초기화
  this.radius = radius;
  this.getDiameter = function() {
    return 2 * this.radius;
  };
}

// 인스턴스 생성
const circle1 = new Circle(5); // 반지름이 5인 Circle 객체를 생성
```

_**자바스크립트 엔진은 암묵적인 처리를 통해 인스턴스를 생성하고 반환하다.**_

### 1) 인스턴스 생성과 this 바인딩 ###

생성자 함수를 호출하면 인스턴스(빈 객체)가 생성된다. > 인스턴스는 this에 바인딩된다.

_**바인딩 : 삭별자와 값을 연결하는 과정을 의미한다. **_

**Example Code (인스턴스 생성) :**
```javascript
// 인스턴스 생성 과정
function Circle(radius) {
  // 1.암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
  console.log(this);

  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  }
}
```

### 2) 인스턴스 초기화 ###

생성자 함수의 코드가 한 줄씩 싱행되어 this에 바인딩되어 있는 인스턴스를 초기화한다.

this에 바인딩되어 있는 인스턴스에 프로퍼티나 메서드를 추가하고, 인수로 전달받은 초기값을 인스턴스 프로퍼티에 할당하여 초기화하거나 고정값을 할당한다.

**Example Code (인스턴스 초기화) :**
```javascript
// 인스턴스 생성 과정
function Circle(radius) {
  // 1.암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
  
  // 2.this에 바인딩되어 있는 인스턴스를 초기화한다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  }
}
```

### 3) 인스턴스 반환 ###

완성된 인스턴스의 바인딩된 this가 암묵적으로 변환된다.

**Example Code (인스턴스 반환) :**
```javascript
// 인스턴스 생성 과정
function Circle(radius) {
  // 1.암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
  
  // 2.this에 바인딩되어 있는 인스턴스를 초기화한다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  }

  // 3.완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
}

// 인스턴스 생성, Circle 생성자 함수는 암묵적으로 this를 반환한다.
const circle1 = new Circle(5);
console.log(circle1); 
console.log(circle1.getDiameter());
```

**만약, this가 아닌 다른 객체를 명시적으로 반환하면 this가 반환되지 못하고 return문에 명시한 객체가 반환된다.**

**Example Code (인스턴스의 명시적 반환) :**
```javascript
// 인스턴스 생성 과정
function Circle(radius) {
  // 1.암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
  
  // 2.this에 바인딩되어 있는 인스턴스를 초기화한다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  }

  // 3.완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.

  // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
  // return {};

  // 명시적으로 원시 값을 반한하면 원시 값 반환은 무시되고 this가 반환된다.
  return 100;
}

const circle1 = new Circle(5);
console.log(circle1); // 명시적 객체 반환 : {}

console.log(circle1); // 명시적 원시값 반환 : {radius: 5 .....}
```

#

## 내부 메서드 [[Call]]과 [[Construct]] ##

함수는 객체이므로 일반 객체와 동일하게 동작할 수 있다.

그러나, 일반 객체는 호출을 할 수 없는 반면에, 함수는 호출할 수 있다.

**Example Code (함수 내부 메서드) :**
```javascript
function call() {
};

call.prop = 10;

call.method = function () {
  console.log(this.prop);
};

call.method(); // 10
```
함수 객체는 함수로서 동작하기 위한 [[Environment]], [[FormalParameters]] 등의 내부 슬롯과 [[Call]], [[Construct]] 같은 내부 메서드를 추가로 가지고 있다.

+ 일반 함수로 호출 : [[Call]] 내부 메서드 호출
+ new 연산자로 생성자 함수 호출 : [[Construct]] 내부 메서드 호출

**Example Code (함수 내부 메서드) :**
```javascript
function call() {
};

// 일반 함수로 호출 : [[Call]] 호출
call();

// 생성자 함수로 호출 : [[Construct]] 호출
new call();
```

+ 내부 메서드 [[Call]]을 갖는 함수 객체를 callable : 호출할 수 있는 객체
+ 내부 메서드 [[Construct]]을 갖는 함수 객체를 constructor : 생성자 함수로서 호출할 수 있는 함수
+ 내부 메서드 [[Construct]]를 갖지 않는 함수 객체를 non-constructor : 객체를 생성자 함수로 호출이 불가능한 함수

_**모든 함수 객체는 callabe이다.**_ 그러나, 모든 함수가 _**constructor는 아니다.**_ (constructor or non-constructor)

<img width="405" alt="스크린샷 2022-01-30 오후 8 46 33" src="https://user-images.githubusercontent.com/89209626/151698316-7f46edae-2177-46ed-8d50-67efbc30d146.png">

### constructor와 non-constructor 구분 ###

자바스크립트 엔진은 함수의 정의 방식에 따라 아래로 구분한다.

  + constructor     : 함수 선언문, 함수 표현식, 클래스(클래스도 함수이다.)
  + non-constructor : 메서드(ES6 메서드 축약 표현), 화살표 함수(Arrow Function)

**Example Code (constructor, 메서드로 인정하는 범위) :**
```javascript
// 일반 함수 정의: 함수 선언문, 표현식
function ex() { }
const exVal1 = function () { };
// 프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수다. (메서드로 인정 X)
const exVal2 = {
  x: function () { }
};

// 일반 함수로 정의된 함수만이 constructor
new ex();       // ex {}
new exVal1();   // exVal1 {}
new exVal2.x(); // x {}

// 화살표 함수 정의
const arrow = () => { };

new arrow(); // TypeError: arrow is not a constructor

// 메서드 정의 : ES6의 메서드 축약 표현만 메서드로 인정.
const obj = {
  x() { }
};

new obj.x(); // TypeError: obj.x is not a constructor
```

_**주의 : 생성자 함수로서 호출될 것을 기대하고 정의하지 않은 일반 함수(callable and construrtor)에 new 연산자를 붙여 호출하면 생성자 함수처럼 동작할 수 있다.**_

### new 연산자 ###

new 연산자와 함께 함수를 호출하면 해당 함수는 생성자 함수로 동작한다.

**Example Code (일반 함수를 생성자 함수로 호출):**
```javascript
// 생성자 함수로서 정의하지않은 일반 함수
function add(x, y) {
  return x + y;
}

// 생성자 함수로서 정의하지 않은 일반 함수를 new 연산자와 호출
let inst = new add(5, 6);

// 함수가 객체를 반환하지 않았으므로 반환문이 무시, 빈 객체를 반환한다. -> 원시값을 반환했으므로 무시된다.
console.log(inst); // add {}

// 객체를 반환하는 일반 함수
function createUser(name, role) {
  return { name, role };
}

// 일반 함수를 new 연산자와 호출
inst = new createUser('kim', 'dba');
// 함수가 생성한 객체를 반환
console.log(inst); // { name: 'kim', role: 'dba' }
```

**Example Code (생성자 함수를 일반 함수로 호출):**
```javascript
// 생성자 함수
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// new 연산자 없이 생성자 함수를 호출
const circle = Circle(5);
console.log(circle); // undefined

// 일반 함수 내부의 this는 전역 객체 window를 가리킨다. -> this가 전역 객체 window와 바인딩 된다. -> 전역 변수, 전역 객체가 되어버림.
console.log(radius);
console.log(getDiameter());

circle.getDiameter(); // TypeError: Cannot read property 'getDiameter' of undefined
```

_**Circle 함수 내부의 this는 전역 객체 window를 가리킨다. 따라서 radius 프로퍼티와 getDiameter 메서드는 전역 객체의 프로퍼티와 메서드가 된다.**_

위 실수를 방지하지 위헤 생성자 함수는 일반적으로 첫 문자를 대문자로 기술하는 **파스칼 케이스**로 명명해야한다.

### ES6 : new.target ###

new.target : this와 유사하게 constructor인 모든 함수 내부에서 암묵적인 지역 변수와 같이 사용되며 **메타 프로퍼티**라고 부른다. (IE 는 new.target을 지원하지 않음)

사용법 : 함수 내부에서 new.target을 사용하면 new 연산자와 함께 호출되었는지 확인할 수 있다.

  + new 연산자와 함께 **생성자 함수로서** 호출되면 함수 내부의 new.target은 **함수 자신을 가리킨다.**
  + new 연산자 없이 **일반 함수로** 호출된 함수 내부의 new.target은 **undefined**이다.

_함수 내부에서 new.target을 사용하여 방어코드 작성 가능 : new 연산자와 함께 재귀 호출을 통해 생성자 함수로서 호출이 가능하다._

**Example Code (new.target) :**
```javascript
// 생성자 함수
function Circle(radius) {
  // 이 함수가 new 연산자와 함께 호출되지 않았다면 new.target은 undefined이다.
  if (!new.target) {
    // new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다.
    return new Circle(radius);
  }
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const circle = Circle(5);
console.log(circle.getDiameter());
```

### **스코프 세이프 생성자 패턴** (Scope-Safe Constructor) ###
ES6의 new.target 이전에 사용됐던 방법이다.

**Example Code (Scope-Safe Constructor) :**
```javascript
// Scope-Safe Constructor Pattern
function Circle(radius) {
  // 생성자 함수가 new 연산자와 함께 호출되면 함수의 선두에서 빈 객체를 생성하고
  // this에 바인딩한다. 이때 this와 Circle은 프로토타입에 의해 연결된다.

  // 이 함수가 new 연산자와 함께 호출되지 않았다면 이 시점의 this는 전역 객체 window를 가리킨다.
  // -> this와 Circle은 프로토타입에 의해 연결되지 않는다.
  if (!(this instanceof Circle)) { // 프로토타입 체크
    // new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다.
    return new Circle(radius);
  }
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const circle = Circle(5);
console.log(circle.getDiameter());
```

_**new 연산자와 함께 생성자 함수에 의해 생성된 객체는 프로토타입에 의해 생성자 함수와 연결되는데, 이 조건을 체크하여 여부를 파악할 수 있다.**_

>대부분의 빌트인 생성자 함수는 new 연산자와 함께 호출했는지를 확인 한 후에 적절한 값을 반환해준다.

**Example Code (Object & Function Constructor):**
```javascript
let obj = new Object();
console.log(obj) // {}

obj = Object();
console.log(obj) // {}

let f = new function('x', 'return x ** x');
console.log(f) // f anonymous(x) { return x ** x }

f = function('x', 'return x ** x');
console.log(f) // f anonymous(x) { return x ** x }

```

>String, Number, Boolean 생성자 함수는 new 연산자와 함께 호출할 때 객체를 생성해 반환하지만, new 연산자 없이 호출하면 문자열, 숫자, 불리언 값을 반환한다. 이를 통해 데이터 타입을 변환한다.

**Example Code (타입 변환):**
```javascript
const str = String(123);

const num = Number('123');

const bool = Boolean('true');
```