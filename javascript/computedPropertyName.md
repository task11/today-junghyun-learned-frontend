# Computed Porperty Name( 계산된 프로퍼티 이름 ) #

문자열로 타입을 반환할 수 있는 값으로 평가되는 표현식을 사용해 프로퍼티 키를 동적으로 생성한다.

1) ES5 : 객체 리터럴 **외부** 에서 대괄호 표기법을 사용해야한다.
2) ES6 : 객체 리터럴 **내부** 에서도 프로퍼티 이름으로 동적 생성이 가능하다.

**Example Code ( ES5 문법 ) :**

``` javascript
var test = 'props';
var i = 0;

var obj = {};

// 프로퍼티 키 동적 생성
obj[test + '-' + ++i] = i;
obj[test + '-' + ++i] = i;
obj[test + '-' + ++i] = i;

console.log(obj); // {props-1: 1, props-2: 2, props-3: 3}
```

#

**Example Code ( ES6 문법 ) :**

``` javascript
var test = 'props';
var i = 0;

// 객체 리터럴 내부에서 프로퍼티 키 동적 생성
var obj = {
  [`${test}-${++i}`] : i,
  [`${test}-${++i}`] : i,
  [`${test}-${++i}`] : i
};

console.log(obj); // {props-1: 1, props-2: 2, props-3: 3}
```

