
import fs from "fs";
import http from "http";
import { Duplex,PassThrough } from "stream";

class Throttle extends Duplex{
    constructor(ms){
        super();
        this.delay = ms;
    }
    _read(){

    }
    _write(chunk,encoding,callback){
     this.push(chunk);
     setTimeout(callback,this.delay);
    }
}
const readStream = fs.createReadStream("input.txt");
const writeStream = fs.createWriteStream("output.txt");

const report = new PassThrough();
const throttle = new Throttle(1000);
let total = 0;
report.on('data',(chunk)=>{
    total+=chunk.length;
    console.log('bytes : '+total);
})
readStream.pipe(throttle).pipe(report).pipe(writeStream)