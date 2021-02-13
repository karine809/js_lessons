// Create pesudo-abstract class in javascript
class User {
    constructor(username) {
        if (this.constructor === User){
            throw new Error('Abstract classcannot be instantiated');
        }
    }
    // Create pesudo-abstract method
    sayHello(){
        throw new Error('This method shuld be implamanted in child class');
    }
}

class Man extends User {
    constructor(username){
        super(username);
        this.username = username;
    }
    // Implement Abstract method
    sayHallo(){
        return `Hello, my name is ${this.username}`;
    }
}

class Woman extends User {
    constructor(username){
        super(username);
        this.username = username;
    }
    // Implement Abstract method
    sayHallo(){
        return `Hello, my name is ${this.username}`;
    }
}

const Arm = new Man('Armen');
const Kar = new Woman('Karine');

console.log(Arm.sayHallo());
console.log(Kar.sayHallo());

//const user = new User('User');//error cuyc kta, qani vor new User chi kareli anel