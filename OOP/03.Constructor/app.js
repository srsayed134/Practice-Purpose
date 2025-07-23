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

// Chellange

function Car(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.start = function(){
       return `Starting the ${this.make} ${this.model} this is from ${this.year}`
    };
    this.stop = function(){
        return `Stopping the ${this.make} ${this.model} and color of this model is ${this.color}`
    };
}

const toyota = new Car("Toyota", "Camry", 2016, "White");
const honda = new Car("Honda", "CR-V", 2018, "Black")

console.log(toyota.start());
console.log(honda.stop());