# Shallow Copy & Deep Copy( 얕은 복사와 깊은 복사 ) #

객체를 프로퍼티 값으로 갖는 객체의 경우(객체 안의 객체) 얕은 복사는 한 단계 까지만 복사하는 것을 말하고 깊은 복사는 객체에 중첩되어 있는 객체까지 모두 복사하는 것을 말한다.

**Example Code ( 객체를 프로퍼티로 갖는 객체의 복사 ) :**

``` javascript

const obj = { x: { y: 1} };

// Shallow Copy( 얕은 복사 ) -> 1 Depth 까지만 복사
const copy1 = { ...obj}; // Spread 문법
console.log(copy1 === obj) // false
console.log(copy1.x === obj.x) // true -> 같은 값을 참조

// Deep Copy ( use lodash ) -> All Depth 복사
const _ = require('lodash');
const copy2 = _.cloneDeep(obj);

console.log(copy1 === obj) // false
console.log(copy1.x === obj.x) // false

```

#

**Example Code ( 변수 할당의 복사 ) :**

``` javascript
const value = 1;

// Deep Copy : 깊은 복사 라고도 불림
const copy1 = value;
console.log(copy1 === value); // true

const obj = { x: 1 };

// Shallow Copy : 얕은 복사 라고도 불림
const copy2 = obj;
console.log(copy2 === obj) // true
```





