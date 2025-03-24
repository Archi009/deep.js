//js with server/ 01_const.js

const count = 0 ;

// var count = 10; 중복선언 차단

//count = 10; //Assignment to constant variable. 상수값에대한 변경 시도 에러
console.log(count);

const user = {
  "id": "user01",
  "name" : " Hong"
}

user.id = "mgro01"
user.name = "Kang"
user.ssn = "981015"
console.log(user); //참조변수 인 객체는 const의 제약을 무시하기도 한다.

user ={}// TypeError: Assignment to constant variable. 객체의 값들은 변경가능하나, 객체 그 자체를 변경하는것은 불가능하다
console.log(user);
