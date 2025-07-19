const sidebar = document.querySelector(".sidebar")
const btn = document.querySelector(".firstbtn")

btn.addEventListener("click", () => {
    sidebar.classList.toggle("hide")
})