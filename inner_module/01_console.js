//inner_module/01_console.js

const fs = require('fs');
const {Console} = require('console');

const logOutput = fs.createWriteStream('./logs/stdout.log'); //로그를 남길 파일을 만들어 준다 그냥 돌리면 파일은 만들어 주지만 , 폴더는 생성이 안되므로 진행이 안된다. 폴더 미리 만들자.
const errOutput = fs.createWriteStream('./logs/stderr.log');

const logger = new Console({stdout : logOutput, stderr : errOutput});

let count = 5
logger.log('count: %d',count) //stdout     //운영입장에서는 로그를 console.log처럼 일회용으로 볼 게 아니라 저장시켜서 내역을 확인 할 필요가 있기 때문에 따로 기록을 남기는 방식을 취한다.
logger.error(`count:${++count}`) //stderr