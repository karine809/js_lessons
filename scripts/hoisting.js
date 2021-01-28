// hoisting in function declaration and function expression

console.log(fName(6, 8));//ashxatum e naxqan func-i stexcel@

function fName(a, b){
    return a * b;
}

//function expression
console.log(bar(4,6))//chi ashxatum, qani der func-n stexcvac chi

let bar = function(a,b){ 
    return a-b;
}