// 노드, 간선, 최단경로
// 최단 경로가 제일 큰 경우의 집합을 구하는 문제

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


function solution(node, vertex) {
  const graphMatrix = Array.from(Array(node + 1), () => []);

  for (const [n, m] of vertex) {
    graphMatrix[n].push(m);
    graphMatrix[m].push(n);
  }

  console.log(graphMatrix);

  const distance = Array(node + 1).fill(0);
  distance[1] = 1;

  // BFS Queue
  const queue = new Queue();
  queue.enqueue(1);

  while (!queue.isEmpty()) {

    const src = queue.dequeue();

    for (const dest of graphMatrix[src]) {

      if (distance[dest] === 0) {
        queue.enqueue(dest);
        distance[dest] = distance[src] + 1;
      }
    }
  }

  // BFS Array
  // const queue = [1];
  // while (queue.length > 0) {
  //   const src = queue.shift(); // shift는 O(n)이지만 요소가 적을 경우에는 자바스크립트 엔진에서 최적화해줌
  //   for (const dest of graphMatrix[src]) {
  //     if (distance[dest] === 0) {
  //       queue.push(dest);
  //       distance[dest] = distance[src] + 1;
  //     }
  //   }
  // }


  const max = Math.max(...distance);

  return distance.filter(item => max === item).length;
}


const node = 6;
const vertex = [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]];

console.log(solution(node, vertex));