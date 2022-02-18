
function solution(str){         
    var answer= "NO";
    let n = str.length;
    str = str.toLowerCase();
    


    for(let i=0; i<str.length / 2; i++){
        if(str[i] === str[n-1]){
            answer = "YES"
        }else{
            answer = "NO";
            break;
        }
        n--
    }

    
    return answer;
}

const str = "gooG";
console.log(solution(str));


// function solution(s){
//     let answer="YES";
//     s=s.toLowerCase();
//     let len=s.length;
//     for(let i=0; i<Math.floor(len/2); i++){
//         if(s[i]!=s[len-i-1]) return "NO";
//     }
//     return answer;
// }

// let str="goooG";
// console.log(solution(str));
