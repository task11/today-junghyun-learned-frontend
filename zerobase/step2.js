// 잃어버린 카드 찾기
// 등차수열을 이루는 4개의 숫자카드를 받았는데 한 카드를 잃어버렸다. 이 카드를 찾자.
// 입력은 자연수로 된 3개의 숫자 카드를 받고 한 가지 잃어버린 카드의 수를 반환한다.
// 단 잃어버린 카드는 가운데 숫자 카드로 한정한다.
// 예를 들어 1, 7, 10 을 입력 받았을 때
// 초항이 1이고 두 수의 차가 3인 등차 수열 1, 4, 7, 10을 찾아 4를 반환하도록 한다.

let input = [
  [1, 7, 10],
  [3, 8, 18],
  [11, 2, 5]
]

function answer(a, b, c) {
  num = [a, b, c];
  num.sort((x, y) => x - y);

  [a, b, c] = num;

  if ((c - b) < (b - a)) {
    return a + (c - b);
  } else if ((c - b) > (b - a)) {
    return b + (b - a);
  }
}

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}