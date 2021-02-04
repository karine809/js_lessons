function User(name, age, isWorking){
   // this = {}
    this.name = name;
    this.age = age;
    this.isWorking = isWorking;
    // function sayHello(){
    //     console.log("Hello " + this.name); //estex this-@ tesaneli che
    // }
    // sayHello();

    this.sayHello = function(){
        return "Hello " + this.name;
    }
}

const user1 =new User("Karine", "35", true);
const user2 = new User("Armen", "40", true);
console.log(user1);
//console.log(user2);

//classi tarberakov nuyn function@
class Person{
   constructor(name, age, isWorking){
        this.name = name;
     this.age = age;
     this.isWorking = isWorking;
     this.sayHello = function(){
         return "Hello " + this.name;
     }
   }   
 }
 const person =new Person("Kar", "35", false);