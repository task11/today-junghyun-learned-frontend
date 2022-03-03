# 데이터 타입 (Data Type) #

자바스크립트(ES6)는 7개의 데이터 타입을 제공한다.

<img width="532" alt="스크린샷 2022-01-18 오후 6 25 35" src="https://user-images.githubusercontent.com/89209626/149908643-e452a90a-403c-4de2-92ce-217fa23d5c4a.png">

##### _7개의 데이터 타입은 원시 타입(primitive type)과 객체 타입(object/reference)으로 분류할 수 있다._  
  + ##### 원시 타입 : 원시 값은 변경 불가능한 값(immutable value)
  + ##### 객체 타입 : 객체는 변경 가능한 값(mutable value)
#

## 숫자 타입 (Number Type) ##

ECMAScript 사양에 따르면 숫자 타입의 값은 IEEE 754의 부동소수점 표현 형식 중 _배정밀도 64비트 부동소수점 형식_ 을 따른다. 즉, 모든 수를 실수로 처리하며, 정수만 표현하기 위한 데이터 타입이 별도로 존재하지 않는다.

**배정밀도 64비트 부동소수점 형식 :**
![1000px-General_floating_point_ko svg](https://user-images.githubusercontent.com/89209626/149932137-8fb6c210-1215-4f2b-9c5f-fd22fe3c8197.png)
##### * 참조 : https://www.wikiwand.com/ko/IEEE_754

**Example Code :**

```javascript

// 숫자 타입은 모두 실수로 처리한다.
console.log(1 === 1.0); // true
console.log(3 / 2);      // 1.5

// 숫자 타입은 세 가지 특별한 값을 포함한다.
console.log(10 / 0);        // Infinity
console.log(10 / -0);       // -Infinity
console.log(1 * 'String');  // NaN(not-a-number)
```
#
## 문자열 타입 (Data Type) ##
문자열은 0개 이상의 16비트 유니코드 문자(UTF-16)의 집합으로 전 세계 대부분의 문자를 표현할 수 있다.
  + 작은 따옴표 : ''
  + 큰 따옴표 : ""
  + 백틱 : `` 

C 언어는 문자열 타입을 제공하지 않고 문자의 배열로 문자열을 표현하고, JAVA는 문자열을 객체로 표현한다. JavaScript의 문자열을 원시 타입이며 변경 불가능한 값이다.
#### _(문자열이 생성되면 변경할 수 없다는 것을 의미)_

#

## 템플릿 리터럴 (Template Literal) ##

ES6 부터 도입된 문자열 표기법으로 런타임에 일반 문자열로 변환되어 처리된다.
  + 멀티라인 문자열(multi-line string)
  + 표현식 삽입(expression interpolation)
  + 태그드 템플릿(tagged template)

템플릿 리터럴은 **백틱(``)** 을 사용해 표현한다. 

**Example Code :**

```javascript

var template = `Template literal`;
console.log(template); // Template Literal

```

### 1) 멀티라인 문자열 ###

일반 문자열 내에서는 줄바꿈(개행)이 허용되지 않는다. 이를 표현하기 위해서는 백슬래시(\\)로 시작하는 **이스케이프 시퀀스(escape sequence)** 를 사용해야 한다.

**이스케이프 시퀀스(Escape Sequence) :**

<img width="533" alt="스크린샷 2022-01-18 오후 9 16 05" src="https://user-images.githubusercontent.com/89209626/149935807-218b0a0f-e6ae-43a5-acfb-256c59c34b4f.png">

#### 줄바꿈 - 캐리지 리턴과 라인 피드
  + #### \r : 캐리지 리턴(Carriage Return, CR) 라는 의미를 가지며 일반적으로 맨 앞으로 이동하라는 뜻이다.
  + #### \n : 라인 피드(Line Feed, LF) 라는 의미를 가지며 일반적으로 New Line, 새로운 라인이라는 뜻이다.
    ##### _(과거 한 줄을 바꿈하기 위해서 CRLF(\r\n)을 해야 했었다. 타자기 사용 이후 LF(Line Feed)만 사용하면 의미 전달이 가능해졌다.)_

**Use Escape Sequence Example :**

``` javascript
var template = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';

console.log(template);

```

**Result :**

```html
  <ul>
    <li><a href="#">Home</a></li>
  </ul>
```
일반 문자열과 달리 템플릿 리터럴 내에서는 이스케이프 시퀀스를 사용하지 않고도 줄바꿈과 모든 공백이 허용된다.

**Use Template Literal Example :**

``` javascript
var template = `<ul>
    <li><a href="#">Home</a></li>
  </ul>`;

console.log(template);

```

**Result :**

```html
  <ul>
    <li><a href="#">Home</a></li>
  </ul>
```

### 2) 표현식 삽입 ###
문자열은 문자열 연산자 +를 사용해 연결할 수 있다. + 연산자는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자로 동작한다. 그 외의 경우는 덧셈 연산자로 동작한다.

**Use Escape Sequence Example :**
``` javascript
var first = 'Jungman';
var last = 'Kim';

// ES5: 문자열 연결
console.log(first + ' ' + last); // Jungman Kim 
```

템플릿 리터럴 내에서는 표현식 삽입(expression interpolation)을 통해 간단히 문자열을 삽입할 수 있다.

**Use Template Literal Example :**
``` javascript
var first = 'Jungman';
var last = 'Kim';

// ES6: 표현식 삽입
console.log(`My name is ${first} ${last}`); // Jungman Kim 

// 표현식 삽입
console.log(`1 + 2 = ${1 + 2}`);
```
#### 표현식을 삽입하려면 ${ }으로 표현식을 감싼다.

#

## Undefined 타입 ##

+ var 키워드로 선언한 변수는 암묵적으로 undefined로 초기화한다. 
+ 변수를 참조했을 때 undefined가 반환된다면 참조한 변수가 선언 이후 값이 할당된적이 없는 초기화되지 않은 변수이다.
+ 변수에 값이 없다는 것을 명시하고 싶을 때는 null을 할당한다.

#

## null 타입 ##

변수에 null을 할당하는 것은 변수가 이전에 참조하던 값을 더 이상 참조하지 않겠다는 의미다. 이는 이전에 할당되어 있던 값에 대한 참조를 명시적으로 제거하는 것을 의미하며,
자바스크립트 엔진은 누구도 참조하지 않는 메모리 공간에 대해 **가비지 콜렉션(GC)** 을 수행할 것이다.

``` javascript
var foo = 'Lee';

// 이전 참조를 제거
foo = null;
```

#

## 심벌 타입 ##

심벌(symbol)은 ES6에서 추가된 7번째 타입으로, 변경 불가능한 원시 타입의 값이다. 심벌 값은 다른 값과 중복되지 않는 유일무이한 값이다.

_이름이 충돌할 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용한다._

``` javascript

// 심벌 값 생성
var key = Symbol('key');
console.log(typeof key); // symbol

// 객체 생성
var obj = {};

// 이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 프로퍼티 키로 사용한다.
obj[key] = 'value';
console.log(obj[key]); // value
```

#

## 객체 타입 ##

**자바스크립트를 이루고 있는 거의 모든 것은 객체**이다.