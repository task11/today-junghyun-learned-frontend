## 변수 호이스팅 (Variable Hoisting) ##

변수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징.


Example Code:

```javascript
console.log("Score?", score);
var score = 60;

/*
 * result = Score? undefined
 */


//런타임 환경
var score = undefined; // Hoisting
console.log("Score?", score);
score = 60;

```


### _+자세한 내용은 추후 업데이트 예정_