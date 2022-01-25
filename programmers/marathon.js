function solution(participant, completion) {
  let answer = '';
  participant.sort();
  completion.sort();

  for (let x = 0; x < participant.length; x++) {
    if (participant[x] !== completion[x]) {
      answer = participant[x];
      break;
    }
  }




  return answer;
}

console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));


//best answer

// function solution(participant, completion) {
//     const map = new Map();

//     for(let i = 0; i < participant.length; i++) {
//         let a = participant[i], 
//             b = completion[i];

//         map.set(a, (map.get(a) || 0) + 1);
//         map.set(b, (map.get(b) || 0) - 1);
//     }

//     for(let [k, v] of map) {
//         if(v > 0) return k;
//     }

//     return 'nothing';
// }
