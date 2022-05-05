
function solution(arr){         
    let answer= 0;
    let x= 1;
    let y = 1;
    let n = arr.length;
    let list = Array.from(Array(n+2), () => Array(n+2).fill(0));
    
    for(let ii=0; ii<n; ii++){
        for(let jj=0; jj<n; jj++){
            list[x][y] = arr[ii][jj];
            y++;
        }
        y=1;
        x++;
    }

    n = list.length;
    for(let i=1; i<n-1; i++){
        for(let j=1; j<n-1; j++){
                if((list[i][j] > list[i][j + 1]) && (list[i][j] > list[i][j - 1]) && (list[i][j] > list[i + 1][j]) && (list[i][j] > list[i - 1][j])){
                answer++;
                }
        }
    }
    

    return answer;
}

const list = [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2]
]
console.log(solution(list));



// function solution(arr){  
//     let answer=0;
//     let n=arr.length;
//     let dx=[-1, 0, 1, 0];
//     let dy=[0, 1, 0, -1];
//     for(let i=0; i<n; i++){
//         for(let j=0; j<n; j++){
//             let flag=1;
//             for(let k=0; k<4; k++){
//                 let nx=i+dx[k];
//                 let ny=j+dy[k];
//                 if(nx>=0 && nx<n && ny>=0 && ny<n && arr[nx][ny]>=arr[i][j]){
//                     flag=0;
//                     break;
//                 }
//             }
//             if(flag) answer++;
//         }
//     }  
      
//     return answer;
// }

// let arr=[[5, 3, 7, 2, 3], 
//          [3, 7, 1, 6, 1],
//          [7, 2, 5, 3, 4],
//          [4, 3, 6, 4, 1],
//          [8, 7, 3, 5, 2]];
// console.log(solution(arr));