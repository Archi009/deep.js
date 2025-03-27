//router/emp_routers.js
const express = require('express')
const router = express.Router()  //express객체를 기반으로 서버를 생성하는게 아니라 Router 객체를 기반으로 Router를 만들어진다.
const {query} = require('../mapper/emp-map.js')

// REST API               (end point : method, uri)   
// 전체 조회 GET + '/emps' 메소드 정보와 uri 정보로 원하는것이 무엇인지 알 수 있다.
router.get('/emps',(req,res)=>{  //end point
  let list = query('SELECT')  //서비스
  // console.log(list);
  res.send(list);             //응답형태
});

// 단건조회 : GET +'/emps/100'
router.get('/emps/:empId',(req,res)=>{ // : (콜론) 을 붙여서 위치하는것은 경로가 아니라 값이다. 라고 지정
  let searchId = req.params.empId;  
  let info = query('SELECT',null,{id:searchId});
  res.send(info[0]);                // node.js 에서는 mybatis 처럼 쿼리문의 결과값을 내가 원하는 데이터 타입에 알맞게 파싱해서 받아오는 형식을 사용하지 못하기 때문에 (node에서 조회는 항상 배열에 담긴다) 반환해줄 값을 잘 정해 줘야한다 (베열의 몇번째[n] 과같이 배열 안의 값을 따로 빼준다거나.)
})

// 등록 : POST + '/emps'
router.post('/emps',(req,res)=>{
  let addInfo = req.body
  query('INSERT', addInfo)
  console.log(addInfo);
  res.send({'result':'success'})
 })

// 수정 : PUT + '/emps/100   // 100에대한 정보는 알 수 없다. 100은 javascript에서 param, java에선 path value 라고 한다.
router.put('/emps/:eId',(req,res)=>{
  let searchId = req.params.eId
  let updateInfo = req.body
  query('UPDATE',updateInfo,{id : searchId})
  res.send({'result':'success','id' : searchId})
 })

 // 삭제 : DELETE + '/emps/100'
 router.delete('/emps/:empId',(req,res)=>{
  let searchId = req.params.empId;  
  query('DELETE',null,{id:searchId});
  res.status(204).send('Completed');   //status 상태코드를 변경하기위해 (204:No Content)
 });



module.exports = router  //서버에 넘겨주기위해 export