//Abstract class (providing a blueprint for subvlasses)

class Animal{
    constructor(name){
        this.name = name;
    }

    // Abstract method (to be implemented by subclasses)
    makeSound() {
        throw new Error("Method (makeSound) must be implemented")
    }
}

class Dog extends Animal{
     constructor(name){
        super(name)
     }

     //Implementing the abstract method
     makeSound(){
        return `Woff!!`
     }
}

class Cat extends Animal{
    constructor(name, id, lags){
        super(name);
        this.id = id;
        this.lags = lags;
    }

    makeSound(){
        return `Miiaaoooo!!`
    }
    tale(){
        return `Nikko id is ${this.id}`    
    }
    hasLags(){
        return `Nikko has ${this.lags}`
    }
}
 
const dog = new Dog("Buddy")
console.log(dog.name)
console.log(dog.makeSound())

const cat = new Cat("Nikoo", 25, "Nolags");
console.log(cat.name)
console.log(cat.tale())
console.log(cat.hasLags())