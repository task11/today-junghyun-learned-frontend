function solution(record) {
  let history = [];
  let user = {};

  for (const item of record) {
    const [action, uid, name] = item.split(" ");
    if (action !== "Leave") user[uid] = name;
    if (action !== "Change") history.push([action, { uid: uid, name: name || "" }]);
  }

  for (const item of history) {
    if (item[0] === "Enter") item[0] = "들어왔습니다.";
    else item[0] = "나갔습니다.";
  }


  return history.map(item => {
    return `${user[item[1]["uid"]]}님이 ${item[0]}`;
  });
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]));