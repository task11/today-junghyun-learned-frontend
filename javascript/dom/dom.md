# DOM (Document Object Model)

## 정의
> HTML 문서의 계층적 구조와 정보를 표현하며 이를 제어할 수 있는 API, 즉 프로퍼티와 메서드를 제공하는 트리 자료구조이다.

## 노드(Node)

### HTML 요소와 노드 객체
> HTML 요소는 렌더링 엔진에 의해 파싱되어 DOM을 구성하는 요소 노드 객체로 변환된다.

중첩 관계에 의해 계층적인 부-자 관계가 형성되고, 이를 트리 자료구조로 구성한다. `노드 객체로 구성된 트리 자료구조를 DOM이라고 한다`

## 노드 객체의 타입

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <ul>
      <li id="apple">Apple</li>
      <li id="banana">Banana</li>
      <li id="orange">Orange</li>
    </ul>
    <script src="app.js"></script>
  </body>
</html>
```

렌더링 엔진은 위 HTML 문서를 파싱하여 아래와 같은 DOM을 생성한다.

<img width="874" alt="스크린샷 2022-07-03 오전 11 17 33" src="https://user-images.githubusercontent.com/89209626/177021905-5bb75215-7023-4515-b8fa-9ce1a22c187c.png">

### 노드의 타입
1. 문서 노드 :
  DOM 트리 최상위에 존재하는 루트 노드로써 document 객체를 가리킨다. document 객체는 브라우저가 렌더링한 HTML 문서 전체를 가리키는 객체로 전역 객체 `window.docuement`에 바인딩 되어있다.
2. 요소 노드 : 
  HTML 요소를 가리키는 객체로 문서의 구조를 표현한다.
3. 어트리뷰트 노드 : 
  HTML 요소의 어트리뷰트를 가리키는 객체이다. 요소 노드에만 연결되어있다.
4. 텍스트 노드 : 
  HTML 요소의 텍스트를 가리키는 객체이다. 요소 노드의 자식 노드이며, 자식 노드를 가질 수 없는 리프노드이다. 텍스트 노드는 DOM 트리의 `최종단`이다.

## 노드 객체의 상속 구조
> DOM을 구성하는 노드 객체는 자신의 구조와 정보를 제어할 수 있는 DOM API를 사용할 수 있다.

노드 객체는 ECMAScript 사양에 정의된 표준 빌트인 객체가 아닌 브라우저 환경에서 추가적으로 제공하는 `호스트 객체`이다.

노드 객체는 프로토타입에 의한 상속 구조를 갖는다.

<img width="866" alt="스크린샷 2022-07-03 오전 11 27 13" src="https://user-images.githubusercontent.com/89209626/177022090-4d16ede2-bed4-4285-a659-5897f2ee1e8d.png">

모든 노드 객체는 Obejct, EventTarget, Node 인터페이스를 상속받고, 문서 노드는 Document 인터페이스, 어트리뷰트 노드는 Attr 인터페이스, 텍스트 노드는 CharacterData 인터페이스를 상속 받는다.

## 요소 노드 취득
> HTML의 구조나 내용 또는 스타일 등을 동적으로 조작하려면 먼저 요소 노드를 취득해야 한다.

텍스트 노드나 어트리뷰트 노드도 요소 노드의 자식 노드이기 때문에 이들을 조작할 때 요소 노드의 취득이 필요하다.

### id를 이용한 요소 취득 (getElementById .. )
> id 값는 HTML 문서 내에서 유일한 값이어야한다. 그러나 중복된 id 값을 갖는 HTML 요소가 여러 개 존재하더라도 에러가 발생하지 않으니 주의해야한다.

```HTML
<!DOCTYPE html>
<html>
  <body>
    <ul>
      <li id="apple">Apple</li>
      <li id="banana">Banana</li>
      <li id="orange">Orange</li>
    </ul>
    <script>
      // id 값이 banana인 요소 노드를 탐색하여 반환한다.
      const $elem = document.getElementById('banana');

      // 취득한 요소 노드의 color 프로퍼티 값을 변경한다.
      $elem.style.color = 'red';
    </script>
  </body>
