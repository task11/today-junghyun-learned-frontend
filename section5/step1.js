function solution(arry1, arry2){
    let answer = '';
    
    for(let x of arry1){
        arry2.push(x);
    }

    console.log(arry2.sort());

    return answer;
}

solution([1,3,5], [2,3,6,7,9])