// Call method
const obj = {
    text: "Arshak"
}

//Call Function.prototype.call()
const foo = function(str){
    return 'Hello ' + this.text + ' ' + str;
}
//console.log(foo.call(obj, 'How are you'));

// Apply Function.prototype.apply()
const bar = function(str1, str2){
    return 'Hello ' + this.text + ' ' + str1 + ' ' + str2;
}
const arr = ['go', 'home'];
//console.log(bar.apply(obj, arr));

//Bind ()
const helper = foo.bind(obj);//helpery function e
//console.dir(helper);
//console.log(helper('King'));

// Examples
const print = function(){
    console.log(this);//ktpi number: 1
}.bind(1);
//.bind(obj)//ktpi text: Arshak
//print();

const print2 = function(a,b,c){
    console.log(this); //number: 1
    console.log(a);  // 2
    console.log(b);  // 3
    console.log(c);  // 4
};
//print2.call(1,2,3,4)

const print3 = function(a,b,c){
    console.log(this); //number: 1
    console.log(a);  // 2
    console.log(b);  // 3
    console.log(c);  // 4
};
//print3.apply(1,[2,3,4])

function sumNumber () {
    let all = 0;
    for(let i = 0; i < arguments.length; i ++){
        all += arguments[i];
    }
    return all;
}
let sum = sumNumber.call(null, 1,2,3);//null nshanakum e object chka
console.log(sum);