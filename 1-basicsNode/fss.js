const {readFileSync, writeFileSync} = require('fs')

//Leer un archivo 
const first = readFileSync('./prueba/textio.txt','utf8')

//Crear un nuevo archivo
// writeFileSync('./prueba/newfile.txt',`Result: ${first}`)

//Si agregamos la bandera flag:'a' agregara el resultado al contenido existente en lugar de borrarlos

writeFileSync('./prueba/newfile.txt',`Result: ${first}\n`,{flag:'a'})
