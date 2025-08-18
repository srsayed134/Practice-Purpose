//Intro++++++++++++++++
//Data Structure
//A dara structure is a specific way of organizing, storing and accessing data.
//Algorithm
//A set of instructions that tells a computer how to do something, or you can also say step-by-step solution of the problem is called algorithim.
//**Challenge */
//This is Data Structure
// const students = ["Naim", "Abir", "Ripon", "Sayed"];

// //This is algorithm
// function findStudent(students, studentName){
//        for (let i = 0; i < students.length; i++) {
//         if (students[i] === studentName) {
//             console.log(`${studentName} is found and Position is ${i + 1}`)
//             return;
//         }
//     }
//     console.log(`${studentName} is not found`)
// }

// let oneStudentName = "Ripon"
// findStudent(students, oneStudentName);

//What is bigO+++++++++++
//Big O nototion helps us understand how long an algorithm will take to run or how mush memory it will need as the amount of data it handles grows
//O(n)+++++++++++++++++++
//Signifies that the execution time of the algorithm grows linearly in proportion to the size of the input data (n)
//As the number of items in the inout data increases, the time it takes for the algorithm to run increases correspondingly.
// const groceries = ["milk", "bread", "eggs", "flour", "sugar"];
// const searchForItem = (item) => {
//     for(let i = 0; i < groceries.length; i++){
//         if(groceries[i] === item){
//             console.log(`Found ${item}`)
//         }
//     }

//     for(let j = 0; j < groceries.length; j++){
//         if (groceries[j] === item) {
//             console.log(`Found ${item} 2`)
//         }
//     }

//     // n + n = 2n -> O(2n) xxx
//     //Drop the constant so it becomes O(2n)
// }
// searchForItem("eggs")

//O(1)++++++++++++++++++
//O(1) constant time , signifies that the execution time of an algorithm remains constant regardless of the input size

// const numbers = [1,2,3,4,5,6,7];
// const getElement = (arr, index) => {
//    return arr[index];
// }
// console.log(getElement(numbers, 2))
// //I specify index number in numbers

//O(n^2) ++++++++++++++
//Indicates that the algorithm's execution time grows quadratically with the size of the input data(represented by n)
//Examplr:- imagine you have a box pf otems and want to compare each item with every other item to find specific pairs. As the number of items (n) increases, the number of comparisons (n ^ 2) grows much faster

// const numbers = [ 1, 2, 3, 4, 5, 6];
// // O (n ^ 2)
// function findPairs(arr) {
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             console.log(`Pair: ${arr[i]}, ${arr[j]}`)
//         }
//     }
// // O(n)
//     for(let q = 0; q < arr.length; q++){
//         console.log("--------", q)
//     }
// }
// findPairs(numbers)

//O(log n)++++++++++

//O(log n) time complexity refers to an algorithms runtime that grows logarithmically with the size of the inout (reoresented by n). In simpler terms, as the inout size increases, the time it takes for the algorithm to run increases slowly.

//DS Arrays+++++++++++

//Creating Custom Array ++++++++++++

// class MyArray {
//     constructor() {
//         this.length = 0;
//         this.data = {}
//     }
//     push(item) {
//         this.data[this.length] = item;
//         this.length++;
//         return this.length
//     }
//     get(sum) {
//         return this.data[sum - 1]
//     }
//     pop() {
//         let lastElement = this.data[this.length - 1];
//         delete this.data[this.length - 1];
//         this.length--;
//         return lastElement;
//     }
//     shift() {
//         const firstItem = this.data[0];

//         for(let i = 0; i < this.length; i++){
//             this.data[i] = this.data[i + 1]
//         }

//         delete this.data[this.length - 1];
//         this.length--

//         return firstItem;
//     }
//     delete(index){
//             let item = this.data[index];
//             for(let i = index; i < this.length - 1; i++){
//                 this.data[i] = this.data[i + 1];
//             } //in here this.length - 1 means (5) it here because if it have (6) we can delete 6 because we have not any 6 length;8
//             delete this.data[this.length - 1];
//             this.length--;
//             return item
//     }
// }
// const myNewArray = new MyArray();
// myNewArray.push("Huxn");
// myNewArray.push("Jino");
// myNewArray.push("Kenm");
// myNewArray.push("Khabka");
// myNewArray.push("Charu");
// myNewArray.push("Nikim");
// console.log(myNewArray);
// console.log(myNewArray.get(2));
// console.log(myNewArray.length)
// console.log(myNewArray.pop());
// console.log(myNewArray)
// console.log(myNewArray)
// console.log(myNewArray.shift())
// console.log(myNewArray);
// console.log(myNewArray.delete(3))
// console.log(myNewArray);

//Reverse String;
// function reverseString(value){
//     let res = "";
//     for (let i = value.length - 1; i >= 0; i--) {
//         res += value[i]
//     }
//     return res;
// }
// let reverString = reverseString("Sayed")
// console.log(reverString);

// function rev(str){
//     let reverse = str.split("").reverse().join("");//in there we 1st change str to array thrn we reverse it than we again change to string
//     return reverse;
// }
// console.log(rev("Sayed"))

// Palindromes+++++++++++++
// If the reverse string is equal to the original one then  that word is a palindrome

// function reverse(str){
//     let res = str.split("").reverse().join("");
//     if(res === str){
//         return `${res} is same as ${str}`
//     }
//     return `${res} is not valid palidram`
// }
// console.log(reverse("cddc"))

//Reverse Integer+++++++++++++++++++++

//There are lots of way to number to string
//(num + ""), (num.toString()), (String(num)), (`${num}`);

// function reverseInt(num){
//     let num_str = num.toString();
//     let str_arr_re_str = num_str.split("").reverse().join("");
//     let str_num = parseFloat(str_arr_re_str);
//     return str_num;
// }
// let num = 4565464988;
// console.log(reverseInt(num));

//Sentence Capitalization++++++++++++
//This will work when there is valid word length


// function sentCap(sen) {
//   let sentence = sen.split(" "); //[ 'I', 'A', 'G', 'P' ]
//   let sente = [];
//   for (let i = 0; i < sentence.length; i++) {
//     let word = sentence[i];
//     if (word.length > 0) {
//         let eachStr = word[0].toUpperCase() + word.slice(1).toLowerCase();
//         sente.push(eachStr);
//     }
//   }
//   return sente.join(" ");
// }

// let greet = "  i         am good persn";
// console.log(sentCap(greet));

const capitalize = (str) => {
     return str
     .toLowerCase()
     .split(" ")
     .map((word) => word[0].toUpperCase() + word.slice(1))
     .join(" ");
}
 
console.log(capitalize("this is not global"))