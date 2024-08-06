console.log("using loop")
function reverseStr(str){
    var revStr = '';
    for(let i = str.length-1; i>=0;i--){
        revStr += str[i];
    } 
    return revStr
}

let result = reverseStr("hello")
console.log(result)

console.log('using pre-defined functions')

function revStr(str){
    return str.split('').reverse().join('')
}

let res = revStr("hello world")
console.log( res)