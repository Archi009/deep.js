// middleApp.js
const express = require('express')
const app = express()
// /미들웨어 등록 (설치해야한다!)
const session = require('express-session')
const cors = require('cors')

let sessionSetting = session({
  secret : 'slkdfslajflkjas!@%K!@%!!@2f1!',
  resave : false, //세션 저장소를 사용할때 변경사항이 있을때만? 변경사항이 없어도
  saveUninitialized : true, //세션이 명시적으로 필요할때만? 아니면 계속
  cookie : { //session 이 브라우저측에 저장 될때 SessionId가 어떻게 저장될건지 http에서? https에서? 최대 유효기간
    httpOnly : true,  //자바스크립트에서 cookie에 접속하지 못하게
    secure : false,
    maxAge : 60000
  }
})

app.use(sessionSetting) //sesison에 대한 설정값을 서버에 넣어줌

app.use(express.json())

//CORS 설정
// 1) 모든 origin과 모든 요청에 응답
// app.use(cors()) //모든 접속의 CORS 허용 보안 망

// 2)지정한 요청에 대해서만 응답 192.168.0.34
const corsOption ={
  origin : 'http://192.168.0.34:5500',
  optionsSuccessStatus : 200
}
app.use(cors(corsOption))
app.listen(3000,()=>{
  console.log('http://localhost:3000');
})

app.post('/login',(req,res)=>{
  const {id,pwd} = req.body
  req.session.user = id
  req.session.pwd = pwd
  req.session.save(function(err){ //실제 session에 저장하는 작업 (save는 비동기)
    if(err) throw err;
    // res.redirect('/')
    res.send(req.session)
  })
})

app.get('/',(req,res)=>{
  res.send(req.session)
})
app.get('/user',(req,res)=>{
  res.send(req.session.user)
})

app.get('/logout',(req,res)=>{
  req.session.destroy() //로그아웃시 세션 파기
  res.redirect('/')
})