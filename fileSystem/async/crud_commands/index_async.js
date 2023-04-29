const fs = require("fs");
// import fs from "fs"; // prefer this but it will work in side module see errors google docs

// create folder
if (!fs.existsSync("prince")) {
  fs.mkdir("prince", (err) => {
    if (err) {
      throw err;
    } else {
      console.log("directory created");
    }
  });
}
// write
fs.writeFile("prince/bio.txt", "Hi, My name is Prince", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("data written");
  }
});

// append
fs.appendFile("prince/bio.txt", " let's append this data", (err) => {
    if (err) {
        throw err;
      } else {
        console.log("data appended");
      }
});

// read
fs.readFile("prince/bio.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    throw err;
  } else {
    console.log(data);
  }
});

// rename
fs.rename("prince/bio.txt", "prince/mybio.txt", (err) => {
    if (err) {
        throw err;
      } else {
        console.log("file renamed");
      }});

// delete file
fs.unlink("prince/mybio.txt", (err) => {
    if (err) {
        throw err;
      } else {
        console.log("file deleted");
      }
});

// delete folder
fs.rmdir("prince",(err)=>{
    if (err) {
        throw err;
      } else {
        console.log("folder deleted");
      }
})