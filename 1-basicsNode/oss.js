const os = require('os')

//Info user

const user =  os.userInfo()
console.log(user)

//Retorna la infomacion de etiempo en segundos

console.log(`${os.uptime( )}`)

//Inforamcion sobre el sistema operativo
const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS)