function solution(N, stages) {
    let arr = [];
    let totalNum = stages.length;
    for (let i = 1; i <= N; i++) {
        let stageNum = stages.filter(ele => ele == i).length
        let failRatio = 0;
        if (stageNum === 0) {
            failRatio = 0;
        } else {
            failRatio = (stageNum) / totalNum;
        }
        totalNum -= stageNum;
        arr.push({ idx: i, ratio: failRatio });
    }
    arr.sort((a, b) => {
        if (a.ratio > b.ratio) {
            return -1;
        } else if (a.ratio < b.ratio) {
            return 1;
        } else {
            if (a.idx > b.idx) {
                return 1;
            } else {
                return -1;
            }
        }
    })
    return arr.map(ele => ele.idx);
}