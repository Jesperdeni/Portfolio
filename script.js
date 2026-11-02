document.addEventListener("DOMContentLoaded", () => {
    // Cinematic page entrance
    const curtain = document.createElement("div");
    curtain.className = "page-transition";
    document.body.appendChild(curtain);
    curtain.addEventListener("animationend", () => curtain.remove());

    // Scroll reveal for cards and content blocks
    const revealItems = document.querySelectorAll(
        ".fade-in, .project-category, .profile-section, .center-container > p, .contact-form"
    );
    revealItems.forEach((item, index) => {
        item.classList.add("reveal");
        item.style.transitionDelay = Math.min(index * 70, 280) + "ms";
    });

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
        revealItems.forEach(item => observer.observe(item));
    } else {
        revealItems.forEach(item => item.classList.add("is-visible"));
    }

    // Subtle pointer-following light on visual cards
    document.querySelectorAll(".project-card, .internship-card, .event-card, .ai-feature-card").forEach(card => {
        card.addEventListener("pointermove", event => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty("--pointer-x", (event.clientX - rect.left) + "px");
            card.style.setProperty("--pointer-y", (event.clientY - rect.top) + "px");
        });
    });

    // Compact glass navigation while scrolling
    const header = document.querySelector("header");
    const updateHeader = () => {
        if (header) header.classList.toggle("scrolled", window.scrollY > 24);
    };
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    // Existing contact form interaction
    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");
    if (contactForm && successMessage) {
        contactForm.addEventListener("submit", event => {
            event.preventDefault();
            setTimeout(() => {
                contactForm.reset();
                successMessage.style.display = "block";
            }, 700);
        });
    }
});