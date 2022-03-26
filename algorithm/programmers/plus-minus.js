function solution(absolutes, signs) {
  let answer;
  answer = absolutes.reduce((curr, item, index) => {
    if (signs[index]) return curr += item;
    else return curr += item - (2 * item);
  }, 0);



  // answer = absolutes.map((item, index) => {
  //   
  // })

  return answer;
}

const input = [4, 7, 12];
const sign = [true, false, true];

console.log(solution(input, sign));