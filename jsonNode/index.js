const fs = require("fs");
const bioData = {
    name:"Prince",
    age:22
}
const jsonData = JSON.stringify(bioData);

fs.readFile("read.json",{encoding:'utf-8'},(err,data)=>{
    if(err){
        console.log(err);
    }else{
        const objData = JSON.parse(data);
        console.log(data);
        console.log(objData);
    }
});

fs.writeFile('read.json',jsonData,(err)=>{
    if(err){
        console.log(err);
    }
});

fs.readFile("read.json",{encoding:'utf-8'},(err,data)=>{
    if(err){
        console.log(err);
    }else{
        const objData = JSON.parse(data);
        console.log(data);
        console.log(objData);
    }
});
