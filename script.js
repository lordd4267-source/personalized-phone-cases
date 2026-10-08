// ===============================
// MOBILE MENU
// ===============================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }
});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuButton.textContent = "☰";
    });
});


// ===============================
// FAQ ACCORDION
// ===============================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        const isActive = item.classList.contains("active");

        // Close all
        faqItems.forEach(otherItem => {
            otherItem.classList.remove("active");

            const answer = otherItem.querySelector(".faq-answer");
            answer.style.maxHeight = null;
        });

        // Open selected
        if (!isActive) {
            item.classList.add("active");

            const answer = item.querySelector(".faq-answer");

            answer.style.maxHeight =
                answer.scrollHeight + "px";
        }

    });

});


// ===============================
// CUSTOMIZATION FORM
// ===============================

const customForm = document.getElementById("customForm");
const toast = document.getElementById("toast");

customForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const design = document.getElementById("design").value;

    if (!name || !phone || !design) {
        showToast("Please fill in all required fields.");
        return;
    }

    showToast(
        `🎉 Thanks ${name}! Your ${design.toLowerCase()} request has been received.`
    );

    customForm.reset();

});


// ===============================
// TOAST
// ===============================

function showToast(message) {

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 4000);

}


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(
    ".feature-card, .design-card, .step, .review-card, .price-card"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.1
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});


// ===============================
// YEAR
// ===============================

const yearElement = document.querySelector(".footer-bottom");

if (yearElement) {

    const currentYear = new Date().getFullYear();

    yearElement.innerHTML =
        `© ${currentYear} CaseCraft. All rights reserved.`;

}