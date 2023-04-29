// const oper = require('./userdefined_module/oper');
// console.log(addFun(1,2));
// console.log(oper.addFun(10,2));
// console.log(oper.sub(10,5));

const {addFun,sub,multi,moduleDescription} = require("./userdefined_module/oper");

console.log(addFun(10,2));
console.log(sub(10,5));
console.log(multi(10,5));
console.log(moduleDescription)