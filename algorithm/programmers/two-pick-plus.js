function solution(numbers) {
  let answer = [];

  let temp = new Set();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) temp.add(numbers[i] + numbers[j]);
    }
  }

  answer = Array.from(temp).sort((a, b) => a - b);



  return answer;
}

const input = [5, 0, 2, 7];

console.log(solution(input));