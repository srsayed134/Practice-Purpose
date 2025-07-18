const click = document.querySelector(".click");

click.addEventListener("click", () => {
    click.classList.toggle("red")
})

const contextmenu = document.querySelector(".contextmenu");

contextmenu.addEventListener("contextmenu", ()=>{
    contextmenu.classList.toggle("blue")
})

const dblclick = document.querySelector(".dblclick");
dblclick.addEventListener("dblclick", () => {
    dblclick.classList.toggle("teal")
})