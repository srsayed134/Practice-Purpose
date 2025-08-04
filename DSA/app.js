//Two Sum ( ugly code )

// function twoSum(arr, expectingNumber){
//     let indexPosition = [];
//     let index = 0;

    
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i] + arr[j] === expectingNumber){
//                 indexPosition.push(i);
//                 indexPosition.push(j);
//                 console.log(`${expectingNumber} is found`)
//             }
//         }
//     }
//     if(indexPosition.length === index){
//         console.log(`${expectingNumber} is not found`)
//     }else{
//         return indexPosition;
//     }
// }

// const arr = [5, 10, 20, 30];
// const expecting = 57;
// const res = twoSum(arr, expecting)
// console.log(res)

//Array chunk
// function chunk(array, size){
//     const chunked = [];
//     let index = 0;
//     while(index < array.length){
//         const chunk = array.slice(index, index + size);
//         console.log(chunk);
//         chunked.push(chunk);
//         index += size;
//     }
//     return chunked;
// }

// const arr = [1,2,3,4,5,6,7,8,9];
// const result = chunk(arr, 2)
// Write a function that takes an array and a chunk size as InputDeviceInfo. The function should return a new array where original array is split into chunks of the specified size

// Max Profit 
//  waiting.............
//Pyramid projects 
// function print(times// Ex - 1
// console.log("Start");

// setTimeout(() => {
//     console.log("Inside Function")
// }, 3000);  //This will executed after three seconds
//  console.log("End")){
//     let symbol1 = "$";
//     console.log(symbol1)
//     for(let i = 0; i <= times; i++){
//         symbol1 += "$"
//        console.log(symbol1)
//     }
// }

// print(5)

// FizzBuzz challenge by linear
// const FizzBuzz = (num) => {
//     for(let i = 1; i <= num; i++){
//         if(((i % 5) === 0) && ((i % 3) ===0)){
//             console.log("FizzBuzz")
//         } else if ((i % 5) === 0){
//             console.log("Buzz")
//         } else if ((i % 3) === 0){
//             console.log("Fizz")
//         } else{
//             console.log(i)
//         }
//     }
// }
// FizzBuzz(20)

// FizzBuzz challenge by random

// function play(num){
//     if(((num % 5) === 0) && ((num % 3) ===0)){
//         console.log("FizzBuzz")
//     }else if((num % 5) === 0){
//         console.log("Buzz")
//     }else if((num % 3) === 0){
//         console.log("Fizz")
//     } else{
//         console.log(num)
//     }
// }
// let randomNumber = Math.floor(Math.random() * 10000)
// play(randomNumber);
// console.log(randomNumber);
// console.log(randomNumber);

// Sentence Capitalization

// const strCap = (str) => {
//     return str
//     .toLowerCase()
//     .split(" ")
//     .map((word) => word[0].toUpperCase() + word.slice(1))
//     .join(" ")
// }

// console.log(strCap("golw kol k lite"))
//Int Reversal

// const reverseInt = (num) => parseInt(num.toString().split("").reverse().join("")) * Math.sign(num)
// console.log(reverseInt(-654))

// function numReverse(num){
//     let numStr = num.toString();
//     let numStrArr = numStr.split("");
//     let numStrArrReverse = numStrArr.reverse();
//     let numStrArrReverseStr = numStrArrReverse.join("");
//     let numStrArrReverseStrNum = parseInt(numStrArrReverseStr);
//     return numStrArrReverseStrNum
// } 
// console.log(numReverse(598));

// Palindromes
// const palString = (str) => str.split("").reverse().join("") === str;

// console.log(palString("abba"))

//Reverse String
// const reverseString = (str) => str.split("").reverse().join("")

// console.log(reverseString("hello"))

// DSA Arrays
// class MyArray{
//     constructor() {
//         this.length = 0;
//         this.data = {}
//     }
//     push(item){
//         this.data[this.length] = item
//         this.length ++
//     }
//     get(number){
//         if(number){
//             return this.data[number]
//         }
//     }
//     pop(){
//         let lastElement = this.data[this.length - 1];
//         delete this.data[this.length - 1]
//         this.length --
//         return lastElement
//     }
//     shift(){
//         let firstElement = this.data[0];
//         delete this.data[0];
//         for(let i = 0; i < this.length; i++){
//             this.data[i] = this.data[i + 1] 
//         }
//         delete this.data[this.length - 1]
//         this.length --
//         return firstElement

//     }
//     delete(number){
//         const item = this.data[number];
//         for (let i = number; i < this.length - 1; i++){
//             this.data[i] = this.data[i + 1];
//         }
//         delete this.data[this.length - 1]
//         this.length--
//         return item;
//     }
//     split(){

//     }
// }
// const MyNewArray = new MyArray();
// MyNewArray.push("Apple")
// MyNewArray.push("Mengo")
// MyNewArray.push("Jeckfruit")
// MyNewArray.push("Guava")
// MyNewArray.push("Pineapple")
// console.log(MyNewArray.get(2))
// // console.log(MyNewArray.pop())
// // console.log(MyNewArray.shift())

// console.log(MyNewArray.delete(1))
// console.log(MyNewArray)


//O(log n) +++++++++++++++
// log2^8 = ?
// log2^8 = 3


//O(n^2 + n) +++++++++++++
// function findPairs (arr){

//     // O(n^2) 
//     //is adominant term
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length; j++){
//             console.log(`${arr[i]}, ${arr[j]}`);
//         }
//     }
//     // O(n)
//     //"n" is a non-dominant term
//     //try not use O(n) in O(n^2)
//     for(let q = 0; q < arr.length; q++){
//         console.log("-------", q)
//     }
// }

// const numbers = [1, 2, 3, 4, 5, 6];
// findPairs(numbers)



// o(1) ++++++++++++++++
// const numbers = [1,2,3,4,5,6]

// const getElement = (arr, index) => arr[index]
// const result = getElement(numbers, 2)
// console.log(result) //3
