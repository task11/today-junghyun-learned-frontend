function wordsTrie(words) {
  const root = {};
  for (let item of words) {
    let curr = root;
    for (let str of item) {
      if (!curr[str]) curr[str] = [0, {}];
      curr[str][0] = 1 + (curr[str][0] || 0);
      curr = curr[str][1];
    }
  }

  return root;
}


function solution(words) {
  let result = 0;
  const trie = wordsTrie(words);

  for (let item of words) {
    let count = 0;
    let curr = trie;

    for (let [index, str] of [...item].entries()) {
      count++;
      if (curr[str][0] <= 1) {
        break;
      }
      curr = curr[str][1];
    }
    result += count;
  }
  return result;
}


console.log(solution(["go", "gone", "guild"]));