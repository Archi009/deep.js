// app.js
require('dotenv').config({path : './mapper/dbConfig.env'})
console.log(process.env);// 연결 테스트

const express = require('express')
const app = express()
const cusRouter = require('./router/customer_router.js')



//미들웨어
//application/x-www-form-urlencoded
app.use(express.urlencoded({extended:false}))
//application/json
app.use(express.json())

app.listen('3000',()=>{
  console.log('Server Start');
  console.log('http://localhost:3000');
})

//라우팅
//루트등록
app.get('/',(req,res)=>{
  res.send('Welcome!!')
})

app.use('/',cusRouter)
