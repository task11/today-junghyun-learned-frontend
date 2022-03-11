const DEFAULT_SIZE = 5;

function CircularQueue(array = [], size = DEFAULT_SIZE) {
  this.array = array;
  this.size = array.length > size ? array.length : size;
  this.length = array.length;
  this.head = 0;
  this.tail = array.length;
};

CircularQueue.prototype.getBuffer = function () {
  return this.array.slice();
};

CircularQueue.prototype.isEmpty = function () {
  return this.array.length == 0;
};

CircularQueue.prototype.isFull = function () {
  return this.array.length == this.size;
};

CircularQueue.prototype.enqueue = function (element) {
  if (this.isFull()) return false;

  this.array[this.tail % this.size] = element;
  this.tail++;
  this.length++;

  return true;
};

CircularQueue.prototype.dequeue = function () {
  if (this.isEmpty()) return undefined;

  let element = this.array[this.head % this.size];
  delete this.array[this.head % this.size];
  this.head++;
  this.length--;

  return element;
};

CircularQueue.prototype.front = function () {
  return this.length == 0 ? undefined : this.array[this.head];
}

CircularQueue.prototype.dataSize = function () {
  return this.length;
}

CircularQueue.prototype.clear = function (size = DEFAULT_SIZE) {
  this.array = [];
  this.size = size;
  this.length = 0;
  this.head = 0;
  this.tail = 0;
}


function solution(n, m, k) {
  let result = [];
  let index = m - 1;
  let array = Array(n).fill().map((value, index) => {
    return index + 1;
  })
  let cc = new CircularQueue(array);

  while (cc.size !== 0) {
    result.push(cc.array[index]);
    cc.array.splice(index, 1);
    cc.size--;
    cc.tail--;
    if (index == cc.tail) {
      index = 0;
    }
    for (let i = 0; i < k - 1; i++) {
      if (index == cc.tail - 1) {
        index = 0;
      } else {
        index++;
      }
    }
  }

  return result;
}

const input = {
  n: 8,
  m: 2,
  k: 3
}

const input2 = {
  n: 10,
  m: 2,
  k: 3
}

const input3 = {
  n: 20,
  m: 5,
  k: 7
}

console.log(solution(input3.n, input3.m, input3.k)); 