function Queue_1(array) {
  this.array = array ? array : [];
}

Queue_1.prototype.enqueue = function (element) {
  return this.array.push(element);
};

Queue_1.prototype.dequeue = function () {
  return this.array.shift();
};

function Queue_2(array) {
  this.array = array ? array : [];
  this.tail = array ? array.length : 0;
  this.head = 0;
}

Queue_2.prototype.enqueue = function (element) {
  return (this.array[this.tail++] = element);
};

Queue_2.prototype.dequeue = function () {
  if (this.tail === this.head) return undefined;

  let element = this.array[this.head];
  delete this.array[this.head++];
  return element;
};

let queue_1 = new Queue_1();
let queue_2 = new Queue_2();
const count = 100000;

function benchmark(queue, enqueue) {
  let start = Date.now();
  for (let i = 0; i < count; i++) {
    enqueue ? queue.enqueue() : queue.dequeue();
  }
  return Date.now() - start;
}

console.log("enqueue queue_1: " + benchmark(queue_1, 1) + "ms"); // queue_1: 8ms
console.log("enqueue queue_2: " + benchmark(queue_2, 1) + "ms"); // queue_2: 6ms

console.log("dequeue queue_1: " + benchmark(queue_1, 0) + "ms"); // queue_1: 5695ms
console.log("enqueue queue_2: " + benchmark(queue_2, 0) + "ms"); // queue_2: 9ms