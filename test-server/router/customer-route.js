// test-server/customer-route.js
// 라우터 모듈 
const express = require('express')
const router = express.Router()
const cusServ = require('../service/cusService.js')


//test
// router.get('/cu',(req,res)=>{
//   let list =  cusServ.listAll()
//   res.send(list)
// })

router.get('/customers',async (req,res)=>{
    let list =  await cusServ.listAll()
    res.send(list)
  })

router.get('/customers/:id',async(req,res)=>{
  let id = req.params.id
  let list = await cusServ.listOne(id)
  res.send(list)
})

router.post('/customers',async(req,res)=>{
  let cusInfo = req.body
  let result = await cusServ.insertOne(cusInfo)
  res.send(result)
})

router.put('/customers/:id',async(req,res)=>{
  let id = req.params.id
  let cusInfo = req.body
  let result = await cusServ.modeOne(cusInfo,id)
  res.send(result)
})

router.delete('/customers/:id',async(req,res)=>{
  let id = req.params.id
  let result = await cusServ.delOne(id)
  res.send(result)
})
module.exports =router