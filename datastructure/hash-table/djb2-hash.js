const HASH_SIZE = 1013; // 소수

class Element {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class HashTable {
  constructor() {
    this.table = new Array(HASH_SIZE);
    this.length = 0;
  }

  hashCode(key) {
    let hash = 5381; // seed (prime number)
    for (let i = 0; i < key.length; i++) {
      hash = hash * 33 + key.charCodeAt(i);
    }
    return hash % HASH_SIZE;
  }

  put(key, value) {
    let index = this.hashCode(key);
    console.log(`key: ${key} -> index: ${index}`);

    if (this.table[index] !== undefined) {
      return false;
    }

    this.table[index] = new Element(key, value);
    this.length++;

    return true;
  }

  remove(key) {
    let element = this.table[this.hashCode(key)];

    if (element !== undefined) {
      delete this.table[this.hashCode(key)];
      this.length--;
    }

    return element;
  }

  clear() {
    this.table = new Array(HASH_SIZE);
    this.length = 0;
  }

  size() {
    return this.length;
  }

  getBuffer() {
    let array = [];
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        array.push(this.table[i]);
      }
    }
    return array;
  }

  print() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i + " -> " + this.table[i].key + " : " + this.table[i].value);
      }
    }
  }
}

let ht = new HashTable();

ht.put("Ana", 172);
ht.put("Donnie", 183); // collision
ht.put("park", 33321111);

console.log(ht.remove("park"));
console.log(ht.getBuffer());
ht.print();