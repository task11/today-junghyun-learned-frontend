// 동기 / 비동기
// callback setTimeout

console.log(1);

function setTimeoutWithCallback(callbackFunction) {
  setTimeout(function () {
    console.log(2);
    callbackFunction();
  }, 1000);
}

setTimeoutWithCallback(function () {
  console.log(3);
});

// promise

const promiseResolve = Promise.resolve('성공');
const promiseReject = Promise.reject('실패');

promiseResolve
  .then((resolve) => {
    console.log(resolve + '1회');
    return promiseResolve;
  })
  .then((resolve) => {
    console.log(resolve + '2회');
    return promiseReject;
  })
  .catch((reject) => {
    console.log(reject + '3회 실패');
    return promiseResolve;
  })
  .then((resolve) => {
    console.log(resolve + '4회');
    return promiseResolve;
  })
  .then((resolve) => {
    console.log(resolve + '5회');
    return promiseResolve;
  })
  .then((resolve) => {
    console.log(resolve + '6회');
    return promiseResolve;
  });

// promiseReject.catch((reject) => { console.log(reject) });


// new Promise

const one = Promise.resolve('4');
const two = (delay) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve('5');
    }, delay));
const three = Promise.resolve('6');

one.then((res) => {
  console.log(res);
  return two(4000);
}).then((res) => {
  console.log(res);
  return three;
}).then((res) => {
  console.log(res);
}).finally(() => console.log('Done'));

// Example APP

const shop = function (stuff) {
  return new Promise((resolve, reject) => {
    if (stuff === '물건') {
      resolve('주문 접수(아메리카노)');
    } else {
      reject('품절');
    }
  })
}

coffeeShop('물건') // API 위치
  .then((res) => console.log(res))
  .catch((rej) => console.log(rej))
  .finally(() => console.log('완료'));

