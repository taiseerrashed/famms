let barsBtn = document.querySelector(".header-content .bars i")
let navbar = document.querySelector(".navbar")

barsBtn.addEventListener("click" , ()=> {
    navbar.classList.toggle("active")
    barsBtn.classList.toggle('fa-times');
})