
import fs from "fs";
import http from "http";
import { Transform } from "stream";

class ReplaceText extends Transform{
    constructor(){
        super();
    }
    _transform(chunk,encoding,callback){
        let str = chunk.toString();
     this.push(str.replaceAll("User","Student"));
    }
    _flush(callback){
        this.push("more stuff us being passed through");
        callback();
    }
}
const readStream = fs.createReadStream("input.txt");
const writeStream = fs.createWriteStream("output.txt");
const replace =new ReplaceText();
readStream.pipe(replace).pipe(writeStream)