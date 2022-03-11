// function solution(arr) {
//     var answer = "";
//     var ranking = arr.length;

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (i != j) {
//                 if ((arr[i] > arr[j]) || (arr[i] === arr[j])) {
//                     ranking -= 1;
//                 }
//             }
//         }
//         answer += ranking;
//         ranking = arr.length;
//     }
//     return answer;
// }

// const list = [87, 89, 92, 100, 76]
// console.log(solution(list));

function solution(arr) {
    let n = arr.length;
    let answer = Array.from({ length: n }, () => 1);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[j] > arr[i]) answer[i]++;
        }
    }
    return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));