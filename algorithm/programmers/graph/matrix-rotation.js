// rows x rowumns 크기인 행렬이 있습니다. 행렬에는 1부터 rows x columns까지의 숫자가 한 줄씩 순서대로 적혀있습니다. 이 행렬에서 직사각형 모양의 범위를 여러 번 선택해, 테두리 부분에 있는 숫자들을 시계방향으로 회전시키려 합니다. 각 회전은 (x1, y1, x2, y2)인 정수 4개로 표현하며, 그 의미는 다음과 같습니다.

// x1 행 y1 열부터 x2 행 y2 열까지의 영역에 해당하는 직사각형에서 테두리에 있는 숫자들을 한 칸씩 시계방향으로 회전합니다.
// 다음은 6 x 6 크기 행렬의 예시입니다.

function solution(row, col, query) {
  const matrix = Array.from({ length: row }, (_, r) => {
    return Array.from({ length: col }, (_, c) => r * col + c + 1);
  });

  return query.map(item => rotation(matrix, item));


}

function findMin(a, b) {
  return a > b ? b : a;
}

function rotation(matrix, [x1, y1, x2, y2]) {
  x1--, y1--, x2--, y2--;
  const tmp = matrix[x1][y1];
  let minNum = tmp;

  for (let i = x1; i < x2; i++) {
    matrix[i][y1] = matrix[i + 1][y1];
    minNum = findMin(matrix[i + 1][y1], minNum);
  }

  for (let i = y1; i < y2; i++) {
    matrix[x2][i] = matrix[x2][i + 1];
    minNum = findMin(matrix[x2][i + 1], minNum);
  }

  for (let i = x2; i > x1; i--) {
    matrix[i][y2] = matrix[i - 1][y2];
    minNum = findMin(matrix[i - 1][y2], minNum);
  }

  for (let i = y2; i > y1; i--) {
    matrix[x1][i] = matrix[x1][i - 1];
    minNum = findMin(matrix[x1][i - 1], minNum);
  }

  matrix[x1][y1 + 1] = tmp;

  return minNum;
}

console.log(solution(100, 97, [[1, 1, 100, 97]]));

