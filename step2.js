function solution(a, b, c) {
    let max, answer = "YES";
    let sum = a + b + c;
    if (a < b) answer = a;
    else answer = b;
    if (c < answer) answer = c;

    if ((sum - max) <= max) answer = "NO";

    return answer;
}

console.log(solution(13, 33, 17));