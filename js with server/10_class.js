// js with server/10_class.js

// 자바에서의 class 방식

//  1) 생성자 함수 (대문자로 시작)
function User(name, age, city) {
  // 필드
  this.name = name;
  this.age = age;
  this.city = city;

  // 메서드
  this.getInfo = function () {
    return `${this.name}, ${this.age}, ${this.city}`;
  }
}

let hong = new User('Hong', 30, 'Daegu');
console.log(hong.getInfo());

let kim = new User("Kim", 25, "Jeiu");
console.log(kim.getInfo());

// 자바스크립트에서의 class
class Emp {
  // 생성자
  constructor(id, name, dept){
    // 해당 클래스가 가지는 필드 등록
    // 자바스크립트에는 접근제한자가 없기에 _로 private를 표시함.
    this_id = id;
    this_name = name;
    this_dept = dept;
  }
  // get & set
  // id는 set없어서 변경할수없다. 자바스크립트에서의 클래스는 이걸이용해서 코드를 짤수있다.
  // name는 get, set이 있어서 수정가능.
  get id(){
    return this.id;
  }
  get name(){
    return this.name;
  }
  set name(name){
    this._name = name;
  }

}
// id는 set이 없는걸 이용가능. 값이 적용안됨. 에러나는게 정상.
let kang = new Emp(100, "kang", "Sales");
kang.id = 200;
kang.name = 'king';
kang.setDept('Marketing');
console.log(kang);