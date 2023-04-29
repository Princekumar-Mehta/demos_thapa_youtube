const os = require('os');

console.log(os)
console.log(os.arch());
const freeMemory = os.freemem();
console.log(`freeMemory ${freeMemory} bytes`);
const totalMemory = os.totalmem();
console.log(`total memory ${totalMemory} bytes`);
console.log(os.tmpdir());
console.log(os.platform())
console.log(os.type());