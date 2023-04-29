const http = require("http");
// http.createServer((req,res)=>{
//    res.writeHead(200,{"Content-Type":"text/plain"});
//    res.write("hello , Prince");
//    res.end();
// }).listen(8080,"127.0.0.1" , ()=>{
//     console.log("listening");
// });
const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write("hello , Prince");
    res.end();
 })
 server.listen(8080,"127.0.0.1" , ()=>{
     console.log("listening to port 8080");
 });
// by default ip address http://127.0.0.1:8080/ which is localhost
