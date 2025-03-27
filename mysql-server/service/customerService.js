// service/customerService.js
const mariaDB = require('../mapper/mapper.js')

// 전체 조회
const findAll = async()=>{
  let list = await mariaDB.query('selectAll')
  return list;
}

//단건조회
const findById = ()=>{}

//등록
const addCustomer = ()=>{}

//수정
const modifyCustomerInfo = ()=>{}

//삭제
const removeCustomerInfo = ()=>{}



module.exports ={
  findAll,
  findById,
  addCustomer,
  modifyCustomerInfo,
  removeCustomerInfo
}