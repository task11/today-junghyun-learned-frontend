function solution(str) {
  const table = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let answer = str;

  for (let i = 0; i < table.length; i++) {
    let arr = answer.split(table[i]);
    answer = arr.join(i);
  }

  return parseInt(answer);
}

console.log(solution("one4seveneight"));