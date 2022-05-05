
function solution(arr) {
    var answer = 0;
    let row = 0;
    let col = 0;
    let i = 0;
    let j = 0;
    let x = 0;
    let y = 0;
    let z = arr.length - 1;
    let yline = 0;
    let zline = 0;

    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            row += arr[i][j];
            col += arr[x][i];
            x += 1;
        }
        yline += arr[i][y];
        zline += arr[i][z];

        // if(row >= col && row >= answer){
        //     answer = row;
        // }else if(row < col && col >= answer){
        //     answer = col;
        // }
        answer = Math.max(answer, row, col);

        x = 0;
        row = 0;
        col = 0;
        y++;
        z--;
    }

    // if(yline > answer){
    //   answer = yline;
    // }else if( zline > answer){
    //   answer = zline;
    // }
    answer = Math.max(answer, zline, yline);

    return answer;
}

const list = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19]
]
console.log(solution(list));
//155
