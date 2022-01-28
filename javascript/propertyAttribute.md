# 프로퍼티 어트리뷰트 (Property Attribute) #

목적 : 객체의 프로퍼티가 어떻게 동작해야하는지 명확히 설계하기 위해서

## 내부 슬롯과 메서드 ##

+ 내부 슬롯 (internal slot) : 의사 프로퍼티 (pseudo property)
+ 내부 메서드 (internal method) : 의사 메서드 (pseudo method)

_**ECMAScript 사양에 정의된 대로 구현하여 JS엔진에서 동작하지만 개발자가 직접 접근할 수 없다. (일부 간접 접근 가능)**_

_모든 객체는 [[Prototype]]이라는 내부 슬롯을 갖는데, 간접 접근이 가능한 내부 슬롯이다._

**Example Code (내부 슬롯 간접 접근)**
```javascript
const a = {};

a.[[Prototype]]; // 직접 접근 불가능

// 간접 접근
a.__proto__; // Object.prototype
```

#

## 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체 ##

자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.

프로퍼티의 상태 :
  + 값(value)
  + 값 갱신 여부(writable)
  + 열거 가능 여부(enumerable)
  + 재 정의 가능 여부(configurable)

프로퍼티 어트리뷰트 : 자바스크립트 엔진이 관리하는 내부 상태 값 (meta-property)
  + [[Value]]
  + [[Writable]]
  + [[Enumerable]]
  + [[Configurable]]

내부 슬롯의 직접 접근은 불가능하지만, **Object.getOwnPropertyDescriptor** 위 프로퍼티의 상태를 간접적으로 확인할 수 있다.

**Example Code (Object.getOwnPropertyDescriptor) :**
```javascript
const person = {
  name: 'Kim'
};

// 프로퍼티 디스크럽터 : 프로퍼티 어트리뷰트 정보를 제공
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// {value: 'Kim', writable: true, enumerable: true, configurable: true}
```

_**프로퍼티가 생성될 때 [[Value]] 값은 프로퍼티 값으로 초기화, 나머지는 true로 초기화 된다.(동적 추가도 마찬가지)**_

#

## 접근자 프로퍼티 (Accessor Property) ##

접근자 프로퍼티는 자체적으로 값을 가지지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 **접근자 함수**로 구성된 프로퍼티다.

접근자 프로퍼티의 어트리뷰트 :
  + [[Get]] : getter 함수
  + [[Set]] : setter 함수
  + [[Enumerable]] : 데이터 프로퍼티와 같다.
  + [[Configuration]] : 데이터 프로퍼티와 같다.

**Example Code (접근자 프로퍼티) :**
```javascript
const person = {
  name: 'Kim Jeong Hyeon',
  age: '28',

  // personInfo는 접근자 함수로 구성된 접근자 프로퍼티
  // getter 함수
  get personInfo() {
    return `이름은 ${this.name} 이고 나이는${this.age}세 입니다.`;
  },

  // setter 함수
  set personInfo(info) {
    // 배열 디스트럭처링 할당
    [this.name, this.age] = info.split(' ')
  }
};

// 데이터 프로퍼티를 이용한 프로퍼티 값 참조 
console.log(person.name + ' ' + person.age);

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
person.personInfo = 'byj 28';
console.log(person);

// 접근자 프로퍼티를 통한 프로퍼티 값 참조
console.log(person.personInfo);
```

내부 슬롯/메서드 관점에서 접근자 프로퍼티에 접근하는 동작 원리

**Example [[Get]] 내부 메서드 호출 :**
1) 프로퍼티의 키가 유효한지 확인 > 프로퍼티의 키는 문자열 or 심볼이어야 함 > 프로퍼티 키 personInfo는 문자열이므로 유효한 프로퍼티 키 이다.
2) 프로토타입 체인에서 프로퍼티를 검색 > person 객체에 personInfo 프로퍼티가 존재.
3) 검색된 personInfo 프로퍼티가 데이터 프로퍼티인지 접근자 프로퍼티인지 확인 > personInfo는 접근자 프로퍼티이다.
4) 접근자 프로퍼티 personInfo의 getter 함수를 호출하여 결과를 반환 > 프로퍼티 personInfo의 프로퍼티 어트리뷰트 [[Get]] 값은 Object.getOwnPropertyDescriptor 메서드가 반환하는 프로퍼티 디스크립터 객체의 get 프로퍼티 값과 같다.

**Example Code (접근자 프로퍼티와 데이터 프로퍼티 구별방법) :**
```javascript
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__')); // 접근자 프로퍼티

console.log(Object.getOwnPropertyDescriptor(function () { }, 'prototype')); // 데이터 프로퍼티
```

_**위 프로퍼티의 디스트립터 객체가 다르다는 것을 확인 가능**_

#

## 프로퍼티 정의 (Property Definition) ##

