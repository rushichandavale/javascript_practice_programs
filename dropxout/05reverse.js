
function reverseStr(str){
    var revStr = '';
    for(let i = str.length-1; i>=0;i--){
        revStr += str[i];
    } 
    return revStr
}

let result = reverseStr("hello")
console.log(result)