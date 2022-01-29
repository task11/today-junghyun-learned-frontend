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

### 2) 인스턴스 초기화 ###

생성자 함수의 코드가 한 줄씩 싱행되어 this에 바인딩되어 있는 인스턴스를 초기화한다.

this에 바인딩되어 있는 인스턴스에 프로퍼티나 메서드를 추가하고, 인수로 전달받은 초기값을 인스턴스 프로퍼티에 할당하여 초기화하거나 고정값을 할당한다.


### 3) 인스턴스 반환 ###

완성된 인스턴스의 바인딩된 this가 암묵적으로 변환된다.
