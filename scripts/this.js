//console.log(this);//window global objectn e
//console.log(this === window);//true
"use strict";
function foo(){
    console.log(this);//undefined if strict mode else global object
}
//foo();
//this in arrow function always reverce to global object/window
const bar = () => console.log(this);
//bar();
//-----------------------------------------------------
const obj = {
    name: "Karine",
    age: "33", 
    display: function(){
        console.log(this.name);
    },
    sayHi(){
        console.log(this.age);
    }
}
//obj.sayHi();//33
//obj.display();//Karine
//-----------------------------------------------------
const obj2 = {
    name: "Kar",
    age: "30", 
    display:() => {
        console.log(this.name);
    }
}
//obj2.display();//undefined
//-------------------------------------------
const obj4 = {
    name: "Anna",
    display() {   //bildin methos
        console.log(this.name);  //ktpi Anabis
    }
};
// const otherObj4 = { name: "Anabis"};
// otherObj4.sayHello = obj4.display;//veragrum e exel, func-i kanch chka
// otherObj4.sayHello();//sayHellon displayi copyn e, anvanapoxutyun e exel


function Person(name, age, isWorking) {
    // this = {}
     this.name = name;
     this.age = age;
     this.isWorking = isWorking;
     this.sayHello = function(){
         //console.log("Hello " + " " + this.name);
         console.log(this);//this@ mer objectnern e person1,person2
     }
 }
 const person1 = new Person("Karien", 33, false); 
 const person2 = new Person("Kar", 30, true); 
 
//   console.log(person1);
//   console.log(person2);
person1.sayHello();
person2.sayHello();
