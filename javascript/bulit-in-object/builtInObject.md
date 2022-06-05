# 빌트 인 객체
## 자바스크립트 객체의 분류

자바스크립트 객체는 다음과 같이 크게 3개의 객체로 분류할 수 있다.

1. 표준 빌트인 객체

>표준 빌트인 객체는 ECMAScript 사양에 정의된 객체를 말하며, 애플리케이션 전역의 공통 기능을 제공한다. 표준 빌트인 객체는 ECMAScript 사양에 정의된 객체이므로 자바스크립트 실행 환경(브라우저 또는 Node.js 환경)과 관계없이 언제나 사용할 수 있다. 표준 빌트인 객체는 전역 객체의 프로퍼티로서 제공된다. 따라서 별도의 선언 없이 전역 변수처럼 언제나 참조할 수 있다.

2. 호스트 객체

>호스트 객체는 ECMAScript 사양에 정의되어 있지 않지만 자바스크립트 실행 환경(브라우저 또는 Node.js 환경)에서 추가로 제공하는 객체 를 말한다. 브라우저 환경에서는 DOM, BOM, CANVAS, XMLHttpRequest, fetch, Web Storage, Web Component 와 같은 클라이언트 사이드 Web API를 호스트 객체로 제공하고, Node.js 환경에서는 Node.js 고유의 API를 호스트 객체로 제공한다.

3. 사용자 정의 객체

> 사용자 정의 객체는 표준 빌트인 객체와 호스트 객체처럼 기본 제공되는 객체가 아닌 사용자가 직접 정의한 객체를 말한다.


```javascript
// 생성자 함수에 의한 인스턴스 생성
const num1 = new Number("1");
console.log("num1 value: ", num1);

const num2 = "20";

// 일반 함수 형태로 num2 변환
console.log("parseInt type: ", typeof parseInt(num2));
console.log("parseInt type: ", typeof Number(num2));

// Math는 인스턴스를 생성할 수 없는 생성자 함수 객체다.
console.log("Math: ", Math.floor(Math.random() * 100));

```
## 표준 빌트인 객체
표준 빌트인 객체는 ECMAScript 사양의 자바스크립트 실행 환경(브라우저/node.js)에서 모두 사용 가능한 공통 객체이다.

> 자바스크립트는 Object, String, Number, Boolean, Symbol, Date, Math, RegExp, Array, Map/Set, Function, Promise, Reflect, Proxy, Json, Error 등 40여 개의 표준 빌트인 객체를 제공한다.

Math, Reflect, JSON을 제외한 표준 빌트인 객체는 모두 인스턴스를 생성할 수 있는 생성자 함수 객체다.

1. 생성자 함수 객체인 표준 빌트인 객체는
  + 프로토타입 메서드와
  + 정적 메서드를 제공하고
2. 생성자 함수 객체가 아닌 표준 빌트인 객체는
  + 정적 메서드만 제공한다.

예를 들어, 표준 빌트인 객체인 String, Number, Boolean, Function, Array, Date는 생성자 함수로 호출하여 인스턴스를 생성할 수 있다.

```javascript
// 생성자 함수 (new 표준 빌트인 객체)
// String 생성자 함수에 의한 String 객체 생성
const strObj = new String("Lee"); // String {"Lee"}
console.log(typeof strObj); // object

// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(123); // Number {123}
console.log(typeof numObj); // object

// Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj = new Boolean(true); // Boolean {true}
console.log(typeof boolObj); // object

// Function 생성자 함수에 의한 Function 객체(함수) 생성
const func = new Function("x", "return x * x"); 
// ƒ anonymous(x )
console.log(typeof func); // function

// Array 생성자 함수에 의한 Array 객체(배열) 생성
const arr = new Array(1, 2, 3); // (3) [1, 2, 3]
console.log(typeof arr); // object

// RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성
const regExp = new RegExp(/ab+c/i); 
// /ab+c/i
console.log(typeof regExp); // object

// Date 생성자 함수에 의한 Date 객체 생성
const date = new Date(); 
// Fri May 08 2020 10:43:25 GMT+0900 (대한민국 표준시)
console.log(typeof date); // object
```

