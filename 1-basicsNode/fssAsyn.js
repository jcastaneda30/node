const {readFile, writeFile} = require('fs')

readFile('./prueba/textio.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const firs = result 
    readFile('./prueba/newfile.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result 
        writeFile('./prueba/newFile2.txt','Texto de prueba xd',(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})