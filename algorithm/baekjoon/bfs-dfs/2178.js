class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }

  isEmpty() {
    return this.rear === this.front;
  }
}

const fs = require('fs');
const [table, ...arr] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const [N, M] = table.split(' ').map(v => +v);
const maps = arr.map(v => v.split('').map(w => +w));


console.log(solution(N - 1, M - 1, maps));

function solution(N, M, maps) {
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const queue = new Queue();

  queue.enqueue([0, 0, 1]);

  while (!queue.isEmpty()) {
    const src = queue.dequeue();
    if (src[0] === N && src[1] === M)
      return src[2];
    for (let i = 0; i < 4; i += 1) {
      const col = src[0] + dy[i];
      const row = src[1] + dx[i];
      if (row >= 0 && col >= 0 && row < maps[0].length && col < maps.length && maps[col][row] === 1) {
        queue.enqueue([col, row, src[2] + 1]);
        maps[col][row] = 0;
      }
    }
  }
  return -1;
}