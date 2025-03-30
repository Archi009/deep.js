// test-server/servcie/cusService.js

const mariaDB = require('../mapper/cusmapper.js')


const listAll=async()=>{
  let list = await mariaDB.query('selectAll')
  return list
};


const listOne= async(id)=>{
  let list = (await mariaDB.query('selectById',id))[0]
  return list
};


const insertOne= async(cusInfo)=>{
  let columnList = ['name','email','phone','address']
  let addInfo = convertAray(cusInfo,columnList)
  let result = await mariaDB.query('insertInfo',addInfo)
  return result
};


const modeOne=async(cusInfo,id)=>{
  let updateInfo = [cusInfo,id]
  let result = await mariaDB.query('updateInfo',updateInfo)
  return result
};


const delOne=async(id)=>{
  let result = await mariaDB.query('deletInfo',id)
  return result
};

//객체를 배열로 바꾸는 함수
const convertAray=(target, list)=>{
  let aray = []
  for( let field of list){
    let val = target[field]
    aray.push(val)
  }
  return aray
}

module.exports={
  listAll,
  listOne,
  insertOne,
  modeOne,
  delOne
}