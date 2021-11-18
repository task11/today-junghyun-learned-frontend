function solution(a1, a2, a3, a4, a5, a6, a7, a8, a9) {
  let answer = [];
  let list = [a1, a2, a3, a4, a5, a6, a7, a8, a9];
  let remainder = (a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9) - 100;
  let num1, num2;

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (i !== j) {
        if ((list[j] + list[i]) === remainder) {
          num1 = list[j];
          num2 = list[i];
          break;
        }
      }
    }
  }

  for (let x of list) {
    if ((x !== num1) && (x !== num2)) {
      answer.push(x);
    }
  }


  return answer;
}

console.log(solution(20, 7, 23, 19, 10, 15, 25, 8, 13));