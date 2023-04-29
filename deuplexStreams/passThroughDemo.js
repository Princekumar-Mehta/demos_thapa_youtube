
import fs from "fs";
import http from "http";
import { PassThrough } from "stream";
const readStream = fs.createReadStream("input.txt");
const writeStream = fs.createWriteStream("output.txt");

let report = new PassThrough();
let total = 0;
report.on('data',(chunk)=>{
    total+=chunk.length;
    console.log('bytes : '+total);
})
readStream.pipe(report).pipe(writeStream)