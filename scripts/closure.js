// function foo(){
//     let text = "Closure";
//     function bar() {
//         let d = 4;
//         console.log(text);
//     }
//     bar();
// }
// foo();


// function foo(){
//     let text = "Closure";
//     function bar() {
//         let d = 4;
//         console.log(text);
//     }
//     return bar();
// }
// let myFoo = foo;
 
// myFoo();

function sum(a){
    return function(b){
        return a + b;
    }
}
let add = sum(5);//estex add-@ dasakan closure-i orinak e
// console.log(add(3));

// console.log(sum(8)(7));

let e = 8;
function otherSum(a){
    return function (b){
        return function(c){
           // autofunction scope
            return function(d){
                //local scope
                return a + b + c + d + e;
            }
        }
    }
}
console.log(otherSum(3)(4)(1)(5));