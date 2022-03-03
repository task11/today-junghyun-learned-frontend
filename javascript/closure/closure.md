# 클로저 (Closure) #

MDN에서 클로저의 정의
> 클로저는 함수와 그 함수가 선언된 렉시컬 환경과의 조합이다.

```javascript
const x = 1;

function outerFunc(){
  const x = 10;

  function innerFunc(){
    console.log(x); // 10 : 렉시컬 스코프 관점
  }

  innerFunc();
}

outerFunc();
```

innerFunc 함수의 정의가 outerFunc 내부에서 이뤄졌으므로 렉시컬 스코프 관점에서 innerFunc 함수가 변수 x에 접근할 수 있다.

```javascript
const x = 1;

function outerFunc(){
  const x = 10;
  innerFunc();
}

function innerFunc(){
  console.log(x); // 1 : 렉시컬 스코프 관점
}

outerFunc();
```

#

## 렉시컬 스코프 ##

스코프의 실체 : 실행 컨텍스트의 렉시컬 환경

스코프 체인 : 외부 렉시컬 환경에 대한 참조를 통한 상위 렉시컬 환경과의 연결

렉시컬 스코프 : 렉시컬 환경의 상위 스코프에 대한 참조는 함수 정의가 평가되는 시점에 함수가 정의된 위치에 의해 결정된다.

#

## 클로저와 렉시컬 환경 ##

```javascript
const x = 1;

// 1번
function outer(){
  const x = 10;
  const inner = function (){
    console.log(x); // 2번
  };
  return inner;
}

const innerFunc = outer(); // 3번
innerFunc(); // 4번 : 10
```

1. outer 함수를 호출(3번) 하면 outer 함수는 중첩함수 inner를 반환하고 함수 생명 주기를 마감한다. : 실행 컨텍스트 스택에서 제거된다.
2. outer 함수의 지역변수 x 또한 생명 주기를 마감한다.

그러나 위 예제 4번의 결과는 지역변수 x의 값인 10이다.

> 외부 함수보다 중첩 함수가 더 오래 유지되는 경우 중첩 함수는 이미 생명 주기가 종료한 외부 함수의 변수를 참조할 수 있다. 이런 중첩 함수를 **클로저**라고 부른다.

#

## 클로저의 활용 ##

클로저는 상태(state)를 안전하게 변경하고 유지하기 위해 사용한다. 

>상태를 은닉(information hiding)하고 특정 함수에게만 상태 변경을 허용한다.

**호출된 횟수가 은닉돼야하는 예제 :**
```javascript
// 카운터
let count = 0;

const increase = function () {
  // 카운트++
  return ++num;
};

console.log(increase()); // 1
console.lgo(increase()); // 2
console.log(increase()); // 3
```

1. 위 코드는 count 변수의 값이 increase 함수가 호출되기 전까지 변경되지 않는다는 보장이 없다.
2. count 변수는 increase 함수만이 변경할 수 있게 만들어야한다.

**호출된 횟수가 은닉돼야하는 예제 :**
```javascript
const increase = function () {
  let count = 0;

  return ++num;
}

console.log(increase()); // 1
console.lgo(increase()); // 1
console.log(increase()); // 1
```

1. 위 코드는 count 변수를 increase 함수의 지역 변수로 만들어 상태 변경을 방지했지만, 이전 상태를 유지하지 못한다.
2. 이전 상태를 유지할 수 있도록 클로저를 사용해야한다.

```javascript
const increase = (function (){
  let count = 0;

  return function(){
    return ++num;
  };
}());

console.log(increase()); // 1
console.lgo(increase()); // 2
console.log(increase()); // 3
```

1. 즉시 실행 함수가 호출되고 increase 변수에 할당된다.
2. increase 변수에 할당된 함수는 자신이 정의된 위치에 의해 결정된 상위 스코프인 즉시 실행 함수의 렉시컬 환경을 기억하는 클로저다.
3. 즉시 실행 함수로 선언했기 때문에 한 번만 실행되므로 count 변수의 초기화는 다시 이루어지지 않는다.

```javascript
const counter = (function (){
  let count = 0;

  return {
    increase(){
      return ++num;
    },
    decrease(){
      return num > 0 ? --num: 0;
    }
  };
}());
console.log(counter.increase()); // 1
console.log(counter.increase()); // 2
console.log(counter.decrease()); // 1
console.log(counter.decrease()); // 0
```

생성자 함수로의 표현
```javascript
const Counter = (function(){
  let count = 0;

  function Counter(){

  }

  Counter.prototype.increase = function() {
    return ++num;
  };

  Counter.prototype.decrease = function(){
    return num > 0 ? -num : 0;
  }

  return Counter;
}());

const counter = new Counter();

console.log(counter.increase()); // 1
console.log(counter.increase()); // 2
console.log(counter.decrease()); // 1
console.log(counter.decrease()); // 0
```

외부 상태 변경이나 가변 데이터를 피하고 불변성을 지향하는 함수형 프로그래밍에서 클로저가 자주 사용된다.

함수형 프로그래밍에서 클로저 활용법

```javascript
const counter = (function () {
  let count = 0;

  return function (aux) {
    count = aux(count);
    return count;
  };
}());

function increase(n) {
  return ++n;
}

function decrease(n) {
  return --n;
}

console.log(counter(increase));
console.log(counter(increase));
console.log(counter(decrease));
console.log(counter(decrease));
```

