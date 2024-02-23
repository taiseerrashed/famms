let barsBtn = document.querySelector(".header-content .bars")
let navbar = document.querySelector(".navbar")

barsBtn.addEventListener("click" , ()=> {
    navbar.classList.toggle("active")
})