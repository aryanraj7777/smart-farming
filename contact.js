// script.js

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        // Get input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            formMessage.style.color = "red";
            formMessage.textContent = "Please fill in all fields!";
        } else {
            formMessage.style.color = "green";
            formMessage.textContent = "Message sent successfully!";
            contactForm.reset(); // Clear form
        }
    });
});

