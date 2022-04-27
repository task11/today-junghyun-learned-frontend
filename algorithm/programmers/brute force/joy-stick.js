// function solution(name) {
//   let str = "A".repeat(name.length).split("");
//   let idx = 0;
//   let count = 0;

//   let right = 1;
//   let left = -1;

//   let move = right;

//   while (str.join("") !== name) {
//     if (idx === name.length) idx = 0;
//     if (idx === -1) idx = name.length;

//     if (str[idx] === name[idx]) {
//       if (str[idx + 1] === name[idx + 1]) {
//         move = left;
//       } else if (str[idx - 1] === name[idx - 1]) {
//         move = right;
//       }

//       idx = idx + move;
//       count++;
//     } else {
//       if (name.charCodeAt(idx) <= 78) {
//         count += Math.abs(name.charCodeAt(idx) - str[idx].charCodeAt(0));

//       } else if (name.charCodeAt(idx) > 78) {
//         count += Math.abs(90 - name.charCodeAt(idx) + 1);
//       }
//       str[idx] = name[idx];
//     }
//   }

//   return count;
// }

function solution(name) {
  let result = 0;
  const inputLength = name.length;
  let upDownCount = 0;
  let leftRightCountList = [inputLength - 1];//한 방향으로 쭉 갔을 때

  for (let i = 0; i < inputLength; i++) {
    upDownCount += minUpOrDownCount(name[i]);
  };

  for (let startOfA = 0; startOfA < name.length; startOfA++) {
    let endOfA = startOfA + 1;

    while (endOfA < inputLength && name[endOfA] === 'A') {
      endOfA++;
    }

    const [moveToStartOfA, moveToEndOfA] = [startOfA, inputLength - endOfA];

    leftRightCountList.push(moveToStartOfA * 2 + moveToEndOfA);// 0 -> A.., 0 <- A.., ..A <- -1
    leftRightCountList.push(moveToEndOfA * 2 + moveToStartOfA);//시작부터 뒤로 가는 경우 ..A <- -1, ..A -> -1, 0 -> A..
  }
  result = upDownCount + Math.min(...leftRightCountList);

  return result;
}

function minUpOrDownCount(des) {

  const Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const index = Alphabet.indexOf(des);

  return Math.min(index, Alphabet.length - index);
}

console.log(solution("ABAAB"));


// 조이스틱으로 알파벳 이름을 완성하세요. 맨 처음엔 A로만 이루어져 있습니다.
// ex) 완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA

// 조이스틱을 각 방향으로 움직이면 아래와 같습니다.

// ▲ - 다음 알파벳
// ▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
// ◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
// ▶ - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽으로 이동하면 첫 번째 문자에 커서)
// 예를 들어 아래의 방법으로 "JAZ"를 만들 수 있습니다.

// - 첫 번째 위치에서 조이스틱을 위로 9번 조작하여 J를 완성합니다.
// - 조이스틱을 왼쪽으로 1번 조작하여 커서를 마지막 문자 위치로 이동시킵니다.
// - 마지막 위치에서 조이스틱을 아래로 1번 조작하여 Z를 완성합니다.
// 따라서 11번 이동시켜 "JAZ"를 만들 수 있고, 이때가 최소 이동입니다.
// 만들고자 하는 이름 name이 매개변수로 주어질 때, 이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수를 만드세요.

