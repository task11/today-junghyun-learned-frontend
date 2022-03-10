class Deque {
  constructor(arr = []) {
    this.arr = arr;
  }

  getBuffer() {
    return this.arr.slice();
  }

  isEmpty() {
    return this.arr.length == 0;
  }

  pushFront(item) {
    return this.arr.unshift(item);
  }

  popFront() {
    return this.arr.shift();
  }

  pushBack(item) {
    return this.arr.push(item);
  }

  popBack() {
    return this.arr.pop();
  }

  front() {
    return this.arr.length == 0 ? undefined : this.arr[0];
  }

  back() {
    return this.arr.length == 0 ? undefined : this.arr[this.arr.length - 1];
  }

  size() {
    return this.arr.length;
  }

  clear() {
    this.arr = [];
  }
}

let dq = new Deque([1, 2, 3, 4, 5]);

console.log(dq);
console.log(dq.front());
console.log(dq.back());

console.log(dq.size());
dq.clear()
console.log(dq.isEmpty());