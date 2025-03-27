// app.js
const express = require('express')
const app = express()

app.listen(5000,()=>{
  console.log('Server Start!');
  console.log('http://localhost:5000');
})

/*
    content-type       | express
    GET  + QueryString | request.query
    POST + QueryString | request.body
    JSON               | request.body
    경로에 값을 전달   | request.params (ex:'emp/100'의 100)
 */

// 미들웨어 등록 (?)
// appliction/x-www-form-urlencoded
app.use(express.urlencoded({extended : false})) //extended : 중첩여부를 어떻게 처리할것이냐 false(기본),true(객체 배열과 같이 좀 더 복잡한 값을 querystring으로 받겠다;굳이? json쓰지)
// application/json
app.use(express.json())

const empRouter = require('./router/emp_routers.js') //routrer를 import 
app.use('/test',empRouter) //각 라우터마다 구분을 위해 경로를 추가/지정할 수 있다.

// Error handler
app.use(function(err,req,res,next){
  res.status(500).json({statusCod: res.statusCode,errMessage : err.message})
  // res.status(500).sendFile('error.html') // 에러 발생시 html 이나 이미지를 보낼 수 있을까? 에서 미들웨어는 안되는듯?
})

app.get('/error',(req,res,next)=>{
  next (new Error('Process Fail! CheckData!'))
})

// 정적파일 (css,html,js,image 등) 처리
// app.use(express.static('./fruits')) //따로 마운트 경로를 설정하지 않으면 /가 시작이다.
app.use('/img',express.static('./fruits')) //따로 마운트 경로를 설정하지 않으면 /가 시작이다.