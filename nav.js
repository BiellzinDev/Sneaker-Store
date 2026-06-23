const btnHamburger = document.querySelector(".hamburger-menu")
const limiter = document.querySelector(".subhead")
const nav = document.querySelector(".nav")
const btnClose = document.querySelector(".btn-close")

btnHamburger.addEventListener("click", (e) =>{
    openHamburger()
})

btnClose.addEventListener("click", () =>{
    nav.classList.remove("active")
    limiter.style.width = "90%"
})

document.addEventListener("click", (e) =>{
    if(e.target.closest(".hamburger-menu")){
        openHamburger()
    }
      else{
         nav.classList.remove("active")
         limiter.style.width = "90%"
     }
})
function openHamburger(){
    nav.classList.add("active")
    limiter.style.width = "100%"
}