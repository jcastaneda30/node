const {createReadStream} = require('fs')

const stream = createReadStream('./prueba/bigFIle.txt',{
    highWaterMark:90000,
    encoding:'utf8'
})
let variabel = 0;
stream.on('data',(result)=>{
    console.log(result)
})