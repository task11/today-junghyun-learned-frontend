// this
// mdn example
const text = {
  prop: 42,
  func: function () {
    return this.prop;
  }
};

console.log(text.func()); // 42

// custom example
// apply
// bind
const person = {
  name: 'kim',
  getLastName: function () {
    return this.name + '입니다.';
  }
};

const person2 = {
  name: 'bae',
  getLastName: function () {
    return this.name + '일까용.';
  }
};

function sumName(firstName) {
  return firstName + ' ' + this.getLastName();
}


console.log(sumName.call(person, 'junghyeon'));
console.log(sumName.call(person2, 'yoon joo')); // call

console.log(sumName.apply(person, ['junghyeon', '?????'])); // apply

const sumNamePerson1 = sumName.bind(person); // bind !!! bind 시켜놓고 사용

console.log(sumNamePerson1('jungheee')); 