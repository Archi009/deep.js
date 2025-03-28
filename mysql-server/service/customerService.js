// service/customerService.js
const mariaDB = require('../mapper/mapper.js')

// 전체 조회
const findAll = async()=>{
  let list = await mariaDB.query('selectAll')
  return list;
}

//단건조회
const findById = async(custId)=>{
  let info = (await mariaDB.query('selectById', custId))[0]  // mariaDB는 결과문을 모두 배열로 받아온다. 따라서 service에서 원하는 결과물을 정확히 만들어 줄 필요가 있다.
  return info
}

//등록
const addCustomer = async(custInfo)=>{ // client 측에선 객체로 정보를 넘겨준다
  let columnList = ['name','email','phone','address']
  let addInfo = convertAray(custInfo,columnList)
  let result = await mariaDB.query('insertInfo',addInfo)
  return result
}

//객체를 배열로 바꾸는 함수
const convertAray=(target, list)=>{
  let aray = []
  for( let field of list){
    let val = target[field]
    aray.push(val)
  }
  return aray
}

//수정
const modifyCustomerInfo = async (custInfo,custId)=>{
  let updateInfo = [custInfo,custId]
  let result = await mariaDB.query('updateInfo',updateInfo )
  return result
}

//삭제
const removeCustomerInfo = async (custId)=>{
  let deletInfo = await mariaDB.query('deletInfo', custId)
  return deletInfo
} 



module.exports ={
  findAll,
  findById,
  addCustomer,
  modifyCustomerInfo,
  removeCustomerInfo
}