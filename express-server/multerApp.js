//multerApp.js

const multer = require('multer')
const path = require('path')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const storage = multer.diskStorage({
  destination : function(req,file,cb){ //저장경로
    cb(null,'uploads/')                //저장 위치인 폴더를 자동으로 만들어 주지 않는다. 만들어 주자 . 자동으로 하고 싶으면 fs모듈로 하는게 좋은디, 굳이?
  },
  filename : function(req,file,cb){
    let svaedFile = (new Date()).valueOf() + path.basename(file.originalname)
    cb(null,svaedFile)
  }
});

const upload = multer({storage:storage});

app.listen(5000, ()=>{
  console.log('Server Start!!!');
})

app.post('/profile',upload.single('avatar'),(req,res)=>{ //'avatar'를 필드명으로 파일을 받아오겠다.
  console.log(req.file);      //게시글의 미디어파일
  console.log(req.body);      //게시글의 내용등 
  res.send(file.path)
})

app.post('/photos',upload.array('photos',8),(req,res)=>{ //upload 여러개 메소드는 any 와 array 가 있는데 any는 제한이 없어서 서버 물량 터짐. 제한을 둔다 8
  for(let file of req.files){
    console.log(file);
  }
})