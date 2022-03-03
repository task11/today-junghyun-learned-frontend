// XMLHttpRequest
const xhr = new XMLHttpRequest();
let data;

console.log(xhr);

xhr.onreadystatechange = function () {
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === 200) {
      console.log(xhr.response);
    } else {
      console.error("error");
    }
  }
}

xhr.open('GET', `https://jsonplaceholder.typicode.com/todos/3`);
xhr.send();

//Fetch

fetch(`https://jsonplaceholder.typicode.com/todos/1`)
  .then((response) => console.dir(response));


// API JSON
// {
//   "userId": 1,
//   "id": 3,
//   "title": "fugiat veniam minus",
//   "completed": false
// }

fetch(`https://jsonplaceholder.typicode.com/todos/2`)
  .then(res => res.json())
  .then(res => {
    console.log(`${res.userId} 님은 할일(${res.title})을 ${res.completed ? '완료하셨네요' : '하지않으셨네요'}`);
  }
  );

fetch(`https://jsonplaceholder.typicode.com/photos/2`)
  .then(res => res.json())
  .then(res => {
    console.log(res);
  }
  );

// JSON Parse(서버에서 데이터를 가져올 때) : JSON -> JavaScript Object
// JSON Stringify(서버로 데이터를 보낼 때) : JavaScript Object -> JSON

//console.log(data);

// const obj = JSON.parse(data);

// console.log(obj);

