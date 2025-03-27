//router/customer_router.js
//라우터 모듈
const express = require('express')
const router = express.Router()
const cusServ = require('../service/customerService.js')

// costomers 
// 전체조회 : GET + '/customers'
router.get('/customers',async(req,res)=>{
  let custList = await cusServ.findAll()
  res.send(custList)
});

// 단건조회 : GET + '/customers/:id'
router.get('/customers/:id',(req,res)=>{
  
}) 

// 등록     : POST + '/customers' + JSON
router.post('/customers',(req,res)=>{
  
})

// 수정     : PUT + '/customers/:id' + JSON
router.put('/customers/:id',(req,res)=>{
  
})

// 삭제     : DELETE + '/customers/:id'
router.delete('/customers/:id',(req,res)=>{
  
})

module.exports = router;