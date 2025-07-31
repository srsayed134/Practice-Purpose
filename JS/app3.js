// 99: Encapsulation
// Encapsulation is the concept of bundling data (properties) and methods (function) together within an objects, allowing the object to controll access to its internal data and behavior. This helps to hide implementation details and expose only necessary interfaces to interact with the object. In JavaScript, you can achive encapsulation by using closures, symbols, or naming conventions to simulate private members and expose public interfaces
 
//98: Modifiers in OOP (Encapsulation, Abstraction, Inheritance, Polymorphism)
//Private closure, Public ,Protected
// function MyClass(publicField, privateField, protectedField) {
//     this.publicField = publicField;
//     const _privateField = privateField;
//     const _protectedField = protectedField;

//     //Public Method
//     this.publicMethod = function(){
//         return `Public Field: ${publicField}`
//     }
//     //Private Method
//     function _privateMethod(){
//         return `Private Method: ${_privateField}`;
//     }

//     //Protected method
//     function _protectedMethod(){
//         return `ProtectedMethod: ${_protectedField}`
//     }
//     this.accessProtectedMethod = function(){
//         return _protectedMethod();
//     }
// }

// const MyObject = new MyClass("Public Data", "Private Data", "Protected Data");
// console.log(MyObject.accessProtectedMethod())

// 97: Introduction to Classes
// Classes are one of the features introduced in the es6 version of Javascript

// A class is a blueprint for the object. You can create an object from the class

// You can think of the class as a sketch (prototype) of a house. It contains all the details about the floors, doors, windows, EventCounts. Based on these descriptions, you build the house.

// Since many houses can be made from the same description , we can create many objects from a class
// Class declaration
// class Person {
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this. age = age;
//         this.fullName = function(){
//             return `${this.firstName} ${this.lastName}`
//         }
//     }
//     //Prototypal member
//     greet(){
//         return `Hello there ${this.firstName} ${this.lastName}`
//     }

// }
// const Sayed = new Person("Sayedur", "Rahman", 20);
// console.log(Sayed.greet())

// //Another class for inharitance from Person class
// class Programmer extends Person{
//     constructor(firstName, lastName, age, pl, experience){
//         super(firstName, lastName, age)
//         this.pl = pl;
//         this.experience = experience;
//     }
// }
// const Rakib = new Programmer("Rakib", "Hossain", 23, "Golang", 12);
// console.log(Rakib)
// console.log(Rakib.greet()) //Hello there Rakib Hossain

// Challenge ++++++++++++

// class Hero {
//     constructor(name, level){
//         this.name = name;
//         this.level = level;
//     }
//     greet(){
//         return `${this.name} says hello`
//     }
// }
// const hero = new Hero();
// class Mega extends Hero{
//     constructor(name, level ,spell){
//         super(name, level);
//         this.spell = spell;
//     }
// }
// const mega = new Mega("Flang", 5, "Shogan")
// console.log(mega.greet())


// 96: Prototypal Inheritance
// Prototypal inheritance is a mechanism in javascript that allows objects to inherit properties and methods from other objects. It is a fundamental concepts in the language and is based on the prototypes for others objects, forming a hierarchical chain of inheritance

//This is animal constructor
// function Animal(name){
//     this.Animalname = name;
// }
// Animal.prototype.sound = function(){
//     return "Animal sound"
// }
// const animal = new Animal("Frog");
// console.log(animal);
// console.log(animal.Givenname);
// console.log(animal.sound());

// //This is dog constructor
// function Dog(name, breed){
//     // this.Dognname = name //it could be use but,
//     //Inherate properties from Animal
//     Animal.call(this, name); // but, if you want to through Animal you shoud use Animalname for call
//     this.GivenbreedName = breed;
// }
// //Inherate sound() method from Animal
// Dog.prototype = Object.create(Animal.prototype)

// //Create a Dog self method
// Dog.prototype.bark = function (){
//     return "Woof!"
// }
// const dog = new Dog("Buddy", "Husky")

// console.log(dog.Animalname) // see, i use Animalname  
// console.log(dog.Dogname) //if i use Dogname it will result in undefined you can after uncomment this.Dogname = name
// console.log(dog.sound())
// console.log(dog.bark())

// So, by this [Animal.call(this, name)] i can inherate Animal properties and by this [Dog.prototype = Object.create(Animal.prototype)] i can inherate method using Protypical mechanism




// 95: Prototype Model
// Every js object has a anonymous property called prototype
// Remember functions and arrays are also a object
// That prototype will be the parent of that object, prototype property is object by itself, which have some special properties and methods

// We can check the prototype of something in 3 ways:
//--> obj.__proto__
//--> obj.constructor.prototype
//--> Object.getPrototypeOf(a)

// See on browser console
// const obj = {}; //Onject
// const arr = new Array; //Array is one type of object as well function
// console.log(obj.__proto__)
// console.log(obj.constructor.prototype)
// console.log(Object.getPrototypeOf(obj))

// function person(fN, ln, pl) {
//     this.fN = fN;
//     this.ln = ln;
//     this.pl = pl;
// }
// const sayed = new person("Sayedur", "Rahman", "JS");
// console.log(sayed.constructor.prototype)
// ++++++++++++
// changing the built in method (do not in real world project)
// Array.prototype.pop = function(){
//     return "This is pop"
// }
// const myArray = ["One", "Two", "Three"]
// console.log(myArray.pop()) //This is pop
// ++++++++++++++
// const Sayed = Object.create(person);
// Sayed.firstName = "Sayedur"
// Sayed.lastName = "Rahman"
// Sayed.greet()  //Hello this is Sayedur Rahman
// person.greet() //Hello this is undefined undefined

// const Jon = Object.create(person, {
//     firstName:{ value: "Jhon"},
//     lastName:{ value: "Doe"}
// })
// Jon.greet() //Hello this is Jhon Doe
// +++++++++++++++++

// String.prototype.hello = function(){
//     console.log(this);
//     console.log(this.toUpperCase());
// }
// console.log("this is example".hello())



// 94-Object.create Method 
// The Object.create() method creates a new object, using an existing object as the protoype of the newly created object
// Syntex example
// let person = {
//     greet: function(){
//         console.log(`Hello this is ${this.firstName} ${this.lastName}`)
//     }
// }