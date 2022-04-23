function solution(number, k) {
  const stack = [];
  let count = 0;

  for (let item of number) {
    while (count < k && stack[stack.length - 1] < item) {
      stack.pop();
      count++;
    }
    stack.push(item);
  }

  while (count < k) {
    stack.pop();
    count++;
  }

  return stack.join("");
}