// k번째 수 찾기
// nnn개의 숫자가 차례대로 주어질 때, 매 순간마다 “지금까지 입력된 숫자들 중에서 k번째로 작은 수”를 반환하는 프로그램을 작성하세요.

// 프로그램의 입력으로는 첫째줄에 nnn과 kkk가 입력되고, 둘째줄에 nnn개의 숫자가 차례대로 주어집니다.

function soultion(input, list) {
  const k = input[1];
  const result = [];
  const data = [];
  for (let i = 0; i < list.length; i++) {
    data.push(list[i]);
    data.sort();

    if (data.length < k) result.push(-1);
    else result.push(data[k - 1]);
  }

  return result;
}


const input = [10, 3];
const list = [1, 9, 8, 5, 2, 3, 5, 6, 2, 10];

console.log(soultion(input, list));