</html>
```

+ getElementById 메서드는 인수로 전달된 id 값을 갖는 `첫 번째 요소 노드`만 반환한다.
요소가 존재하지 않을 경우에는 `null`을 반환한다.

+ HTML 요소에 id 어트리뷰트를 부여하면 `id 값과 동일한 이름의 전역 변수가 암묵적으로 선언`되고, 해당 노드 객체가 할당되는 부수 효과가 있다. (id 값과 동일한 이름의 전역변수가 이미 선언되어 있으면 할당되지 않는다.)

```HTML
<!DOCTYPE html>
<html>
  <body>
    <div id="foo"></div>
    <script>
      console.log(foo == document.getElementById("foo")); // true
    </script>
  </body>
</html>
```

### 태그 이름을 이용한 요소 노드 취득 (getElementsByTagName)
> 인수로 전달한 태그 이름을 갖는 모든 요소 노드들을 탐색하여 반환한다. getElementsByTagName 메서드는 여러 개의 요소 노드 객체를 갖는 DOM 컬렉션 객체인 HTMLCollection 객체를 반환한다.

(HTMLCollection 객체는 유사 배열 객체이면서 이터러블이다.)

```HTML
<!DOCTYPE html>
<html>
  <body>
    <ul>
      <li id="apple">Apple</li>
      <li id="banana">Banana</li>
      <li id="orange">Orange</li>
    </ul>
    <script>
      // 탐색된 요소 노드들은 HTMLCollection 객체에 담겨 반환된다.
      const $elem = document.getElementsByTagName('li');

      // 모든 li 요소 노드의 color 프로퍼티 값을 변경한다.
      [...$elems].forEach(elem => {elem.style.color = 'red';});
    </script>
  </body>
</html>
```

### Class를 이용한 요소 노드 취득 (getElementsByClassName)
> 인수로 전달한 클래스 이름을 갖는 모든 요소 노드들을 탐색하여 반환한다. getElementsByClassName 메서드 또한 여러 개의 요소 노드 객체를 갖는 DOM 컬렉션 객체인 HTMLCollection 객체를 반환한다.

```HTML
<!DOCTYPE html>
<html>
  <body>
    <ul>
      <li class="fruit apple">Apple</li>
      <li class="fruit banana">Banana</li>
      <li class="fruit orange">Orange</li>
    </ul>
    <script>
      // 탐색된 요소 노드들은 HTMLCollection 객체에 담겨 반환된다.
      const $elem = document.getElementsByClassName('fruit');

      // 모든 요소 노드의 color 프로퍼티 값을 변경한다.
      [...$elems].forEach(elem => {elem.style.color = 'red';});
    </script>
  </body>
</html>
```

### CSS 선택자를 이용한 요소 노드 취득 (querySelector)
> 인수로 전달한 CSS 선택자를 만족시키는 하나의 요소 노드를 탐색하여 반환한다. querySelectorAll 메서드는 여러 개의 요소 노드 객체를 갖는 NodeList 객체를 반환한다.
(NodeList 객체는 유사 배열 객체이면서 이터러블이다.)

+ 인수로 전달한 CSS 선택자를 만족시키는 요소 노드가 여러 개인 경우 첫 번째 요소 노드만 반환한다. (querySelectorAll을 사용하면 된다.)
+ 인수로 전달한 CSS 선택자를 만족시키는 요소 노드가 존재하지 않는 경우 null을 반환한다.
+ 인수로 전달한 CSS 선택자가 문법에 맞지 않는 경우 DOMException 에러가 발생한다.

```HTML
<!DOCTYPE html>
<html>
  <body>
    <ul>
      <li class="fruit apple">Apple</li>
      <li class="fruit banana">Banana</li>
      <li class="fruit orange">Orange</li>
    </ul>
    <script>
      const $elem = document.querySelector('.banana');

      // 요소 노드의 color 프로퍼티 값을 변경한다.
      $elem.style.color = 'red';
    </script>
  </body>
</html>
```

### 특정 요소 노드를 취득할 수 있는지 확인
> Element.prototype.matches 메서드는 인수로 전달한 CSS 선택자를 통해 특정 요소 노드를 취득할 수 있는지 확인한다.

```HTML
<!DOCTYPE html>
<html>
  <body>
    <ul class="fruits">
      <li class="apple">Apple</li>
      <li class="banana">Banana</li>
      <li class="orange">Orange</li>
    </ul>
    <script>
      const $apple = document.querySelector('.apple');
      console.log($apple.matches('#fruits > li.apple')); // true
    </script>
  </body>
