const http = require('http')
const {readFileSync} = require('fs')

//Fules
const homePage = readFileSync('./index.html')

const server = http.createServer((req,res)=>{
    const url =req.url
    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }else if(url==='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>about</h1>')
        res.end()
    }else{
        res.writeHead(400,{'content-type':'text/html'})
        res.write('<h1>This page doesnt exist</h1>')
        res.end()
    }
})

server.listen(3000,()=>{
    console.log('working')
})