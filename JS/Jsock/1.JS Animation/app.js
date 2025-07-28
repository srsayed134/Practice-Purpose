const sidebar = document.querySelector(".sidebar");
const firstbtn = document.querySelector(".firstbtn");

firstbtn.addEventListener("click", () => {
    sidebar.classList.toggle("hide")
})