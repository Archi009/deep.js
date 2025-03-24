// js with server/06-01_module.js
function print(keyword){
  console.log(keyword);
}

function plus(x,y){
  return x+y;
}

module.exports ={ //외부에 오픈해서 사용할(보안을지킨) 값들을 모듈에 담아 반출
  print
}