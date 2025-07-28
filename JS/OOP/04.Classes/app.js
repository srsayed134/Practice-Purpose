class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.pritUserFullName = function(){
            return `Name: ${this.firstName} ${this.lastName}`
        }
    }

    greet (){
        return `Hello there ${this.firstName} ${this.lastName}`
    }

    sayHello(){
        return `Hello i am ${this.firstName} ${this.lastName}`
    }
}

const John = new Person("Huxn", "Webdev", 19)
console.log(John.sayHello())

//Class inheritance

class Mage extends Person {
    constructor(firstName, lastName, age){
        super(firstName, lastName)
        this.age = age
    }
}

const hero2 = new Mage("Sayed", "Rahman", 22);
// console.log(hero2);