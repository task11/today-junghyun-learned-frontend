
function solution(s) {
  var answer = "YES";
  var n = s.length;
  s = s.toLowerCase();

  for (let i = 0; i < n / 2; i++) {
    if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
      if (s[i] !== s[n - i - 1]) {
        answer = "NO";
      }
    }
  }
  return answer;
}

const str = "tge0a1h205er"
console.log(solution(str));

