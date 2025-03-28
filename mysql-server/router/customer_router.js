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
router.get('/customers/:id',async(req,res)=>{
  let custId = req.params.id                   //요청(req)의 params 객체에 담긴 내가 원하는 값을 가져온다.
  let custInfo = await cusServ.findById(custId)
  res.send(custInfo)
}) 

// 등록     : POST + '/customers' + JSON
router.post('/customers', async (req,res)=>{
  let addCust = req.body
  let result = await cusServ.addCustomer(addCust);
  // console.log(result);
  res.send(result)
})

// 수정     : PUT + '/customers/:id' + JSON
router.put('/customers/:id', async (req,res)=>{
  let custId = req.params.id
  let custInfo = req.body
  let result = await cusServ.modifyCustomerInfo(custInfo,custId)
  res.send(result)
})

// 삭제     : DELETE + '/customers/:id'
router.delete('/customers/:id',async (req,res)=>{
  let custId = req.params.id
  let result = await cusServ.removeCustomerInfo(custId)
  res.send(result)
})

module.exports = router;