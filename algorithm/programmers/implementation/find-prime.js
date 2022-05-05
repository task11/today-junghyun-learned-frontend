/*지시사항을 따라 작성해주세요*/
function isPrime() {
  let sum = 0;
  let primeArr = Array.from({ length: 200 }, () => true);

  primeArr[0] = primeArr[1] = false;

  for (let i = 2; i * i <= 200; i++) {
    if (primeArr[i]) {
      for (let j = i * i; j <= 200; j += i) {
        primeArr[j] = false;
      }
    }
  }

  for (let i = 0; i <= 200; i++) {
    if (primeArr[i]) sum += i;
  }

  return sum

}
console.log(isPrime());