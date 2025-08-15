
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
// ######## Scroll able features section with left numbers line activate and de-activate
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".screenShot-box");
    const listNumbers = document.querySelectorAll(".list-number");

    // Remove active classes from all .list-number and .list-number-inner
    function clearActive() {
        listNumbers.forEach(link => {
            link.classList.remove("active");
            const inner = link.querySelector(".list-number-inner");
            if (inner) inner.classList.remove("active");
        });
    }

    // IntersectionObserver options
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5 // section should be at least 50% visible
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                clearActive();
                const activeLink = document.querySelector(`.list-number[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add("active");
                    const inner = activeLink.querySelector(".list-number-inner");
                    if (inner) inner.classList.add("active");
                }
            }
        });
    }, options);

    // Observe each .screenShot-box
    sections.forEach(section => {
        observer.observe(section);
    });
});



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



// FAQ - Collabsible JS
document.querySelectorAll('.faq-question').forEach(function(q) {
      q.addEventListener('click', function() {
        let parent = q.parentElement;
        let open = parent.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(function(item) {
          item.classList.remove('open');
          item.querySelector('.faq-toggle').innerHTML =  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5V19M5 12H19" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
        });
        if (!open) {
          parent.classList.add('open');
          q.querySelector('.faq-toggle').innerHTML =`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12H19" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;
        }
      });
    });