// mapper/sql/CustomElementRegistry.js
// Table : customer.js

const selectAll =
`SELECT id
        ,name
        ,email
        ,phone
        ,address
FROM    customers
ORDER BY id`;

const selectById = 
`SELECT id
        ,name
        ,email
        ,phone
        ,address
FROM    customers
WHERE   id = ?
ORDER BY id`; //  ?  : 대체 문자// sql문 안에 ? 가 있다는건 ? 가 대체된다.  

const insertInfo = 
`INSERT INTO customers (name, email, phone, address)
 VALUES (?,?,?,?)`;  // ? 가 많다? => 배열로 값을 보내주면 순서대로 들어가 준다

 //{name : 'H', address : 'daegu'}
 //SET name = 'H', address = 'daegu'
const updateInfo = 
`UPDATE customers
SET ?
WHERE id = ?`// 배열[객체, 단일값]


const deletInfo =
`DELETE FROM customers
WHERE id = ?`

module.exports ={
  selectAll,
  selectById,
  insertInfo,
  updateInfo,
  deletInfo
}