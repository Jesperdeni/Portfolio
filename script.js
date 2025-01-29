document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".fade-in");
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent the form from submitting

            // Simulate form submission (you can replace this with actual form submission logic)
            setTimeout(() => {
                contactForm.reset(); // Clear the form
                successMessage.style.display = "block"; // Show success message
            }, 1000);
        });
    }
});