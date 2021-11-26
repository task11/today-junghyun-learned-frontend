
function solution(s){         
    var answer= "YES";
    var n = s.length;
    s = s.toLowerCase();

    for(let i=0; i<n/2; i++){
        if(s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122){
            if(s[i] !== s[n - i - 1]){
            answer = "NO";
        }
        }
    }
    return answer;
}

const str = "found7, time: study; Yduts; emit, 7Dnuof"
console.log(solution(str));


// function solution(s){
//     let answer="YES";
//     s=s.toLowerCase().replace(/[^a-z]/g, '');
//     if(s.split('').reverse().join('')!==s) return "NO";
//     return answer;
// }

// let str="found7, time: study; Yduts; emit, 7Dnuof";
// console.log(solution(str));