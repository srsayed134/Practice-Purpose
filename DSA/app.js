// DSA Arrays
class MyArray{
    constructor() {
        this.length = 0;
        this.data = {}
    }
    push(item){
        this.data[this.length] = item
        this.length ++
    }
    get(number){
        if(number){
            return this.data[number]
        }
    }
    pop(){
        let lastElement = this.data[this.length - 1];
        delete this.data[this.length - 1]
        this.length --
        return lastElement
    }
    shift(){
        let firstElement = this.data[0];
        delete this.data[0];
        for(let i = 0; i < this.length; i++){
            this.data[i] = this.data[i + 1] 
        }
        delete this.data[this.length - 1]
        this.length --
        return firstElement

    }
    delete(number){
        const item = this.data[number];
        for (let i = number; i < this.length - 1; i++){
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1]
        this.length--
        return item;

    }
}
const MyNewArray = new MyArray();
MyNewArray.push("Apple")
MyNewArray.push("Mengo")
MyNewArray.push("Jeckfruit")
MyNewArray.push("Guava")
// console.log(MyNewArray.get(2))
MyNewArray.push("Pineapple")
// console.log(MyNewArray.pop())
// console.log(MyNewArray.shift())

console.log(MyNewArray.delete(1))
console.log(MyNewArray)


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

// console.log(getElement(numbers, 2))
