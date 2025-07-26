// //Synchronous Code -------------
// function myFunc(){
//     console.log("Inside function")
// }


// console.log("Start");
// myFunc();
// console.log("End")

//Asynchronous code

// console.log("Start")

// setTimeout(() => {
//     console.log("Inside setTimeout")
// }, 2000)

// console.log("End")

//Callback hell-------------------
//Callback is not always asynchronous
// function callbackHell(callback){
//     setTimeout(() => {
//         const data = "Inside (callbackHell) function"
//         console.log(data);
//         callback(data)
//     }, 2000);
// }

// function firstFunc(data, callback){
//     setTimeout(() => {
//         const processedData = `${data} - Processed First`
//         console.log(`Inside (firstFunc) Function`)
//         callback(processedData);
//     }, 1000)
// }

// function secondFunc(data, callback){
//     setTimeout(() => {
//         const processedData = `${data} - Processed Second`
//         console.log("Inside (secondFunc) Function")
//         callback(processedData)
//     }, 1500)
// }

// callbackHell((data) => {
//    firstFunc(data, (processedData1) => {
//      secondFunc(processedData1, (processedData2) => {
//         console.log(`Final result of all function: ${processedData2}`)
//      })
//    })
// })

// console.log("Start")
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.forEach((n) => console.log(n))

// console.log("End")


// async and await --------------


function fetchDataFromServer() {
 return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("User data retrieved from the server.");
      }, 4000);
      });
}

async function getUserData(){
    try {
        const data = await fetchDataFromServer()
        console.log(data)
        console.log("Remaining task can be executed here.")
    } catch (error) {
        console.log(error)
    }
}

getUserData()