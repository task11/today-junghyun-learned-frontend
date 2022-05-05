if (!Array.prototype.popFront) {
  Array.prototype.popFront = function () {
    return this.length == 0 ? undefined : this.shift();
  };
}

if (!Array.prototype.popBack) {
  Array.prototype.popBack = function () {
    return this.length == 0 ? undefined : this.pop();
  };
}

if (!Array.prototype.pushFront) {
  Array.prototype.pushFront = function (item) {
    return this.length == 0 ? undefined : this.unshift(item);
  };
}

if (!Array.prototype.isEmpty) {
  Array.prototype.isEmpty = function () {
    return this.length == 0;
  }
}



function solution(num) {
  let deque = Array(num).fill().map((obj, index) => index + 1);
  let result = [];
  let count = 0;
  while (result.length < num) {
    result.push(deque.popFront());
    deque.push(deque.popFront());
  }

  return result;
}

const input = 10


console.log(solution(input));