</html>
```

### HTMLCollection & NodeList
> 두 DOM 컬렉션 객체는 모두 DOM API가 여러 개의 결과값을 반환하기 위한 DOM 컬렉션 객체이다.

두 객체의 차이점은 '노드 객체의 상태 변화를 실시간으로 반영하는지' 이다.
  

#### **HTMLCollection**
> 노드 객체의 상태 변화를 실시간으로 반영하는 `살아 있는` (live) DOM 컬렉션 객체다.


```HTML
<!DOCTYPE html>
<head>
  <style>
    .red{color:red;}
    .blue{color:blue;}
</style>
</head>
<html>
  <body>
    <ul class="fruits">
      <li class="red">Apple</li>
      <li class="red">Banana</li>
      <li class="red">Orange</li>
    </ul>
    <script>
      const $elems = document.getElementsByClassName('red');
      
      // 이 시점에 HTMLCollection 객체에는 3개의 요소 노드가 담겨 있다.
      console.log($elems); // HTMLCollection(3) [li.red, li.red, li.red]

      for(let i=0; i < $elemes.length; i++){
        $elems[i].className = 'blue';
      }

      // 이 시점에 HTMLCollection 객체에는 1개의 요소 노드가 담겨 있다.
      console.log($elems); // HTMLCollection(1) [li.red]
    </script>
  </body>
</html>
```

위 예제를 실행해 보면 의도와 다르게 ```<li class="red">Banana</li>``` 요소의 색상이 그대로 `red`인 것을 확인할 수 있다.

또한 for 루프 순회 후 `$elems` 변수를 확인해 보면 HTMLCollection 객체의 값이 변경되어 있는 것을 확인할 수 있다.

> HTMLCollection 객체는 실시간으로 노드 객체의 상태를 반영하기 떄문에 요소를 변경하는 위 예제의 for 루프 순회가 제대로 동작하지 않는다.(length가 줄어들기 때문에)

HTMLCollection 객체를 사용하지 않는 것이 간단한 해결책이다.

#### **NodeList**
> 노드 객체의 상태 변화를 실시간으로 반영하지 않는 (non-live) DOM 컬렉션 객체다.

(하지만 childNodes 프로퍼티가 반환하는 NodeList live 컬렉션 객체로 동작하므로 주의가 필요하다.)

```javascript
const $elems = document.querySelectorAll('.red');

// NodeList 객체는 forEach를 상속받아 사용할 수 있다.
$elems.forEach(elem => elem.className = 'blue');
```

노드 객체의 상태 변경과 상관없이 안전하게 DOM 컬렉션 객체를 사용하려면 HTMLCollection객체나 NodeList 객체를 배열로 변환하여 사용하는 것이 좋다.

## 노드 탐색
> 취득한 요소로 DOM 트리를 옮겨 다니며 부모,형제,자식 노드들을 탐색 할 수 있다. 이때, 노드 탐색 프로퍼티는 setter없이 getter만 존재하는 읽기 전용 접근자 프로퍼티이다.

<img width="448" alt="스크린샷 2022-07-03 오후 12 45 15" src="https://user-images.githubusercontent.com/89209626/177023677-7073e4b6-71b1-4fcf-bb3f-3f5b7d0b138f.png">


####  공백 텍스트 노드
> HTML 요소 사이의 스페이스, 탭, 줄바꿈 등의 공백 문자는 텍스트 노드를 생성하므로 노드를 탐색할 때 주의해야한다.

### 자식 노드 탐색
> 자식 노드 탐색 프로퍼티

<img width="864" alt="스크린샷 2022-07-03 오후 12 57 07" src="https://user-images.githubusercontent.com/89209626/177023990-a2ba48a9-da66-48ca-9ee8-04df17b79edf.png">

<img width="863" alt="스크린샷 2022-07-03 오후 12 57 40" src="https://user-images.githubusercontent.com/89209626/177023997-45c9cb13-79f7-41b8-bcc8-da72faf47469.png">

```HTML
<!DOCTYPE html>
<html>
  <body>
    <ul id="fruits">
      <li class="apple">Apple</li>
      <li class="banana">Banana</li>
      <li class="orange">Orange</li>
    </ul>
    <script>
      const $fruits = document.getElementById('fruits');


      console.log($fruits.childNodes) // NodeList(7) [text, li.apple, text, ...]

      console.log($fruits.children) // HTMLCollection(3) [li.apple, li.banana, li.orange]

      console.log($fruits.firstChild) // #text

      console.log($fruits.lastChild) // #text

      console.log($fruits.firstElementChild) // li.apple

      console.log($fruits.lastElementChild) // li.orange

    </script>
  </body>
