
function solution(a, list) {
    let answer = [];
    let target = 0;

    for (let x of list) {
        x = Number(String(x).split("").reverse().join(""));
        for (let j = 2; j < x; j++) {
            if (x % j === 0) {
                break;
            } else {
                target += 1;
            }
        }

        if (x - 2 === target) {
            answer.push(x);
        }
        target = 0;
    }
    return answer;
}

console.log(solution(9, [32, 55, 62, 20, 250, 370, 200, 30, 100]));

