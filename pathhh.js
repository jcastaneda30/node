const path = require('path')
//Nos da el tipo de separados que tienen los nombres de rutas
console.log(path.sep)


//Crea rutas de archivo siguiendo las reglas que tenga el sistema

const filePath = path.join('shit','holy','waos')

console.log(filePath)

//Retorna un path absolut

const absolut = path.resolve(filePath)

console.log(absolut)