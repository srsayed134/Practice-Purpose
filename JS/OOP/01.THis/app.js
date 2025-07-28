const person = {
    name: "Neom",
    age: 23,
    greetRegula: function(){
       return `Hello, my name is ${this.name} & i'm ${this.age} years old.`
    },
    greetArrow: () =>{
        return `HEllo, my name is ${this.name} & i'm ${this.age} years old`
    }
}

const res = person.greetArrow();
console.log(res)