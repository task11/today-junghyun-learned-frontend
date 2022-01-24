// console.log(Boolean('Dog')); // true
// console.log(Boolean(0)); // false


// var score = 80;
// var copy = score;

// console.log(score);
// console.log(copy);

// score = 100;

// console.log(score);
// console.log(copy);

import _ from 'lodash';

const o = { x: { y: 1 } };

const c1 = { ...o };

console.log(o);
console.log(c1);

console.log(c1 === o);
console.log(c1.x === o.x);

const c2 = _.cloneDeep(o);
console.log(o);
console.log(c2);

console.log(c2 === o);
console.log(c2.x === o.x);