생성자 함수인 표준 빌트인 객체가 생성한 인스턴스의 프로토타입은 표준 빌트인 객체(Object)의 prototype 프로퍼티에 바인딩된 객체다.

예를 들어, 표준 빌트인 객체인 String을 생성자 함수로서 호출하여 생성한 String 인스턴스의 프로토타입은 String.prototype이다.

```javascript
// String 생성자 함수에 의한 String 객체 생성
const strObj = new String("Lee"); // String {"Lee"}

// String 생성자 함수를 통해 생성한 strObj 객체의 프로토타입은 String.prototype이다.
console.log(Object.getPrototypeOf(strObj) === String.prototype); // true
표준 빌트인 객체의 prototype 프로퍼티에 바인딩된 객체는 다양한 기능의 빌트인 프로토타입 메서드(String.prototype.xxxx)를 제공한다. 그리고 표준 빌트인 객체는 인스턴스 없이도 호출 가능한 빌트인 정적 메서드를 제공한다.

console.log(Math.floor(3.5));
```

## 원시값과 래퍼 객체
래퍼(wrapper)객체는 원시 타입을 마치 객체 타입처럼 사용하는 과정 속에서 생기는 임시 객체이므로, 원시 타입인 String, Number, Boolean으로 특정된다고 생각하면 쉽다

문자열이나 숫자, 불리언 등의 원시값이 있는데도 ① 문자열, ② 숫자, ③ 불리언 객체를 생성하는 String, Number, Boolean 등의 표준 빌트인 생성자 함수 가 존재하는 이유는 무엇일까?

다음 예제를 살펴보자. 원시값은 객체가 아니므로 프로퍼티나 메서드를 가질 수 없는데도 원시값인 문자열이 마치 객체처럼 동작한다.

```javascript
// 암묵적 타입 변환
const str = "hello";

// 생성자 함수를 통해 만든 인스턴스
const strObject = new String("hi");

// 값 출력
console.log(str); // hello
console.log(strObject); // [String: 'hi']

// 타입 출력
console.log(typeof str); // string
console.log(typeof strObject); // object

// 원시 타입인 문자열이 프로퍼티와 메서드를 갖고 있는 객체처럼 동작한다.
console.log(str.length); // 5
console.log(str.toUpperCase()); // HELLO

console.log(strObject.length); // 2
console.log(strObject.toUpperCase()); // HI
```

> 이는 원시 타입의 값인 문자열, 숫자, 불리언 값 의 경우 이들 원시값에 대해 마치 객체처럼 마침표 표기법 (.) 또는 대괄호 표기법 ([ ])으로 접근하면 자바스크립트 엔진이 일시적으로 원시값을 연관된 객체로 변환해 주기 때문이다.

즉, 원시값을 객체처럼 사용하면 자바스크립트 엔진은 암묵적으로 연관된 객체를 생성하여 생성된 객체로 프로퍼티에 접근하거나 메서드를 호출하고 다시 원시값으로 되돌린다.

이처럼 문자열, 숫자, 불리언 값에 대해 객체처럼 접근 [(.) 등의 마침표 표기법 ]하면 생성되는 임시 객체를 래퍼 객체(wrapper object)라 한다.

예를 들어, 문자열에 대해 마침표 표기법으로 접근하면(마치 객체처럼) 그 순간 자바스크립트 엔진에 의해 래퍼 객체인 String 생성자 함수의 인스턴스가 생성되고 문자열은 래퍼 객체의 `[[StringData]]` 내부 슬롯에 할당된다.

이후 래퍼 객체의 처리가 종료되면 래퍼 객체의 `[[StringData]]` 내부 슬롯에 할당된 원시값으로 원래의 상태, 즉 식별자가 원시값을 갖도록 되돌리고 래퍼 객체는 가비지 컬렉션의 대상이 된다.

# 전역 객체 (Global Object) #

자바스크립트 엔진이 먼저 생성하는 객체로 최상위 객체이다. 

+ 브라우저 환경 : window
+ Node 환경 : global

_**globalThis :**_
브라우저와 Node 환경의 다른 식별자들을 통일한 식별자

