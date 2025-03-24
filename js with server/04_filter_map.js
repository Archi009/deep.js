// js with server/04_filter_map.js

let person = [
  {
    name: "유재석",
    point: 78,
    city: "서울"
  },
  {
    name: "김종국",
    point: 92,
    city: "서울"
  },
  {
    name: "양세찬",
    point: 76,
    city: "제주"
  },
  {
    name: "하하",
    point: 81,
    city: "서울"
  }
]

// 1) 점수가 80점 이상이 사람들만 따로
let scores 
  = person.filter((item, idx )=>{
  return item.point >= 80   //boolean 타입
})
console.log(scores);
//PS)  객체 배열일 경우 새로운 배열과 원본 배열 둘 다 데이터 변경 발생
scores[0].name = "강호동";// 필터 후 값을 바꾸면 원본 데이터도 바뀐다, 원본 배열을 참조하는 것이 기 때문.
console.log(scores);
console.log(person);
// 2) 각 사람들 별로 no를 추가 
let newList 
  = person.map((item, idx )=>{ //누락된 데이터를 추가하거나 , 들어가면 안되는 값을 제거 할 때 자주사용
  return {
    no : ((idx+1)*100),
    name : item.name,
    city : item.city
  }
})
console.log(newList );

// PS)
newList[0].name = "홍길동"
console.log(newList);
console.log(person); //map은 완전히 다른 (연결을 끊어낸) 변수