</html>
```

### 자식 노드 존재 확인
> 자식 노드가 존재하는지 확인하려면 hasChildNodes 메서드를 사용한다.

```HTML
<!DOCTYPE html>
<html>
  <body>
    <ul id="fruits">
    </ul>
    <script>
      const $fruits = document.getElementById('fruits');

      // 텍스트 노드를 포함하고 있어 true가 나온다.
      console.log($fruits.hasChildNodes()) // true
    </script>
  </body>
</html>
```

텍스트 노드가 아닌 요소 노드가 존재하는지 확인하려면 `hasChildNodes` 메서드 대신 `children.length` 또는 `childElementCount` 프로퍼티를 사용한다.

```HTML
<!DOCTYPE html>
<html>
  <body>
    <ul id="fruits">
    </ul>
    <script>
      const $fruits = document.getElementById('fruits');

      console.log(!!$fruits.children.length) // 0 -> false
      console.log(!!$fruits.childElementCount) // 0 -> false
    </script>
  </body>
</html>
```

### 부모 노드 탐색
> 부모 노드를 탐색하려면 parentNode 프로퍼티를 사용한다. 텍스트 노드는 리프 노드이므로 부모 노드가 텍스트 노드인 경우는 없다.

```HTML
<!DOCTYPE html>
<html>
  <body>
    <ul id="fruits">
      <li class="apple">Apple</li>
      <li class="banana">Banana</li>
      <li class="orange">Orange</li>
    </ul>
    <script>
      const $banana = document.querySelector('.banana');

      console.log($banana.parentNode); // ul#fruits
    </script>
  </body>
</html>
```

### 형제 노드 탐색
> 어트리뷰트 노드는 반환될 수 없다. 텍스트 노드 또는 요소 노드만 반환한다.

<img width="864" alt="스크린샷 2022-07-03 오후 1 07 25" src="https://user-images.githubusercontent.com/89209626/177024157-f5b3be98-c436-465a-a995-e422eb98cf0f.png">

<img width="862" alt="스크린샷 2022-07-03 오후 1 07 41" src="https://user-images.githubusercontent.com/89209626/177024165-9dd77bbd-3c0b-4b35-971d-b4a591bb84b5.png">


```HTML
<!DOCTYPE html>
<html>
  <body>
    <ul id="fruits">
      <li class="apple">Apple</li>
      <li class="banana">Banana</li>
      <li class="orange">Orange</li>
    </ul>
    <script>
      const $fruits = document.querySelector('#fruits');

      const {firstChild} = $fruits;
      console.log(firstChild); // #text

      const {nextSibling} = firstChild;
      console.log(nextSibling); // li.apple

      const {previousSibling} = nextSibling;
      console.log(previousSibling); // #text
    </script>
  </body>
</html>
```

## 노드 정보 취득
> 노드 객체에 대한 정보를 취득하려면 아래 프로퍼티를 사용한다.

<img width="869" alt="스크린샷 2022-07-03 오후 1 11 42" src="https://user-images.githubusercontent.com/89209626/177024229-c0d5a01c-cc2a-466c-a33d-67f43d5c9a88.png">

```HTML
<!DOCTYPE html>
<html>
  <body>
    <div id="foo">
      Hello
    </div>
    <script>
      console.log(document.nodeType) // 9
      console.log(document.nodeType) // #document

      const $foo = document.getElementById("foo");
      console.log($foo.nodeType) // 1
      console.log($foo.nodeType) // DIV
    </script>
  </body>
</html>
```

## 요소 노드의 텍스트 조작

### nodeValue
> nodeValue 프로퍼티는 노드 객체의 값을 반환한다. 노드 객체의 값이란 텍스트 노드의 텍스트이다. 따라서 텍스트 노드가 아닌 노드를 참조하면 null을 반환한다.

```HTML
<!DOCTYPE html>
<html>
  <body>
    <div id="foo">
      Hello
    </div>
    <script>
      const $textNode = document.getElementById("foo").firstChild;

      $textNode.nodeValue = 'World';

      console.log($textNode.nodeValue) // World
    </script>
  </body>
</html>
```

### textContent
> 요소 노드의 텍스트와 모든 자손 노드의 텍스트를 모두 취득하거나 변경한다. 이때 HTML 마크업은 무시된다.

```HTML
<!DOCTYPE html>
<html>
  <body>
    <div id="foo">
      Hello
      <span>world!</span>
    </div>
    <script>
      console.log(document.getElementById("foo").textContent); // Hello world!
    </script>
  </body>
