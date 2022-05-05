function solution(s) {
  var answer = [];
  let n = 1;
  let maxN = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      n += 1;
    } else {
      maxN.push(s[i]);
      if (n !== 1) {
        maxN.push(n);
      }
      n = 1;
    }
  }
  answer = maxN.join("");
  return answer;
}

const str = "KKHSSSSSSSE"
console.log(solution(str));