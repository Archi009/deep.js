// js with server/09_async_await.js

function webServerConnect() {
  return fetch('https://jsonplaceholder.typicode.com/posts/1', {
      headers: {
        'Cache-Control': 'no-cache'
      }
    })
    .then(response => response.json())
    .catch(err => console.log(err));
}

async function getJSONData() {// async를 쓰면 자동으로 앞에 promise가 담기게 된다 (비동기 작업이 된다.) / async,await => 비동기 작업을 순차적으로 진행할 경우 사용
  const result = await webServerConnect();// await => 비동기 작업이 끝날때까지 기다려라. 
  console.log(1,result);
  console.log(result);
}
webServerConnect()
.then(result => console.log(2,result));

getJSONData();// end 먼저 출력된후 getJSONData()가 출력됨. => 비동기형식으로 함수가 내장되어졌다.
console.log('End!');