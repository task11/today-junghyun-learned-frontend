function solution(progresses, speeds) {
  const result = [];
  const queue = [];

  for (const item of progresses) {
    queue.push(item);
  }

  while (!(queue.length <= 0)) {
    for (let i = 0; i < queue.length; i++) {
      queue[i] += speeds[i];
    }
    if (queue[0] >= 100) {
      let count = 0;
      while (queue[0] >= 100 && queue.length > 0) {
        queue.shift();
        speeds.shift();
        count++;
      }
      result.push(count);
    }
  }

  return result;
}


console.log(solution([95, 95, 95, 95], [4, 3, 2, 1]));

function solution2(progresses, speeds) {
  var answer = [];

  while (speeds.length > 0) {
    // 개발
    for (let i in speeds) {
      if (progresses[i] < 100) {
        progresses[i] += speeds[i];
      }
    }

    // 배포
    let deploy_count = 0;
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      deploy_count++;
    }
    if (deploy_count > 0) {
      answer.push(deploy_count);
    }
  }

  return answer;
}
