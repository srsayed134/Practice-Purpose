// 8: Mastering Variables++++++++++
// let name;
// console.log(name); //Undefined

// let name = "Sayedur Rahman";
// let age = 23;
// console.log(age);

//You can not use reserved key word for naming a variable kie for, class, var
//Const.........
// const youtubeChannet = "Nature";
// youtubeChannet = "Water";
// console.log(youtubeChannet) //Error
//###That is why you can not change assigining variable in const keyword; it is unchangeable
//**** Challenge */
// let name = "Sayed";
// let whatDoYouWannaBecomeInYourLife = "Programmer";
// const gender = "Male";
// const twitterHandle = "srsaye134";
// console.log(name, whatDoYouWannaBecomeInYourLife, gender, twitterHandle) 

//9: Working with Numbers++++++++++
// This is a primitive
// let num = 10; //it can be (-10), (10.05)
// console.log(num)
// console.log(typeof num)
// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 % 2);
// console.log(2 ** 2);

// let counter = 4;
// counter++;
// console.log(counter) // 5

//***Cahllenge */
// const firstFavNum = 20;
// const secondFavNum = 10;
// console.log(firstFavNum + secondFavNum)
// console.log(firstFavNum - secondFavNum)
// console.log(firstFavNum * secondFavNum)
// console.log(firstFavNum / secondFavNum)
// console.log(firstFavNum % secondFavNum)
// console.log(firstFavNum ** firstFavNum)

// 10: Grasping Booleans++++++++++
// It is only about true and false
// Falsey value -> null, undefined, 0, -0, NaN, "", '', ``, (empthy quotes),
// Truthy value -> rest of is truthy value 
// let notDefined = undefined;
// let notDefined1 = null;
// console.log(notDefined) //undefined
// console.log(notDefined1) //null

// let isJsProgrammingLanguage = true;
// let isJsHard = false;
// let favNum = 7;
// console.log(favNum + undefined) //NaN
// 11: Comparison Operators ++++++++
// Comparison Operators
// --> Relational Operators

// console.log(10 > 10)// False
// console.log(10 < 10)// False
// console.log(10 < 50)// True
// console.log(10 <= 10)// True
// console.log(10 >= 10)// True
// --> Equality Operators
// === strict quality (type + value)
// !== strict non-quality (type + value)
// == lose non-quality (value)
// != lose not - quality (value)

// console.log(10 === 10); //True
// console.log(10 !== 10); //False
// console.log(10 == 10); //True
// console.log(typeof 10); //number
// console.log(typeof "10") //string
// console.log(10 == "10"); //True
// console.log(10 === "10"); //False
//*** Challenge */
// let firstFavNumb = 37;
// let secondFavNum = 57;
// console.log(firstFavNumb > secondFavNum) 
// console.log(firstFavNumb < secondFavNum) 
// console.log(firstFavNumb <= secondFavNum) 
// console.log(firstFavNumb >= secondFavNum) 
// console.log(firstFavNumb === secondFavNum) 
// console.log(firstFavNumb !== secondFavNum) 
// console.log(firstFavNumb != secondFavNum) 
// console.log(firstFavNumb == secondFavNum) 

//++++++Revise+++++++
// 89: OOP Introduction
// Object - Oriented Promramming (OOP) is a programming language model / style organized around objects rather then "actions" and data rather then logic but 
// Javascript is a versatile and dynamic programming languange that supports multiple paradims, including procedural, functional, and object-oriented programming. While JS is not a pure object-oriented language like Java or c++, it provides the tools and features to implement OOP concepts effectively
//OOP in JS refers to the practice of designing and structuring code around objects and their interactions. It is a programming paradime that allows developers to model real-world entities and their relationships using objects and classes.

//90: Demystifying THIS Keyword
// console.log(window)
// console.log(this) //This refer window objects
// console.log(window === this) //true because in DOM when you use "this" it means this will refer existing object wich is window for DOM
// window.firstName = "Sayedur";
// this.lastName = "Rahman"; // --> You can search by ctrl + f after expend the window object in console

// function printThis(){
//     return this //window
// }
// let res = printThis()
// console.log(res) //answer will like window because this refer window

// Another example  

// const obj = {
//     firstName : "Sayedur",
//     lastName: "Rahman",
//     fullName: function () {
//         return this; //"Owner objects"
//     }
// }
// const res = obj.fullName();
// console.log(res)
// console.log(res.firstName)// Sayedur
// console.log(obj.firstName)// Sayedur

//Little catch +++++++++++

