# Event

## 이벤트 드리븐 프로그래밍
> 브라우저는 처리해야 할 특정 사건이 발생하면 이를 감지하여 이벤트를 발생시킨다. 애플리 케이션이 특정 타입의 이벤트에 대해 반응하여 어떤 일을 하고 싶다면 해당하는 타입의 이벤트가 발생했을 때 호출될 함수를 브라우저에 알려 호출을 위임한다.

> 이때, 이벤트가 발생했을 때 호출될 함수를 이벤트 핸들러라 하고, 이벤트가 발생했을 때 브라우저에게 이벤트 핸들러의 호출을 위임하는 것을 이벤트 핸들러 등록이라고 한다. 이처럼 이벤트와 그에 대응하는 이벤트 핸들러를 통해 사용자와 애플리케이션 인터랙션을 할 수 있다.

이와 같이 프로그램의 흐름을 이벤트 중심으로 제어하는 프로그래밍 방식을 이벤트 드리븐 프로그래밍 이라 한다.

## 이벤트 타입
> 이벤트 타입은 200여 가지가 있다. 아래는 사용 빈도가 높은 이벤트들이다.

### 마우스 이벤트

<img width="863" alt="스크린샷 2022-07-03 오후 2 15 59" src="https://user-images.githubusercontent.com/89209626/177025945-4118325c-5b14-42e5-bbbf-13615b317422.png">
<img width="864" alt="스크린샷 2022-07-03 오후 2 16 20" src="https://user-images.githubusercontent.com/89209626/177025956-9b7c5379-a00d-44a4-9a8f-91260ee02655.png">

### 키보드 이벤트

<img width="862" alt="스크린샷 2022-07-03 오후 2 16 33" src="https://user-images.githubusercontent.com/89209626/177025960-7d1a8816-046a-4225-abef-ed8d76040902.png">

### 포커스 이벤트

> focusin, focusout 이벤트는 addEventListener 방식으로 등록해야 크롬, 사파리에서 정상 동작한다.

<img width="863" alt="스크린샷 2022-07-03 오후 2 17 02" src="https://user-images.githubusercontent.com/89209626/177025975-0636eba9-7631-4fc5-84e9-cefac6b91905.png">

### 폼 이벤트

<img width="865" alt="스크린샷 2022-07-03 오후 2 17 15" src="https://user-images.githubusercontent.com/89209626/177025985-d1491789-7e70-45b1-9f56-ef7d63dd500d.png">

<img width="866" alt="스크린샷 2022-07-03 오후 2 17 46" src="https://user-images.githubusercontent.com/89209626/177025995-f7b797da-42f8-42ad-a7f8-a63350a9cb9f.png">

### 값 변경 이벤트

<img width="867" alt="스크린샷 2022-07-03 오후 2 18 05" src="https://user-images.githubusercontent.com/89209626/177025999-67a52916-599d-4a39-9054-3aec3c2b5e3d.png">

### DOM 뮤테이션 이벤트

<img width="863" alt="스크린샷 2022-07-03 오후 2 18 12" src="https://user-images.githubusercontent.com/89209626/177026001-0321a01d-969f-4aae-b9be-5615a3e67fa7.png">

### 뷰 이벤트

<img width="864" alt="스크린샷 2022-07-03 오후 2 18 22" src="https://user-images.githubusercontent.com/89209626/177026003-1de2bbc5-02f7-4529-bd49-83e1b6e4fc29.png">

### 리소스 이벤트

<img width="863" alt="스크린샷 2022-07-03 오후 2 18 33" src="https://user-images.githubusercontent.com/89209626/177026009-d120043c-dc30-4f05-b31d-c3d904901fbf.png">

## 이벤트 핸들러 등록
> 이벤트가 발생하면 브라우저에 의해 호출될 함수가 이벤트 핸들러이다. 이 호출을 위임하는 것을 이벤트 핸들러 등록이라고하고, 이는 세 가지 방법이 있다.

