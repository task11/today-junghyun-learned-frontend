
// // Data와 Pointer를 가지고 있는 객체
// function Node(data) {
//   this.data = data;
//   this.next = null;
// }

// // Head와 Length를 가지고 있는 객체
// function LinkedList() {
//   this.head = null;
//   this.length = 0;
// }

// // 연결 리스트 내에 노드 개수 확인
// LinkedList.prototype.size = function () {
//   return this.length;
// };

// // 객체 내에 노드 존재 여부 파악
// LinkedList.prototype.isEmpty = function () {
//   return this.length === 0;
// };

// let ll = new LinkedList();
// console.log(ll);

// ll.head = new Node(10);
// ll.length++;
// console.log(ll);

// ll.head.next = new Node(100);
// ll.length++;
// console.log(ll);

// // 노드 출력
// LinkedList.prototype.printNode = function () {
//   for (let node = this.head; node != null; node = node.next) {
//     process.stdout.write(`${node.data} -> `);
//   }
//   console.log("null");
// };

// // 연결 리스트 가장 끝에 노트 추가
// LinkedList.prototype.append = function (value) {
//   let node = new Node(value);
//   let current = this.head;

//   if (this.head === null) {
//     this.head = node;
//   } else {
//     while (current.next != null) {
//       current = current.next;
//     }
//     current.next = node;
//   }

//   this.length++;
// };

// ll.append(1);

// ll.append(1000);

// ll.printNode();
// console.log(ll.size());

// // position위치에 노드 추가(default = 0)
// LinkedList.prototype.insert = function (value, position = 0) {
//   if (position < 0 || position > this.length) {
//     return false;
//   }

//   let node = new Node(value);
//   let current = this.head;
//   let index = 0;
//   let prev; // 이전 노드 값 저장

//   if (position === 0) {
//     node.next = current;
//     this.head = node;
//   } else {
//     while (index++ < position) {
//       prev = current;
//       current = current.next;
//     }
//     node.next = current;
//     prev.next = node;
//   }
//   this.length++

//   return true;
// }

// let ll2 = new LinkedList();

// ll2.insert(10);
// ll2.insert(100);
// ll2.insert(1000);

// ll2.insert(123, 2);

// ll2.printNode();

// console.log(ll2);

// // value 데이터를 찾아 노드 삭제
// LinkedList.prototype.remove = function (value) {
//   let current = this.head;
//   let prev = current;

//   while (current.data != value && current.next != null) {
//     prev = current;
//     current = current.next;
//   }

//   if (current.data != value) {
//     return null;
//   }

//   if (current === this.head) {
//     this.head = current.next;
//   } else {
//     prev.next = current.next;
//   }

//   this.length--;

//   return current.data;
// }

// // removeAt() : position 위치 노드 삭제
// LinkedList.prototype.removeAt = function (position = 0) {
//   if (position < 0 || position >= this.length) {
//     return null;
//   }

//   let current = this.head;
//   let index = 0;
//   let prev;

//   if (position == 0) {
//     this.head = current.next;
//   } else {
//     while (index++ < position) {
//       prev = current;
//       current = current.next;
//     }
//     prev.next = current.next;
//   }

//   this.length--;

//   return current.data;
// }

// LinkedList.prototype.indexOf = function (value) {
//   let current = this.head;
//   let index = 0;

//   while (current != null) {
//     if (current.data === value) {
//       return index;
//     }

//     index++;
//     current = current.next;
//   }

//   return -1;
// }

// LinkedList.prototype.remove2 = function (value) {
//   let index = this.indexOf(value);
//   return this.removeAt(index);
// }

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head, length) {
    this.head = null;
    this.length = 0;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  // 데이터만 출력 ( data -> data -> ... -> null)
  printNode() {
    for (let node = this.head; node != null; node = node.next) {
      process.stdout.write(node.data + " -> ");
    }
    console.log('null');
  }

  // tail append
  append(value) {
    const node = new Node(value);
    let curr = this.head;


    if (this.head === null) {
      this.head = node;
    } else {
      while (curr.next != null) {
        curr = curr.next;
      }
      curr.next = node;
    }

    this.length++;
  }

  // value remove
  remove(value) {

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
    } else {
      prev.next = current.next;
    }

    this.length--;

    return current.data;
  }
}


export { LinkedList };