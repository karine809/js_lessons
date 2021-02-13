class Animal {
    constructor(type,name,sound){
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
     speak(){
         return this.sound;
     }
}
//Create child class Dog inherit from Animal
class Dog extends Animal {
    constructor(type, name, sound, canBring){
        super(type, name, sound);
        this.canBring = canBring;
    }
    speak(){
        return this.sound;
    }
}
//Create child class Cat inherit from Animal
class Cat extends Animal {
    constructor(type, name, sound, canClimbTree){
        super(type, name, sound);
        this.canClimbTree = canClimbTree;
    }
    speak() {
        return this.sound;
    }
}
const dog = new Dog('domestic', 'Jeko', 'haf', true);
const cat = new Cat('domestic', 'Mila', 'myau', false);
console.log(dog.speak());
console.log(cat.speak());