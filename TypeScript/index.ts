//Annotations In Depth ++++++++++++++

//You have to specify the type other wise it will error
//String-----------
// let myName: string = "Huxn Webdev";
// myName = "Something other person"
// console.log(myName)

// //Number----------
// let num: number = 5;
// console.log(num)

// //Boolean---------
// let isTsHard: boolean = false;
// isTsHard = true;
// console.log(isTsHard);

//Type Inference ++++++++++++++++++

// let tech = "Typescript";
// //tech = 24; //This is will give error; 
// console.log(typeof tech);
// let favNumber = 7;
// console.log(typeof favNumber);


// //Any Type++++++++++++++++++++++++++(warning)

// let color: any = "crimson";
// color = 20;
// color = true;
// console.log(color)

//Function Parameter Annotations+++++++++++++++++
//Regular Func-------------

// function addOne(num:number) {
//     return num + 1;
// }

// const res = addOne(5);
// console.log(typeof res)

//Arrow function-----------

// //By default the type of x and y is "any" type
// const double = (x, y) => x * y;
// let res = double(5, 7);
// console.log(res)

// //But we can specifiees;
// const double1 = (x:number, y:number) => x * y;
// let res1 = double1(5, 7);
// console.log(res1);
//Alawys you have to match of argument === parameter (2 * 2)

//Default Params Values++++++++++++++

// function greet(person = "Huxn") {
//     return `Hello ${person}`
// }
// let res = greet();
// console.log(res);
// console.log(typeof res) //String (because person argument default is string)

//Function Return Annotations++++++++++

// function double(x: number): number {
//     return x * x;
// }

// let res = double(3);
// console.log(res);

// const double2 = (x: number): number => x * x;
// let res2 = double2(5);
// console.log(res2)

//Void Functions +++++++++++++++++

// function printMessage(message: string) {
//     console.log(`This is my ${message}`) //In this function i am not return anything thats why when we hover on function name its say "void" type means there have no types 
// }
// printMessage("Shirt");

// function name(name: string): void {
//     console.log(`This is my ${name}`);
// }
// name("Computer")

//Never keyword++++++++++++++++

// function trowError(msg: string):never{
//     throw new Error(msg);
// }

// function infiniteLoop(): never {
//     while(true) {}
// };

//Arrays Types In Depth ++++++++++
// //1.
// const nums: number[] = [1,2,3,4,5];
// console.log(nums);

// //2
// const locations: string[] = ["Thailand", "Japan", "Oman", "Finland"];
// locations.push("Brazil")
// // locations.push(50) //Error

// console.log(locations);

//Multi Dimensional Arrays +++++++++++++++

// const matrix: number[] = [1,2,3,4,5];
// const matrix2: number[][] = [[1,2,3,4,5], 6]
// const matrix3: number[][][] = [[1,2,3,4,[5]], 6]
// console.log(matrix3);

//Objects In Depth++++++++++++++++++

//Normal Objects------------
const company: {name: string, address: string, valuation: number} = {
    name: "Cikmara",
    address: "Combodia",
    valuation: 28000,
}
console.log(company)
console.log(company.valuation)

//Factory function (onject)

function animal(animalName:string, animalLivingPlace:string,animalLegs:number):{name: string; livingPlace: string; legs: number;} {
    return {
        name: animalName,
        livingPlace: animalLivingPlace,
        legs: animalLegs,
    }
}

const cow = animal("cow", "landField", 4)
console.log(cow)