</html>
```

<img width="588" alt="스크린샷 2022-07-03 오후 1 20 14" src="https://user-images.githubusercontent.com/89209626/177024413-41279e6c-00cd-4ba0-99b4-cf2fdf7a4536.png">

> textContent 프로퍼티에 문자열을 할당하면 요소 노드의 모든 자식 노드가 제거되고 할당한 문자열이 텍스트로 추가된다. 이떄 HTML 마크업이 파싱되지 않는다.

textContent 프로퍼티와 유사한 동작을 하는 innerText 프로퍼티가 있다. innerText 프로퍼티는 다음과 같은 이유로 사용하지 않는 것이 좋다.

+ innerText 프로퍼티는 CSS에 순종적이다. CSS에 의해 비표시(visibility: hidden;)로 지정된 요소 노드의 텍스트를 반환하지 않는다.
+ innerText 프로퍼티는 CSS를 고려해야하므로 textConent 프로퍼티보다 느리다.

## DOM 조작
> DOM 조작은 새로운 노드를 생성하여 DOM에 추가하거나 기존 노드를 삭제 또는 교체하는 것을 말한다. DOM 조작에 의해 DOM에 새로운 노드가 추가되거나 삭제되면 리플로우와 리페인트가 발생하는 원인이 되므로 성능에 영향을 준다.

### innerHTML
> 요소 노드의 innerHTML 프로퍼티를 참조하면 요소 노드의 콘텐츠 영역(시작 태그와 종료 태그 사이) 내에 포함된 모든 HTML 마크업을 문자열로 반환한다.

```HTML
<!DOCTYPE html>
<html>
  <body>
    <div id="foo">
      Hello
      <span>world!</span>
    </div>
    <script>
      console.log(document.getElementById("foo").innerHTML); // Hello <span>world!</span>
    </script>
  </body>
</html>
```

innerHTML 프로퍼티에 문자열을 할당하면 요소 노드의 모든 자식 노드가 제거되고 할당한 문자열에 포함되어 있는 HTML 마크업이 파싱되어 요소 노드의 자식 노드로 DOM에 반영된다.

```HTML
<!DOCTYPE html>
<html>
  <body>
    <div id="foo">
      Hello
      <span>world!</span>
    </div>
    <script>
      document.getElementById("foo").innerHTML = `Hi <span>there!</span>`
    </script>
  </body>
</html>
```

innerHTML 프로퍼티는 크로스 사이트 스크립팅 공격(XSS)에 취약하므로 위험하다.
(HTML5에서는 innerHTML 프로퍼티로 삽입된 sciprt 요소 내의 자바스크립트 코드를 실행하지 않는다.)

### insertAdjacentHTML
> insertAdjacentHTML 메서드는 기존 요소를 제거하지 않으면서 위치를 지정해 새로운 요소를 삽입한다. 기존 요소에는 영향을 주지 않고 새롭게 삽입될 요소만들 파싱하여 자식 요소로 추가하므로 innerHTML 프로퍼티보다 효율적이다.

### 노드 생성과 추가
> DOM은 노드를 직접 생성/삽입/삭제/치환 하는 메서드도 제공한다.

```HTML
<!DOCTYPE html>
<html>
  <body>
    <div id="fruits">
      <li>Apple</li>
    </div>
    <script>
      const $fruits = document.getElementById('fruits');

      const $li = document.createElement('li');

      const textNode = document.createTextNode('Banana')

      $li.appendChild(textNode);

      $fruits.appendChild($li);
    </script>
  </body>
</html>
```

요소 노드를 생성하여 한번만 추가하면 되기 때문에, 리플로우와 리페인트는 한번만 실행된다.

> 복수의 노드를 추가하는 경우 (부모 노드가 없는 경우) 에는 DocumentFragment (<>)노드를 만들고 그 아래에 복수의 노드를 append한 다음에 DOM에 한번만 추가해주는 방식으로 작업하면 된다.

## 어트리뷰트

### 어트리뷰트 노드와 attributes 프로퍼티
> HTML 요소는 여러 개의 어트리뷰트를 가질 수 있다. 

```html
<input id="user" type="text" value="kjh" />
```

위 input 요소는 3개의 어트리뷰트가 있으므로 3개의 어트리뷰트 노드가 생성된다. 어트리뷰트 노드는 NamedNodeMap 객체에 담겨서 요소 노드의 attributes 프로퍼티에 저장된다.

### HTML 어트리뷰트 조작
> HTML 어트리뷰터 값을 참조하려면 getAttribute(attributeName) 메서드를 사용하고, 값을 변경하려면 setAttribute(attributeName, attributeValue) 메서드를 사용한다.

```HTML
<!DOCTYPE html>
<html>
  <body>
    <input id="user" type="text" value="kjh" />
    <script>
      const $input = document.getElementById('user');

      const inputValue = $input.getAttribute('value');
      console.log(inputValue); // kjh

      $input.setAttribute('value', 'foo');
      console.log($input.getAttribute('value')); // foo
    </script>
  </body>
