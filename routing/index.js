const http = require("http");
const url = require("url")
const server = http.createServer((req,res)=>{
   
    const pathname = url.parse(req.url).pathname;
    console.log(pathname);
    if(pathname === "/"|| pathname === "/home"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>Home page</h1>");
    }else if(pathname === "/aboutUs"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>About us</h1>")
    }else{
        res.writeHead(404,{"Content-Type":"text/html"});
        res.write("<h1>Page Not Found</h1>")
    }
   res.end();
 })
 server.listen(8080,"127.0.0.1" , ()=>{
     console.log("listening to port 8080");
 });
// by default ip address http://127.0.0.1:8080/ which is localhost
