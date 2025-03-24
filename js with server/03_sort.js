// js with server / 03_sort.js
let fruits =["Banana","Orange","Apple","Mango"]

fruits.sort();
console.log(fruits);

let points = [40,100,1,25,5,10]

points.sort()
console.log(points); // 유니코드 기준 정력이기때문에 숫자의 정렬이 맛이 간다.

points.sort(function(a,b){
  return a-b
})
console.log(points);