// function checkNumber(number) {
//     return new Promise((resolve, reject) => {
//        if (number % 2 === 0) {
//            reject(`${number} is an even number`)
//        }else{
//            resolve(`${number} is an odd number`)
//        }
//     })
// }

// const numberToCheck = 8 //odd

// checkNumber(numberToCheck).then((message) => {
//     console.log(`Success: ${message}`)
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// })