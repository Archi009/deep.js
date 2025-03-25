// app.js
const express = require('express')
const app = express()

app.listen(5000,()=>{
  console.log('Server Start!');
  console.log('http://localhost:5000');
})

// REST API 
// 전체 조회 GET + '/emps' 메소드 정보와 uri 정보로 원하는것이 무엇인지 알 수 있다.
app.get('/emps');

// 등록 : POST + '/emps'
app.post()

// 수정 : PUT + '/emps/100   // 100에대한 정보는 알 수 없다. 
app.put()

// 삭제 : DELETE + '/emps/100'
app.delete();