// Class Refactoring
function PersonFn(name, age) {
  this.name = name;
  this.age = age;
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Class Extention

// Super Class

class Man {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return (
      this.name + '은 ' + this.age + '세 이다.'
    )
  }
}

// Sub class
class Me extends Man {
  constructor(name, age) {
    super(name, age);
  }
}

const kim = new Me('ss', 111);

console.log(kim.getInfo());