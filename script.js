let hamburger=document.getElementById("hamburger")
let closeHamburger=document.getElementById("closeHamburger")
let navSmall = document.getElementById("navCollapsable")

hamburger.addEventListener("click",function(){
    hamburger.style.display="none"
    closeHamburger.style.display="block"
    navSmall.style.display="flex"
    
})
closeHamburger.addEventListener("click",function(){
    hamburger.style.display="block"
    closeHamburger.style.display="none"
    navSmall.style.display="none"
    
})
