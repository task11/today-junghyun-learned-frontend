function solution(a, b, c, d, e, f, g) {
    let answer;

    if (a > b) answer = b;
    else if (answer > c) answer = c;
    else if (answer > d) answer = d;
    else if (answer > e) answer = e;
    else if (answer > f) answer = f;
    else if (answer > g) answer = g;


    return answer;
}

console.log(solution(5, 3, 7, 11, 2, 15, 17));