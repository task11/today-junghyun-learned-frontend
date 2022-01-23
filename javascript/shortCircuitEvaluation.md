# 단축 평가 (Short-Circuit Evaluation) #

## 논리 연산자를 사용한 단축 평가 ##

논리합(||) 또는 논리곱(&&) 연산자 표현식의 평가 결과는 불리언 값이 아닐 수도 있다.

+ ##### _논리합(||) 또는 논리곱(&&) 연산자 표현식은 언제나 2개의 피연산자 중 어느 한쪽으로 평가된다._
+ ##### _논리곱(&&) 연산자는 두 개의 피연산자가 모두 true로 평가될 때 true를 반환한다. 논리곱 연산자는 좌항에서 우항으로 평가가 진행된다._

``` javascript
'Cat' && 'Dog' // -> "Dog"
```

'Cat'은 Truthy 값이므로 true로 평가된다.

### 논리합(||) 단축평가
두 개의 피연산자 중 하나만 true로 평가되어도 true를 반환한다. 
``` javascript
'Cat' || 'Dog' // -> "Cat"
```



### 논리곱(&&) 단축평가
두 개의 피연산자가 true로 평가되어야 true를 반환한다. (뒤의 피연산자가 반환된다.)
``` javascript
'Cat' && 'Dog' // -> "Dog"
false && 'Dog' // -> fa> lse
```

- ### 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때
_null 이나 undefined인 객채를 참조할 경우 타입 에러가 발생한다._

```javascript
var elem = null;
var value = elem.value; // TypeError : Cannot read property 'value' of null
```

```javascript
var elem = null;
// elem이 null이나 undefined와 같은 Falsy 값이면 elem으로 평가되고
// elem이 Truthy 값이면 elem.value로 평가된다.
var value = elem && elem.value; // -> null
```

- ### 함수 매개변수에 기본값을 설정할 때
함수를 호출할 때 인수를 전달하지 않으면 매개변수에는 undefined가 할당된다.

_이때, 단축 평가를 사용해 매개변수의 기본값을 설정하면 된다._

```javascript
function getStringLength(str){
  str = str || '';
  return str.length;
}

getStringLength(); // -> 0
getStringLength('hi'); // -> 2

// ES6의 매개변수의 기본값 설정
function getStringLength(str = ' '){
  return str.length;
}
getStringLength(); // -> 0
getStringLength('hi'); // -> 2
```

## ES11에서 도입된 **옵셔널 체이닝 연산자(Optional Chaning)** ##
옵셔널 체이닝 연산자 ?.는 좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.

```javascript
var elem = null;

// elem이 null 또는 undefined이면 undefined를 반환하고, 아니면 우항의 프로퍼티를 참조한다.
var value = elem?.value;
console.log(value); // undefined
```
_다만, Falsy값 일 경우에 true로 평가된다. (오로지 null과 undefined만 false)_

## ES11에서 도입된 **null 병합 연산자(nullish coalescing)** ##
변수애 기본값을 설정할 때 유용하다.
```javascript
// 좌항의 피연산자가 null 또는 undefined이면 우항의 피연산자를 반환하고
// 그렇지 않으면 좌항의 피연산자를 반환한다.
var foo = null ?? 'default String';
console.log(foo); // default String
```