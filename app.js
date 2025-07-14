let arr = [1,2,3];
let arr2 = [4,5];
let clone = [...arr , ...arr2]
console.log(clone);

const user = {
  name: "Gustabo",
  id: 9830,
}

let userClone = {...user};

console.log(userClone.id)