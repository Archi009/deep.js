// mapper/mapper.js
const mariaDB = require('mariadb/callback')
const sqlList = require('./sql/customers.js')

const connectionPool = mariaDB.createPool({
  //필수 
  host : process.env.DB_HOST,
  port : process.env.DB_PORT,
  user : process.env.DB_USER,
  password : process.env.DB_PWD,
  database : process.env.DB_DATABASE,
  connectionLimit : process.env.DB_LIMIT,
  //선택
  permitSetMultiParamEntries : true,
  insertIdAsNumber : true,
  bigIntAsNumber : true,
  logger : {
    query : (msg) => console.log(msg),
    error : (err)=>console.log(err)
  }
})
//permitSetMultiparamEntries 객체를 받아 왔을때 파라매터 값을 알아서 분배해준다.
//insertIdasNumber  insert id 값이 넘어 왔을때 숫자로 강제로 변경시키기위함
//bigIntAsNumber    count 함수의 결과를  int로 안 받고 bigInt 로 받아와서 그걸 숫자로 바꿔주기 위함
//logger            log의 쿼리 와 에러를 console 찍어준다.
// let testSql = `SELECT * FROM customers`; query for test
 
// const query = ()=>{
//   return connectionPool.query(testSql,null,(err,result)=>{ //test
//     console.log(result);
//   })
// }
const query = (alias,values)=>{
  return new Promise((resolve,reject)=>{
    let executeSql = sqlList[alias];  //sqlList['selectAll','...']
    // console.log(`sql : ${executeSql}`);
    connectionPool.query(executeSql,values,(err,result)=>{
      if(err){
        reject({err});
      }else{
        resolve(result);
      }
    })
  })
  .catch(err =>{
    console.log(err);
    return err;
  })
}

module.exports={
  query
}