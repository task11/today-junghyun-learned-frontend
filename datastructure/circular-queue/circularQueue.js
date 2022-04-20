const DEFAULT_SIZE = 5;

function CircularQueue_1(array = [], size = DEFAULT_SIZE) {
  this.array = array;
  this.size = array.length > size ? array.length : size;
  this.length = array.length;
  this.head = 0;
  this.tail = array.length;
};

CircularQueue_1.prototype.getBuffer = function () {
  return this.array.slice();
};

CircularQueue_1.prototype.isEmpty = function () {
  return this.array.length == 0;
};

CircularQueue_1.prototype.isFull = function () {
  return this.array.length == this.size;
};

CircularQueue_1.prototype.enqueue = function (element) {
  if (this.isFull()) return false;

  this.array[this.tail % this.size] = element;
  this.tail++;
  this.length++;

  return true;
};

CircularQueue_1.prototype.dequeue = function () {
  if (this.isEmpty()) return undefined;

  let element = this.array[this.head % this.size];
  delete this.array[this.head % this.size];
  this.head++;
  this.length--;

  return element;
};

CircularQueue_1.prototype.front = function () {
  return this.length == 0 ? undefined : this.array[this.head];
};

CircularQueue_1.prototype.dataSize = function () {
  return this.length;
};

CircularQueue_1.prototype.clear = function (size = DEFAULT_SIZE) {
  this.array = [];
  this.size = size;
  this.length = 0;
  this.head = 0;
  this.tail = 0;
};


let cq = new CircularQueue_1([1, 2, 3, 4]);
console.log(cq);

console.log(cq.enqueue(5));
console.log(cq.enqueue(6));

class CircularQueue {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.queue = [];
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }

  enqueue(value) {
    if (this.isFull()) {
      console.log("Queue is full..");
      return;
    }
    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) % this.maxSize;
    this.size += 1;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front = (this.front + 1) % this.maxSize;
    this.size -= 1;
    return value;
  }

  isFull() {
    return this.size === this.maxSize;
  }

  peek() {
    return this.queue[this.front];
  }
}

const queue = new CircularQueue();