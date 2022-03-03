// Closure

function returnX() {
  let x = 'x';
  return function returnY() {
    return x + 'y';
  };
}

// Example

function sum1(x) {
  return function sum2(y) {
    return x + y;
  }
}

const sum10 = sum1(10)(5);
const sum15 = sum1(15)(5);

console.log(sum10);
console.log(sum15);

function sum3(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    }
  }
}

const sum30 = sum3(10)(10)(10);

console.log(sum30);

// Arrow Function
const closure = (num1) => (num2) => (num3) => num1 + num2 + num3;

const useClosure = closure(100)(100)(100);

console.log(useClosure);


// Informaion Hiding (은닉화)
function privateData() {
  let data = 'privateData';

  return {
    value: function () {
      return data;
    },
    changeValue: function (newVal) {
      data = newVal;
    }
  }
}

const num = privateData();
console.log(num.value());
num.changeValue('asdasdas');
console.log(num.value());

function counterApp(initValue) {
  let countValue = initValue;
  return {
    getData: function () {
      return console.log(countValue);
    },
    increment: function () {
      countValue++;
    },
    decrement: function () {
      countValue--;
    }
  }
}

const counter = counterApp(1);

counter.getData();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

counter.getData();

// Closure 예시(사례)
// throttle(스로틀) / debounce(디바운스) : 과한 이벤트 실행을 지연시켜 방지해주는 기법 => 무한스크롤 등
// + React의 Hooks API

// debounce

buttonElement.addEeventListener(
  'click',
  debounce(handleClick, 500),
)

function debounce(func, timeout = 300) {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => { func.apply(this, args) })
  };
}

