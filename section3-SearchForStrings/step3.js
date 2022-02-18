
function solution(s) {
  var answer = "";

  answer = Number(s.toLowerCase().replace(/[a-z]/g, ""));

  if (answer > 1000000000) {
    answer = "자연수 초과"
  }


  return answer;
}

const str = "g0en2T0s8eSoft"
console.log(solution(str));

