// 문제
// 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.

// 1부터 N까지 자연수 중에서 M개를 고른 수열
// 같은 수를 여러 번 골라도 된다.
// 고른 수열은 비내림차순이어야 한다.
// 길이가 K인 수열 A가 A1 ≤ A2 ≤ ... ≤ AK-1 ≤ AK를 만족하면, 비내림차순이라고 한다.
// 입력
// 첫째 줄에 자연수 N과 M이 주어진다. (1 ≤ M ≤ N ≤ 8)

// 출력
// 한 줄에 하나씩 문제의 조건을 만족하는 수열을 출력한다. 중복되는 수열을 여러 번 출력하면 안되며, 각 수열은 공백으로 구분해서 출력해야 한다.

// 수열은 사전 순으로 증가하는 순서로 출력해야 한다.

const input = [[4, 2], [9, 7, 9, 1]];
const N = input[1].sort((a, b) => a - b);
const M = input[0][1];

const visited = Array.from({ length: N.length });
let result = [];
let output = [];

function dfs(count) {
  if (count === M) {
    result.push(`${output.join(' ')} \n`);
    return;
  }

  for (let i = 0; i < N.length; i++) {
    if (visited[i] === true) continue;
    visited[i] = true;
    output.push(N[i]);
    dfs(count + 1);
    output.pop();
    visited[i] = false;
  }
}

dfs(0);

console.log([... new Set(result)].join(""));