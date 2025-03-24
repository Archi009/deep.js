//js with server/02_declare_func.js

// 1) 함수 선언문 => var 와 같이 중복 선언 가능, 호이스팅 ∴함수선언문은 js 문서 가장 아래로 내려 버린다.(최소한의 덮어쓰기 방지)
/*
 *함수 호이스팅
 var plus = function(x,y,z){
 return (x+y+z);
 } 
 */

let result = plus(1,2)
console.log(result);

function plus(x,y){
  return (x+y);
}

function plus(x,y,z){
  return (x+y+z);
}

// 2) 함수표현식 : cont를 사용해서 중복선언을 막는다. ∵함수 선언문과 다르게 가장위에 선언한다.
const printMsg = function(keyword){ //자바스크립트는 함수도 데이터 타입중 하나 라고 본다
  return "result : + " +keyword
}

// 3) 화살표 함수 : ()=>{}
// 3-1) 익명함수
let aray = [1,2,3,4,5];
aray.forEach(val => console.log(val))

const highFun = function(num){//고차함수 : 함수를 리턴하는 함수
  return (x) => {
    return x+num;
  }
}

const addNum = highFun(10);//고차함수 실행
/* addNum = (x)=>{
  return x+10;  클로져를 기반으로 사용하기도 함. 객체가 동일한 형태로 재생산 되는것과 같은 함수. 함수 내부의 변동되는 값을 사용할 때
  }
*/
result = addNum(5);
console.log(result);

// 3-2) 화살표 함수 + 함수 표현식
const multi = (x,y) => x*y;
console.log(multi(2,4));