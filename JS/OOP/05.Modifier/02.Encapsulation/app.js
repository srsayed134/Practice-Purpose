//In js , we can achive encapsulation by using closures to create private members.

function Counter(){
    let _count = 0 //Private variable
    this. _count1 = 75 //Public variable

    // Public method that can access and modify the private variables

    this.increment = function() {
        _count ++
    }
    this.decrement = function() {
        _count --
    }
    this.getCount = function() {
        return _count
    }
}

const counter = new Counter();
console.log(counter._count) //Undefined
console.log(counter._count1) //75

counter.increment(); // +1
counter.increment(); // 1+1 = 2
counter.increment(); // 2+1 = 3
console.log(counter.getCount()) //3

counter.decrement(); // 3-1 = 2
console.log(counter.getCount()) //2
