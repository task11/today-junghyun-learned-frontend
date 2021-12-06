
// function solution(a, list) {
//     let answer = [];
//     let target = 0;

//     for (let x of list) {
//         x = Number(String(x).split("").reverse().join(""));
//         for (let j = 2; j < x; j++) {
//             if (x % j === 0) {
//                 break;
//             } else {
//                 target += 1;
//             }
//         }

//         if (x - 2 === target) {
//             answer.push(x);
//         }
//         target = 0;
//     }
//     return answer;
// }

// console.log(solution(9, [32, 55, 62, 20, 250, 370, 200, 30, 100]));


function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function solution(arr) {
    let answer = [];
    for (let x of arr) {
        let res = 0;
        while (x) {
            let t = x % 10;
            res = res * 10 + t;
            x = parseInt(x / 10);
        }
        if (isPrime(res)) answer.push(res);
    }
    return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

