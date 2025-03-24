// js with server/06-02_detructuring
let { print, plus } = require ('./06-01_module')
let testObj = require ('./06-01_module')

print('Hello')
testObj.print('Hello')
// console.log(plus(1,2));

// 1) Object
let person = {
  firstName : "John",
  lastName : "Doe",
  age : 37,
  email : "jogn@gamil.com",
  country : "USA"
}

let {lastName, email} = person
console.log(lastName, email);
console.log(person.lastName);

function getFullName  ({firstName,lastName}){
  console.log(`${firstName},${lastName}`);
}

getFullName(person)

// 2) Array
let scores = [100,80,90]

let [a,b,c] = scores
console.log(a);
console.log(b);
console.log(c);
