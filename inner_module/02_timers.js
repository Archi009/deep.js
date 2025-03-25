// inner_module/02_timers.js

function showTime(){
  let today = new Date()
  console.log(today.toLocaleTimeString());
}
showTime()

const timeout = setTimeout(()=>{ //1.딜레이를 걸어 하고싶은 작업, 2.딜레이 시간
  let today = new Date();
  console.log(today.toLocaleTimeString());
  showTime()
},2000) 

let count = 0
const interval= setInterval(()=>{
  console.log('interval% %d', count++);
  if(count ==2 ){
    clearInterval(interval)
    showTime()
  }
}
,1000)

console.log('End');
showTime()