// test-server/emp-route.js
// 라우터 모듈 
const express = require('express')
const router = express.Router()
const cusServ = require('../service/empService.js')


//test
// router.get('/cu',(req,res)=>{
//   let list =  cusServ.listAll()
//   res.send(list)
// })

router.get('/employees',async (req,res)=>{
    let list =  await cusServ.listAll()
    res.send(list)
  })

router.get('/employees/:id',async(req,res)=>{
  let id = req.params.id
  let list = await cusServ.listOne(id)
  res.send(list)
})

router.post('/employees',async(req,res)=>{
  let cusInfo = req.body
  let result = await cusServ.insertOne(cusInfo)
  res.send(result)
})

router.put('/employees/:id',async(req,res)=>{
  let id = req.params.id
  let cusInfo = req.body
  let result = await cusServ.modeOne(cusInfo,id)
  res.send(result)
})

router.delete('/employees/:id',async(req,res)=>{
  let id = req.params.id
  let result = await cusServ.delOne(id)
  res.send(result)
})
module.exports =router