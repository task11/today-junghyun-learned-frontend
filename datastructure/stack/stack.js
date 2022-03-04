// 데이터 전체 획득 : getBuffer()
// 비어 있는지 확인 : isEmpty()
// 데이터 추가 : push();
// 데이터 삭제 : pop();
// 데이터 확인 : peak();
// 데이터 위치 : indexOf();
// 존재 여부 확인 : includes();

class Stack {
  constructor(array) {
    this.array = array ? array : [];
  }

  getBuffer() {
    return this.array.slice();
  }

  isEmpty() {
    return this.array.length === 0;
  }

  push(value) {
    return this.array.push(value);
  }

  pop() {
    return this.array.pop();
  }

  peak() {
    return this.array[this.array.length - 1];
  }

  size() {
    return this.array.length;
  }

  includes(value) {
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === value) {
        return true;
      }
    }
    return false;
  }
}

const stack = new Stack([1, 2, 3, 4]);

console.log(stack.getBuffer());

console.log(stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop());

console.log(stack.getBuffer());

console.log(stack.peak());

console.log(stack.size());

console.log(stack.includes(20));