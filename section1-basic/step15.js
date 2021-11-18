function solution(str) {
  let answer;
  let centerIndex = Math.floor(str.length / 2);


  if ((str.length % 2) === 0) {
    answer = str.slice(centerIndex - 1, centerIndex + 1);
  }
  else {
    answer = str.slice(centerIndex, centerIndex + 1);
  }

  return answer;
}

console.log(solution("iamaboys"));