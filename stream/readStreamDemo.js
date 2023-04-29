const fs = require("fs");
const http = require("http");

const server = http.createServer((request,response)=>{
    const rstream = fs.createReadStream("input.txt",{
        encoding: 'UTF-8',
        highWaterMark:25,
    });
    response.writeHead(200,{"Content-Type":"text/html"});
    let remaining = "";
    rstream.on("data",(chunkData)=>{
    const lastIndex = (chunkData.lastIndexOf("\n"));
     response.write(" chunk :"+remaining+chunkData.substring(0,lastIndex)+"<br>");
     remaining=""
     if(lastIndex!==chunkData.length-1){
        remaining = chunkData.substring(lastIndex+1);
     }
    })
    rstream.on("end",()=>{
        console.log("done");
        response.end()
    })
    rstream.on("error",(err)=>{
        console.log(err);
    })
});



server.listen(8000,"127.0.0.1");