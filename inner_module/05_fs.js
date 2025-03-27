//inner_module/05_fs.js

const fs = require('fs')

const data = 'Hello, World 마 라틴 마'

//fs의 메소드 또한 비동기 방식이다.
fs.writeFile('./sample.txt'
              ,data
              ,'utf-8' //utf-8 같은 인코딩 기준
              ,(err)=>{ //후속 작업 ... 에러가 발생했을때는 err매개변수가 넘어오고 아닐때는 매개변수 없 (fs.write 메소드는 매개변수가 err 밖에 없어서)
                if(err){
                  throw err;
                }
                console.log('파일쓰기 완료!');
                })

//write 파일은 이전 내용이 뭔지 상관없이 그냥 파일을 덮어 쓴다. 
//따라서 덮어쓰기를 방지하기 위해 파일을 읽은 다음 그끝에 추가하는 방식을 사용하는게 보통이다

fs.readFile('./sample.txt','latin1',(err,result)=>{
  if(err) throw err;
  console.log(result);
})