</html>
```

### HTML 어트리뷰트 vs DOM 프로퍼티
> 요소 노드 객체에는 HTML 어트리뷰트에 대응하는 프로퍼티가 존재한다. 이 DOM 프로퍼티들은 HTML 어트리뷰트 값을 초기값으로 가지고 있다.

```<input id="user" type="text" value="kjh" />```

위 노드 객체로 보면
1. HTMl 어트리뷰트 : Node -> attributes -> NamedNodeMap -> {id, type, value ...} 
2. DOM 프로퍼티 : Node -> {id, type, value ... }

위 두 가지 형태로 어트리뷰트 값들을 가지고있다. 굳이 이 두개를 같이 사용해서 중복관리 하는 것 처럼 보이게 만든 이유는 두 프로퍼티의 역할이 다르기 때문이다.

HTML 어트리뷰트의 역할은 HTML 요소의 초기 상태를 지정하고, 사용자의 입력에 변환하지 않는 초기값을 가지고 있다.

> input 필드에 사용자가 값을 입력하면 value 프로퍼티는 최신 값(live)과 이전 값(초기값)을 모두 관리해야하는데, 이를 위해 위 처럼 어트리뷰트가 관리되는 것이다.

#### **HTML 어트리뷰트와 DOM 프로퍼티의 대응 관계**

+ id 어트리뷰트와 id 프로퍼티는 1:1 대응이며, 동일한 값으로 연동한다.
+ input 요소의 value어트리뷰트는 vlaue 프로퍼티와 1:1 대응이다. 하지만 value 어트리뷰트는 초기상태를, value 프로퍼티는 최신상태를 갖는다.
+ class 어트리뷰트는 className, classList 프로퍼티와 대응이다.
+ for 어트리뷰트는 htmlFor 프로퍼티와 1:1 대응이다.
+ td의 colspan 어트리뷰트는 대응하는 어트리뷰트가 존재하지 않는다.
+ textContnet 프로퍼티는 대응하는 어트리뷰트가 존재하지 않는다.
+ 어트리뷰트 이름은 대소문자를 구별하지 않지만 대응하는 프로퍼티 키는 카멜케이스를 따른다.

### data 어트리뷰트와 dataset 프로퍼티
> data 어트리뷰트와 dataset프로퍼티를 사용하면 HTML 요소에 정의한 사용자 정의 어트리뷰트로 자바스크립트 간에 데이터를 교환할 수 있다.

```HTML
<!DOCTYPE html>
<html>
  <body>
    <ul class='users'>
      <li id="1" data-user-id="7621" data-role="admin">kk</li>
      <li id="2" data-user-id="7621" data-role="common">jj</li>
    </ul>
    <script>
      const users = [...document.querySelecotr('.users').children]

      const user = users.find(user => user.dataset.userId === '7621');

      console.log(user.dataset.role); // admin
    </script>
  </body>
</html>
```

## 스타일

### 인라인 스타일 조작
> style 프로퍼티는 요소 노드의 인라인 스타일을 취득하거나 추가/변경한다.

```HTML
<!DOCTYPE html>
<html>
  <body>
    <div style="color: red">Hello World</div>
    <script>
      const $div = document.querySelector('div');

      console.log($div.style); // CSSStlyeDeclaration ..

      $div.style.color = 'blue';
      //...
    </script>
  </body>
</html>
```

### 클래스 조작
> HTML 요소의 class 어트리뷰트 값을 변경하여 class 를 조작할 수 있다. 이전에 말했듯 class 어트리뷰트에 대응하는 DOM 프로퍼티는 className과 classList이다.

+ className: 요소의 클래스를 공백으로 구분된 문자열로 반환한다.
+ classList: 요소의 클래스를 담아 DOMTotenList 객체로 반환한다.
  + add, remove, contains, toggle 등 메서드를 제공하여 클래스 조작을 쉽게 해준다.