const fs = require("fs");
const http = require("http");

const server = http.createServer((request,response)=>{
    const rstream = fs.createReadStream("input.txt",{
        encoding: 'UTF-8',
        highWaterMark:25,
    });
    const writeStream = fs.createWriteStream("output.txt");
    writeStream.on("pipe",()=>{
        console.log('Something is piping into the writer.');
    })
    rstream.pipe(response).on('error',console.log(error)); // response is our destination 
    rstream.pipe(writeStream).on('error',console.log(error));
});



server.listen(8000,"127.0.0.1");