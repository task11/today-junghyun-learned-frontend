
function solution(bridge_length, weight, truck_weights) {
  let currentWeight = weight;
  const queue = [];
  let time = 1;
  let index = 1;

  queue.push(truck_weights[0]);
  currentWeight -= truck_weights[0];

  while (index !== truck_weights.length) {
    if (currentWeight - truck_weights[index] >= 0 && queue.length < bridge_length) {
      queue.push(truck_weights[index]);
      currentWeight -= truck_weights[index];
      index++;
    } else {
      currentWeight += queue.shift();
    }
    time++;
  }

  if (queue.length > 0) {
    queue.shift();
    time++;
  }


  return time;

}

console.log(solution(2, 10, [7, 4, 5, 6]));