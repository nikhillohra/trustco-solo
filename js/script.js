document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    // Toggle class on click
    hamburger.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!hamburger.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.remove("active");
        }
    });
});



// ---------------------------NUMBERS SECTION
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".count");
    const speed = 1000; // Lower = faster
  
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.closest(".number-card").getAttribute("data-target"); // Correct selection
            let current = +counter.innerText;
            const increment = Math.ceil(target / speed);
  
            if (current < target) {
                counter.innerText = current + increment;
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target;
            }
        };
  
        updateCount();
    });
});