객체의 프로퍼티가 어떻게 동작해야하는지 명확히 정의하는 것(writable... enumerable... configurable...)

**Object.defineProperty(Object, key)** 메서드를 사용하면 프로퍼티의 어트리뷰트를 정의할 수 있다.

**Example Code (Property Definition) :**
```javascript
const person = {};

// 데이터 프로퍼티 정의
Object.defineProperty(person, 'name', {
  value: 'kjh',
  writable: true,
  enumerable: true,
  configurable: true
});

Object.defineProperty(person, 'age', {
  value: '28'
});

let descriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log('name', descriptor);

descriptor = Object.getOwnPropertyDescriptor(person, 'age');
console.log('age', descriptor);

// [[Enumerable]]의 값이 false인 경우
// 해당 프로퍼티는 for...in 문이나 Object.keys 등으로 열거할 수 없다.
console.log(Object.keys(person));

// [[Writable]]의 값이 false인 경우 해당 프로퍼티의 [[Value]] 값을 변경할 수 없다.
// * 에러는 발생하지 않고 무시된다.
person.name = 'byj'; // 수행
person.age = '15';  // 무시

// [[Configuration]]의 값이 false인 경우 해당 프로퍼티를 삭제할 수 없다.
// * 에러는 발생하지 않고 무시된다.
delete person.age;

// [[Configuration]]의 값이 false인 경우 해당 프로퍼티를 재정의할 수 없다.
// Object.defineProperty(person, 'age', { enumerable: true }); //TypeError: Cannot redefine property: age
console.log("=============");
descriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log('name', descriptor);

descriptor = Object.getOwnPropertyDescriptor(person, 'age');
console.log('age', descriptor);

// 접근자 프로퍼티 정의
Object.defineProperty(person, 'personInfo', {

  // getter
  get() {
    return `${this.name} 은 ${this.age} 세`;
  },
  // setter
  set(info) {
    [this.name, this.age] = info.split(' ');
  },
  enumerable: true,
  configurable: true
});

descriptor = Object.getOwnPropertyDescriptor(person, 'personInfo');
console.log('info', descriptor);

person.personInfo = 'abcde 10';
console.log(person);
```

Obejct.defineProperty 메서드로 프로퍼티를 정의할 때 디스크립터 객체를 생략할 경우 초기 값 :
  + value        - [[Value]]        : undefined
  + get          - [[Get]]          : undefined
  + set          - [[Set]]          : undefined
  + writable     - [[Writable]]     : false
  + enumerable   - [[Enumerable]]   : false
  + configurable - [[Configurable]] : false


**Obejct.defineProperties** 메서드를 사용하면 여러 개의 프로퍼티를 한 번에 정의할 수 있다.

**Example Code (Object.defineProperties) :**
```javascript
const person = {};

Object.defineProperties(person, {
  // 데이터 프로퍼티 정의
  name: {
    value: 'kjh',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  age: {
    value: '28',
    writable: true,
    enumerable: true,
    configurable: true,
  },

  // 접근자 프로퍼티 정의
  personInfo: {
    // getter
    get() {
      return `${this.name} 은 ${this.age} 세`;
    },
    // setter
    set(info) {
      [this.name, this.age] = info.split(' ');
    },
    enumerable: true,
    configurable: true
  }
});
console.log(person);
person.personInfo = 'bjy 28'
console.log(person);
```

#

## 객체 변경 방지 ##

객체 변경 방지 메서드를 활용하여 객체의 프로퍼티 값을 갱신하거나 삭제, 프로퍼티 어트리뷰트 자체를 갱신하는 행위를 방지할 수 있다.

**객체 변경 방지 메서드 :**

<img width="531" alt="스크린샷 2022-01-28 오전 11 58 22" src="https://user-images.githubusercontent.com/89209626/151479641-18424526-5d3a-4779-a93d-321a594df01f.png">

### 객체 확장 금지 (Object.preventExtentions) ###

**Obejct.preventExtensions** 메서드는 객체의 확장을 금지한다. **확장이 금지된 객체는 프로퍼티 추가가 금지된다.**

_Object.isExtensible 메서드로 확장 가능한 객체 여부인지 확인 가능._

**Example Code (Object.preventExtensions) :**
```javascript
//객체 변경 방지 
const person = { name: 'Kim' };

console.log(Object.isExtensible(person)); // true : 확장 가능

// person 객체의 확장을 금지(프로퍼티 추가 금지)
Object.preventExtensions(person);

console.log(Object.isExtensible(person)); // false : 확장 금지

// 프로퍼티 추가가 금지됨
person.age = 10; // 무시 (strict mode에서는 에러)
console.log(person); // {name: 'Kim'}

// 프로퍼티 추가 금지 외에 삭제는 가능
delete person.name;
console.log(person);

// 프로퍼티 정의에 의한 추가도 금지
Object.defineProperty(person, 'age', { value: 20 }); //TypeError: Cannot define property age, object is not extensible
```

