const add = (a,b)=>{
    return a+b;
}
const sub = (a,b)=>{
    return a-b;
}
const multi = (a,b)=>{
    return a*b;
}
const moduleDescription = "This module contains Operators";
// module.exports = add;
// module.exports.add = add;
// module.exports.sub = sub;

module.exports = {
    addFun: add,
    sub,multi, moduleDescription
}