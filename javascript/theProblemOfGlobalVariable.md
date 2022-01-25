# 전역변수의 문제점(the problem of global variable) #

전역 변수의 무분별한 사용은 위험하다. 전역 변수의 라이프 사이클은 어플리케이션의 생명주기와 같다.

#

## 전역 변수의 생명 주기 ##

<img width="409" alt="스크린샷 2022-01-25 오후 8 10 24" src="https://user-images.githubusercontent.com/89209626/150966317-3464fec3-6737-4a84-bdda-5fcd6313cfc4.png">

#

## 전역 변수의 문제점 ##

+ **암묵적 결합(implicit coupling)** : 전역 변수는 전역 스코프를 가지기 때문에 코드 어디서든 참조하고 할당할 수 있게 되는 것.
  + 변수의 유효 범위가 커질수록 코드의 **가독성**은 나빠진다.
  + 의도치 않게 **상태**가 변경될 수 있다.
+ **긴 생명 주기** : 전역 변수는 생명 주기가 길다.
  + **메모리 리소스**를 오랜 기간 소비한다.
  + var 키워드로 선언된 변수는 중복 선언을 허용하므로 변수 이름이 중복될 가능성이 생겨 의도치 않은 **재할당**이 이뤄질 수 있다.
+ **스코프 체인 상에서 종점에 존재** : 전역 변수는 스코프 제인의 종점에 존재한다.
  + 변수를 검색할 때 전역 변수가 가장 마지막에 검색된다. : **검색 속도가 가장 느리다.**
+ **네임스페이스 오염** : 자바스크립트의 가장 큰 문제점 중 하나는 파일이 분리되어 있어도 하나의 전역 스코프를 공유하는 점이다.
  + 다른 파일내에서 동일한 이름으로 명명된 전역 변수나 전역 함수가 같은 스코프 내에 존재한다면 예상치 못한 결과를 가져올 수 있게 된다.

#

## 전역 변수 사용 억제방법 ##

##### _**변수의 스코프는 좁을수록 좋다.**_

### 1. 즉시 실행 함수 사용 ###
즉시 실행 함수는 함수 정의와 동시에 호출되는 즉시 단 한번만 호출된다. **모든 코드를 즉시 실행 함수로 감싸면 전역 변수 사용이 제한된다.**

**Example Code :**
```javascript
(function(){
  var foo = 10; // 지역 변수
}());

console.log(foo); // ReferenceError: foo is not defined
```
##### _**라이브러리 등에 자주 사용 된다..**_

<br />

### 2. 네임 스페이스 객체 사용 ###
전역에 네임스페이스 역할을 담당할 객체를 생성하고, 전역 변수로 사용하고 싶은 변수를 프로퍼티로 추가하는 방식이다.

**Example Code :**
```javascript
var MYAPP = {}; // 전역 네임스페이스 객체

MYAPP.name = 'kim';

console.log(MYAPP.name); // kim

// 계층 구조로 구성
MYAPP.person = {
  name = 'kim',
  age = '18'
};

console.log(MYAPP.person);

```
##### _**네임스페이스 객체 자체가 전역 변수에 할당되기 때문에 유용하진 않다..**_

<br />

### 3. 모듈 패턴 사용 ###

관련이 있는 변수와 함수를 모아 즉시 실행 함수로 감싸 하나의 모듈을 만드는 방법이다.
  + 모듈 패턴은 자바스크립트의 강력한 기능인 클로저를 기반으로 동작한다.
  + 전역 변수의 억제와 캡슐화 구현이 가능하다.

_캡슐화: 객체의 상태를 나타내는 프로퍼티와 프로퍼티를 참조하고 조작할 수 있는 동작인 메서드를 하나로 묶는 것이다._
_객체의 특정 프로퍼티나 메서드를 감출 목적으로 사용하기도 하는데 이를 **정보 은닉(information hiding)** 이라 한다._

**Example Code :**
```javascript
var Counter = (function (){
  // private 변수
  var num = 0;

  return {
    increase(){
      return ++num;
    },
    decrease(){
      return --num;
    }
  }
}());

// private 변수는 외부로 노출되지 않는다.
console.log(Counter.num); // undefined
console.log(Counter.increase()); // 1
console.log(Counter.increase()); // 2
console.log(Counter.decrease()); // 1
console.log(Counter.decrease()); // 0
```
##### _**클로저와 깊은 연관이 있다.**_

<br />

### 4. ES6 모듈 ###

ES6 모듈은 파일 자체의 독자적인 모듈 스코프를 제공한다. 모듈 내에서 var키워드로 선언하는 변수는 더는 전역 변수가 아니다.

_script 태그에 type="module" 어트리뷰트를 추가하면 로드된 자바스크립트 파일은 모듈로서 동작한다._

**Example Code :**
```html
<script type="module" src="lib.mjs"></script>
<script type="module" src="app.mjs"></script>
```
##### _**브라우저의 ES6 모듈 기능을 사용하더라고 트랜스파일링이나 번들링이 필요하기 때문에 브라우저가 지원하는 ES6 모듈 기능보다는 Webpack 등의 모듈 번들러를 사용한다.**_