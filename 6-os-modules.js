const os = require('os');

//info about user
const user = os.userInfo();

//console.log(user);

//method returs os runtime in seconds
//console.log(`system uptime ${os.uptime()} seconds`);

const currentOs = {
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs);