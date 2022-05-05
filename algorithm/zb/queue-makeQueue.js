class Queue {
  constructor(array) {
    this.array = array ? array : [];
  }

  enqueue(item) {
    this.array.push(item)

  }

  dequeue() {
    return this.array.length == 0 ? -1 : this.array.shift();
  }

  empty() {
    return this.array.length == 0 ? 1 : 0;
  }

  front() {
    return this.array.length == 0 ? -1 : this.array[0];
  }

  back() {
    return this.array.length == 0 ? -1 : this.array[this.array.length - 1];
  }

  size() {
    return this.array.length;
  }
}



function solution(array) {
  let queue = new Queue();
  let result = [];

  for (let x of array) {
    let op = x.split(" ");

    if (op.length == 2) queue[op[0]](parseInt(op[1]));
    else result.push(queue[op[0]]());
  }

  return result;
}

const input = ["enqueue 1", "enqueue 2", "dequeue", "dequeue", "dequeue"];

const input2 = ["enqueue 7", "enqueue 8", "front", "back", "size", "empty", "dequeue", "dequeue", "dequeue", "size", "empty", "dequeue", "enqueue 9", "empty", "front"];

console.log(solution(input2));
