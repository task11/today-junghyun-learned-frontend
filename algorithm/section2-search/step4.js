
function solution(arr){         
    var answer= 0;
    var stack = 0;

    for(let x of arr){
        if(x === 1){
            answer =answer + stack + 1;
            stack += 1;
        }else{
            stack = 0;
        }
    }
    
    
    return answer;
}

const list = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]
console.log(solution(list));
