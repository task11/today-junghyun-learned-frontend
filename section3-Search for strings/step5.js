function solution(s1, s2) {
  var answer = "";
  let list = [];
  let pos = 0;

  while (true) {
    let position = s1.indexOf(s2, pos)
    if (position === -1) break;
    list.push(position);
    pos = position + 1;
  }

  for (let i = 0; i < list.length; i++) {

  }

  return answer;
}

const str1 = "teachermode"
const str2 = "e"
console.log(solution(str1, str2));
// ▣ 입력예제 1
// teachermode e
// ▣ 출력예제 1
// 1 0 1 2 1 0 1 2 2 1 0