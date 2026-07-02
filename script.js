const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const contactForm = document.getElementById("contact-form");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        const expanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", (!expanded).toString());
    });

    // Close menu when a link is clicked (mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
}

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if(name && email && message) {
            alert("Message sent successfully!");
            this.reset();
        } else {
            alert("Please fill all fields");
        }
    });
}

// Sticky navbar on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (navbar) navbar.classList.toggle("sticky", window.scrollY > 50);
});