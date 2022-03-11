
function soultion(num, a, b){
  const answer = [];
  
  for(let i = 0; i < 5; i++){
    if(a[i] === b[i]){answer.push("D");
    }else if(a[i] === 3 && b[i] === 1){answer.push("B");
    }else if(a[i] === 1 && b[i] === 3){answer.push("A");
    }else if(a[i] < b[i]){answer.push("B");
    }elseanswer.push("A");
    
    // if(a[i]===b[i]) answer+="D ";
    //     else if(a[i]===1 && b[i]===3) answer+="A ";
    //     else if(a[i]===2 && b[i]===1) answer+="A ";
    //     else if(a[i]===3 && b[i]===2) answer+="A ";
    //     else answer+="B ";

  }

  return answer;
}



console.log(soultion([5], [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));

