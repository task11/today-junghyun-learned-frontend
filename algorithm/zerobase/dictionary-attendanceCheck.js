function solution(arr1, arr2) {
  let result = [];
  let dict = {};

  for (x of arr1) {
    dict[x] = 1;
  }

  for (x of arr2) {
    if (dict.hasOwnProperty(x)) {
      dict[x] += 1;
    }
  }

  for (x in dict) {
    if (dict[x] === 2) {
      result.push(x);
    }
  }

  return result;
}

let input = [
  // TC: 1
  [
    ["Kali", "Oliver", "Naomi"],
    ["Oliver", "Naomi", "Maya"],
  ],

  // TC: 2
  [
    ["Roxy", "Olga", "Kara", "Nana"],
    ["Oliver", "Roxy", "Kara", "Nana", "Maya"],
  ],

  // TC: 3
  [
    ["Roxy", "Ravi", "Nana", "Rei", "Karis", "Mana", "Naomi"],
    ["Olga", "Nana", "Rei", "Naomi", "Kali", "Ravi", "Kara"],
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i][0], input[i][1]));
}