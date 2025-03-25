//inner_module/04_crypto.js
const crypto = require('crypto')
const data = 'pw1234'
let secret = 'adwkefdswslaadsdalrgewlooweoeo'
let encData = crypto.createHash('sha512')//sha: 보안과 관련있는 알고리즘 적용 
                    .update(data)
                    .digest('base64'); //64비트로 출력하겠다.
console.log(encData);
//암호화시 전용 알고리즘을 통해서 암호화됨 like sha

let enData = crypto.createHmac('sha512',secret)//하나 더 추가 해서 섞어서 반환함
.update(data)
.digest('base64'); 
console.log(enData);