// const obj = {
//     firstName : "Sayedur",
//     lastName: "Rahman",
//     fullName: () => {
//         return this; //it will refer to window object because without using function "this" refer window so when use "this" it should be function not arrow function
//     }
// }
// const res = obj.fullName();
// console.log(res) // window
// console.log(res.firstName) //undefined //because in window object there have no any firstName or lastName it have in (obj) object
// console.log(obj.firstName) //Sayedur

//***Challenge */
// const person = {
//     name: "Rakib",
//     age: 25,
//     greetRegular: function(){
//         console.log(`Hello, my name is ${this.name} & I'm ${this.age} years old`)
//     },
//     greetArrow:() => {
//         console.log(`Hello, my name is ${this.name} & i'm ${this.age} years old.`)
//     }

// }
// const res = person.greetArrow();
// console.log(person.greetRegular())
// // console.log(res)

//12: Manipulating Strings++++++++++

// let firstName = "Sayedur";
// let lastName = `Rahman`;
// let favThing = "Gaming";
// let trimEx = " Name      "

// let fullName = firstName +" " +  lastName; // Concat 
// let fullName1 = firstName.concat(lastName) //Concat by method
// favThing += " On ps5" //Append "string"
// // console.log(favThing);
// let fullNameLength = fullName.length;
// console.log(fullNameLength) //14
// console.log(fullName.toUpperCase())
// console.log(fullName.toLowerCase())
// console.log(fullName.slice(0, 3)) //Slicing from fullName
// console.log(fullName.slice(3, 7)) //edur
// console.log(fullName.split("")) //This method will return array
// console.log(fullName.split(" ").join("-")); //First this will split two word " " by unising space if you not use space it will split all words then two word is joined by "-" this
// console.log(fullName.includes("y")) //true
// console.log(fullName.includes("z")) //false
// console.log(trimEx.trim())

// 13: Type Conversion ++++++++

//String to number---------
// let money = "50";
// money = parseInt(money) //or
// let taka = parseInt("20") //or
// let rupy = +"20"; //or
// let dollar = "20";
// dollar = Number(dollar) //
// console.log(typeof money)
// console.log(typeof taka)
// console.log(typeof rupy)
// console.log(typeof dollar)

//Number to string---------
// let money = 50;
// money = money.toString();
// console.log(typeof money) //String
// let age = 23;
// let strAge = String(age);
// console.log(typeof strAge) //String

//String to decimal--------
// let money = "50.251";
// let toDeci = Number(money); //Number
// console.log(typeof toDeci)

// let doller = "25.451";
// let toDec = parseFloat(doller); //Number
// console.log(typeof toDec)

//14: Conditional Statements++++++++
//I know it very well
//**Challenge */
// let password;
// if(password === 8){
//     console.log("Welcome")
// }else if (password <= 8){
//     console.log("Password is too short")
// }else if (password >= 8){
//     console.log("Too long Password & Pssssword should be 8 charactes")
// }else{
//     console.log("Please provide a password")
// }

//15: Switch Statements+++++++++++++
// let x = 1;
// let text;
// switch (x) {
//     case 0:
//         text = "This is zero"
//         console.log(text)
//         break;
//     case 1:
//         text = "This is one"
//         console.log(text)
//         break;
//     default:
//         text = "No value found"
//         console.log(text)
// }
//**Challenge */
// let fruit = "Apple";
// switch (fruit) {
//     case "Banana":
//         console.log("Banana is good!");
//         break;
//     case "Orange":
//         console.log("I am not a fan of orange");
//         break;
//     case "Apple":
//         console.log(`How you like them ${fruit}?`);
//         break;

//     default:
//         console.log("I have never heard of that fruit")
//         break;
// }

// 16: For Loop+++++++++++++++++++
// for(let i = 1; i <= 100; i++){
//     for(let j = 1; j <= 10; j++)
//     console.log(`Hello Huxn ${i} ${j}`)
// }
//**Challenge */
// let Name = "Sayedur Rahmna";
// for(let i = 1; i <= 100; i++){
//     console.log(`${Name} ${i}`)
// }

//  17: While Loop++++++++++++++++
// let i = 1;
// let name = "Huxn";
// while(i <= 100){
//     console.log(`${name} ${i}`);
//     i++;
// }
//**Challenge */
// let i = 10;
// let name = "Sayedur Rahman";
// while(i <= 100){
//     console.log(`${name} ${i}`)
//     i++;
// }

// 18: Do-While Loop +++++++++++++++
// let i = 1;
// do {
//     console.log("Hello World", i);
//     i++;
// }while(i <= 100);
//**Challenge */
// let name = "Sayedur Rahman";
// let i = 20;
// do{
//     console.log(`${name} ${i}`);
//     i++;
// }while(i <= 400);

