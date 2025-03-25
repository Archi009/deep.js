//inner_module/03_path.js

console.log(__filename); // file 명을 포함한 절대경로 
console.log(__dirname);  // file 명을 제외한 절대경로

const path = require('path')

console.log('폴더정보 : %s', path.dirname(__filename));
console.log('실제 파일명 : %s', path.basename(__filename));
console.log('확장자 : %s', path.extname(__filename));