# 연산자 (Operator) #

## 비교 연산자 (Comparison Operator) ##
+ 동등 비교 연산자(==) : 값이 같음
+ 일치 비교 연산자(===) : 값과 타입이 같음

**NaN은 자신과 일치하지 않는 유일한 값이다. :**

``` javascript

//NaN은 자신과 일치하지 않는다.
NaN === NaN; // -> false
```


**자바스크립트에서의 숫자 0은 -0과 +0이 있는데 이들을 비교하면 true를 반환한다. :**
``` javascript

//양의 0과 음의 0의 비교. 일치 비교/동등 비교 모두 결과는 true이다.
0 === -0;     // -> true
0 == -0;      // -> true
```

**Object.is 메서드(ES6) : 예측 가능한 정확한 비교 결과를 반환한다. :**
``` javascript
-0 === +0;          // -> true
Object.is(-0, +0);  // -> false

NaN === NaN;        // -> false
Object.is(NaN, NaN) // -> true
```

#

## 삼항 조건 연산자 (Ternary Operator) ##

삼항 조건 연산자는 값처럼 사용할 수 있지만 if..else문은 값처럼 사용할 수 없다.

##### _(삼항 연산자는 표현식인 문이다.)_

<img width="388" alt="스크린샷 2022-01-19 오후 10 45 22" src="https://user-images.githubusercontent.com/89209626/150142869-f66ac61d-18f8-41fb-a4ab-b0cc67996723.png">


**Example Code :**
``` javascript
var x = 10;

var result = x % 2 ? '홀수' : '짝수';
console.log(result); // 짝수
```

#

## 지수 연산자 (Exponent Operator) ##

좌항의 피연산자를 밑(base)으로, 우항의 피연산자를 지수(exponent)로 거듭 제곱하여 숫자 값을 반환한다.

**Use Exponent Operator Example Code :**
``` javascript
2 ** 2;   // -> 4
2 ** 2.5; // -> 5.656...
2 ** 0;   // -> 1
2 ** -2;  // -> 0.25
```

지수 연산자가 도입되기 이전에는 Math.pow 메서드를 사용했다.

**Use Math.pow Method Example Code :**
``` javascript
Math.pow(2, 2);   // -> 4
Math.pow(2, 2.5); // -> 5.656...
Math.pow(2, 0); // -> 1
Math.pow(2, -2); // -> 0.25
```