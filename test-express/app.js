// app.js

const express = require('express')
const app = express()

// 서버가 제공하는 서비스
app.get('/',(reqest, response)=>{ //routing getmethod uri: / 
  response.send('Server Connect!!')
})

// 서버 실행
app.listen(3000,()=>{
  console.log('서버가 실행됩니다.');
  console.log('http://localhost:3000');
})