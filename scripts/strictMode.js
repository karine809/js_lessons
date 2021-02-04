//"use strict"
 number = 5;//naxkinum kareli er ayspes anel
// console.log(number);

function sum (){
    //"use strict"
    number = 23;
    console.log(number + 1);
}
sum();

const person = {
    name: "Karine",
    age: 33
};
const otherPerson = Object.freeze(person);
otherPerson.age = 99;//chi popoxvi, q.vor freeze e ogtagorcvel
otherPerson.lastName = "Mesropyan";//chi avelana
console.log(otherPerson);