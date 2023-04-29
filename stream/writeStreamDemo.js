// const buffer = new Buffer.from("Prince",{encoding:"utf-8"});

// buffer.write("Code Evolution");
// console.log(buffer.toJSON());

const fs = require("fs");
const writeStream = fs.createWriteStream("input.txt");

async function run(){for(let i=0;i<10000;i++){
   const overWatermark =  writeStream.write(`User ${i}\n`);
   if(!overWatermark){
    await new Promise((resolve,reject)=>{
        writeStream.once('drain',resolve);
    })
   }
}}
run();