#

### 객체 밀봉 (Object.seal) ###

객체 밀봉 메서드를 활용하여 프로퍼티 추가 및 삭제와 프로퍼티 어트리뷰트 재정의를 금지할 수 있다. **밀봉된 객체는 읽기와 쓰기만 가능하다.**

_Object.isSealed 메서드로 객체 밀봉 여부를 확인할 수 있다._

**Example Code (Object.seal) :**
```javascript
// 객체 밀봉 

const person = { name: 'Kim' };

console.log(Object.isSealed(person)); // false : 밀봉된 객체가 아님

// person 객체를 밀봉(seal)하여 프로퍼티 추가 삭제, 재정의 금지
Object.seal(person);

console.log(Object.isSealed(person)); // true : 밀봉된 객체

// 밀봉된 객체는 configurable이 false가 된다.
console.log(Object.getOwnPropertyDescriptors(person));

// 프로퍼티 추가가 금지됨
person.age = 10; // 무시 (strict mode에서는 에러)
console.log(person); // {name: 'Kim'}

// 프로퍼티 삭제 금지됨
delete person.name; // 무시 (strict mode에서는 에러)
console.log(person); // {name: 'Kim'}

// 프로퍼티 값 갱신은 가능
person.name = 'bjy';
console.log(person); // { name: 'bjy' }

// 프로퍼티 어트리뷰트 재정의가 금지된다.
Object.defineProperty(person, 'name', { configurable: true });
// TypeError: Cannot redefine property: name
```

#

### 객체 동결 (Object.freeze) ###

프로퍼티 추가 및 삭제와 프로퍼티 어트리뷰트 재정의 금지, 프로퍼티 값 생성 금지한다. **동결된 객체는 읽기만 가능하다.**

_Object.isFrozen 메서드로 객체 밀봉 여부를 확인할 수 있다._

**Example Code (Object.freeze) :**
```javascript
// 객체 동결

const person = { name: 'Kim' };

console.log(Object.isFrozen(person)); // false : 동결(freeze)된 객체가 아님.

// 객체 동결
Object.freeze(person);

console.log(Object.isFrozen(person)); // true : 동결

// 동결된 객체는 writable과 configurable이 false
console.log(Object.getOwnPropertyDescriptors(person));

// 프로퍼티 추가가 금지됨
person.age = 10; // 무시 (strict mode에서는 에러)
console.log(person); // {name: 'Kim'}

// 프로퍼티 삭제 금지됨
delete person.name; // 무시 (strict mode에서는 에러)
console.log(person); // {name: 'Kim'}

// 프로퍼티 값 갱신 금지됨
person.name = 'bjy'; // 무시 (strict mode에서는 에러)
console.log(person); // { name: 'kim' }

// 프로퍼티 어트리뷰트 재정의가 금지된다.
Object.defineProperty(person, 'name', { configurable: true });
// TypeError: Cannot redefine property: name

불변 객체 : 중첩 객체까지 동결

const person = {
  name: 'Kim',
  address: { city: 'Seoul' }
};

// 얕은 객체 동결
Object.freeze(person);

// 직속 프로퍼티만 동결한다.
console.log(Object.isFrozen(person)); // true

// 중첩 객체까지 동결 불가.
console.log(Object.isFrozen(person.address)); // false

person.address.city = 'Yeosu';
console.log(person);
```

#

### 불변 객체 ###

객체 변경 방지 메서드들은 얕은 변경 방지(Shallow Only)로 직속 프로퍼티만 변경이 방지된다.

_중첩된 객체까지 동결하지 못한다._

객체의 중첩 객체까지 동결하여 변경이 불가능한 읽기 전용의 불변 객체를 구현하려면, 객체를 값을 갖는 모든 프로퍼티에 대해 **재귀적으로** Object.freeze 메서드를 호출해야한다.

**Example Code (불변 객체 구현) :**
```javascript
// 불변 객체 구현

function deepFreeze(target) {
  // 객체가 아니거나 이미 동결된 객체는 무시
  if (target && typeof target === 'object' && !Object.isFrozen(target)) {
    Object.freeze(target);
    Object.keys(target).forEach(key => deepFreeze(target[key]));
    /*
      모든 프로퍼티를 순회하며 재귀적으로 동결시킴
    */
  }
  return target;
}

const person = {
  name: 'Kim',
  address: { city: 'Seoul' }
};

// 호출
deepFreeze(person);

// 직속 프로퍼티 동결
console.log(Object.isFrozen(person)); // true

// 중첩 객체까지 동결
console.log(Object.isFrozen(person.address)); // true

person.address.city = 'Yeosu'; // 동결로 변경 불가능
console.log(person);
```