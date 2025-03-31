// test-server/app.js
require('dotenv').config({path : './mapper/dbConfig.env'})
console.log(process.env);

const express = require('express')
const app = express()
const cusRouter = require('./router/emp-route.js')
const port = 3000

app.use(express.urlencoded({extended:false}))
app.use(express.json())



app.listen(port,()=>{
  console.log('서버가 실행됩니다.');
  console.log(`http://localhost:${port}`);
})

app.get('/',(req,res)=>{ //test
  res.send('Hello World!!')
})


app.use('/',cusRouter)