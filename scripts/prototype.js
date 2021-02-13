function User (name, age, isWorking) {
    this.name = name,
    this.age = age,
    this.isWorking = isWorking,
    // this.sayHi = function(){
    //     console.log("Hi " + this.name);
    // }
    this.toString = function(){
        console.log("Hi " + this.name);
    }
}

User.prototype = {
    printAge() {
        console.log(this.age);
    },
    lastName: "Mesropyan"
};
let user1 = new User("Karine",  33, true);
let user2 = new User("Armen", 38, true);
//console.log(Object.getPrototypeOf(user1));
//console.log(User.prototype);//tesakanoren sa nuyn verevinn e
// console.log(user1.__proto__ === User.prototype);// true
//console.log(user1.__proto__ === User.__proto__);//false, nuyn@ chen
// console.log(user1.__proto__.__proto__);
//user1.sayHi();

// user1.printAge();//ktpi 33
// user2.printAge();
// user1.toString();//kkanchi mer useri toStringin u ktpi` Hi Karine
//console.log(user1);

// let user3 = Object.create(user1);//tesakanoren copy exav user1@
// console.log(user3);

let obj = {
    a: 4,
    b: 8
}
Object.defineProperty(obj, "sum", {
    get: function() {
        return this.a + this.b;
    },
    set: function(num) {
        num = 100;
        this.b = num - 1;

    }
})

console.log(obj.sum);// 12
obj.sum = 7;// ???
console.log(obj);//4, 99


// const user = {     
//     get fullName() {        
//        return this.firstName + ' ' + this.lastName;    
//     },    
//     set fullName (name) {        
//         let words = name.toString().split(' ');        
//         this.firstName = words[0] || '';        
//         this.lastName = words[1] || '';    
//      } 
//  } 
//  user.fullName = 'Hello World'; 
//  console.log(user.firstName);
//  console.log(user.lastName);