// 19: Logical Operations+++++++++++
//&&
//If booth operands/boolean values are true, else evaluates to false 
//||
//True is either of the operands/boolean values is true. evaluates to false if both are false
//!
// True if the operands is false and vice-versa

// let password = "Huxn-webdev";
// if(password.length >= 8 && password.includes("uxn")){
//     console.log("Valid Password");
// }else{
//     console.log("Invalid Passord");
// }

//********************DATA STRI+UCTURE***********************
//20: Arrays Introduction
// const myList = [];
// console.log(myList);

// const numbers = [1,2,3,4,5,6,7,8];
// console.log(numbers);

// const strArray = ["Sayed", "Sabbir", "Sakin"];
// console.log(strArray);
// console.log(strArray[2]);

// //Nestef array / 2 dimension array
// const places = ["Cumilla", "Dahaka", "Sylhet", ["Meghna", "Timur"]];
// console.log(places[3][0]) //Meghna

// //**Challenge */
// let favSinger = ["KK", "Adnan sami", "Alka"];
// console.log(favSinger[0]);
// let favNumers = [7, 21, 48, 53];
// let mixedArr = ["string", ["otherarray"], 123, true];
// console.log(mixedArr[1][0])

//21: Array Techniques +++++++++++++++++





//+++++++++ Revise ++++++++++++++
// 91: Factory Function

//A factory function is a type of funtion that is used to create and return objects. It's a design pattern that provides an alternative way to create objects compares to using constructors and the new keyword.


// function createPerson (firstName, lastame, pl){
//     return {
//         firstName: firstName,
//         lastame: lastame,
//         pl: pl,
//         intro: function(){
//             console.log(`Hello my name is ${this.firstName} ${this.lastame} and i love ${this.pl}`)
//         },
//     }
// }
// const jhon = createPerson("Jhon", "Doe", "JavaScript");
// const huxn = createPerson("Huxn", "WebDev", "Golang")
// jhon.intro();
// huxn.intro();

//**Chalenge */
// function Cars(type, model, year){
//     return{
//         type: type,
//         model: model,
//         year: year,
//         description: function(){
//             return `This is ${type} and the model is ${model} this was made ${year}`
//         }
//     }
// }
// let Toyota = Cars("sedan", "crown", 2018);
// console.log(Toyota.description())

// Using object literels ++++++++++++++++
// function  createVehicle(type, model, year){
//     return {
//         type,
//         model,
//         year,
//     }
// }
// let vehicle1 = createVehicle("Sedan", "Crown", 2010);
// console.log(vehicle1.year)




// 108: Reading Textual Data

// Text method returns promise if resolved will return text representation of budy
// Fetch API promise only rejects when we have network error (not in other cases)
// fetch("text.txt")
// .then(res => res.text())
// .then(data => console.log(data))
// .catch(err => console.log(err))

// waiting ++++++++++++++++++++++

// 107: Async Functions
// Async is a special function that is designed to operate asynchronously, meaning that it can perform tasks in the background while other code continues to execute. Async functions are marked with the async keyword. 
// await
// The await operator is used to wait for a Promise.It can only be used inside an async function within regular Javascript code. 

// function fetchDataFromServer(){
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
//          resolve("User data retrived from the server.")
//        }, 2000);
//      });
// }
// async function getUserData() {
//     try {
//         const data = await fetchDataFromServer();
//         console.log(data);
//         console.log("Remaining task can be executed")
//     } catch (error) {
//         console.log(error)
//     }
// }
// getUserData()

//Challenge 

// function callbackHell(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = `Inside (callbackHell) function`
//             console.log(data)
//             resolve(data);
//         }, 2000);
//     })
// }
// function firstFunc(data){
//    return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const processedData1 = `${data} - processed first 1`;
//         console.log("Inside (firstFunc) Function");
//         resolve(processedData1)
//     }, 2000);
//    })
// }
// function secondFunc(data){
//    return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const processedData2 = `${data} - processed first 2`;
//         console.log("Inside (secondFunc) Function");
//         resolve(processedData2)
//     }, 2000);
//    })
// }
// function threeFunc(data){
//    return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const processedData3 = `${data} - processed first 3`;
//         console.log("Inside (thirdFunc) Function");
//         resolve(processedData3)
//     }, 2000);
//    })
// }
// async function processDataWithAsyncAwait(){
//     try {
//         const data = await callbackHell();
//         const processedData1 = await firstFunc(data);
//         const processedData2 = await secondFunc(processedData1);
//         const processedData3 = await threeFunc(processedData2);

