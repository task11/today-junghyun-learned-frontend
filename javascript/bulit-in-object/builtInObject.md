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

#

## 빌트인 전역 프로퍼티 : 전역 객체의 프로퍼티 ##

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