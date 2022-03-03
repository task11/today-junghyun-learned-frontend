# 식별자 네이밍 규칙 (Naming Convention) #

식별자(identifier)는 어떤 값을 구별해서 식별해낼 수 있는 고유한 이름을 말한다.
식별자는 아래와 같은 규칙을 준수해야 한다.

  + 식별자는 특수문자를 제외한 문자,숫자,언더스코어(_),달러 기호($)를 포함할 수 있다.
  + 단, 식별자는 특수문자를 제외한 문자, 언더스코어(_), 달러 기호($)로 시작해야 한다. 숫자로 시작하는 것은 허용하지 않는다.
  + 예약어는 식별자로 사용할 수 없다.

**예약어(Reserved word) :**

![initial](https://user-images.githubusercontent.com/89209626/149662724-5a254e70-ad7a-4316-b38e-b65434e82808.png)


**Example Code :**

```javascript

// 카멜 케이스(camelCase)
var firstName;

// 스네이크 케이스(snake_case)
var first_name;

// 파크칼 케이스(PascalCase)
var FirstName;

// 헝가리언 케이스(typeHungarianCase)
var strFirstName; // type + identifier
var $elem = document.getElementById('myId'); // DOM 노드
var observable$ = fromEvent(document, 'click'); // RxJs 옵저버블

```

#### _자바스크립트에서는 일반적으로 변수나 함수의 이름에는 **카멜 케이스**를 사용하고, 생성자 함수, 클래스 이름에는 **파스칼 케이스**를 사용한다._
##### **(ECMAScript 사양에 정의되어 있는 객체와 함수들도 카멜 케이스와 파스칼 케이스를 사용하고 있다.)**