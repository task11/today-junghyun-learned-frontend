
function solution(a, list) {
    var answer = 0;
    let sum = 0;
    let max = 0;
    let maxIndex = 0;
    let maxList = [];
    let sumList = [];
    for (let x of list) {
        x = String(x);
        for (var i = 0; i < x.length; i++) {
            sum += Number(x[i])
        }
        if (sum > max) {
            max = sum;
            maxIndex = i;
        }
        sumList.push(maxIndex);
        sum = 0;
    }
    console.log(sumList);

    return answer;
}

console.log(solution(7, [128, 460, 603, 40, 521, 137, 123]));
// N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력
// 하는 프로그램을 작성하세요. 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
// 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.
// ▣ 입력예제 1
// 7
// 128 460 603 40 521 137 123
// ▣ 출력예제 1
// 137
