# 스코프-유효범위 (Scope) #

스코프란 매개 변수의 유효범위이다.

_**스코프** : 모든 식별자(변수 이름, 함수 이름, 클래스 이름 등)가 자신이 선언된 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는 유효 범위가 결정되는 것_

#

## var 키워드로 선언한 변수의 중복 선언 ##

var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언이 허용된다. -> 의도치 않게 변수가 재할당되는 부작용을 초래

**Example Code (var 변수 중복 선언) :**
```javascript
function foo(){
  var x = 1;
  var x = 2;

  console.log(x); // 2
}

foo();
```

let, const 키워드로 선언하는 변수는 중복 선언을 허용하지 않는다.

**Example Code (let, const 중복 제어) :**
```javascript
function bar(){
  let x = 1;
  let x = 2;// SyntaxError: Indentifier 'x' has already been declared
}

bar();
```

#

## 스코프 체인 (Scope Chain) ##

중첩된 함수들이 지역 스코프를 가질 때와 같이 스코프가 계층적으로 연결된 것을 스코프 체인(scope chain)이라고 한다.

**Scope Chain :**

<img width="192" alt="스크린샷 2022-01-25 오후 5 34 51" src="https://user-images.githubusercontent.com/89209626/150940992-e40cf244-7152-46a1-a842-5d09a11890f1.png">

```javascript
// 전역 스코프
var x = 'global x'
var y = 'global y'

// 지역 스코프(outer)
function outer(){
  var z = 'outer z';

  // 지역 스코프(inner)
  function inner(){
    var x = 'inner x';

    console.log(x); // 1)
    console.log(y); // 2)
    console.log(z); // 3)
  }
}
```

**스코프 체인에 의한 _자바스크립트 엔진의 동작_ (변수 검색)**

1) x 변수를 참조하는 코드의 스코프인 inner 함수의 지역 스코프에서 x 변수가 선언되었는지 검색 -> inner 함수에 x 변수 존재함 -> 검색된 변수 참조
2) y 변수를 참조하는 코드의 스코프인 inner 함수의 지역 스코프에서 y 변수가 선언되었는지 검색 -> inner 함수에 y 변수 존재 X -> 상위 스코프인 outer 함수에서 검색 -> outer 함수에 y변수 존재 X -> 상위 스코프인 전역(global)스코프에서 검색 -> 전역 스코프에 y 변수 존재함 -> 검색된 변수 참조
3) z 변수를 참조하는 코드의 스코프인 inner 함수의 지역 스코프에서 z 변수가 선언되었는지 검색 -> inner 함수에 z 변수 존재 X -> 상위 스코프인 outer 함수에서 검색 -> outer 함수에 z변수 존재함 -> 검색된 변수 참조

#

## 함수 레벨 스코프 ##

 + 블록 레벨 스코프 : if, for, while 등 함수를 포함한 모든 코드 블록이 지역 스코프를 만드는 것 ( C, JAVA ...)
 + 함수 레벨 스코프 : 함수의 코드블록(몸체)만을 지역 스코프를 만드는 것

자바스크립트의 var 키워드로 선언된 변수는 _함수 레벨 스코프_ 를 가진다.

-> 함수를 제외한 블록 레벨에서 var 변수를 재선언 시에 전역 변수의 값이 **재할당**된다.

_**ES6에서 도입된 let, const 키워드는 블록 레벨 스코프를 지원한다.**_

#

## 렉시컬 스코프 (Lexical Scope) ##

**Example Code (Lexical Scope) :**
```javascript
var x = 1;

function foo(){
  var x = 10;
  bar();
}

function bar(){
  console.log(x);
}

foo(); // 1) ??
bar(); // 2) ??
```

위의 실행결과는 bar 함수의 상위 스코프가 무엇인지에 따라 결정된다.

1) **함수를 어디서 호출**했는지에 따라 함수의 상위 스코프를 결정한다. -> **동적 스코프**
2) **함수를 어디서 정의**했는지에 따라 함수의 상위 스코프를 결정한다. -> **렉시컬 스코프(정적 스코프)**

_**자바 스크립트는 렉시컬 스코프를 따른다.**_

* 실행결과
  1) 1
  2) 1