### 이벤트 핸들러 어트리뷰트 방식
> 이벤트 핸들러 값을 함수 호출문으로 등록한다.

```HTML
<!DOCTYPE html>
<html>
  <body>
    <button onclick="sayHi('Lee)">Click me!</button>
    <script>
      function sayHi(name){
        console.log(`Hi ${name}.`); // Hi Lee.
      }
    </script>
  </body>
</html>
```

CBD(Component Based Devleopment) 방식의 React 등 에서는 이벤트 핸들러 어트리뷰트 방식으로 이벤트를 처리한다.

### 이벤트 핸들러 프로퍼티 방식
> 이벤트 핸들러 어트리뷰트 방식과 유사하다고 볼 수 있다. 그러나 이벤트 핸들러 프로퍼티 에 하나의 이벤트 핸들러만 바인딩할 수 있다는 단점이 있다.

```HTML
<!DOCTYPE html>
<html>
  <body>
    <button>Click me!</button>
    <script>
      const $button = document.querySelector('button');

      $button.onclick = function(){
        console.log('button click');
      }
    </script>
  </body>
</html>
```

### addEventListner 메서드 방식
> 이벤트 네임에 on 접두사를 붙이지 않는다. 그리고 마지막 매개변수에 이벤트 전파 단계(캡처링 or 버블링) 을 지정한다. 

<img width="864" alt="스크린샷 2022-07-03 오후 2 31 48" src="https://user-images.githubusercontent.com/89209626/177026353-8b755fcc-3dd1-4312-ab56-1347afb065d7.png">

```HTML
<!DOCTYPE html>
<html>
  <body>
    <button>Click me!</button>
    <script>
      const $button = document.querySelector('button');

      $button.addEventListener('click', function(){
        console.log('button click');
      })
    </script>
  </body>
</html>
```

## 이벤트 핸들러 제거
> 이벤트 핸들러 프로퍼티 방식으로 등록한 이벤트는 제거할 수 없다.

addEventListner 메서드로 등록한 이벤트 핸들러를 제거하려면 `removeEventListener` 메서드를 사용하면 된다. 이벤트를 등록할 때 전달했던 인수와 일치하지 않으면 제거에 실패한다.

```HTML
<!DOCTYPE html>
<html>
  <body>
    <button>Click me!</button>
    <script>
      const $button = document.querySelector('button');
      
      const hanldeClick = () => {
        console.log('button click');
      }

      $button.addEventListener('click', handleClick);

      $button.removeEventListener('click', handleClick, true); // 실패
      $button.removeEventListener('click', handleClick); // 성공

    </script>
  </body>
</html>
```

## 이벤트 객체
> 이벤트가 발생하면 이벤트에 관련한 정보를 담고 있는 이벤트 객체가 동적으로 생성되고, 이벤트 핸들러의 첫 번째 인수 e 로 전달된다.

(꼭 e, event로 사용할 필요는 없다. 다만, 이벤트 어트리뷰트 방식으로 등록된 이벤트 핸들러는 꼭`event`를 사용해야한다.)

```html
<!DOCTYPE html>
<html>
  <body>
    <button>Click me!</button>
    <script>
      const $button = document.querySelector('button');
      
      const hanldeClick = (e) => {
        console.log(e.target); // <button>Click me!</button>
      }

      $button.addEventListener('click', handleClick);

    </script>
  </body>
</html>
```

### 마우스 정보 취득 
> click, dblclick, mousedown, mouseup, mousemove, mouseenter, mouseleave 이벤트가 발생하면 생성되는 MouseEvent 타입의 이벤트 객체는 다음과 같은 고유의 프로퍼티를 갖는다.

+ 마우스 포인터의 좌표 정보를 나타내는 프로퍼티: screenX/screenY, clientX/clientY, pageX/pageY, offsetX/offsetY
  + 클라이언트 좌표: clientX, clientY 
    + 웹 문서를 기준으로 각각 왼쪽에서 얼마나 떨어져 있는지, 위에서 얼마나 떨어져 있는지를 나타낸다 페이지가 스크롤 되어도 값이 변하지 않는다.
  + 페이지 좌표: pageX, pageY
    + 창 왼쪽 위를 기준으로 얼마나 떨어져 있는지를 나타낸다. 페이지를 스크롤하면 값도 변한다.