```javascript
// 브라우저 환경
globalThis === this // true
globalThis === window //true
globalThis === self //true
globalThis === frames //true

// Node.js 환경 (12.0.0 이상)
globalThis === this // true
globalThis === global // true

```

전역 객체는 다음를 프로퍼티로 갖는다.

1. 표준 빌트인 객체(Object, String, Number, Function, Array 등)
2. 환경에 따른 호스트 객체 (브라우저, node.js)
3. var 키워드로 선언한 전역 변수와 전역 함수


전역 객체의 특징은 다음과 같다.

1. 전역 객체는 개발자가 의도적으로 생성할 수 없다. 즉, 전역 객체를 생성할 수 있는 생성자 함수가 제공되지 않는다.

2. 전역 객체의 프로퍼티를 참조할 때 window(또는 global)를 생략할 수 있다.

```javascript
window.alert("안녕하세요"); // window 포함

alert("안녕하세요!"); // window 생략
```
3. 전역 객체는 Object, String, Number, Function, Array, RegExp, Date, Promise와 같은 모든 표준 빌트인 객체를 프로퍼티로 가지고 있다.

4. 자바스크립트 실행 환경(브라우저 또는 Node.js 환경)에 따라 추가적으로 프로퍼티와 메서드를 갖는다.

5. var 키워드로 선언한 전역 변수와 선언하지 않은 변수에 값을 할당한 암묵적 전역, 그리고 전역 함수는 전역 객체의 프로퍼티가 된다.
(함수를 정의할 때 지역 스코프내에 var 키워드로 변수를 선언한다면, 암묵적 전역이 발생하지 않는다. 함수 레벨 스코프이기 때문)
```javascript
// var 키워드로 선언한 전역 변수
var foo = 1;
console.log(window.foo); // 1

// 선언하지 않은 변수에 값을 암묵적 전역. bar는 전역 변수가 아니라 전역 객체의 프로퍼티다.
bar = 2; // window.bar = 2
console.log(window.bar); // 2

// 전역 함수
function baz() {
  return 3;
}
console.log(window.baz()); // 3
```
6. let이나 const 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니다. 즉, window.foo와 같이 접근할 수 없다.
```javascript
let foo = 123;
console.log(window.foo); // undefined
```
7. 브라우저 환경의 모든 자바스크립트 코드는 하나의 전역 객체 window를 공유한다.
여러 개의 script 태그를 통해 자바스크립트 코드를 분리해도 하나의 전역 객체 window를 공유하는 것은 변함이 없다.
이는 분리되어 있는 자바스크립트 코드가 하나의 전역을 공유한다는 의미다.
전역 객체는 몇 가지 프로퍼티와 메서드를 가지고 있다. 전역 객체의 프로퍼티와 메서드는 전역 객체를 가리키는 식별자, 즉 window나 global을 생략하여 참조/호출할 수 있으므로 전역 변수와 전역 함수처럼 사용할 수 있다.

#

## 빌트인 전역 프로퍼티 : 전역 객체의 프로퍼티 ##

>빌트인 전역 프로퍼티는 전역 객체의 프로퍼티를 의미한다. 주로 애플리케이션 전역에서 사용하는 값을 제공한다.

+ Infinity : 무한대(숫자 값)
+ NaN : Not a Number
+ Undefined : 원시 타입 undefined

#

## 빌트인 전역 함수 ##

+ eval : 문자열 코드를 런타임에 평가하여 값을 생성하고 전달받은 인수가 **표현식이 아닌 문**이면 (사용을 권장하지 않음)
+ isFinite
+ isNaN
+ parseFloat
+ encodeURI / decodeURI
+ encodeURIComponent / decodeURIComponent

### encodeURI

encodeURI 함수는 완전한 URI(Uniform Resource Identifier) 를 문자열로 전달받아 이스케이프 처리를 위해 인코딩한다.

URI는 인터넷에 있는 자원을 나타내는 유일한 주소를 말한다.

URI의 하위 개념으로 URL(Uniform Resource Locator), URN(Uniform Resource Name)이 있다.

인코딩이란 URI의 문자들을 이스케이프 처리하는 것을 의미한다.

이스케이프 처리는 네트워크를 통해 정보를 공유할 때 어떤 시스템에서도 읽을 수 있는 아스키 문자 셋(set)으로 변환하는 것 이다.

