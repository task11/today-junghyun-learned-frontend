function solution(a, b, c) {
    let max, answer = "YES";
    let sum = a + b + c;
    if (a > b) {
        max = a;
    }
    else if (b > c) {
        max = b;
    }
    else {
        max = c;
    }
    if ((sum - max) <= max) answer = "NO";

    return answer;
}

console.log(solution(13, 33, 17));