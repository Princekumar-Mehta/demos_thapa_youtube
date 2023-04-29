const fs =  require('fs');


// write file
// fs.writeFileSync('read.txt',"hi, writing using sync write file (this will overwrite existing data")

// apend content
// fs.appendFileSync("read.txt","hi, writing using sync write file this will append content to existing data")

// read file
const buf_data = fs.readFileSync('read.txt')
// console.log(buf_data);
// const org_data = buf_data.toString();
// console.log(org_data);

// rename file
// fs.renameSync("read.txt", "read_write.txt");