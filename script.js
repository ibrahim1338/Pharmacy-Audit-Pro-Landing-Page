
// collapsible navbar under 768px view port width
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



// make termsAndConditions links active on scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".TAC-text-box");
    const navLinks = document.querySelectorAll(".TAC-Content-container a");

    function activateLink() {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop-50; // adjust for navbar height
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }
        });
    }

    // Run on scroll
    window.addEventListener("scroll", activateLink);

    // Run on page load (so the correct link is active initially)
    activateLink();
});
