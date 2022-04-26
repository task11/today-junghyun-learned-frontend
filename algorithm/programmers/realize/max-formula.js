
function solution(expression) {

  function calculation(a, b, op) {
    if (op === "-") return a - b;
    if (op === "*") return a * b;
    if (op === "+") return a + b;
  }
  let answer = Number.MIN_SAFE_INTEGER;
  const table = [
    ["+", "*", "-"],
    ["+", "-", "*"],
    ["*", "+", "-"],
    ["*", "-", "+"],
    ["-", "*", "+"],
    ["-", "+", "*"]
  ];

  table.forEach((prior) => {
    const operand = expression.match(/[0-9]+/g).map(Number);
    const operator = expression.match(/[\+\*\-]/g);
    prior.forEach((op) => {
      let index = operator.indexOf(op);
      while (index !== -1) {
        operand[index] = calculation(operand[index], operand[index + 1], op);
        operand.splice(index + 1, 1);
        operator.splice(index, 1);
        index = operator.indexOf(op);
      }
    });
    if (answer < Math.abs(operand[0])) answer = Math.abs(operand[0]);
  });


  return answer;
}

console.log(solution("100-200*300-500+20"));