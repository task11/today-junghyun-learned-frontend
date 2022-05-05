class Deque {
  constructor(array = []) {
    this.array = array;
  }

  empty() {
    return this.array.length == 0 ? 1 : 0;
  }

  push_front(item) {
    this.array.unshift(item);
  }

  pop_front() {
    return this.array.length == 0 ? -1 : this.array.shift();
  }

  push_back(item) {
    this.array.push(item);
  }

  pop_back() {
    return this.array.length == 0 ? -1 : this.array.pop();
  }

  front() {
    return this.array.length == 0 ? 0 : this.array[0];
  }

  back() {
    return this.array.length == 0 ? 0 : this.array[this.array.length - 1];
  }

  size() {
    return this.array.length;
  }
}

function solution(arr) {
  let deque = new Deque();
  let result = [];

  for (x of arr) {
    let op = x.split(" ");
    if (op.length == 2) {
      deque[op[0]](op[1]);
    } else {
      result.push(deque[op[0]]());
    }
  }

  return result
}

const input = ["push_back 1", "push_front 2", "pop_front", "pop_back", "pop_front"];
console.log(solution(input)); 