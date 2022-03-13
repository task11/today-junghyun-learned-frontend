// const solution = (id_list, report, k) => {
//   const answer = [];
//   const length = id_list.length;
//   const count = new Map();
//   const reportedUser = new Map();
//   const idIndex = new Map();
//   const saveReportId = Array.from({ length }, () => []);

//   for (let i = 0; i < length; i++) {
//     const id = id_list[i];

//     idIndex.set(id, i);
//   }

//   for (let i = 0; i < report.length; i++) {
//     const [userId, targetId] = report[i].split(" ");

//     if (!reportedUser.has(report[i])) {
//       const reportedCount = count.get(targetId) || 0;
//       const userIdIndex = idIndex.get(userId);

//       reportedUser.set(report[i], true);
//       count.set(targetId, reportedCount + 1);
//       saveReportId[userIdIndex].push(targetId);
//     }
//   }

//   for (let i = 0; i < length; i++) {
//     let result = 0;

//     for (let j = 0; j < saveReportId[i].length; j++) {
//       const targetId = saveReportId[i][j];

//       if (count.get(targetId) >= k) {
//         result++;
//       }
//     }

//     answer.push(result);
//   }

//   return answer;
// }


function solution(id_list, report, k) {
  let reports = [...new Set(report)].map(a => { return a.split(' ') });
  let counts = new Map();

  console.log(reports);

  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1)
  }

  console.log(counts);

  let good = new Map();

  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1)
    }
  }

  console.log(good);

  let answer = id_list.map(a => good.get(a) || 0)
  return answer;
}



const input = [["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2]

const input2 = [["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3];


console.log(solution(input[0], input[1], input[2]));


