//creat element
//appendChild
//append
//prepend
//insertBefore

//cathch first ul
const firstUl = document.querySelector('ul')
//create new li
const newLi = document.createElement("li");
//add text to newLi
newLi.textContent = 5;
//append newLi to firstUl
firstUl.appendChild(newLi);

//catch first li
const firstLi = document.querySelector("li");
firstUl.insertBefore(newLi, firstLi)
