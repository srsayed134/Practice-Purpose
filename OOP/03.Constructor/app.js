// function Personinfo (fl, ln, lang){
//     this.firstName = fl;
//     this.lastName = ln;
//     this.language = lang;
//     this.description = function () {
//         return `Hello i am ${this.firstName} ${this.lastName} and my fav language is ${this.language}`
//     }

// }

// const Sayed = new Personinfo("Sayedur", "Rahman", "JS");

// console.log(Sayed.description())

//remember new have to add and in function you do not use return and "," instade use ";"

// Chellange ------------------

// function Car(make, model, year, color){
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.start = function(){
//        return `Starting the ${this.make} ${this.model} this is from ${this.year}`
//     };
//     this.stop = function(){
//         return `Stopping the ${this.make} ${this.model} and color of this model is ${this.color}`
//     };
// }

// const toyota = new Car("Toyota", "Camry", 2016, "White");
// const honda = new Car("Honda", "CR-V", 2018, "Black")

// console.log(toyota.model);
// console.log(honda.year);

//Built in constructor (rarely use) ----------------

// const num = new Number(10);
// const num1 = 10;
// const str = new String("Sayedur Rahman")

// for(const item of str){
//     console.log(item)
// }

// let person = {
//     greet : function(){
//         console.log(`Hello my name is ${this.firstName} ${this.lastName}`)
//     }
// }

// const Sayed = Object.create(person);
// Sayed.firstName = "Sayedur";
// Sayed.lastName = "Rahman";

// Sayed.greet();

// const Niom = Object.create(person, {
//     firstName: {value: "Niom"},
//     lastName: {value: "Kink"},
// })

// Niom.greet()

// prototypes --------------
// obj.__proto__
// obj.constructor.prototype
// Object.getPrototypeOf(obj)


// const obj = {};
// console.log(obj)
// console.log(obj.constructor.prototype)

//Array prototype

// function Car (type, model, year, brand){
//     this.type = type;
//     this.model = model;
//     this.year = year;
//     this.brand = brand;
// }

// const toyota = new Car("sedan", "civic", 2019, "civic")

// console.log(toyota.__proto__.__proto__.__proto__)