//         console.log(`Final : ${processedData3}`)
//     } catch (error) {
//         console.log(`Error: ${error}`)
//     }
// }
// processDataWithAsyncAwait()
// 106: Promises
// A promise is an object representing the eventual completion or failure of an asynchronous operation. 
// function checkNumber(number){
//     return new Promise((resolve, reject) => {
//         if (number % 2 === 0) {
//             resolve(`${number} is an even number`)
//         } else{
//             reject(`${number} is an odd number`)
//         }
//     })
// }
// checkNumber(21)
// .then((message) => {
//     console.log(`Success: ${message}`)
// })
// .catch((message) => {
//     console.log(`Fail: ${message}`)
// })

// function callbackHell(data){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = "Inside (callbackHell) function 1"
//             console.log(data);
//             resolve(data)
//         }, 1000);
//     })
// }
// function firstFunc(data){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const processedData = `${data} - Processed data`;
//             console.log("Inside (firstFunc) function 2");
//             resolve(processedData)
//         }, 1000);
//     })
// }
// function secondFunc(data){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const processedData = `${data} - Processed data`;
//             console.log("Inside (secondFunc) function 3")
//             resolve(processedData)
//         }, 1000);
//     })
// }

// callbackHell()
// .then((data) => firstFunc(data))
// .then((processedData2) => secondFunc(processedData2))
// .then((processedData3) => console.log(`Final result of tall functions with Promsise: ${processedData3}`)) 
// .catch((error) => console.log(`Error: ${error}`))



// 105: Callback Hell (Async)
// CallBack hell (When you not use promise and asunc await )

// function callbackHell(callback){
//     setTimeout(() => {
//        const data = "Inside (callbackHell) function";
//        console.log(data);
//        callback(data)
//     }, 2000)
// }
// function firstFunc(data, callback){
//     setTimeout(() => {
//         const processedData = `${data} - Processed First`;
//         console.log(`Inside (firstFunc) Function`);
//         callback(processedData)
//     }, 2000)
// }

// function secondFunc(data, callback){
//     setTimeout(() => {
//         const processedData = `${data} - Processed Second`;
//         console.log(`Inside (secondFunc) Function`);
//         callback(processedData)
//     },2000)
// }

//Callback Hell
// callbackHell((data) => {
//     firstFunc(data, (processedData1) => {
//         secondFunc(processedData1, (processedData2) => {
//               console.log(`Final result- ${processedData2}`)
//         })
//     })
// })

//Callback is not always asynchronous
// console.log("Start");
// const numbers = [1, 2, 3, 4, 5, 6];
// numbers.forEach((n) => console.log(n));
// console.log("End")

// Challenge - 1 (Async)

// function getUserDataFromDM(name, callback){
//     setTimeout(() => {
//         console.log(`Getting User Name...`);
//         callback(name);
//     }, 2000)
// }
// function getUserHobbies(name, callback){
//     setTimeout(() => {
//         console.log(`Getting User Hobbies...`);
//         callback(["Footbsll", "Reading"])
//     }, 2000)
// }
// getUserDataFromDM("Sayed", (data) => {
//    console.log(data);
//    getUserHobbies(data, (hobby) => {
//     console.log(hobby);
//    })
// })

// 104: Real-World Examples 

//Sync+++++++++++++++
// Ex - 1
// function addNumber(a, b){
//     return a + b;
// }
// function multiplyNumbers (a, b){
//     return a * b;
// }
// const result1 = addNumber(5, 5);
// const result2 = multiplyNumbers(5, 5);

// console.log(result1); // 10
// console.log(result2); // 25

// Ex - 2
// function myFunc(){
//     console.log("Inside function")
// };
// console.log("Start");
// myFunc();
// console.log("End")

//Async++++++++++++++++
// Ex - 1
// console.log("Start");

// setTimeout(() => {
//     console.log("Inside Function")
// }, 3000);  //This will executed after three seconds
//  console.log("End") 

//103: Sync & Async Programming
//Sync
//Synchronous JS refers to the traditional way of executing JS code , where each operation is performed in a sequential and blocking manner. In other words, each line of code is executed one after the other and the program will wait for each operation takes a long time to complete, it can potentially slow down the entire application , making it less responsive.


//Async
// Asynchronous JS allows certain operations to be executed independently from the main program flow, so they dont block the execution of other tasks.This is typically achived using techniques like callbacks, promises, and async/await, which allow developers to handle asynchronous operations more efficiently.

