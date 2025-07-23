// function personInfo(fn, ln, lang) {
//     return {
//         firstName: fn,
//         lastName: ln,
//         progName: lang,
//         description: function () {
//             return `I am ${this.firstName} ${this.lastName} & i love to code ${this.progName}`
//         }
//     }
// }

// const Sayed = personInfo("Sayedur", "Rahman", "Python");
// const Rakib = personInfo("Rakib", "Hossain", "JAVA");

// console.log(Sayed.description());
// console.log(Rakib.description());

// or

// function personInfo(fn, ln, lang) {
//     return {
//         fn,
//         ln,
//         lang,
//         description: function () {
//             return `I am ${this.fn} ${this.ln} & i love to code ${this.lang}`
//         }
//     }
// }

// const Sayed = personInfo("Sayedur", "Rahman", "Python");
// const Rakib = personInfo("Rakib", "Hossain", "JAVA");

// console.log(Sayed.description());
// console.log(Rakib.description());

function vehicles(type, brand, model, year) {
    return {
        type,
        brand,
        model,
        year,
        Description: function(){
            return `This ${this.brand} make that ${this.type} of ${this.model} in ${this.year} `
        }
    }
}

const honda = vehicles("Sedan", "Honda", "Civic", 2017)

console.log(honda.Description())