+ 버튼 정보를 나타내는 프로퍼티: altKey, ctrlKey, shiftKey, button

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="yLvNOMK" data-user="task11" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/task11/pen/yLvNOMK">
  Untitled</a> by task11 (<a href="https://codepen.io/task11">@task11</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### 키보드 정보 취득
> keydown, keyup, keypress 이벤트가 발생하면 생성되는 KeyboardEvent 타입의 이벤트 객체는 altKey, ctrlKey, shiftKey, metaKey, key, keyCode 같은 고유의 프로퍼티를 갖는다.

```html
<!DOCTYPE html>
<html>
  <body>
    <input type="text" />
    <script>
      const $input = document.querySelector('input');
      
      $button.onkeyup = e => {
      if(e.key != 'Enter') return; 
      }

    </script>
  </body>
</html>
```

## 이벤트 전파
### 이벤트 흐름

> 이벤트 캡쳐링 -> 타깃 단계 -> 이벤트 버블링

![](https://velog.velcdn.com/images/task11/post/0603dfde-5a5e-4c5c-9d12-3d1ae7f8a9a8/image.png)

---

### 이벤트 버블링

> 이벤트 버블링은 특정 화면 요소에서 이벤트가 발생했을 때 해당 이벤트가 더 상위의 화면 요소들로 전달되어 가는 특성을 의미한다.




<svg xmlns="http://www.w3.org/2000/svg" width="353" height="216" viewBox="0 0 353 216"><defs><style>@import url(https://fonts.googleapis.com/css?family=Open+Sans:bold,italic,bolditalic%7CPT+Mono);@font-face{font-family:&apos;PT Mono&apos;;font-weight:700;font-style:normal;src:local(&apos;PT MonoBold&apos;),url(/font/PTMonoBold.woff2) format(&apos;woff2&apos;),url(/font/PTMonoBold.woff) format(&apos;woff&apos;),url(/font/PTMonoBold.ttf) format(&apos;truetype&apos;)}</style></defs><g id="dom" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="event-order-bubbling.svg"><path id="Rectangle-210" fill="#DBAF88" d="M159.488 140L174 186H60l14.512-46z"/><path id="Rectangle-209" stroke="#91C2A3" stroke-width="18" d="M173.634 81l16.09 51H43.276l16.09-51h114.267z"/><path id="Rectangle-208" stroke="#EFA39F" stroke-width="18" d="M39.986 29h153.028l22.71 72H17.276l22.71-72z"/><path id="Fill-46" fill="#166388" d="M121.5 141v13.816a4.5 4.5 0 11-9 0V141h9zm0-31v13h-9v-13h9zM117 20.53a4.471 4.471 0 013.362 1.3l17.64 17.64a4.5 4.5 0 01-6.364 6.364L121.5 35.698V92h-9V35.7l-10.138 10.136a4.5 4.5 0 11-6.363-6.364l17.639-17.64a4.477 4.477 0 013.363-1.3z"/><text id="1" fill="#643B0C" font-family="PTMono-Bold, PT Mono" font-size="14" font-weight="bold"><tspan x="210" y="105">1</tspan></text><text id="2" fill="#643B0C" font-family="PTMono-Bold, PT Mono" font-size="14" font-weight="bold"><tspan x="185" y="136">2</tspan></text><text id="3" fill="#C06334" font-family="PTMono-Bold, PT Mono" font-size="14" font-weight="bold"><tspan x="157" y="181">3</tspan></text><text id="Most-deeply-nested-e" fill="#AF6E24" font-family="OpenSans-Bold, Open Sans" font-size="14" font-weight="bold"><tspan x="233.48" y="175">Most deeply</tspan> <tspan x="221.306" y="194">nested element</tspan></text><path id="Line-30" stroke="#C06334" stroke-dasharray="3,6" stroke-linecap="square" stroke-width="2" d="M179.5 177.5h30"/></g></g></svg>


```HTML
<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```

위 코드에서 `p` 태그를 클릭하면
+ `<p>`에 할당된 onclick 핸들러가 동작.
+ 바깥의 `<div>`에 할당된 핸들러가 동작.
+ 그 바깥의 `<form>`에 할당된 핸들러가 동작.

> 거의 모든 이벤트는 버블링 된다.
`focus` 이벤트와 같이 버블링 되지 않는 이벤트가 있다.

### 버블링 중단: event.stopPropagation()

> 이벤트를 처리한 뒤 버블링을 중단하는 명령.

버블링 중단을 남용해서는 안된다. 예를 들어..

유저 행동 패턴을 분석하는 시스템을 도입하는 등, document의 전체 클릭 이벤트를 감지해야할 때 `버블링`이 중단되어있는 상위 요소들은 `죽은 영역`이 된다.

---

### 이벤트 캡쳐링 

> 이벤트 캡쳐는 이벤트 버블링과 반대 방향으로 진행되는 이벤트 전파 방식이다. 상위에서 더 하위의 요소들로 전달된다.

```HTML
<form>FORM
  <div>DIV
    <p>P</p>
  </div>
</form>
<script>
  for(let elem of document.querySelectorAll('*')) {
    elem.addEventListener("click", e => alert(`캡쳐링: ${elem.tagName}`), true);
  }
</script>
```

위 코드에서 `form` 태그를 클릭하면
+ `<form>`에 할당된 핸들러가 동작.
+ 안쪽의 `<p>`에 할당된 onclick 핸들러가 동작.
+ 안쪽의 `<div>`에 할당된 핸들러가 동작.


버블링과 반대로 상위 요소가 들어가며 아래 이벤트 핸들러들을 실행시킨다.

캡쳐링 단계에서 이벤트를 잡아내려면 `addEventListener`의 `capture` 옵션을 `true`로 설정해야 한다.

```javascript
document.addEventListener("click", handlar, true);
```

> 이벤트 캡쳐링은 잘 사용되지 않는다. 이유는 상위 요소에서 하위 요소로 이벤트가 전파되는 것 보다 하위 요소에서 상위 요소로 전파되는 것(버블링)이 더 많은 정보를 가지고 있기 때문이다.


---

## 이벤트 위임

> 이벤트 위임은 캡처링과 버블링을 활용한 강력한 핸들링 패턴이다.

공통 조상에 핸들러를 할당하고, event.target으로 실제로 어디서 이벤트가 발생했는지 알 수 있다.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="PoEMLNv" data-user="task11" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/task11/pen/PoEMLNv">
  delegation</a> by task11 (<a href="https://codepen.io/task11">@task11</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

> ref: Modern Javascript tutorial

위 예제 코드에서 클릭된 `td`의 색을 변경하고 싶다면,
1. 공통 조상인 `table`에 이벤트 핸들러를 할당하고
2. event.target을 이용해 어떤 요소가 클릭 되었는지 감지하고
3. 클릭된 요소가 `td`가 아닐 시 `return` 시킨다.
4. `td`가 맞다면 `event.target.classList`의 클래스 조정으로 상태를 바꾼다.


## DOM 요소의 기본 동작 조작
### DOM 요소의 기본 동작 중단
> DOM 요소는 저마다 기본 동작이 존재한다. 예컨데, a 태그를 클릭하면 href로 지정된 링크로 이동한다.

이벤트 객체의 `event.preventDefault` 메서드는 이런 기본 동작을 중단시킬 수 있는 메서드이다.

## 이벤트 핸들러 내부의 this
### 이벤트 핸들러 어트리뷰트 방식
> 다음 예제의 handleClick 함수 내부의 this는 전역 객체인 window를 가리킨다.

```HTML
<!DOCTYPE html>
<html>
  <body>
    <button onclick="handleClick()">Click me</button>
    <script>
      function handleClick(button){
        console.log(button) // 이벤트를 바인딩한 button 요소
        console.log(this);// window
      }
    </script>
  </body>
</html>
```

### 이벤트 핸들러 프로퍼티 방식 과 addEventListner 메서드 방식
> 이 두 방식은 모두 이벤트 핸들러 내부의 this가 이벤트를 바인딩한 DOM 요소를 가리킨다.

```HTML
<!DOCTYPE html>
<html>
  <body>
    <button class="btn1">0</button>
    <button class="btn2">0</button>
    <script>
      const $button1 = document.querySelector('.btn1');

      $button1.onclick = function (e) {
        console.log(this); // $button1
        console.log(e.currentTarget); // $button1
        console.log(this === e.currentTarget); // true
      }

    </script>
  </body>
</html>
```

> 화살표 함수로 정의한 이벤트 핸들러 내부의 this는 상위 스코프의 this를 가리킨다. 화살표 함수는 함수 자체의 this 바인딩을 갖지 않는다.

```HTML
<!DOCTYPE html>
<html>
  <body>
    <button class="btn1">0</button>
    <button class="btn2">0</button>
    <script>
      const $button1 = document.querySelector('.btn1');

      $button1.onclick = (e) => {
        console.log(this); // window
        console.log(e.currentTarget); // $button1
        console.log(this === e.currentTarget); // false
      }

    </script>
  </body>
</html>
```

## 커스텀 이벤트
> Event, UIEvent, MouseEvent 같은 이벤트 생성자 함수를 호출하여 명시적으로 생성한 이벤트 객체는 임의의 이벤트 타입을 지정할 수 있다. 이것을 커스텀 이벤트라고 한다.

### 커스텀 이벤트 생성
> 생성된 커스텀 이벤트 객체는 버블링되지 않으며 preventDefault 메서드로 취소할 수도 없다.

```javascript
const keyboardEvent = new KeboardEvent('keyup');
console.log(keyboardEvent.type) // keyup

const customEvent = new CustomEvent('foo');
console.log(customEvent.type) // foo
```

```javascript
const customEvent = new MouseEvent('click');
console.log(customEvent.type) // click
console.log(customEvent.bubbles) // false
console.log(customEvent.cancelable) // false
```

> 커스텀 이벤트 객체의 bubbles또는 cancelable 프로퍼티를 true로 설정하려면 이벤트 생성자 함수의 두 번째 인수로 bubbles 또는 cancelable 프로퍼티를 갖는 객체를 전달한다.

```javascript
const customEvent = new MouseEvent('click', {
  bubbles: true,
  cancelable: true
});

console.log(customEvent.bubbles) // true
console.log(customEvent.cancelable) // true
```

> 커스텀 이벤트 객체에는 이벤트 타입에 따라 가지는 이벤트 고유의 프로퍼티 값을 지정할 수 있다.

```javascript
const mouseEvent = new MouseEvent('click', {
  bubbles: true,
  cancelable: true,
  clientX: 50,
  clientY: 100
});

console.log(mouseEvent.clientX) // 50
console.log(mouseEvent.clientY) // 100
```


### 커스텀 이벤트 디스패치
> 생성된 커스텀 이벤트는 dispatchEvent 메서드로 디스패치할 수 있다.

> dispatchEvent 메서드로 이벤트를 디스패치하기 이전에 커스텀 이벤트를 처리할 이벤트 핸들러를 등록해야 한다.

```HTML
<!DOCTYPE html>
<html>
  <body>
    <button class="btn">Click me</button>
    <script>
      const $button = document.querySelector('.btn');

      $button.addEventListener('foo', e => {
        alert(e.detail.message); // Hello~
      });

      const customEvent = new CustomEvent('foo', {
        detail: {message: 'Hello~'}
      });
      
      $button.dispatchEvent(customEvent);
    </script>
  </body>
</html>
```