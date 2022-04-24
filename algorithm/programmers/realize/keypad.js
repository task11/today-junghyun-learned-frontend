function solution(numbers, hand) {
  let str = "";
  let history = {
    left: 10,
    right: 12
  };

  for (let item of numbers) {
    if (item === 1 || item === 4 || item === 7) {
      str += "L";
      history["left"] = item;
    } else if (item === 3 || item === 6 || item === 9) {
      str += "R";
      history["right"] = item;
    } else {
      if (item === 0) {
        item = 11;
      }
      const leftValue = Math.floor(Math.abs(item - history.left) / 3) + Math.abs(item - history.left) % 3; // 2 - 8 -> -6
      const rightValue = Math.floor(Math.abs(item - history.right) / 3) + Math.abs(item - history.right) % 3; // 2 - 3 -> -1

      if (leftValue > rightValue) {
        str += "R";
        history["right"] = item;
      } else if (leftValue < rightValue) {
        str += "L";
        history["left"] = item;
      } else {

        str += hand[0].toUpperCase();
        history[hand] = item;
      }
    }
    console.log(history);
  }

  return str;
}

console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));

// "LRLLRRLLLRR"
// "LRRRLRLLLRR"
