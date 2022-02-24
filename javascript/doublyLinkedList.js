
// Data와 pointer인 next, prev를 가지고 있는 Node 객체
function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

// Head, tail, length를 가지고 있는 DoublyLinkedList 객체
function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

// 연결 리스트 내 노드 개수 확인
DoublyLinkedList.prototype.size = function () {
  return this.length;
}

// 객체 내 노드 존재 여부 파악
DoublyLinkedList.prototype.isEmpty = function () {
  return this.length === 0;
}

// 노드 정방향 출력
DoublyLinkedList.prototype.printNode = function () {
  process.stdout.write("head -> ");
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.data} ->`);
  }
  console.log("null");
}

// 노드 역방향 출력
DoublyLinkedList.prototype.printNodeInverse = function () {
  let temp = [];
  process.stdout.write("null <- ");
  for (let node = this.tail; node != null; node = node.prev) {
    temp.push(node.data);
  }
  for (let i = temp.length - 1; i >= 0; i--) {
    process.stdout.write(`${temp[i]} <-`);
  }
  console.log("tail");
}


// 연결리스트의 마지막에 노드 추가
DoublyLinkedList.prototype.append = function (value) {
  let node = new Node(value);

  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }

  this.length++;
}


// position 위치에 노드 추가
DoublyLinkedList.prototype.insert = function (value, position = 0) {
  if (position < 0 || position > this.length) {
    return false;
  }

  let node = new Node(value);
  let current = this.head;
  let index = 0;
  let prev; // 이전 노드 값 저장

  if (position === 0) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = current;
      current.prev = node;
      this.head = node;
    }
  } else if (position === this.length) {
    current = this.tail;
    current.next = node;
    node.prev = current;
    this.tail = node;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    node.next = current;
    prev.next = node;

    current.prev = node;
    node.prev = prev;
  }
  this.length++

  return true;
}

// value 값 노드 remove
DoublyLinkedList.prototype.remove = function (value) {
  let current = this.head;
  let prev = current;

  while (current.data != value && current.next != null) {
    prev = current;
    current = current.next;
  }

  if (current.data != value) {
    return null;
  }

  if (current === this.head) {
    this.head = current.next;
    if (this.length === 1) this.tail = null;
    else this.head.prev = null;
  } else if (current === this.tail) {
    this.tail = current.prev;
    this.tail.next = null;
  } else {
    prev.next = current.next;
    current.next.prev = prev;
  }

  this.length--;

  return current.data;
}

// removeAt() : position 위치 노드 삭제
DoublyLinkedList.prototype.removeAt = function (position = 0) {
  if (position < 0 || position >= this.length) {
    return null;
  }

  let current = this.head;
  let index = 0;
  let prev;

  if (position === 0) {
    this.head = current.next;
    if (this.length === 1) this.tail = null;
    else this.head.prev = null;
  } else if (position === this.length - 1) {
    current = this.tail;
    this.tail = current.prev;
    this.tail.next = null;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
    current.next.prev = prev;
  }

  this.length--;

  return current.data;
}

// value 값을 갖는 노드의 index 반환
DoublyLinkedList.prototype.indexOf = function (value) {
  let current = this.head;
  let index = 0;

  while (current != null) {
    if (current.data === value) {
      return index;
    }

    index++;
    current = current.next;
  }

  return -1;
}