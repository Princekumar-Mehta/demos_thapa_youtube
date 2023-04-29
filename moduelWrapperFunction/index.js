// moduleWrapperFunction 
// this is what node do behind the scene
// this can be called IFEE imidiatly invoked function expression
// hence data in a file become private
// however we don't have to write this explicitly.
// ( function(exports, require, module,__fileanme,__dirname){
//     const myname = "Prince";
//     console.log(myname);
// } )();
// console.log(myname);
// const name = "Prince";
// console.log(name);


console.log(__filename);
console.log(__dirname);