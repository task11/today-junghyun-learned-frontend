

function solution(clothes) {
  const hash = new Map();

  const a = clothes.forEach(item => {
    hash.set(item[1], item[0]);
  });
  console.log(a);
  console.log(hash);
}

solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]);