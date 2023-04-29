const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    const data =fs.readFileSync(`${__dirname}/userAPI.json`,{encoding:"utf-8"});
    const objData = JSON.parse(data);
    const users = objData.users;
    const firstNames = users.map((user)=>{
        return user.firstName;
    })
    const pathname = url.parse(req.url).pathname;
    if(pathname === "/"|| pathname === "/home"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>Home page</h1>");
          res.end();
    }else if(pathname === "/aboutUs"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>About us</h1>");
        res.end();
    }else if(pathname==="/userAPI"){
        res.writeHead(200,{"Content-Type":"text/html"});
            // res.writeHead(200,{"Content-Type":"application/json"});
            res.write("Firstname of all users:<br>"+firstNames.join('<br>'));
            res.end();
    }
    else if(pathname === "/usernames"){
            res.writeHead(200,{"Content-Type":"text/html"});
            // res.writeHead(200,{"Content-Type":"application/json"});
            res.write("Firstname of all users:<br>"+firstNames.join('<br>'));
            res.end();
        }
    else{
        res.writeHead(404,{"Content-Type":"plain/html"});
        res.write("<h1>Page Not Found</h1>");
        res.end();
    }
 
 })
 server.listen(8080,()=>{
     console.log("listening to port 8080");
 });
// by default ip address http://127.0.0.1:8080/ which is localhost
