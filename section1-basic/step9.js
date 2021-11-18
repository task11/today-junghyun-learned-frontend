function solution(word) {
  let answer;
  let list = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i] === "A") list.push("#");
    else list.push(word[i]);
  }
  answer = list.join("");

  return answer;
}

console.log(solution("BANANA"));