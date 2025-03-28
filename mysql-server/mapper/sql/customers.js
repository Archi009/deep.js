// mapper/sql/customer.js
// Table : customers

/*  쿼리문을 위해 넘겨줘야하는 값을 정할 규칙
1) ? 갯수
1-1) 1개 : 단일 값
1-2) 2개 이상 : 배열

2) ? 앞에 컬럼의 유무
2-1) 컬럼이 존재하는 경우 기본 데이터 값(문자, 숫자, 날짜 등)
2-2) 컬럼이 없는 경우 객체
*/

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