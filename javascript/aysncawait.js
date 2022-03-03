// async, await
const shop = function (stuff) {
  return new Promise((resolve, reject) => {
    if (stuff === '물건') {
      resolve('주문 접수(물건)');
    } else {
      reject('품절');
    }
  })
}

// shop('물건') // API 위치
//   .then((res) => console.log(res))
//   .catch((rej) => console.log(rej))
//   .finally(() => console.log('완료'));

// Promise Refactoring

async function requestFn(order) {
  try {
    const result = await shop(order);
    console.log(result);
  } catch (e) {
    console.log(e);
  } finally {
    console.log('Done');
  }
}

requestFn('물건');