// 102: Polymorphism
// Polymorphism allows objects to be treated ad instances of their parent class, even if they are instances of a subclass. This facilitates writing code that works with different types of objects in a generic way. In javascript, polymorphism is achieved through method overriding, where a subclass provides its own implementation of a method that is already defined in the parent class. The code can then use the same methos to work with both parent and subclass instances.

// class Animal{
//     constructor(name){
//         this.name = name
//     }
//     makeSound(){
//         return "Unknown sound";
//     }
// }

// class Dog extends Animal{
//     constructor(name){
//         super(name)
//     }
//     //Over riding method
//     makeSound(){
//         return "Woof!"
//     }
// }

// class Cat extends Animal{
//     constructor(name){
//         super(name)
//     }

//     //Overriding method
//     makeSound(){
//         return "Mewoo!"
//     }
// }

// function animalInfo (animal){
//     console.log(`Name: ${animal.name}`)
//     console.log(`Sound: ${animal.makeSound()}`)
// }
// const dog = new Dog("Nimda");
// const cat = new Cat("Hartabush")

// // console.log(dog.name) //Nimda
// // console.log(dog.makeSound()) //Woof!
// animalInfo(dog);
// animalInfo(cat);
// console.log(cat.name); //Hartabush
// console.log(cat.makeSound()) //Mewoo

// 101: Inheritance
// Inheritance allows a class (subclass) to inherit properties and methods from another class (superclass). This enebles code reuse and the creation of hierarchical relationships between classes. In JavaScript, inheritance can be achieved through prototype-based inheritance (before ES6) or using ES6 classes (with the extends kyword)
//ES5
//  function Animal (name){
//     this.name = name
//  }
//  //Method shared among all Animal instances
//  Animal.prototype.makeSound = function(){
//     return "Unknown sound"
//  }
//  function Dog(name){
//     Animal.call(this, name);
//  }
//  Dog.prototype = Object.create(Animal.prototype);

//  Dog.prototype.makeSound = function(){
//     return "Woff!"
//  }
//  const dog = new Dog("Buddy")
//  console.log(dog.name) //Buddy
//  console.log(dog.makeSound()) // Woff!

//  const genericAnimal = new Animal ("Generic Animal");
//  console.log(genericAnimal.name) //Generic Animal
//  console.log(genericAnimal.makeSound()) //Unknown sound

//Es6

// class Animal{
//     constructor(name){
//         this.name = name;
//     }
//     makeSound(){
//         return "Unknown sound"
//     }
// }
// class dog extends Animal{
//     constructor(name){
//         super(name);
//     }
//     makeSound(){
//         return "Woof!"
//     };
// }
// class cat extends Animal{
//     constructor(name){
//         super(name);
//     }
//     makeSound(){
//         return "Mewoo!"
//     }
// }
// const Dog = new dog("Mikhail");
// const Cat = new cat("Meoww");
// console.log(Dog.makeSound())
// console.log(Cat.makeSound())

// 100: Abstraction
// Abstraction is the process of simplifying complex systems by breaking them dowm into smaller, manageable parts .It allow you to focus on the essential features of an object and hide unnecesssary details.In JavaScript , you can use abstract classes to define abstract structures and then implement them in concrete objects

// class Animal{
//     constructor(name){
//         this.name = name;
//     }
//     //Abstract method (to be implemented by subclasses)
//     makeSound(){
//         throw new Error("Method (makeSound) must be implemented");
//     }
// }
// class Dog extends Animal {
//     constructor(name){
//         super(name);
//     }
//     // Implementing the abstract method 
//     makeSound(){
//         return "Woff!";
//     }
// }
// class Cat extends Animal{
//     constructor(name){
//         super(name);
//     }
//     makeSound(){
//         return "Meow!";
//     }
// }

// const dog = new Dog("Buddy");
// console.log(dog.name)
// console.log(dog.makeSound())
// const cat = new Cat("Whisker");
// console.log(cat.name)
// console.log(cat.makeSound())

// 99: Encapsulation
// Encapsulation is the concept of bundling data (properties) and methods (function) together within an objects, allowing the object to controll access to its internal data and behavior. This helps to hide implementation details and expose only necessary interfaces to interact with the object. In JavaScript, you can achive encapsulation by using closures, symbols, or naming conventions to simulate private members and expose public interfaces
// function Counter() {
//     let _count = 0 ;

//     this.increment = function(){
//         _count++
//     }

//     this.decrement = function(){
//         _count--
//     }

//     this.getCount = function(){
//         return _count
//     }
// }
// const counter = new Counter()
// counter.increment();
// counter.increment();
// counter.increment();
// console.log(counter.getCount()); //3
// counter.decrement();
// console.log(counter.getCount()); //2
 
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