UTF-8 특수 문자의 경우 1문자당 1~3 바이트 UTF-8 한글 표현의 경우 1 문자당 3바이트이다. 예를 들어, 특수 문자인 공백 문자는 %20, 한글 '가'는 '%EA%B0%80'으로 인코딩된다.
```javascript
/* 인코딩 (암호화) */
console.log(encodeURI("가")); // %EA%B0%80

/* 디코딩 (복호화) */
console.log(decodeURI("%EA%B0%80")); // '가'

console.log(decodeURI("%EC%9E%90")); // '자'
```
URI 문법 형식 표준에 따르면 URL은 아스키 문자 셋으로만 구성되어야 하며 한글을 포함한 대부분의 외국어나 아스키 문자 셋에 정의되지 않은 특수 문자의 경우 URL에 포함될 수 없다.

따라서 URL 내에서 의미를 갖고 있는 문자(%, ?, #)나 URL에 올 수 없는 문자(한글, 공백 등) 또는 시스템에 의해 해석될 수 있는 문자(<, >)를 이스케이프 처리하여 야기될 수 있는 문제를 예방하기 위해 이스케이프 처리가 필요하다.

```javascript
// 완전한 URI
const uri = "http://example.com?name=이웅모&job=programmer&teacher";

// encodeURI 함수는 완전한 URI를 전달받아 이스케이프 처리를 위해 인코딩한다.
const enc = encodeURI(uri);
console.log(enc);
// http://example.com?name=%EC%9D%B4%EC%9B%85%EB%AA%A8&job=programmer&teacher
decodeURI 함수는 인코딩된 URI를 인수로 전달받아 이스케이프 처리 이전으로 디코딩합니다.

const uri = "http://example.com?name=이웅모&job=programmer&teacher";

// encodeURI 함수는 완전한 URI를 전달받아 이스케이프 처리를 위해 인코딩한다.
const enc = encodeURI(uri);
console.log(enc);
// http://example.com?name=%EC%9D%B4%EC%9B%85%EB%AA%A8&job=programmer&teacher

// decodeURI 함수는 인코딩된 완전한 URI를 전달받아 이스케이프 처리 이전으로 디코딩한다.
const dec = decodeURI(enc);
console.log(dec);
// http://example.com?name=이웅모&job=programmer&teacher
encodeURIComponent / decodeURIComponent 🔥
encodeURIComponent 함수는 URI 구성 요소(component)를 인수로 전달받아 인코딩합니다. 여기서 인코딩이란 URI의 문자들을 이스케이프 처리하는 것을 의미합니다.

// URI의 쿼리 스트링
const uriComp = "name=이웅모&job=programmer&teacher";

// encodeURIComponent 함수는 인수로 전달받은 문자열을 URI의 구성요소인 쿼리 스트링의 일부로 간주한다.
// 따라서 쿼리 스트링 구분자로 사용되는 =, ?, &까지 인코딩한다.
let enc = encodeURIComponent(uriComp);
console.log(enc);
// name%3D%EC%9D%B4%EC%9B%85%EB%AA%A8%26job%3Dprogrammer%26teacher

let dec = decodeURIComponent(enc);
console.log(dec);
// 이웅모&job=programmer&teacher

// encodeURI 함수는 인수로 전달받은 문자열을 완전한 URI로 간주한다.
// 따라서 쿼리 스트링 구분자로 사용되는 =, ?, &를 인코딩하지 않는다.
enc = encodeURI(uriComp);
console.log(enc);
// name=%EC%9D%B4%EC%9B%85%EB%AA%A8&job=programmer&teacher

dec = decodeURI(enc);
console.log(dec);
// name=이웅모&job=programmer&teacher인 Number의 prototype 프로퍼티에 바인딩된 객체(numObj), Number.prototype은 다양한 기능의 빌트인 프로토타입 메서드를 제공한다. 이 프로토타입 메서드는 모든 Number 인스턴스가 상속을 통해 사용할 수 있다. 그리고 표준 빌트인 객체인 Number는 인스턴스 없이 정적으로 호출할 수 있는 정적 메서드를 제공한다.
```