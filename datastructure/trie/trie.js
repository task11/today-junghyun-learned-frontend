class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(
          char,
          new Node(currentNode.value + char)
        );
      }

      currentNode = currentNode.children.get(char);
    }
  }
}

const trie = new Trie();
trie.insert("go");
trie.insert("gone");
trie.insert("guild");

console.log(trie.root.children.get("g").children.get("o").children.has("gone"));